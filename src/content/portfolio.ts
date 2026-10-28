export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  theme: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl: string;
  role: string;
  highlights: { title: string; description: string }[];
  architecture: string[];
  note?: string;
}

export interface Experience {
  company: string;
  role: string;
  date: string;
  description: string;
  contributions: string[];
}
export const profile = {
  name: 'Ogunsola Faruk',
  role: 'Software Developer — Web & Mobile',
  email: 'ogunsolafark8@gmail.com',
  whatsapp: '+2348088429227',
  whatsappUrl: 'https://wa.me/2348088429227',
  siteUrl: 'https://ogunsolafaruk.vercel.app',
  cvUrl: '/ogunsola-faruk-cv.pdf',
  originalCvUrl:
    'https://docs.google.com/document/d/1_DclCK5eixq8htIhFxsdkPfxbetx_vLpReRsgupoNQ4/edit',
  cvDownloadUrl: '/ogunsola-faruk-cv.pdf',
};
export const navigation = [
  { id: 'work', label: 'Work' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
];
export const socials = [
  { name: 'GitHub', url: 'https://github.com/Fatzy070' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/faruk-ogunsola-394815312' },
  { name: 'X / Twitter', url: 'https://x.com/fatzy_tech' },
  { name: 'WhatsApp', url: 'https://wa.me/2348088429227' },
];
export const projects: Project[] = [
  {
    id: 'parvis',
    number: '01',
    name: 'Parvis',
    category: 'Learning platform',
    headline: 'A complete system for the way people learn.',
    description:
      'A deployed learning platform connecting structured courses, AI-assisted study, subscriptions and verifiable certificates. Built across the learner experience, backend services and administrative tools.',
    image: '/images/parvis.webp',
    imageWidth: 1600,
    imageHeight: 676,
    imageAlt: 'Parvis learning platform with course discovery and a guided learning journey',
    theme: 'sage',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini API', 'Paystack'],
    liveUrl: 'https://parvis.com.ng',
    githubUrl: 'https://github.com/Fatzy070/learn-front',
    role: 'Full-stack product development',
    architecture: [
      'React learner & admin apps',
      'Express REST API',
      'MongoDB / Mongoose',
      'AI, payments & certificates',
    ],
    highlights: [
      {
        title: 'Learning with context',
        description:
          'Lesson-aware AI study tools, generated summaries and quizzes, with backend usage records and cached responses. Course progress connects enrollment, practice and completion.',
      },
      {
        title: 'Payments with a lifecycle',
        description:
          'Paystack integration handles one-time and recurring payments. Server-side transaction verification and signed webhooks connect billing events to access entitlements.',
      },
      {
        title: 'The system behind the product',
        description:
          'Dedicated administration for courses, lessons, quizzes and AI. PDF certificate generation, public certificate verification, notifications and support workflows complete the learning experience.',
      },
    ],
  },
  {
    id: 'papertrail',
    number: '02',
    name: 'Papertrail',
    category: 'Document workspace',
    headline: 'Making the PDF a working document.',
    description:
      'A browser-based PDF editor with selectable text, movable elements, multi-page editing and export. A document engine supported by authenticated storage, version history and a dedicated backend.',
    image: '/images/papertrail.webp',
    imageWidth: 1070,
    imageHeight: 770,
    imageAlt: 'Papertrail website showing its browser-based document editing workspace',
    theme: 'lilac',
    technologies: ['TypeScript', 'React', 'PDF.js', 'pdf-lib', 'MuPDF', 'NestJS'],
    liveUrl: 'https://papertrail.parvis.com.ng',
    githubUrl: 'https://github.com/Fatzy070/papertrail-website',
    role: 'Full-stack product & document engine',
    architecture: [
      'PDF.js rendering & extraction',
      'Zustand editor state',
      'pdf-lib / MuPDF export',
      'NestJS, MongoDB & R2 storage',
    ],
    highlights: [
      {
        title: 'Two coordinate systems. One editor.',
        description:
          'Maps PDF text bounds and baselines into browser coordinates, then scales the editing layer with zoom. Native text extraction provides the starting point for selectable, editable elements.',
      },
      {
        title: 'From an edit to a real PDF',
        description:
          'Combines text and image overlays with PDF export, embedded fonts and MuPDF-based redaction of supported source text. Editing fidelity depends on the original document.',
      },
      {
        title: 'Beyond the canvas',
        description:
          'A NestJS API manages authenticated documents and version history. Cloudflare R2 provides object storage; TanStack Query handles server state separately from Zustand’s editor state.',
      },
    ],
    note: 'Current editing scope: native PDF text, images and annotations. Text extraction and export fidelity depend on the source document.',
  },
  {
    id: 'withwords',
    number: '03',
    name: 'WithWords',
    category: 'Digital letter platform',
    headline: 'Bespoke digital letters sealed in interactive 3D.',
    description:
      'An intimate digital letter platform designed to bring ceremony back to personal messaging. Senders craft bespoke letters with curated stationery, wax seals, cherished photos and ambient soundtracks, while recipients experience a physics-driven 3D envelope reveal via unique links without account friction.',
    image: '/images/withwords.webp',
    imageWidth: 1600,
    imageHeight: 760,
    imageAlt: 'WithWords digital letter platform featuring 3D envelope reveal and atmosphere preview',
    theme: 'rose',
    technologies: ['React', 'TypeScript', 'Three.js', 'React Three Fiber', 'Node.js', 'Paystack'],
    liveUrl: 'https://mywithwords.xyz',
    githubUrl: 'https://github.com/Fatzy070/WithWord',
    role: 'Full-stack product & 3D experience',
    architecture: [
      'Three.js & R3F envelope stage',
      'Client draft state & audio',
      'Express REST API & Nanoid',
      'Paystack, Resend & Cloudinary',
    ],
    highlights: [
      {
        title: 'Ceremony in the browser',
        description:
          'A physics-aware 3D envelope rendered with Three.js and React Three Fiber features interactive hinge motion, wax seal release, realistic candlelit shading, and synchronized ambient soundtrack playback.',
      },
      {
        title: 'Frictionless, link-first access',
        description:
          'Senders compose and test the full 3D opening flow without signing up, keeping drafts local. Published letters generate secure, unguessable Nanoid links that recipients unlock instantly across any device.',
      },
      {
        title: 'Verified payments & delivery pipeline',
        description:
          'A server-verified Paystack checkout flow unlocks publication, triggering immediate email delivery of access keys via Resend, Cloudinary photograph processing, and automated lifecycle handling.',
      },
    ],
  },
];
export const mobileProject = {
  name: 'Nexus',
  label: 'Web + React Native',
  description:
    'A social product across the browser and mobile. The React Native app brings feeds, conversations, voice messages and media sharing into a native navigation flow.',
  technologies: ['React Native', 'Expo', 'Next.js', 'TypeScript', 'Socket.IO', 'Zustand'],
  links: [
    { label: 'Explore web app', url: 'https://nexus-tau-taupe.vercel.app/' },
    { label: 'Mobile source', url: 'https://github.com/Fatzy070/social-mobile' },
    { label: 'Web source', url: 'https://github.com/Fatzy070/social-frontend-' },
  ],
  capabilities: [
    {
      title: 'Native by design',
      description: 'Stack and tab navigation, device media pickers and secure token storage.',
    },
    {
      title: 'Connected in real time',
      description: 'Socket-based messaging, voice recording and notification handling.',
    },
  ],
};
export const archive = [
  {
    name: 'LogiXpress',
    category: 'Logistics & shipment tracking',
    technologies: 'React · REST APIs',
    url: 'https://github.com/Fatzy070/logistic-front',
  },
  {
    name: 'CryptoNova',
    category: 'Market data & portfolio tracking',
    technologies: 'React · API integrations',
    url: 'https://github.com/Fatzy070/CryptoNova-frontend',
  },
  {
    name: 'Fintech',
    category: 'Personal finance dashboard',
    technologies: 'React · Node.js',
    url: 'https://github.com/Fatzy070/tracker-frontend',
  },
];
export const capabilities = [
  {
    number: '01',
    title: 'Web & mobile',
    description:
      'Interfaces built around how people use a product, from a responsive web application to native mobile workflows.',
    tools: ['React', 'Next.js', 'React Native', 'Expo', 'TypeScript', 'Tailwind CSS'],
  },
  {
    number: '02',
    title: 'Systems & services',
    description:
      'The APIs, data models and authentication that make a product work reliably beyond the interface.',
    tools: ['Node.js', 'Express', 'NestJS', 'MongoDB', 'Mongoose', 'REST APIs'],
  },
  {
    number: '03',
    title: 'Product infrastructure',
    description:
      'Connecting the hard parts: payments, AI, real-time communication, document processing and persistent file storage.',
    tools: ['Paystack', 'Gemini API', 'Socket.IO', 'PDF.js', 'Cloudflare R2', 'Cloudinary'],
  },
];
export const experience: Experience[] = [
  {
    company: 'Naelix Tech Group of Companies',
    role: 'Full-Stack Developer',
    date: 'January 2026 — Present',
    description:
      'Contributing to production applications across team collaboration, fintech, developer infrastructure and identity verification.',
    contributions: [
      'Build end-to-end features across React frontends and Node.js services, including APIs, authentication and real-time functionality.',
      'Work with the engineering team on third-party integrations, production issues and application reliability.',
    ],
  },
  {
    company: 'Xerv',
    role: 'Backend Developer',
    date: 'August 2025 — November 2025',
    description:
      'Built backend services for NeTuArk, a social networking platform with account, social and messaging workflows.',
    contributions: [
      'Implemented REST APIs, authentication, authorization and real-time communication in collaboration with frontend developers.',
      'Designed database models and queries using Prisma and MySQL; integrated Firebase services where required.',
    ],
  },
  {
    company: 'SPTech',
    role: 'Web Developer Intern',
    date: 'June 2025 — August 2025',
    description:
      'Supported students during web development training through mentoring and practical learning resources.',
    contributions: [
      'Helped learners understand programming fundamentals and prepared visual materials to explain technical concepts.',
    ],
  },
];
export const education = {
  institution: 'SP Tech and Solutions',
  title: 'Diploma in Full-Stack Development',
  year: '2025',
};
