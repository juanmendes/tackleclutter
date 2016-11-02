import React from 'react'
import Header from './Header'
import Footer from './Footer'
export default React.createClass({
    render() {
        return (
            <div>
                <Header />
                <div className="main-body container">
                    {this.props.children}
                </div>
                <Footer />
                <button onClick={this.scrollToTop}
                        className="back-to-top"><i className="fa fa-2x fa-chevron-up" aria-hidden="true"></i></button>
            </div>
        );
    },

    scrollToTop() {
        document.body.scrollTop = innerWidth > 768 ? 101 : 0;
    }
})