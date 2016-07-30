import React from 'react'
import Header from './Header'
import Footer from './Footer'
export default React.createClass({
    render() {
        return (
            <div>
                <Header />
                <div className="main-body">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
})