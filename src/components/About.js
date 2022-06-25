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
                        <strong>Education:</strong> I first started to teach myself with multiple free online resources such as Codecademy and Youtube to learn the basics of web development and iOS development as well. This included learning HTML, CSS, Javascript and Swift. Once i felt that I needed to learn more to be able to grasp enough knowledge to really start building projects I then started to buy books and courses on Udemy. I had been "teaching" myself how to code for about a year and a half and then in the month of September 2019 I enrolled in a fundamentals of full stack web development bootcamp at the University of Redlands about an hour away from where I live. Through this course it made the knowledge I had already gained through the multitude of free resources online more concrete because I got the chance to help other students who were coming into the course with no previous knowledge of coding. 
                    </p>
                </div>
                <div className="four columns">
                    <p>
                        After completing this bootcamp I still felt that I had more to learn before attempting to work for a big time company. I found an online bootcamp after researching and looking at many other options offered by Flatiron School based out of New York City. This bootcamp was a self paced online full stack web development course that went into way more detail than the previous bootcamp I completed. This second boot camp taught me modern frameworks that are used to build reponsive, fast and reliable web apps. While I was completing the self paced online bootcamp I was asked to create an app for a family member that they could showcase for their pageant. I am including this in the education section because I used this as a great learning opportunity and was able to get my first app published to the iOS store.
                    </p>
                </div>
                <div className="four columns">
                    <p>
                        <strong>Professional:</strong> My first "tech" job was working as a marketing assistant for a dermatology company. I rebuilt their couple hundred page website that was hosted through wordpress and built custom software solutions using javascript to help the company with their customer relations. My next tech job which taught me more than any of my education before was for a brand new start up that just started with myself and the founder. We were building a social platform using React Native a cross platform Javascript framework that allows you to create a mobile app with one source code that compiles to an app that can be hosted on the iOS App store as well as the Google play store. For this startup I also created the backend using Ruby on Rails to persist data. I used this knowledge to rebuild mt first app with this framework so that it is now hosted on both app stores.
                    </p>
                </div>
            </div>
        </OpaqueContainer>
    )
}

export default About;