import React from 'react'
import NavLink from '../NavLink'
export default React.createClass({
    render() {
        return (
            <header>
                <div className="tackle-clutter">TACKLE CLUTTER</div>
                <div className="ju">by Juliana <img src="img/jr-logo-sm.png"/> Rebelo</div>
                <div className="organizer">Professional Organizer</div>

                <nav role="navigation" className="navbar navbar-default">
                    {/* Brand and toggle get grouped for better mobile display */}
                    <div className="navbar-header">
                        <button type="button" onClick={this.toggleMenuVisibility}
                                className="navbar-toggle">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    {/* Collection of nav links and other content for toggling */}
                    <div className={this.state.showingMenu ? '' : 'hidden-xs'} onClick={this.toggleMenuVisibility}>
                        <ul className="nav navbar-nav">
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/services">Services</NavLink></li>
                            <li><NavLink to="/gallery">Gallery</NavLink></li>
                            <li><NavLink to="/videos">Videos</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    },

    toggleMenuVisibility() {
        this.setState({showingMenu: !this.state.showingMenu});
    },

    getInitialState() {
        return {
            showingMenu: false
        };
    }
});