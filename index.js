import React from 'react'
import { render } from 'react-dom'

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import MainPage from './components/layout/MainPage'
import Home from './components/widgets/Home'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Videos from './components/Videos'
import Contact from './components/Contact'

render(
    <Router history={browserHistory}>
        <Route path="/" component={MainPage}>
            <IndexRoute component={Home}/>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About}/>
            <Route path="/services" component={Services}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/videos" component={Videos}/>
            <Route path="/contact" component={Contact}/>
        </Route>
    </Router>
, document.getElementById('container'));


var count = 0;
browserHistory.listen(function(ev) {
    if (count == 0) {
        count++;
        return;
    }
    // Make sure we scroll to the top instead of staying at the current scroll position on
    var newTopPosition = innerWidth > 768 ? 101 : 0;
    document.body.scrollTop = newTopPosition;
    // Bootstrap needs .active to be on the LI that is the parent of the active link, but the active link is updated
    // after this event
    setTimeout(()=>{
        var menuParent = document.querySelector("nav ul.nav");
        var allLinks = menuParent.querySelectorAll("li");
        var activeLink = menuParent.querySelector("a.active");
        [].forEach.call(allLinks, link => link.classList.toggle("active", link.firstChild == activeLink));
    }, 0);
});

