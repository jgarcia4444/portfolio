import React from 'react';
import OpaqueContainer from '../shared/OpaqueContainer';
import '../styles/Contact.css';
import { HiMail, HiPhone } from 'react-icons/hi';

const Contact = () => {
    return (
        <OpaqueContainer>
            <div className="container contact-page-container">
                <h1 className="contact-title">Contact Info</h1>
                    <div className="contact-info-buttons">
                        <div className="contact-button email-button">
                            <a className="contact-inner-button email-inner-button" href="mailto:jgarciadev4444@gmail.com">
                                <div className="contact-detail-container email-detail-container">
                                    <HiMail size={32} color='black' /> jgarciadev4444@gmail.com
                                </div>
                            </a>
                        </div>
                        <div className="contact-button phone-button">
                            <a className="contact-inner-button phone-inner-button" href="tel:17608924561">
                                <div className="contact-detail-container phone-detail-container">
                                    <HiPhone size={32} color='black' /> (760)-892-4561
                                </div> 
                            </a>
                        </div>
                    </div>
                <div className="contact-table">
                    <div className="information-container">
                        <h3>Contact Details</h3>
                        <ul>
                            <li><strong>Email:</strong> In the subject add a short phrase of what the email consists of.</li>
                            <li><strong>Phone:</strong> I will respond to phone calls as well as text messages. Leave a voice mail if I do not answer and I will get back to you as soon as possible.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </OpaqueContainer>
    );
}

export default Contact;