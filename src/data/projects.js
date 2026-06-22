import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiElectron,
  SiCloudinary,
  SiSpring,
  SiJavascript,
  SiVite,
  SiGit,
  SiPostman,
  SiVercel,
  SiRender,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import marketvibeImg from '@/assets/MarketVibe/marketvibe.png'
import nexoDashboard from '@/assets/NexoPos/dashboard.png'
import nexo1 from '@/assets/NexoPos/nexo_1.png'
import nexo2 from '@/assets/NexoPos/nexo_2.png'
import nexo3 from '@/assets/NexoPos/nexo_3.png'
import nexo4 from '@/assets/NexoPos/nexo_4.png'
import nexo5 from '@/assets/NexoPos/nexo_5.png'
import nexo6 from '@/assets/NexoPos/nexo_6.png'
import nexo7 from '@/assets/NexoPos/nexo_7.png'
import tesis1 from '@/assets/Tesis/Captura de pantalla 2026-06-22 171030.png'
import tesis2 from '@/assets/Tesis/Captura de pantalla 2026-06-22 171053.png'
import tesis3 from '@/assets/Tesis/Captura de pantalla 2026-06-22 171116.png'
import tesis4 from '@/assets/Tesis/Captura de pantalla 2026-06-22 171144.png'

export const projects = [
  {
    id: 1,
    title: 'Sistema de Gestión de Recursos Energéticos',
    description:
      'Solución para la gestión de recursos energéticos en un entorno institucional del Banco Popular de Ahorro. Incluye backend con APIs REST, administración de BD y despliegue en producción.',
    stack: [
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
      { name: 'Spring Boot', icon: SiSpring, color: '#6DB33F' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    ],
    type: 'Tesis Profesional',
    image: tesis1,
    gallery: [tesis1, tesis2, tesis3, tesis4],
    note: 'Código propiedad del Banco Popular de Ahorro. Por políticas de confidencialidad, solo se muestran capturas con fines de portafolio.',
    demo: null,
    featured: true,
    gradient: 'from-emerald-500/20 via-teal-500/10 to-cyan-500/20',
    accentColor: '#10b981',
    stats: [
      { label: 'Entidad', value: 'Banco Popular de Ahorro' },
      { label: 'Año', value: '2024' },
      { label: 'Tipo', value: 'Tesis' },
    ],
  },
  {
    id: 3,
    title: 'NexoPos',
    subtitle: 'Sistema POS e Inventario',
    image: nexoDashboard,
    gallery: [nexoDashboard, nexo1, nexo2, nexo3, nexo4, nexo5, nexo6, nexo7],
    description:
      'Sistema de punto de venta e inventario completo. Módulos de ventas, productos, inventario y reportes. Migrado a Electron para funcionamiento offline en negocios.',
    stack: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Electron', icon: SiElectron, color: '#47848F' },
    ],
    type: 'Proyecto Profesional',
    github: 'https://github.com/norvisyunior/nexoPos',
    demo: '#',
    featured: true,
    gradient: 'from-violet-500/20 via-purple-500/10 to-fuchsia-500/20',
    accentColor: '#8b5cf6',
    stats: [
      { label: 'Módulos', value: '4+' },
      { label: 'Plataforma', value: 'Web + Desktop' },
      { label: 'Stack', value: 'MERN' },
    ],
  },
  {
    id: 2,
    title: 'MarketVibe',
    subtitle: 'Plataforma de Delivery',
    image: marketvibeImg,
    description:
      'Plataforma de delivery de alimentos con autenticación JWT, carrito de compras, panel administrativo, recuperación de contraseñas e integración con Cloudinary.',
    stack: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Express', icon: SiExpress, color: '#000000' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Cloudinary', icon: SiCloudinary, color: '#F4B400' },
    ],
    type: 'Proyecto Profesional',
    github: 'https://github.com/norvisyunior/marketVibe-local',
    demo: 'https://market-vibe-local.vercel.app/',
    featured: true,
    gradient: 'from-orange-500/20 via-amber-500/10 to-yellow-500/20',
    accentColor: '#f59e0b',
    stats: [
      { label: 'Features', value: 'Auth + CRUD' },
      { label: 'Imágenes', value: 'Cloudinary' },
      { label: 'Estado', value: 'En producción' },
    ],
  },
]

export const allSkills = [
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
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
      { name: 'Spring Boot', icon: SiSpring, color: '#6DB33F' },
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
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Electron', icon: SiElectron, color: '#47848F' },
      { name: 'Cloudinary', icon: SiCloudinary, color: '#F4B400' },
      { name: 'Vercel', icon: SiVercel, color: '#000000' },
      { name: 'Render', icon: SiRender, color: '#46E3B7' },
    ],
  },
]
