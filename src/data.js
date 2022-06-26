

const projects = {
    web: [
        {
            id: 1,
            title: "Hungry Snake",
            imgs: ["imgs/hungry-snake/game-board.png", "imgs/hungry-snake/home.png", "imgs/hungry-snake/leaderboard.png", "imgs/hungry-snake/instructions.png"],
            short: "Classic snake game built using HTML, CSS and Javscript. A fun harmless game that test the users ability to focus.",
            long: "A snake game where users gain points by eating food as well as destroying enemy snakes. Add length to the snake by 1 or 3 and this also adds points to your score. destroying an enemy snake givs you five points. Once a user loses they have the ability to save their score to the leaderboard.",
            websiteUrl: "https://hungry-snake.vercel.app/"
        },
        {
            id: 2,
            title: "Blood Pressure Numbers",
            imgs: ["imgs/bpn-web/bpn-web-home-1.png", "imgs/bpn-web/bpn-web-home-2.png"],
            short: "A companion web site to showcase the features of my iOS app Blood Pressure Numbers. Also to serve as a channel of communication.",
            long: "This website is meant to showcase the features of an iOS app that I made called Blood Pressure Numbers. It also has a forum that visitors can use to write questions or problems that they may be having with the app. All in all this web site is meant to support the mobile app Blood Pressure Numbers.",
            websiteUrl: "https://bpn-app.vercel.app/home",
        },
        {
            id: 3,
            title: "COVID-19 Numbers",
            imgs: ["imgs/COVID_19_Numbers/USTotalNumbers.png", "imgs/COVID_19_Numbers/TopSection.png", "imgs/COVID_19_Numbers/StateSection.png", "imgs/COVID_19_Numbers/ContactSection.png"],
            short: "A COVID-19 Web App that displays the numbers as a total for the United States. As well as has a picker to view individual states numbers.",
            long: "I wanted to practice my web development skills, so I didn’t have to think very much about what to create. COVID-19 has affected countless amounts of lives. I wanted to help people have a better understanding of exactly how many people have been affected by this pandemic. This web app was made to do just that. On the initial main numbers card it displays seven different numbers related to the virus. From total confirmed positive cases, to fatalities, to fatality increase from the previous day, to the mortality rate. Then on the second numbers card it shows all the same sets of numbers, but it gives the user an option to select a state within the United States then it displays the numbers associated with that state. The numbers are collected from a third party api that collects their numbers from official government sites.",
            websiteUrl: "https://covid-19-numbers.vercel.app/",
        },
    ],
    mobile: [
        {
            id: 1,
            title: "Dream Believe Achieve",
            imgs: ["imgs/DreamBelieveAchieve/Home.PNG", "imgs/DreamBelieveAchieve/Favorites.PNG", "imgs/DreamBelieveAchieve/Landing.PNG", "imgs/DreamBelieveAchieve/Login.PNG",],
            short: "Cross platform inspirational quote app. This app has over 400 quotes that are presented randomly daily.",
            long: "This project allowed me to create two projects in a sense. The main project being the iOS app Dream Believe Achieve and the secondary project a landing page (website) for the app. The app uses an api call to collect over sixteen hundred quotes from influential and wise people. It allows users to favorite a quote which then gets saved to their favorites page. On the favorites page a user can easily unfavorite the quote and remove it. The app also allows a user to search by keywords, which then displays all the quotes containing the keywords. Any time a quote is shown in the app a user has the ability to share the quote to their Facebook account or twitter account. The last but probably main feature is the app allows a user to set a time that then at that specified time sends a daily quote as a notification to the user. The landing page serves as a gateway to download the app and also serves as extra information about the app.",
            websiteUrl: "https://dreambelieveachieve.vercel.app/",
        },
    ]
}

const socialIcons = [
    {
        id: 1,
        title: "LinkedIn",
        logoImgSrc: "imgs/socials/LinkedIn.png",
        backgroundColor: "#000000",
        myAccount: "https://www.linkedin.com/in/jake-garcia-318b09143/"
    },
    {
        id: 2,
        title: "Instagram",
        logoImgSrc: "imgs/socials/Instagram.png",
        backgroundColor: "#ffffff",
        myAccount: "https://www.instagram.com/jake_garcia/"
    },
    {
        id: 3,
        title: "GitHub",
        logoImgSrc: "imgs/socials/GitHub.png",
        backgroundColor: "#000000",
        myAccount: "https://github.com/jgarcia4444"
    },
]

export {
    projects,
    socialIcons
};
