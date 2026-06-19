import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiVite,
  SiGit,
  SiGithub,
  SiPostman,
  SiElectron,
  SiCloudinary,
  SiSpring,
  SiVercel,
  SiRender,
} from 'react-icons/si'

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Vite', icon: SiVite, color: '#646CFF' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#000000' },
      { name: 'Java Spring Boot', icon: SiSpring, color: '#6DB33F' },
    ],
  },
  {
    category: 'Bases de Datos',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    category: 'Herramientas',
    items: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Electron', icon: SiElectron, color: '#47848F' },
      { name: 'Cloudinary', icon: SiCloudinary, color: '#F4B400' },
      { name: 'Vercel', icon: SiVercel, color: '#000000' },
      { name: 'Render', icon: SiRender, color: '#46E3B7' },
    ],
  },
]
