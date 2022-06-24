import React from 'react';
import {socialIcons} from '../data';
import '../styles/About.css';
import OpaqueContainer from '../shared/OpaqueContainer';

const About = (props) => {

    const renderSocialIcons = () => {
        return socialIcons.map(social => {
            return (
                <a className="social-icon-anchor" key={social.id} href={social.myAccount} target="_blank" rel="noopener noreferrer">
                    <img className="social" src={social.logoImgSrc} alt={social.title} width="28px" height="28px" />
                </a>
            )
        })
    }

    return (
        <OpaqueContainer>
            <div className="row" id="about-name-social-row">
                <div id="about-name" className="six columns">
                    <h3>
                        Jake Garcia
                    </h3>
                </div>
                <div id="social-icons" className="six columns">
                    {renderSocialIcons()}
                </div>
            </div>
            <div className="row" id="about-bio">
                <div className="four columns">
                    <p>
                    My name is Jake Garcia and I am an aspiring software developer. I have no formal education in the field, but I am an obsessive learner and love to find out details about something so I can fully understand it and pick it apart. I started with some iOS app development Udemy courses and then I ventured to Codecademy to learn web development. A couple months later I was getting into programming pretty rigorously and continuing to try to become a better developer. I started a fundamentals of web development bootcamp at the University of Redlands. 
                    </p>
                </div>
                <div className="four columns">
                    <p>
                    This course helped me a ton by just coding with other people. Most of my learning and coding had been by myself. Being able to explain to my classmates how to solve something or to decipher what my teacher said in plain English, which I found myself doing quite often not because the teacher was bad, but I think he was overqualified for the position due to most of the students being complete newcomers. Another couple of months went by and I still did not feel like I had web development fully understood.
                    </p>
                </div>
                <div className="four columns">
                    <p>
                    I looked for a more rigorous bootcamp and ended up applying for and after an interview process was accepted into Flatiron’s Self Paced Full Stack Web Development Bootcamp. I am currently towards the end of the program and love what I have learned so far. React has gotten me to start developing a few small projects because with React web apps can be functional in a short amount of time. I will continue to create web apps, better my skills, further my knowledge, and try to network with like minded people.<b>If anyone has an idea for a web app or iOS app I am open for freelance work.</b> 
                    </p>
                </div>
            </div>
        </OpaqueContainer>
    )
}

export default About;