import IconDownload from '../components/ui/IconDownload'
import IconGitHub from '../components/ui/IconGitHub'
import IconLinkedIn from '../components/ui/IconLinkedIn'
import IconMail from '../components/ui/IconMail'

import { BUTTONS_TYPES } from './variableOfComponents'

export const linksToToggleMenu = [
  {
    title: 'Inicio',
    url: '/',
    icon: null
  },
  {
    title: 'Mi Historia',
    url: '/about-me',
    icon: null
  },
  {
    title: 'Diseño UI',
    url: '/ui-design',
    icon: null
  },
  {
    title: 'Proyectos',
    url: '/projects',
    icon: null
  },
  {
    title: 'Formas de contacto',
    url: '/contact',
    icon: null
  },
  {
    title: 'Curriculum',
    url: '/curriculum',
    type: BUTTONS_TYPES.secondary,
    icon: <IconDownload />
  }
]

export const socialMediaLinks = [
  {
    title: 'GitHub',
    url: 'https://github.com/agustinlozano',
    icon: <IconGitHub />
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/agustin-lozano-blua/',
    icon: <IconLinkedIn />
  }
]

export const contactLinks = [
  {
    title: 'Visitar mi LinkedIn',
    url: 'https://www.linkedin.com/in/agustin-lozano-blua/',
    icon: <IconLinkedIn />
  },
  {
    title: 'Visitar mi GitHub',
    url: 'https://github.com/agustinlozano',
    icon: <IconGitHub />
  },
  {
    title: 'Hablar por mail',
    url: 'mailto:agustinlozanoblua@gmail.com',
    icon: <IconMail />
  }
]