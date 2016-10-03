import React from 'react'
import NavLink from '../NavLink'


const links = [
    {faId: 'facebook', url: 'http://facebook.com/tackleclutter/'},
    {faId: 'instagram', url: 'http://instagram.com/tackleclutter/'},
    {faId: 'pinterest', url: 'http://pinterest.com/juliana3404/'},
    {faId: 'yelp', url: 'http://yelp.com'}
];
export default React.createClass({
    render() {
        return (
            <div className="social-media">
                <ul>{links.map(link => (
                    <li><a target="_blank" href={link.url}><i className={`fa fa-fw ${this.props.size} fa-${link.faId}`}></i></a></li>
                ))}
                </ul>
            </div>
        );
    },

    getDefaultProps() {
        return {
            size: 'fa-1x'
        }
    }

});
