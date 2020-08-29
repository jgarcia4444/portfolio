import React from 'react';
const Home = (props) => {
    return (
        <div className="home">
            <h1 className="home-title">
                Welcome to my Portfolio Site!
            </h1>
            <div className="banner-bio">
                <div className="row">
                    <div className="four columns">
                        <img id="portrait" src="portrait.jpeg" alt="Jake Garcia" />
                    </div>
                    <div className="eight columns">
                        <p>
                            Hi my name is Jake and to keep it short so you'll check out my about page, I have created this website to showcase my projects and create an online presence.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;