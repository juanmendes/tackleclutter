import React from 'react';
import ContactBox from './widgets/ContactBox'
export default function () {
    return <div className="container">
        Take the first step to tackle your clutter. Contact us for a free consultation and estimate.
        <ContactBox hideFirstLine={true}/>
    </div>
}