/**
 * Poster v0.1.0
 * A React webapp to list upcoming movies and maintain a watchlist, powered by TMDb
 *
 * Author: Kushal Pandya <kushalspandya@gmail.com> (https://doublslash.com)
 * Date: 14 June, 2016
 * License: MIT
 *
 * Section > * -> [ ActionButton ]
 */

 import React from "react";

 export default
 class ActionButton extends React.Component {
     glyphMap = {
        add: 'plus',
        remove: 'remove',
        added: 'ok'
     };

     constructor() {
         super();
     }

     render() {
         return (
             <span class={"action-button hint--bottom " + (!this.props.visible ? 'hidden' : '')} aria-label={this.props.actionHint}>
                 <span class={`glyphicon glyphicon-${this.glyphMap[this.props.actionGlyph]}`} aria-hidden="true" onClick={this.props.handleClick}></span>
             </span>
         );
     }
 }
