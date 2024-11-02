import {
  nitk,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  publiclab,
  zulip,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  dav,
  indra,
  qviq,
  itsqviq,
  hg,
  quasar,
  internlay,
  cc,
  urbanHive,
  vibeCast,
  skyConnect,
  codeHub,
  dsa,
  imo,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMicrosoftazure,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiAmazonaws,
  SiMongodb,
  SiFirebase,
  SiJest,
  SiStripe,
  SiRabbitmq,
  SiAxios,
  SiJsonwebtokens,
  SiLivechat,
  SiVimeolivestream,
  SiLivejournal,
  SiLivewire,
  SiCelery,
  SiPrisma,
} from "react-icons/si";

import { FaHardHat, FaRust } from "react-icons/fa";

import { IoIosNotificationsOutline } from "react-icons/io";

import { FaGolang } from "react-icons/fa6";

import {
  DiCss3,
  DiFirebase,
  DiJava,
  DiMsqlServer,
  DiRuby,
} from "react-icons/di";

export const resumeLink =
  "https://drive.google.com/file/d/1qUvKy_GYwzNHsjZY22EUCEZA5wSi0ADH/view?usp=sharing";
export const repoLink = "https://github.com/mittal-parth/personal-portfolio";

export const callToAction =
  "https://www.linkedin.com/in/shubh-shubhanjal-06282a257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "openSource",
  //   title: "Open Source",
  // },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "Indian Institute of Information Technology, Ranchi",
    degree: "Bachelor of Technology",
    duration: "November 2022 - Present",
    content1:
      "Computer Science and Engineering (Spec. in Data Science and Artificial Intelligence)",
    content2: "CGPA: 8.51",
  },
  {
    id: "education-2",
    icon: indra,
    title: "Indraprastha International School",
    degree: "Class 12th",
    duration: "March 2021 - March 2022",
    content1: "Percentage: 88%",
  },
  {
    id: "education-2",
    icon: dav,
    title: "DAV Public School",
    degree: "Class 10th",
    duration: "March 2019 - March 2020",
    content1: "Percentage: 92.4%",
  },
];

export const achievements = [
  {
    id: "a-2",
    icon: gdsc,
    event: "GDSC Solution Challenge",
    position: "The project was successfully selected at the national level.",
    content1:
      "Integrated Solutions for Farmers: Our platform combines PlantGuard AI for disease detection, KisanConnect for direct sales, CropBase for crop guidance, and WeatherAlert Pro for timely weather updates.",
    content2:
      "Empowering Agriculture with Technology: We provide Indian farmers with tools for accurate diagnosis, fair pricing, expert guidance, and weather alerts for better farming decisions",
    content3: "",
  },
  {
    id: "a-1",
    icon: cc,
    event: "CodeChef | Starters 156",
    position: "Global Rank: 79",
    content1: "Earned 500 points by solving 5 questions within an hour",
    content2: "Achieved 79th rank among 33,637 registered candidates",
    project:
      "https://www.codechef.com/rankings/START156D?itemsPerPage=100&order=asc&page=1&sortBy=rank",
  },
  {
    id: "a-3",
    icon: dsa,
    event: "Data Structure & Algorithms",
    position: "Solved 350+ questions",
    content1:
      "Solved the questions across platforms such as GeeksforGeeks, LeetCode, CodeChef, and CodeForces.",
  },
  {
    id: "a-4",
    icon: imo,
    event: "International Mathematical Olympiad 2018",
    position: "All India Rank: 98",
    content1: "Achieved a city rank of 2 and an international rank of 872.",
  },
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },

      {
        id: "pl-7",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-10",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-10",
        icon: SiTypescript,
        name: "TypeScript",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "f-6",
        icon: SiNextdotjs,
        name: "Next js",
      },
      {
        id: "f-7",
        icon: SiNodedotjs,
        name: "Node js",
      },
      {
        id: "f-8",
        icon: SiExpress,
        name: "Express js",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiAmazonaws,
        name: "AWS",
      },
      {
        id: "t-27",
        icon: SiJest,
        name: "Jest",
      },
      {
        id: "t-98",
        icon: SiFirebase,
        name: "Firebase",
      },
      {
        id: "t-97",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-8",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-9",
        icon: SiVite,
        name: "ViteJS",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "Qviq",
    logo: itsqviq,
    link: "https://www.oracle.com/in/",
    positions: [
      {
        title: "Full Stack Developer Intern",
        duration: "May 2024 - September 2024",
        content: [
          {
            text: "Developed a full stack website, theconnected.io, that connects exhibitors and attendees at events. It helps exhibitors target the right audience and sell their products efficiently.",
            link: "",
          },
          {
            text: "Solved major bugs on the Qviq profile page that were causing several issues in profile creation.",
            link: "",
          },
          {
            text: "Solved major bugs on the Qviq product cart and introduce seamless payment gateway.",
            link: "",
          },
          {
            text: "Developed a website for DMA, focusing exclusively on the frontend to ensure a seamless experience and minimal loading time.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "House of Geeks, IIIT Ranchi",
    logo: hg,
    link: "https://iris.nitk.ac.in/about_us",
    positions: [
      {
        title: "ML-AI Lead",
        duration: "September 2024 - Present",
        content: [
          {
            text: "As the ML-AI Lead, I guided second-year students by organizing insightful sessions and hands-on workshops. My focus was on building foundational skills and sparking interest in AI and machine learning technologies.",
            link: "",
          },
        ],
      },
      {
        title: "ML-AI Co-ordinator",
        duration: "September 2023 - May 2024",
        content: [
          {
            text: "In my role as the ML-AI Coordinator, I guided first-year students through their first steps in technology, with a focus on AI and ML. I organized sessions and workshops to deepen their understanding and inspire their interest in these fields.",
            link: "",
          },
        ],
      },
      {
        title: "Web Developer, House of Geeks",
        duration: "September 2023 - Present",
        content: [
          {
            text: "Contributed to the development of the HGV2 website, our college’s technical society platform, by designing an engaging frontend interface and implementing backend functionality for the admin panel. This work enhanced the site's usability and streamlined content management for the society's administrators.",
            link: "",
          },
        ],
      },
    ],
  },
];

export const openSourceContributions = [
  {
    id: "os-1",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title:
      "Move _wiki to old table look, common template for email and settings digest only",
    link: "https://github.com/publiclab/plots2/pull/10731",
    number: "#10731",
    date: "Feb 24 2022",
    linesAdded: "101",
    linesDeleted: "48",
  },
  {
    id: "os-2",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Combine templates for email digest and settings digest",
    link: "https://github.com/publiclab/plots2/pull/10681",
    number: "#10681",
    date: "Feb 9 2022",
    linesAdded: "86",
    linesDeleted: "106",
  },
  {
    id: "os-3",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "Fix reverse chronological sorting on inline grids",
    link: "https://github.com/publiclab/plots2/pull/11114",
    number: "#11114",
    date: "May 4 2022",
    linesAdded: "1",
    linesDeleted: "1",
  },
  {
    id: "os-4",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "pull-request",
    status: "merged",
    title: "style: Make post page footer responsive",
    link: "https://github.com/publiclab/plots2/pull/10634",
    number: "#10634",
    date: "Feb 24 2022",
    linesAdded: "64",
    linesDeleted: "8",
  },
  {
    id: "os-5",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Typos in Translation_System.md",
    link: "https://github.com/publiclab/plots2/issues/11120",
    number: "#11120",
    date: "May 6 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-6",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Missing translations on layouts/_header.html.erb",
    link: "https://github.com/publiclab/plots2/issues/11115",
    number: "#11115",
    date: "May 4 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-7",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Missing translation of 'This is part of' on _tagging.html.erb",
    link: "https://github.com/publiclab/plots2/issues/10986",
    number: "#10986",
    date: "Apr 8 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-8",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Wrong closing heading tag in _digest.html.erb",
    link: "https://github.com/publiclab/plots2/issues/10985",
    number: "#10985",
    date: "Apr 8 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-9",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Add class to center wiki.scraped_image in wikis template",
    link: "https://github.com/publiclab/plots2/issues/10797",
    number: "#10797",
    date: "Mar 18 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-10",
    organisation: "PublicLab",
    logo: publiclab,
    repo: "plots2",
    type: "issue",
    status: "closed",
    title: "Images on /wiki are not center aligned",
    link: "https://github.com/publiclab/plots2/issues/10755",
    number: "#10755",
    date: "Mar 4 2022",
    linesAdded: "",
    linesDeleted: "",
  },
  {
    id: "os-11",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "invitations: Check invitation from a now-deactivated user.",
    link: "https://github.com/zulip/zulip/pull/20206",
    number: "#20206",
    date: "Dec 30 2021",
    linesAdded: "31",
    linesDeleted: "1",
  },
  {
    id: "os-12",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "invitations: Check invitation from a now-deactivated user.",
    link: "https://github.com/zulip/zulip/pull/20206",
    number: "#20206",
    date: "Dec 30 2021",
    linesAdded: "31",
    linesDeleted: "1",
  },
  {
    id: "os-13",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "authentication: Fix placeholder realms for redirects.",
    link: "https://github.com/zulip/zulip/pull/19689",
    number: "#19689",
    date: "Sep 9 2021",
    linesAdded: "1",
    linesDeleted: "1",
  },
  {
    id: "os-14",
    organisation: "Zulip",
    logo: zulip,
    repo: "zulip",
    type: "pull-request",
    status: "merged",
    title: "message_editing : Fix topic edit propagate option cut-off",
    link: "https://github.com/zulip/zulip/pull/19760",
    number: "#19760",
    date: "Feb 10 2022",
    linesAdded: "9",
    linesDeleted: "8",
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Urban Hive",
    github: "https://github.com/Shubh-2909/UrbanHive",
    image: urbanHive,
    content:
      "Engineered an intuitive e-commerce platform that enables seamless product browsing and purchasing, powered by React.js for dynamic front-end interactions and Redux for efficient state management. Integrated Firebase to streamline Google authentication and image storage, providing a smooth user experience and optimized data handling. Leveraged caching mechanisms to boost performance for frequently accessed products and orders, ensuring swift retrieval and an enhanced user experience. Additionally, incorporated Stripe for secure and reliable payment processing, delivering a comprehensive and secure e-commerce solution.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "icon-3",
        icon: SiExpress,
        name: "Express.js",
      },
      {
        id: "icon-4",
        icon: SiNodedotjs,
        name: "Node.js",
      },
      {
        id: "icon-5",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "icon-6",
        icon: SiFirebase,
        name: "Firebase",
      },
      {
        id: "icon-7",
        icon: SiStripe,
        name: "Stripe",
      },
    ],
  },
  {
    id: "project-2",
    title: "Vibe Cast",
    github: "https://github.com/Shubh-2909/VibeCast",
    image: vibeCast,
    content:
      "Developed Vibecast, a robust live streaming platform, integrating LiveKit for seamless real-time streaming and Clerk for secure authentication. The platform supports streaming via RTMP/WHIP protocols and connects effortlessly with Next.js to work with OBS or other streaming software. Key features include real-time chat with unique viewer colors, live viewer counts, and status updates, along with a versatile Creator Dashboard for stream management. Vibecast also offers advanced user interactions with following, blocking, and participant management in real time. Built with MySQL, SSR, and grouped routes, the platform boasts fast performance, a sleek design, and smooth user experience, complete with community and recommendations tabs to enhance engagement.",
    stack: [
      {
        id: "icon-3",
        icon: SiNextdotjs,
        name: "Next.js",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "icon-4",
        icon: SiLivewire,
        name: "Livekit",
      },
      {
        id: "icon-5",
        icon: SiCelery,
        name: "Clerk",
      },
      {
        id: "icon-6",
        icon: SiPrisma,
        name: "Prisma",
      },
      {
        id: "icon-7",
        icon: SiMysql,
        name: "MySql",
      },
    ],
  },
  {
    id: "project-3",
    title: "SkyConnect",
    github: "https://github.com/Shubh-2909/SkyConnect",
    image: skyConnect,
    content:
      "Developed an efficient API Gateway to handle user requests seamlessly, routing them to various microservices to improve system performance and user experience. Skillfully used the Axios library for reliable communication and data transfer between microservices. Automated timely notifications with CronJobs, enhancing user engagement and system functionality. Additionally, integrated RabbitMQ as a message queue between booking and reminder services to manage high request loads effectively, ensuring smooth processing of flight bookings.",
    stack: [
      {
        id: "icon-3",
        icon: SiExpress,
        name: "Express.js",
      },
      {
        id: "icon-1",
        icon: SiMysql,
        name: "MySql",
      },
      {
        id: "icon-4",
        icon: SiRabbitmq,
        name: "RabbitMQ",
      },
      {
        id: "icon-5",
        icon: SiAxios,
        name: "Axios",
      },
      {
        id: "icon-6",
        icon: SiJsonwebtokens,
        name: "JWT",
      },
    ],
  },
  {
    id: "project-4",
    title: "CodeHub (inProgess)",
    github: "https://github.com/Shubh-2909/CodeHub",
    image: codeHub,
    content:
      "Developing CodeHub, a coding platform, built on Next.js and TypeScript with Firebase for data management and Judge0 for reliable code execution and evaluation. The platform enables users to solve coding challenges with real-time feedback, supports multiple programming languages, and tracks user progress and performance. Integrated user authentication, submission history, and comprehensive leaderboard features to foster engagement and competitiveness. The platform includes intuitive UI design, optimized code submission flows, and detailed solution analysis, providing an engaging and efficient coding experience.",
    stack: [
      {
        id: "icon-3",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "icon-3",
        icon: SiTypescript,
        name: "Typescript",
      },
      {
        id: "icon-4",
        icon: SiFirebase,
        name: "Firebase",
      },
    ],
  },
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  {
    organisation: "Internlay, IIIT Ranchi",
    title: "Core Organiser",
    duration: "October 2024 - November 2024",
    content: [
      {
        text: "Co-initiated Internlay: Virtual Internship, aimed at providing second-year students with hands-on industry experience through real-life projects in a corporate-like environment.",
        link: "",
      },
      {
        text: "Mentored students by leveraging internship experience to enhance their skills and understanding of industry standards.",
        link: "",
      },
    ],
    logo: internlay,
  },
  {
    organisation: "Quasar, IIIT Ranchi",
    title: "Organiser",
    duration: "April 2024",
    content: [
      {
        text: "Organized a hackathon with over 100 student participants, fostering a collaborative environment for learning and innovation",
      },
      {
        text: "Developed real-world problem-solving challenges to encourage practical and impactful solutions.",
      },
    ],
    logo: quasar,
  },
  {
    organisation: "E-Cell, IIIT Ranchi",
    title: "Joint-Secretary, Joint Marketing and Design & Research",
    duration: "April 2023 - Present",
    content: [
      {
        text: "Initiated eTalks, a speaker series where entrepreneurs shared insights on business growth strategies and entrepreneurial skills with students.",
      },
      {
        text: "As Joint Secretary, mentored students on effective product marketing, in-depth research techniques, and designing products to align with consumer demand.",
      },
    ],
    logo: ecell,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/shubh-shubhanjal-06282a257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/Shubh-2909",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:shubhshubhanjal29@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://www.twitter.com/@SShubhanjal",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/_shubh_.29",
  },
];

export const aboutMe = {
  name: "Shubh Shubhanjal",
  tagLine:
    "🇮🇳🇮🇳 | Ex - Full Stack Intern @Qviq | MERN | ML | IIIT Ranchi @Pre Final Year | Web Developer",
  intro:
    "I’m a Software Developer from India, always focused on honing my skills or brainstorming new ideas. With a strong enthusiasm for ML and AI, I dive into various projects, striving to expand my knowledge and make an impact through innovative solutions.",
};
