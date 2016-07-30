import React from 'react'
import NavLink from '../NavLink'
export default React.createClass({
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-xs-6">
                            <div className="row nav-links">
                                <menu className="col-md-3">
                                    <menuitem><NavLink to="/home">Home</NavLink></menuitem>
                                    <menuitem><NavLink to="/gallery">Gallery</NavLink></menuitem>
                                </menu>
                                <menu className="col-md-3">
                                    <menuitem><NavLink to="/home">About</NavLink></menuitem>
                                    <menuitem><NavLink to="/videos">Videos</NavLink></menuitem>
                                </menu>
                                <menu className="col-md-3">
                                    <menuitem><NavLink to="/services">Services</NavLink></menuitem>
                                    <menuitem><NavLink to="/contact">Contact</NavLink></menuitem>
                                </menu>
                            </div>
                            <div className="notice">
                                Please note that some of the links on this page may be affiliate links
                            </div>
                        </div>
                        <div className="col-md-6 hidden-xs">
                            <p className="tackle-clutter">TACKLE CLUTTER</p>
                            Serving Greater Boston<br/>
                            <b>EMAIL</b>: juliana@tackeclutter.com | <b>CALL</b>: 734-233-5800
                        </div>
                        <div className="col-md-3 col-xs-6">
                            <div className="social-media">
                                <h4>Follow</h4>
                                <ul>
                                    <li><i className="fa fa-2x fa-fw fa-facebook"></i></li>
                                    <li><i className="fa fa-2x fa-fw fa-instagram"></i></li>
                                    <li><i className="fa fa-2x fa-fw fa-pinterest"></i></li>
                                    <li><i className="fa fa-2x fa-fw fa-yelp"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="hidden-md hidden-lg hidden-xg">
                        <p className="tackle-clutter">TACKLE CLUTTER</p>
                        Serving Greater Boston<br/>
                        <b>EMAIL</b>: juliana@tackeclutter.com<br/>
                        <b>CALL</b>: 734-233-5800
                    </div>
                </div>
            </footer>

        );
    }
});