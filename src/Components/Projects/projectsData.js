
const projects = [
    {
        id: 1,
        category:"Web",
        title: 'Personal Portfolio',
        tech: ["React","Framer Motion"],
        date: '2023',
        desc: " First iteration of my Personal portfolio, a dynamic canvas created with the purpuse of presenting a curated selection of my latest projects and to reflect my growth and passion for design and development.",
        background: "rgb(0, 255, 255);",
        thumb: require("../../assets/img/project1.png"),
        images: [require("../../assets/img/project1.png"),require("../../assets/img/project2.png"),require("../../assets/img/project2.png")],
        link: "/",
        repo: "https://github.com/Alan-brandan/personal-portfolio"
    },
    {
        id: 2,
        category:"Web",
        title: 'Notes',
        tech: ["spring boot","React","MySQL"],
        date: '2023',
        desc: "A dynamic and user-friendly website for creating, customizing, archiving, and deleting notes.",
        thumb: require("../../assets/img/project2.png"),
        images: [require("../../assets/img/project2.png"),require("../../assets/img/project2.png")],
        link: "https://challenge-ensolvers.vercel.app/",
        repo: "https://challenge-ensolvers.vercel.app/"
    },
    {
        id: 3,
        category:"Mobile",
        title: 'To-do App',
        tech: ["Kotlin","Android studio"],
        date: '2023',
        desc: "A minimalistic to-do android app",
        thumb: require("../../assets/img/project3.png"),
        images: [require("../../assets/img/project3.png"),require("../../assets/img/project2.png")],
        link: "https://challenge-ensolvers.vercel.app/",
        repo: "https://github.com/Alan-brandan/android-app-todolist"
    }
    ,
    {
        id: 4,
        category:"Web",
        title: 'Tango Viajes',
        role: 'Backend Developer',
        tech: ["spring boot","MySQL"],
        date: '2023',
        desc: "An e-commerce site for traveling",
        thumb: require("../../assets/img/project4.png"),
        images: [require("../../assets/img/project4.png"),require("../../assets/img/project2.png")],
        link: "https://c11-16-ft-java-angular-9pw7.vercel.app/",
        repo: "https://github.com/No-Country/C11-16-FT-JavaAngular"
    }

];

export default projects;