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
                <div id="about-name" className="">
                    <h3>
                        Jake Garcia
                    </h3>
                </div>
                <div id="social-icons" className="">
                    {renderSocialIcons()}
                </div>
            </div>
            <div className="row" id="about-bio">
                <div className="four columns">
                    <p>
                        <strong>Education:</strong> I first started to teach myself with multiple free online resources such as Codecademy and Youtube to learn the basics of web development. This included learning HTML, CSS and Javascript. Once i felt that I needed to learn more to be able to grasp enough knowledge to really start building projects I then started to buy books and courses on Udemy. I had been "teaching" myself how to code for about a year and a half and then in the month of September 2019 I enrolled in a fundamentals of full stack web development bootcamp at the University of Redlands about an hour away from where I live. Through this course it made the knowledge I had already gained through the multitude of free resources online more concrete because I got the chance to help other students who were coming into the course with no previous knowledge of coding. 
                    </p>
                </div>
                <div className="four columns">
                    <p>
                    After completing this bootcamp I still felt that I had more to learn before attempting to work for a big time company. I found an online bootcamp after researching and looking at many other options offered by Flatiron School based out of New York City. This bootcamp was a self paced online full stack web development course that went into way more detail than the previous bootcamp I completed. This second boot camp taught me modern frameworks that are used to build reponsive, fast and reliable web apps.
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