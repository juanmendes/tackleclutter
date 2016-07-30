import React from 'react'
import Layout from './layout/ContentAndImageOnRight'

import ContactBox from './widgets/ContactBox'
export default function () {
    return <div className="row">
        <div className="services col-lg-8 col-xs-12">
            <img src="img/ju-blue-shirt.png" className="hidden-lg"/>
            “Determine the space you have, consciously declutter, be creative and organize your things without taking
            more
            space than you first determined.” This is a basic organization statement and that will help you stay
            organized
            in every room in your house. Being realistic regarding the space you have will keep you clutter free!
            <h3>Home Organization</h3>
            <ul>
                <li>Kitchen </li>
                <li>Bedroom</li>
                <li>Office</li>
                <li>Closet</li>
                <li>Basement</li>
                <li>Garage</li>
                <li>Playroom</li>
            </ul>
            I can help you declutter and organize any room or project in your house.
            <h3>Moving to a New Home - Unpacking and Organizing </h3>
            <p>Moving and unpacking can definitely be overwhelming. It can take days, weeks and sometimes even months to
                put everything away and organize your new place. I can help you unpack and make decisions of where and
                how
                to best organize your home according to your family’s lifestyle. In no time, you will be able to
                enjoy your new home without the stress and endless to-do list of unpacking.</p>

            <ContactBox />
        </div>
        <img className="hidden-sm hidden-xs" src="img/ju-blue-shirt.png"/>
    </div>
}