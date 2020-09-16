import React from 'react';

const Contact = () => {
    return (
        <div className="container">
            <h1 className="contatc-title">Contact Info</h1>
            <div>
                <table className="contact-table u-full-width">
                    <tr>
                        <th>Type</th>
                        <th>Address</th>
                        <th>Specifics</th>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><a href="mailto:jgarciadev4444@gmail.com">jgarciadev4444@gmail.com</a></td>
                        <td>When sending an email add a subject regarding the main reason for the email.</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>(760)-892-4561</td>
                        <td>Please leave a voicemail and i will return your call as soon as possible. Texts are also fine.</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Contact;