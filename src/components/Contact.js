import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className="container contact-page-container">
            <h1 className="contact-title">Contact Info</h1>
            <div>
                <table className="contact-table u-full-width">
                    <tr>
                        <th>Type</th>
                        <th>Address</th>
                        <th>Details</th>
                    </tr>
                    <tr>
                        <td><strong>Email</strong></td>
                        <td><a className="contact-anchor" href="mailto:jgarciadev4444@gmail.com">jgarciadev4444@gmail.com</a></td>
                        <td className="contact-details">When sending an email add a subject regarding the main reason for the email.</td>
                    </tr>
                    <tr>
                        <td><strong>Phone</strong></td>
                        <td><a className="contact-anchor" href="tel:17608924561">(760)-892-4561</a></td>
                        <td className="contact-details">I will try my best to answer all calls. Texts are also fine.</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Contact;