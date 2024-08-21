import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Dev Team",
    icon: web,
  },
  {
    title: "AI/ML Team",
    icon: mobile,
  },
  {
    title: "IOT Team",
    icon: backend,
  },
  {
    title: "Design Team",
    icon: creator,
  },
];

const teamMembers = {
  "Web Dev Team": [
    {
      name: "John Doe",
      role: "Front-end Developer",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Jane Smith",
      role: "Back-end Developer",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Alex Johnson",
      role: "Full-stack Developer",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Emily Davis",
      role: "UI/UX Designer",
      image: "https://via.placeholder.com/150",
    },
  ],
  "AI/ML Team": [
    {
      name: "Michael Brown",
      role: "Mobile Developer (iOS)",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Olivia Wilson",
      role: "Mobile Developer (Android)",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "David Lee",
      role: "QA Engineer",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Sarah Chen",
      role: "Product Manager",
      image: "https://via.placeholder.com/150",
    },
  ],
  "IOT Team": [
    {
      name: "William Nguyen",
      role: "Hardware Engineer",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Sophia Patel",
      role: "Firmware Developer",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Daniel Ramirez",
      role: "Systems Integrator",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Isabella Gutierrez",
      role: "IoT Analyst",
      image: "https://via.placeholder.com/150",
    },
  ],
  "Design Team": [
    {
      name: "Ethan Gonzalez",
      role: "UI Designer",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Avery Perez",
      role: "UX Researcher",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Lucas Flores",
      role: "Graphic Designer",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Mia Diaz",
      role: "Motion Designer",
      image: "https://via.placeholder.com/150",
    },
  ],
};

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, teamMembers, technologies, projects };