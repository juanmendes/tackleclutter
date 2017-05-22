import React from 'react'
import NavLink from '../NavLink'
import SocialMedia from '../widgets/SocialMedia'
export default React.createClass({
    render() {
        return (
            <footer className="navbar navbar-default">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 col-sm-4 nav-links">
                            <ul>
                                <li><NavLink to="/home">Home</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/services">Services</NavLink></li>
                                <li><NavLink to="/gallery">Gallery</NavLink></li>
                                <li><NavLink to="/videos">Videos</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-sm-4 col-sm-push-4">
                            <SocialMedia size="fa-2x"></SocialMedia>
                        </div>

                        <div className="col-xs-12 col-sm-4 col-sm-pull-4">
                            <div>
                                <p className="tackle-clutter">TACKLE CLUTTER</p>
                                Serving Greater Boston<br/>
                                <b>EMAIL</b>: juliana@tackeclutter.com<br/>
                                <b>CALL</b>: <a href="tel:7342335800">734-233-5800</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        );
    }
});