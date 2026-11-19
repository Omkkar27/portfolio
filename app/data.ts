import { IconType } from 'react-icons'
import type { ComponentType } from 'react'
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiVite,
  SiDocker,
  SiDigitalocean,
  SiLinux,
  SiTurborepo,
  SiGithubactions,
} from 'react-icons/si'
import { Globe, ShieldCheck, Database, Terminal } from 'lucide-react'

type Project = {
  name: string
  description: string
  link: string
  video?: string
  image?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
  icon: ComponentType<{ className?: string }>
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Tax Talk',
    description:
      'A platform to discover, connect, and consult verified Chartered Accountants.',
    link: 'https://taxtalk-neon.vercel.app',
    image: '/projects/taxtalk.png',
    id: 'project1',
  },
  {
    name: 'Project Management System',
    description:
      'Backend for project, team, and task management with JWT authentication and RBAC',
    link: 'https://github.com/Omkkar27/pms-backend',
    image: '/projects/project-management.png',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Crowdfeuz',
    title: 'Full Stack Web developer Intern ',
    start: 'DEC 2024',
    end: 'FEB 2025',
    link: 'https://drive.google.com/file/d/1KfrG6szWgFu20yTvjk3H2fqbdHBwekL2/view?usp=sharing',
    id: 'work1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'JavaScript',
    description: 'Programming language',
    link: '#',
    uid: '1',
    icon: SiJavascript,
  },
  {
    title: 'React.js',
    description: 'Frontend library',
    link: '#',
    uid: '2',
    icon: SiReact,
  },
  {
    title: 'Next.js',
    description: 'React framework',
    link: '#',
    uid: '3',
    icon: SiNextdotjs,
  },
  {
    title: 'HTML',
    description: 'Markup language',
    link: '#',
    uid: '4',
    icon: SiHtml5,
  },
  {
    title: 'CSS',
    description: 'Styling language',
    link: '#',
    uid: '5',
    icon: SiHtml5,
  },
  {
    title: 'Tailwind CSS',
    description: 'Utility-first CSS framework',
    link: '#',
    uid: '6',
    icon: SiTailwindcss,
  },
  {
    title: 'Node.js',
    description: 'JavaScript runtime',
    link: '#',
    uid: '7',
    icon: SiNodedotjs,
  },
  {
    title: 'Express.js',
    description: 'Backend framework',
    link: '#',
    uid: '8',
    icon: SiExpress,
  },
  {
    title: 'REST APIs',
    description: 'API development and integration',
    link: '#',
    uid: '9',
    icon: Globe,
  },
  {
    title: 'JWT Authentication',
    description: 'Token-based authentication',
    link: '#',
    uid: '10',
    icon: ShieldCheck,
  },
  {
    title: 'MongoDB',
    description: 'NoSQL database',
    link: '#',
    uid: '11',
    icon: SiMongodb,
  },
  {
    title: 'Mongoose',
    description: 'MongoDB object modeling',
    link: '#',
    uid: '12',
    icon: SiMongodb,
  },
  {
    title: 'PostgreSQL',
    description: 'Relational database',
    link: '#',
    uid: '13',
    icon: SiPostgresql,
  },
  {
    title: 'SQL',
    description: 'Database query language',
    link: '#',
    uid: '14',
    icon: Database,
  },
  {
    title: 'Git',
    description: 'Version control',
    link: '#',
    uid: '15',
    icon: SiGit,
  },
  {
    title: 'GitHub',
    description: 'Code hosting and collaboration',
    link: '#',
    uid: '16',
    icon: SiGithub,
  },
  {
    title: 'Postman',
    description: 'API testing',
    link: '#',
    uid: '17',
    icon: SiPostman,
  },
  {
    title: 'Vite',
    description: 'Frontend build tool',
    link: '#',
    uid: '18',
    icon: SiVite,
  },
  {
    title: 'Docker',
    description: 'Containerization platform',
    link: '#',
    uid: '19',
    icon: SiDocker,
  },
  {
    title: 'DigitalOcean',
    description: 'Cloud infrastructure',
    link: '#',
    uid: '20',
    icon: SiDigitalocean,
  },
  {
    title: 'Linux CLI',
    description: 'Command-line operations',
    link: '#',
    uid: '21',
    icon: Terminal,
  },
  {
    title: 'CI/CD',
    description: 'Continuous integration and delivery',
    link: '#',
    uid: '22',
    icon: SiGithubactions,
  },
  {
    title: 'Turborepo',
    description: 'Monorepo build system',
    link: '#',
    uid: '23',
    icon: SiTurborepo,
  },
  {
    title: 'AWS',
    description: 'Cloud computing services',
    link: '#',
    uid: '24',
    icon: Globe,
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Omkkar27',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/omkkareshwar',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/omkareshwar-tripathi-357546227/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/omkkar_17?exln=dTdubWowbHBqa3Fz',
  },
]

export const EMAIL = 'omkareshwaredu10@gmail.com'
