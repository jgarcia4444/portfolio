

const projects = [
    {
        id: 1,
        title: "COVID-19 Numbers",
        imgs: ["imgs/COVID-19_Numbers/USTotalNumbers.png", "imgs/COVID-19_Numbers/TopSection.png", "imgs/COVID-19_Numbers/StateSection.png", "imgs/COVID-19_Numbers/ContactSection.png"],
        short: "A COVID-19 Web App that displays the numbers as a total for the United States. As well as has a picker to view individual states numbers.",
        long: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aspernatur amet harum minus blanditiis repellendus nihil fugit incidunt, placeat praesentium id voluptas, nobis magni porro corrupti quia natus reiciendis nemo.",
        websitUrl: "https://covid-19-numbers.vercel.app/"
    },
    {
        id: 2,
        title: "InspoQuotes",
        imgs: ["imgs/InspoQuotes/Favorites.PNG", "imgs/InspoQuotes/Home.PNG", "imgs/InspoQuotes/Quote.PNG", "imgs/InspoQuotes/Search.PNG", "imgs/InspoQuotes/SetTime.PNG"],
        short: "iOS Inspirational Quote App. This app has over 1600 quotes that can be found randomly or by searching for keywords. Quote push notifications available.",
        long: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aspernatur amet harum minus blanditiis repellendus nihil fugit incidunt, placeat praesentium id voluptas, nobis magni porro corrupti quia natus reiciendis nemo.",
        websiteUrl: "https://dba-landing-page.vercel.app/"
    },
    // {
    //     id: 2,
    //     title: "InspoQuotes",
    //     imgs: ["imgs/InspoQuotes/Favorites.PNG", "imgs/InspoQuotes/Home.PNG", "imgs/InspoQuotes/Quote.PNG", "imgs/InspoQuotes/Search.PNG", "imgs/InspoQuotes/SetTime.PNG"],
    //     short: "iOS Inspiration1al Quote App. This app has over 1600 quotes that can be found randomly or by searching for keywords. Quote push notifications available.",
    // }
]

const socialIcons = [
    {
        id: 1,
        title: "Twitter",
        logoImgSrc: "imgs/socials/Twitter.png",
        backgroundColor: "#000000",
        myAccount: "https://twitter.com/Jake_lykefewd"
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
        title: "Facebook",
        logoImgSrc: "imgs/socials/Facebook.png",
        backgroundColor: "#000000",
        myAccount: "https://www.facebook.com/jake.garcia.9083/"
    }
]

module.exports = {
    projects: projects,
    socialIcons: socialIcons
};
