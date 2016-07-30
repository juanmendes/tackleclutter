import React from 'react';

export default function (props) {
    return (
        <div className="contact-box">

            {!props.hideFirstLine ? <p>Contact us for estimates.</p> : ''}
            <p>
                <img src="/img/contact-us-sm.png"/> <br />
                <a href="mailto:juliana@tackleclutter.com">juliana@tackleclutter.com</a> <br/>
                734-233-5800<br/>
                Serving Greater Boston <br/>

                <h3>Message me</h3>
                <form>
                    <label><span>Name:</span><input /></label>
                    <label><span>Email:</span><input /></label>
                    <textarea /><br/>
                    <button>Send</button>
                </form>
            </p>
        </div>
    );

}