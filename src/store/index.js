import { ref } from 'vue';
import img1 from '../assets/img/clockwork1.jpeg'
import img2 from '../assets/img/callme1.jpeg'
import img3 from '../assets/img/kubrik3.jpeg'
import img4 from '../assets/img/dracula.jpeg'
import img5 from '../assets/img/selldrugs.jpeg'
import img6 from '../assets/img/therevenant.jpeg'
import img7 from '../assets/img/thewitch.jpeg'
import img8 from '../assets/img/onceupon.webp'


export const apiData = [
    {
        id: 0,
        name: 'John Doe',
        content: "Lorem ipsum", 
    },
    {
        id: 1,
        name: 'Harry Peterson',
        content: "New content", 
    },
    {
        id: 2,
        name: 'Loren Gil',
        content: "Example content", 
    },
    
];

export const postsData = [
    {
        id: 0,
        title: 'Clockwork Orange: best in action',
        body: "A Clockwork Orange is a 1971 dystopian crime film adapted, produced, and directed by Stanley Kubrick, based on Anthony Burgess's 1962 novel of the same name. It employs disturbing, violent images to comment on psychiatry, juvenile delinquency, youth gangs, and other social, political, and economic subjects in a dystopian near-future Britain.",
        created_by: "J.R Fermín",
        topic: "art",
        social_media: '@jrfermin',
        img: img1,
    },
    {
        id: 1,
        title: 'Call me by your name: the true',
        body: "Throughout Call Me by Your Name, Aciman presents emotional pain as valuable, inevitable, and worth experiencing. Because the circumstances of Elio and Oliver's relationship make it difficult for them to sustain their romance, Elio understands from the beginning that he's destined for heartbreak.",
        created_by: "J.R Fermín",
        topic: "film",
         social_media: '@jrfermin',
        img: img2,

    },
    {
        id: 2,
        title: '2001: A Space Odyssey: epic!',
        body: "2001: A Space Odyssey is a 1968 epic science fiction film produced and directed by Stanley Kubrick. The screenplay was written by Kubrick and science fiction author Arthur C. Clarke, and was inspired by Clarke's 1951 short story 'The Sentinel' and other short stories by Clarke. Clarke also developed a novelisation of the film, [...]",
         created_by: "J.R Fermín",
        topic: "film",
         social_media: '@jrfermin',
        img: img3,
        
    },
    {
        id: 3,
        title: 'Dracula: classic',
        body: "Bram stoker put seven years of research into the book, drawing ideas from diverse areas to flesh out his characters and locations, for example his knowledge ...",
         created_by: "J.R Fermín",
        topic: "film",
         social_media: '@jrfermin',
        img: img4,

    },
    {
        id: 4,
        title: 'How to sell drugs online: FAST',
        body: "How to Sell Drugs Online (Fast) is a German coming-of-age dark humor crime streaming television series co-created by Philipp Käßbohrer and Matthias Murmann.",
         created_by: "J.R Fermín",
        topic: "film",
         social_media: '@jrfermin',
        img: img5,

    },
     {
        id: 5,
        title: 'The Revenant',
        body: "The Revenant is a 2015 American epic survival drama film directed by Alejandro G. Iñárritu. The screenplay by Mark L. Smith and Iñárritu is based in part on ...",
         created_by: "J.R Fermín",
        topic: "film",
         social_media: '@jrfermin',
        img: img6,
    },
     {
        id: 6,
        title: 'The Witch',
        body: "The Witch (stylized as The VVitch, and subtitled A New-England Folktale) is a 2015 period supernatural horror film written and directed by Robert Eggers in ...",
        created_by: "J.R Fermín",
        topic: "film",
        social_media: '@jrfermin',
        img: img7,

    },
    {
        id: 7,
        title: 'Once upon a time in Hollywood',
        body: "Once Upon a Time in Hollywood is a 2019 comedy-drama film written and directed by Quentin Tarantino. Produced by Columbia Pictures, Bona Film Group, ..",
        created_by: "J.R Fermín",
        topic: "film",
        social_media: '@jrfermin',
        img: img8,
    },
];

export const images = [
    img1,
    img2,
    img3,
    img4,

];

export default { apiData,  postsData, images}