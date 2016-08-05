Poster
======================
[![Build Status](https://travis-ci.org/kushalpandya/poster.svg?branch=master)](https://travis-ci.org/kushalpandya/poster)
[![Node Dependencies](https://david-dm.org/kushalpandya/poster.svg)](https://david-dm.org/kushalpandya/poster.svg)

A React + Redux webapp to list Movies and maintain a Watchlist, powered by TMDb.

###Idea
I have been developing single-page webapps professionally for more than 3 years (mainly in ExtJS and occasionally in AngularJS as well as plain JS).

Poster is my attempt to create single page webapp to learn React and Redux end-to-end. On my quest to learn React, I encountered several sources on the web, some of which helped (linked below) and some of which confused me. Over 90% of those tutorials taught how to build "Todo" app in React, but we don't build such Todo apps in real-life (unless you're author of Wunderlist or AnyDo or Google Keep or one of those million apps available on App Store).

I wanted to build webapp that is more than just a Todo app:

- It should "talk" with server.
- It should make use of Flux architecture in some form.
- It should have multiple routes to leverage routing in React.
- It should perform CRUD operations. =)

In short, it should feel like real-life webapp that we deal with daily. With Poster, I managed to attain all the goals I aimed for. Although, Poster _may be_ far from how an ideal React webapp architecture should be (and I'm still learning lot of new stuff around it), but it did help me understand how React components are built, and how Redux works.

This project may help any person learn React who is new to React and Flux architecture in general (but has front-end web development skills from intermediate to advanced). I have made sure to include comments wherever needed, but I highly suggest to read entire code structure once, and then debug all the flows.

### Poster Technology Stack
As React being only a "View Layer" of Poster, full circle is completed with following "run-time" dependencies/technologies (only primary dependencies are listed here):

- [React](https://facebook.github.io/react/): Obviously!
- [React Router](https://github.com/reactjs/react-router): Routing for React.
- [Redux](http://redux.js.org/): Behind-scenes part, really. An implementation of [Flux architecture](https://facebook.github.io/flux/). Defined as a predictable state container for JavaScript apps.
- [Superagent](http://visionmedia.github.io/superagent/): HTTP networking support.
- [Twitter Bootstrap](http://getbootstrap.com/): Poster is using a Twitter Bootstrap theme from [Bootswatch](https://bootswatch.com/paper/) with some color modifications.
- [Poster Server](https://github.com/kushalpandya/poster-server): Poster is entirely dependent on Poster Server so make sure you have it configured and running properly foremost.

Development-time dependencies of Poster includes:

- [Babel](https://babeljs.io/): For ES6 (or ES2015, ES Harmony, whatever you prefer) support.
- [Grunt](http://gruntjs.com/): Build Tooling.
- [SASS](http://sass-lang.com/): CSS of Poster is written in SASS (with `libsass`).
- [Webpack](https://webpack.github.io/): For Project bundling.

###Screenshots
Poster Homepage
![Poster Homepage](https://i.imgur.com/zrLfMbb.png "Poster Homepage")

Top 20 Movies
![Top 20 Movies](https://i.imgur.com/xSm1vl7.png "Top 20 Movies")

Upcoming Movies
![Upcoming Movies](https://i.imgur.com/WJ5BtWj.png "Upcoming Movies")

Watchlist
![Watchlist](https://i.imgur.com/LvUfmVd.png "Watchlist")

Movie Details
![Movie Details](https://i.imgur.com/5J2hTG8.png "Movie Details")

###Usage
First, make sure you have Poster Server configured and running and then proceed.

Download the tarball and extract it or clone the repo, and run `npm install` to build the project and then run `npm start` to start server, this will start [Webpack Dev Server](https://webpack.github.io/docs/webpack-dev-server.html) in `development` mode at port `4000` with source-maps and hot module replacement support (you can change it from `package.json`'s `scripts > webpackserve`'s value).

**Note**: By default, when both Poster & Poster Server are running in same computer, with Poster Server running at port `9000`. If you change Poster Server port (from its `configuration.json`), you need to also change the same in Poster's `app/actions/poster.js` file for value of constant variable `API_URL`.

### Directory Structure
In my knowledge, there's no "official" directory structure that's followed in React+Redux app, but there are some basic rules which are kept in mind while rest of the structure can be anything that works for you. Following is directory structure of Poster, starting from root. Only essential files and folders are mentioned.

- `app`: The main app folder which includes React codebase.
	- `actions`: Redux Actions, which are executed when any action is performed by user on UI. These methods communicate with server, as well as notify reducer with relevant data.
	- `components`: React components.
		- `Views`: These are all the React components which are coupled together to form Poster UI.
		- `Widgets`: These are reusable widgets that can be used by any React component in the entire application.
	- `reducers`: These are "pure functions" which consume data provided by actions, and set state of the Redux _store_.
	- `app.js`: This is the application's entry-point. This is where application is initialized and routes are set.
	- `store.js`: In Redux, Store is an object that keeps all the data that application manipulates in the form of states. Only Reducers can update those states.
- `assets`: Static assets, which includes SASS and Images, it is processed by Grunt when project is built.
- `dist`: This is a generated folder which includes JS file `bundle.min.js`, Images and CSS folders. Files only in this directory are directly used by webpage.
- `index.html`: Main webpage.
- `webpack.config.js`: Webpack Configuration.

### Roadmap
Poster will continue to be updated to keep up with latest version of React (and other used technologies), making use of new/updated APIs and techniques. There are still some things left which I'm planning to add to the project in the future.

- Include Unit-tests using [Jest](http://facebook.github.io/jest/) or [Enzyme](http://airbnb.io/enzyme/).
- User accounts and login system.
- Hosting the project on live URL for demonstration purposes.

Feel free to create a pull-request for any improvement/issue/feature that you wish to add to Poster.

### Resources
Learning React as a beginner was fun, I'm specially thankful to authors behind following sources that helped me build it.

- [LearnCode.academy](https://www.youtube.com/user/learncodeacademy) by Will Stern for providing amazing tutorials on React and Redux basics for absolute beginners.
- [React Presentation](https://github.com/bradwestfall/react-presentation) by Brad Westfall for covering React and Redux in an hour-long session.
- [Circle Icons](https://www.iconfinder.com/iconsets/circle-icons-1) by Nick Roach.

###Author
---
[Kushal Pandya](https://doublslash.com)
