import linkify from '../assets/images/linkify/linkify-512x512.png';

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export const topProjects: Project[] = [
  {
    id: 1,
    name: 'Linkify',
    description:
      'A robust full-stack URL shortening service engineered for speed and simplicity. Explore how I transformed messy links into elegant, shareable URLs using Node.js for powerful backend logic, Vanilla JavaScript for a lightning-fast frontend, and a proxy-driven architecture on cloud services for efficient deployment.',
    technologies: [
      'Node.js',
      'Express',
      'Vanilla JS',
      'HTML',
      'CSS',
      'Cloudflare',
    ],
    imageUrl: linkify,
    liveUrl: 'https://lnkfy.cfd',
    githubUrl: 'https://github.com/owen-6936/linkify',
  },
  {
    id: 2,
    name: 'Portfolio Website',
    description:
      'A personal portfolio website to showcase my projects and skills, built with Next.js and Tailwind CSS.',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'Framer Motion',
      'TypeScript',
      'React',
      'Vite',
    ],
    imageUrl: '',
    liveUrl: 'https://owen-6936.github.io/portfolio/',
    githubUrl: 'https://github.com/owen-6936/portfolio',
  },
  {
    id: 3,
    name: 'ESP32 S3 Dev Manager',
    description:
      'A comprehensive development tool for the ESP32 S3 microcontroller, featuring a user-friendly interface and robust functionality.',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'Three.js',
      'Vite',
      'Vercel',
      'ESLint',
      'Git',
    ],
    imageUrl: '',
    liveUrl: 'https://esp32-dev-manager.vercel.app/',
    githubUrl: 'https://github.com/owen-6936/esp32-dev-manager',
  },
];
