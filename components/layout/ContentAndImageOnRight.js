import React from 'react'

export default React.createClass({
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-xs-8">
                    {this.props.children[0]}
                </div>
                <div className="col-xs-4">
                    {this.props.children[1]}
                </div>
            </div>
        </div>
    }
})