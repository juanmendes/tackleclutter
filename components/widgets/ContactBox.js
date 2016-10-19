import React from 'react';


function encodeObjectAsFormEncodedString(obj) {
    return Object.keys(obj)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
        .join('&');
}

function objectFromForm(form) {
    const obj = {};
    for (var index = 0, element; element = form.elements[index]; index++) {
        obj[element.name] = element.value;
    }
    return obj;
}

function serializeForm(form) {
    return encodeObjectAsFormEncodedString(objectFromForm(form));
}
export default React.createClass({
    render() {
        return (
            <div className="contact-box">
                {!this.props.hideFirstLine ? <p>Contact us for estimates.</p> : ''}
                <div>
                    <img src="/img/contact-us-sm.png"/> <br />
                    <a href="mailto:juliana@tackleclutter.com">juliana@tackleclutter.com</a> <br/>
                    734-233-5800<br/>
                    Serving Greater Boston <br/>

                    <h3>Message me</h3>
                    <form onSubmit={this.onSubmit}>
                        <label><span>Name:</span><input name="name"/></label>
                        <label><span>Email:</span><input name="email"/></label>
                        <label><span>Phone Number:</span><input name="phone"/></label>
                        <textarea name="message"/><br/>
                        <button type="submit">Send</button>
                    </form>

                    {this.state.formValidationError ? <div>{this.state.formValidationError}</div> : ''}

                    {this.state.sendingMessage ? <div><img src="/img/sending-mail.gif" /></div> : ''}
                    {this.state.messageSent ? <div>Your message to Juliana has been sent</div> : ''}
                    {
                        this.state.messageSentError ?
                            <div>
                                An error occurred while trying to send your message. Please try again or
                                <a href="mailto:juliana@tackleclutter.com"> send me a direct email</a>
                            </div>:
                            ''
                    }
                </div>
            </div>
        );
    },

    onSubmit(e) {
        e.preventDefault();
        var form = e.target;
        var email = form.elements.email.value;
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(email) && ! form.elements.phone.value) {
            this.setState({
                formValidationError: 'Please enter an email or a phone number'
            });
            return;
        }
        this.setState({
            formValidationError: ''
        });

        this.setState({
            sendindMessage: true,
            messageSentError: false,
            messageSent: false
        });
        var r = new XMLHttpRequest();
        r.open("POST", "/sendmail", true);
        r.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        r.onreadystatechange =  () => {
            if (r.readyState == 4) {
                if (r.status == 200) {
                    form.reset();
                    this.setState({
                        sendindMessage: false,
                        messageSentError: false,
                        messageSent: true
                    });
                } else {
                    this.setState({
                        sendindMessage: false,
                        messageSentError: true,
                        messageSent: false
                    });
                }
            }
        };

        r.onerror = () => {
            this.setState({
                sendindMessage: false,
                messageSentError: true,
                messageSent: false
            });
        };
        r.send(serializeForm(form));
    },

    getInitialState() {
        return {
            sendindMessage: false,
            messageSentError: false,
            messageSent: false
        }
    }
});