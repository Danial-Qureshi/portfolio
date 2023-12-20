export const METADATA = {
  author: "Danial Amjed",
  title: "Portfolio | Danial Amjed",
  description:
    "Danial Amjed is a qualified and professional mobile application developer with almost six years of experience in building mobile apps for both Android and ios platforms.",
  siteUrl: "https://www.danialamjed.com/",
  twitterHandle: "@danial.qureshi",
  keywords: [
    "Danial Amjed",
    "Frontend Developer",
    "Web Developer",
    "React Native Developer",
    "Software Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dntxapujn/image/upload/v1703069074/preview_lthzwm.png",
  language: "English",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Full Stack Developer.",
  "I build dreams into reality.",
  "I create aesthetic and modern apps.",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: danial.amjed@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/danial-amjed/",
  },
  {
    name: "github",
    url: "https://github.com/Danial-Qureshi/",
  },
  {
    name: "instagram",
    url: "https://instagram.com/danial.qureshi",
  },
  {
    name: "twitter",
    url: "https://instagram.com/danial.qureshi",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "javascript",
    "typescript",
    "nodejs",
    // "sass",
    // "cpp",
    "python",
    "vite",
    "firebase",
    "java",
    // "moralis",
    "stripe",
    "figma",
    "html",
    "css",
    "tanstack-query",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
    "chakra-ui",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git"],
};

export const PROJECTS = [
  {
    name: "Return Queen",
    image: "/projects/returnQueen.webp",
    blurImage: "/projects/blur/returnQueen.webp",
    description:
      "ReturnQueen was born with a specific mission: provide fast, easy, stress-free returns for all.🛏️",
    gradient: ["#5B0888", "#713ABE"],
    url: "https://returnqueen.com/",
    tech: ["react", "nextjs", "node", "firebase"],
  },
  {
    name: "VidiVet",
    image: "/projects/vidivet.webp",
    blurImage: "/projects/vidivet.webp",
    description:
      "we are on a mission to create the best pet care app designed for all the pet parents who want to proactively take care of their pet's✍🏻",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://vidivet.com/",
    tech: ["typescript", "react", "node", "firebase", "redux"],
  },
  {
    name: "Verbena",
    image: "/projects/verbena.webp",
    blurImage: "/projects/verbena.webp",
    description:
      "Verbina makes it easy to share messages of support to loved ones living with an illness.",
    gradient: ["#65B741", "#65B741"],
    url: "https://verbina.app/",
    tech: ["typescript", "react", "node", "chakra-ui"],
  },
  {
    name: "Step",
    image: "/projects/step.webp",
    blurImage: "/projects/step.webp",
    description:
      "An app designed to help students to get better at there studies",
    gradient: ["#EF4040", "#EF4040"],
    url: "https://step.pgc.edu/",
    tech: ["typescript", "react", "node", "firebase"],
  },
  {
    name: "Mashtal Expo",
    image: "/projects/mashtal.webp",
    blurImage: "/projects/mashtal.webp",
    description:
      "An App tailored to help people and community of muslims in USA",
    gradient: ["#1B4242", "#092635"],
    url: "https://mashtalexpo.com/blog/Mashtal%20App",
    tech: ["redux", "typescript", "react", "node"],
  },
  {
    name: "FikiFoo Food Delivery",
    image: "/projects/fikifoo.webp",
    blurImage: "/projects/fikifoo.webp",
    description:
      "A food deliverly app that serves in Islamabad && Rawalpindi region",
    gradient: ["#D80032", "#F9DEC9"],
    url: "https://play.google.com/store/apps/details?id=com.tekgenisys.fikifoo",
    tech: ["typescript", "react", "node", "stripe"],
  },
  {
    name: "Tesla",
    image: "/projects/tesla.webp",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "A Tesla React Native App 🏎️",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/Danial-Qureshi/tesla-App-UI",
    tech: ["typescript", "react", "node"],
  },
];

export const WORK = [
  {
    id: 1,
    company: "VidiVet",
    title: "Lead Full Stack Developer",
    location: "Liverpool, UK",
    range: "2021 - Current",
    responsibilities: [
      "Translate requirements and integrate them with the release",
      "Built the logic for a streamlined serving platform that scaled",
      "Manage teams and train juniors",
      "The app boasts a DAU base of 13k and an extensive MAU count of 170k.",
    ],
    url: "https://vidivet.com",
    video: "/work/dukaan.mp4",
  },
  {
    id: 2,
    company: "Divsync",
    title: "React native Developer",
    location: "Goa",
    range: "2019 - 2021",
    responsibilities: [
      "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
      "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
      "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
    ],
    url: "https://www.aviate.jobs/",
    video: "/work/aviate.mp4",
  },
  {
    id: 3,
    company: "Immentia SMC",
    title: "Mobile Apps",
    location: "Bangalore, Karnataka",
    range: "2018 - 2019",
    responsibilities: [
      "Led the Full Stack revamp on the Admin Portal.",
      "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
      "Implemented CRUD features for all the services and providers.",
    ],
    url: "https://spacenos.com/",
    video: "/work/spacenos.mp4",
  },
];

export const GTAG = "G-PW9BJ72RWK";
