// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return <Link {...this.props} activeClassName="active" />
    },
    onClick(e) {
        return;
        var clickedLi = e.target.parentNode;
        var lis = clickedLi.parentNode.childNodes;
        for (var i = 0, li; li = lis[i]; i++) {
            li.classList.toggle('active', li == clickedLi);
        }
    }
})

