import React from 'react';
import OpaqueContainer from '../shared/OpaqueContainer';
import '../styles/Contact.css';
import { HiMail, HiPhone } from 'react-icons/hi';

const Contact = () => {
    return (
        <OpaqueContainer>
            <div className="container contact-page-container">
                <h1 className="contact-title">Contact Info</h1>
                <div className="contact-table">
                    <div className="contact-info-buttons">
                        <a href="mailto:jgarciadev4444@gmail.com" className="contact-button email-button">
                            <HiMail size={32} color='white' />
                            <div className="contact-anchor-info" >jgarciadev4444@gmail.com</div>
                        </a>
                        <a href="tel:17608924561" className="contact-button phone-button">
                            <HiPhone size={32} color='white' />
                            <div className="contac-anchor-info">(760)-892-4561</div>
                        </a>
                    </div>
                </div>
                <div className="information-container">
                    <h3>Contact Details</h3>
                    <ul>
                        <li><strong>Email:</strong> In the subject add a short phrase of what the email consists of.</li>
                        <li><strong>Phone:</strong> I will respond to phone calls as well as text messages. Leave a voice mail if I do not answer and I will get back to you as soon as possible.</li>
                    </ul>
                </div>
            </div>
        </OpaqueContainer>
    );
}

export default Contact;