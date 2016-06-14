/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 03 June, 2016
 * License: MIT
 *
 * Grunt Configuration
 */

/**
 * Initialize global grunt method.
 */
module.exports = function(grunt) {
    'use strict';

    var directories,
        sassDirConfig;

    directories = {
        imagesDir: "assets/images",
        generatedImagesDir: "dist/assets/images",
        sassDir: "assets/scss",
        cssDir: "dist/assets/css"
    };

    sassDirConfig = {
        expand: true,
        cwd: directories.sassDir + '/',
        src: ['**/*.{scss,sass}'],
        dest: directories.cssDir,
        ext: '.css'
    };

    /**
     * Load eligible Grunt tasks.
     */
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    /**
     * Initialize Tasks
     */
    grunt.initConfig({

        // Associated Package.
        pkg: grunt.file.readJSON('package.json'),

        // Task : grunt-shell
        // Jekyll Shell Commands Config
        shell: {
            webpackBuild: {
                command: 'npm run webpackbuild'
            },
            webpackServe: {
                command: 'npm run webpackserve'
            }
        },

        // Task : grunt-contrib-watch
        // Watch for File Changes Config
        watch: {
            full: {
                files: [
                    'assets/scss/**/*.{scss,sass}',
                    'app/**/*.js'
                ],
                tasks: [
                    'sass:dev',
                    'shell:webpackBuild'
                ]
            },
            sass: {
                files: [ 'assets/scss/**/*.{scss,sass}' ],
                tasks: [ 'sass:dev' ]
            },
            options: {
                interrupt: true,
                atBegin: true
            }
        },

        // Task : grunt-concurrent
        // Concurrent Grunt Tasks Runner Config
        concurrent: {
            serve: [
                'watch:sass',
                'shell:webpackServe'
            ],
            options: {
                logConcurrentOutput: true
            }
        },

        // Task : grunt-contrib-clean
        // Directory Clean-up Config
        clean: {
            css: [
                '!' + directories.cssDir + '/static/*.css',
                directories.cssDir + '/*.css'
            ],
            images: [directories.generatedImagesDir + '/*']
        },

        // Task : grunt-sass
        // SASS Config
        sass: {
            dev: {
                options: {
                    sourceMap: true,
                    outputStyle: 'expanded',
                    sassDir: directories.sassDir,
                    cssDir: directories.cssDir,
                    relativeAssets: false
                },
                files: [sassDirConfig]
            },
            dist: {
                options: {
                    sourceMap: false,
                    outputStyle: 'compressed',
                    sassDir: directories.sassDir,
                    cssDir: directories.cssDir,
                    relativeAssets: false
                },
                files: [sassDirConfig]
            }
        },

        // Task : grunt-contrib-imagemin
        // Image Minification Config
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 0
                },
                files: [
                    {
                        expand: true,
                        cwd: directories.imagesDir,
                        dest: directories.generatedImagesDir,
                        src: ['**/*.{png,jpg,gif,svg}']
                    }
                ]
            }
        }
    });

    /**
     * Build task.
     * 1) runs Clean to delete generated CSS files.
     * 2) runs Clean to delete generated Images.
     * 3) runs SASS distributable build.
     * 4) runs Image Minification.
     * 4) runs Webpack Build.
     */
    grunt.registerTask('build', [
        'clean:css',
        'clean:images',
        'sass:dist',
        'imagemin',
        'shell:webpackBuild'
    ]);

    /**
	 * Serve task.
     * 1) runs Serve task within Concurrent.
	 *     a) runs Watch for several files (see Watch task above) for changes.
     *     b) runs Webpack Dev Server at 0.0.0.0:8080
     *
     * Upon any changes in watched files following tasks run in sequence.
     * 1) runs Sass development build (with sourcemaps on).
     * 2) runs Webpack Dev Server hot-reloads any changed modules.
	 */
    grunt.registerTask('serve', [
        'concurrent:serve'
    ]);
};
