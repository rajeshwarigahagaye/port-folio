export const personal = {
  name: 'Rajeshwari R. Gahagaye',
  title: 'Frontend Developer',
  tagline: 'Frontend Developer skilled in React.js, JavaScript, HTML5, and CSS3.',
  summary:
    'I build responsive, user-friendly websites and am familiar with Next.js, Tailwind CSS, Git, and full-stack workflows.',
  location: 'Nagpur, Maharashtra',
  email: 'rajeshwarigahagaye@gmail.com',
  phone: '8605268312',
  github: undefined,
  linkedin: undefined,
  portfolio: undefined,
  resumePath: '/resume.pdf',
};

export const education = {
  degree: 'Bachelor of Technology (B.Tech), Computer Science and Engineering',
  period: '2021 – 2025',
  institution: 'Vidarbha Institute of Technology, Umred, Nagpur',
  detail:
    'Built a strong foundation in frontend development, programming, databases, and computer science concepts through academic projects and practical internships.',
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Next.js', 'Tailwind CSS', 'Responsive Web Design'],
  },
  {
    category: 'UI & Design',
    skills: ['Figma', 'Template Design', 'UI Layout', 'Design-to-Code'],
  },
  {
    category: 'Backend & Databases',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Prisma', 'Python', 'Core Java'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'Vercel', 'Render', 'MS Excel'],
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  summary: string;
  points: string[];
};

export const experiences: ExperienceItem[] = [
  {
    role: 'Template Designer',
    company: 'EduTinker',
    period: '6 May 2026 – Present',
    current: true,
    summary: 'Designing and customizing reusable templates using HTML and CSS.',
    points: [
      'Designed and customized reusable templates using HTML and CSS.',
      'Created responsive layouts and structured content for different screen sizes.',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'SS Infotech',
    period: 'August 2025 – January 2026',
    summary: 'Gained practical exposure to web development and frontend implementation using web technologies.',
    points: [
      'Gained practical exposure to web development and frontend implementation using web technologies.',
      'Applied HTML, CSS, and JavaScript concepts while working on website interface tasks.',
    ],
  },
  {
    role: 'Cyber Security Intern',
    company: 'Edu-versity',
    period: 'November 2022 – December 2022',
    summary: 'Completed an internship introducing cybersecurity fundamentals and practices.',
    points: ['Completed an internship introducing cybersecurity fundamentals and practices.'],
  },
];

export type Project = {
  id: string;
  title: string;
  blurb: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  features: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: 'college-website',
    title: 'College Website',
    blurb: 'A responsive college website presenting academic programs, faculty, and course information.',
    description:
      'A responsive college website designed to present academic programs, faculty information, and course details through an organized and easy-to-navigate interface.',
    image: 'https://images.pexels.com/photos/39972075/pexels-photo-39972075.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Modern educational building surrounded by greenery',
    tags: ['HTML', 'CSS', 'JavaScript'],
    features: ['Responsive college layout', 'Academic program information', 'Faculty and course sections', 'Organized navigation'],
  },
  {
    id: 'todo-list',
    title: 'To-Do List Application',
    blurb: 'A task-management application with CRUD operations for daily tasks.',
    description:
      'A task-management application that demonstrates complete CRUD operations. Users can create, view, update, and delete daily tasks through a straightforward interface.',
    image: 'https://images.pexels.com/photos/131979/pexels-photo-131979.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Handwritten to-do list in a notebook',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    features: ['Create new tasks', 'View task list', 'Update existing tasks', 'Delete completed or unwanted tasks'],
  },
  {
    id: 'movie-critic-diary',
    title: 'Movie Critic Diary',
    blurb: 'A personal diary for recording and reviewing movies and television series.',
    description:
      'A personal diary concept for recording watched movies and television series, with an interface designed around organizing and revisiting personal reviews.',
    image: 'https://images.pexels.com/photos/1790556/pexels-photo-1790556.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Neon cinema sign glowing at night',
    tags: ['Full-Stack'],
    features: ['Record movies and television series', 'Personal diary-style entries', 'Review-focused layout', 'Responsive browsing experience'],
  },
  {
    id: 'kitty-chat',
    title: 'KittyChat App',
    blurb: 'A React-based animal-image chat application built as a frontend skill-development project.',
    description:
      'A React-based chat-style application using animal images as a playful visual theme. The project focuses on building a friendly interface, reusable UI patterns, and responsive frontend layouts.',
    image: 'https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Group of kittens playing on grass',
    tags: ['React.js'],
    features: ['React-based interface', 'Animal-image visual theme', 'Chat-style layout', 'Frontend practice project'],
  },
  {
    id: 'vrindavan-farms',
    title: 'DairyFarm Website',
    blurb: 'A responsive business website presenting farm information for Vrindavan Farms.',
    description:
      'A responsive business website for Vrindavan Farms, created to present farm information in a clear and approachable way. The site combines structured content with an earthy visual direction.',
    image: 'https://images.pexels.com/photos/39814920/pexels-photo-39814920.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Lush green rural farmland under a blue sky',
    tags: ['HTML', 'CSS', 'JavaScript'],
    features: ['Business information layout', 'Responsive page structure', 'Farm-focused content', 'Clear farm information sections'],
    demo: 'https://www.vrindavanfarm08.com',
  },
];
