import checkPng from "../images/checkm8.png";
import galtPng from "../images/old-galt-bottle-shop.png";
import marioPng from "../images/super-mario-cape.png";
import mattPng from "../images/matt-mazzochi.png";


export const projects = [
    {
        name: "checkm8", 
        link: "https://checkm8.me/", 
        gif: null,
        description: "Web app for checking Chess.com player stats and match history.",
        github: "https://github.com/JMMFL/checkm8-app",
        topics: "React / Styled Components / API Requests / CSS Grid",
        image: checkPng,
        positionX: "center"
    },

    {
        name: "super mario cape", 
        link: "https://supermariocape.xyz/", 
        gif: null,
        description: "Single-player browser game inspired by Super Mario World and Flappy Bird.",
        github: "https://github.com/JMMFL/super-mario-cape",
        topics: "ES6+ / DOM / OOP Programming / Canvas / Modules",
        image: marioPng,
        positionX: "center"
    },

    {
        name: "matt mazzocchi", 
        link: "https://mazzmatt.com/", 
        gif: null,
        description: "Reponsive photography portfolio for Canadian architect Matt Mazzocchi.",
        github: "https://github.com/JMMFL/photography-portfolio",
        topics: "Semantic HTML / CSS Flex Box / Sass / Reponsive Design",
        image: mattPng,
        positionX: "left"
    },

    {
        name: "old galt bottle shop", 
        link: "https://ogbottleshop.ca/", 
        gif: null,
        description: "Custom Shopify store for specialty beer boutique based in Cambridge.",
        github: null,
        topics: "Liquid / JavaScript / CSS / Custom Cart / Custom Theme",
        image: galtPng,
        positionX: "left"
    }
];


export const profile = `
I'm 24 and live in Kitchener, Ontario. During my spare time, I read 
books, lift weights, listen to podcasts, and play games. As a kid, 
I fell in love with Photoshop. I would spend hours watching YouTube 
videos and making memes for friends. With time, my passion 
turned into a practical skill, and the rest is history. This year I've 
decided to focus on front-end development. I use my background 
in psychology and graphic design to build cool projects.

One of my favorite quotes is from Jim Rohn: "Formal education will 
make you a living. Self-education will make you a fortune". It 
reminds me that life-long learning is essential to personal growth. 
The fortune you earn is not money but who you become. 
That's why I always look for ways to better myself. 
`

export const skills = {
    code: [
        "CSS3",
        "CSS in JS",
        "Fetch API",
        "Git",
        "HTML5",
        "JavaScript",
        "Python",
        "React",
        "Sass",
        "Shopify",
        "Wordpress"
    ],

    design: [
        "Adobe XD",
        "InDesign",
        "Figma",
        "Illustrator",
        "Photoshop"
    ],

    other: [
        "Copywriting",
        "Adaptive Design",
        "Responsive Design",
        "Typography",
        "UI / UX Design",
        "Video Editing"
    ]
};

export const interests = {
    books: "Ego is the Enemy, Deep Work, Atomic Habits",
    foods: "Pizza, Bubble Tea, Kettle Corn",
    games: "Chess, League of Legends, Halo",
    music: "MCR, Twenty One Pilots, The Wombats",
    podcasts: "Daily Stoic, Huberman Lab, IWT"
}