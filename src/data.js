

const projects = {
    web: [
        {
            id: 1,
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
            imgs: ["imgs/DreamBelieveAchieve/Favorites.PNG", "imgs/DreamBelieveAchieve/Home.PNG", "imgs/DreamBelieveAchieve/Quote.PNG", "imgs/DreamBelieveAchieve/Search.PNG", "imgs/DreamBelieveAchieve/SetTime.PNG"],
            short: "iOS Inspirational Quote App. This app has over 1600 quotes that can be found randomly or by searching for keywords. Quote push notifications available.",
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
