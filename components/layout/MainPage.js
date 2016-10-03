import React from 'react'
import Header from './Header'
import Footer from './Footer'
export default React.createClass({
    render() {
        return (
            <div>
                <Header />
                <div className="main-body container">
                    <div className="row">{this.props.children}</div>
                </div>
                <Footer />
            </div>
        );
    }
})