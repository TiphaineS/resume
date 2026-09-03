import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Tiphaine Sola',
    // photo : auto-détectée depuis public/images/ — ne pas renseigner ici
    photoBackEmoji: '🎮',
    title: {
      fr: 'UI/UX Game Designer',
      en: 'UI/UX Game Designer',
    },
    subtitle: {
      fr: 'Designeuse UI/UX de jeux vidéo (5+ ans), je conçois et améliore l’expérience joueurs grâce à des interfaces immersives et accessibles. J'interviens sur tout le cycle du projet : du wireframe à la conception jusqu’à l’intégration.  Quand je ne suis pas devant mon écran, je peins des figurines, je parcours les bibliothèques ou je m'amuse à résoudre des Rubik's Cubes !',
      en: 'Over 5 years of experience in the video game industry',
    },
    location: 'Marseille, France',
  },
  seo: {
    title: 'Tiphaine Sola — UI/UX Game Designer',
    description: 'CV interactif de Tiphaine Sola, UI/UX Game Designer spécialisée dans l\'ergonomie des menus et l\'immersion.',
  },
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },
  contact: [
    { type: 'website', label: 'tsola1.wixsite.com', href: 'https://tsola1.wixsite.com' },
    { type: 'email', label: 'tsola@artfx.fr' },
    { type: 'phone', label: '+33 6 10 30 68 89' },
    { type: 'location', label: 'Marseille, France' },
  ],
  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Français', en: 'French' }, level: { fr: 'Natif', en: 'Native' } },
        { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'Bilingue', en: 'Bilingual' } },
      ],
    },
    {
      title: { fr: 'Design & UI', en: 'Design & UI' },
      type: 'badges',
      items: [
        { name: 'Figma' },
        { name: 'Photoshop' },
        { name: 'Illustrator' },
        { name: 'After Effects' },
      ],
    },
    {
      title: { fr: 'Moteurs & Outils', en: 'Engines & Tools' },
      type: 'badges',
      items: [
        { name: 'Unity' },
        { name: 'Trello' },
        { name: 'Jira' },
      ],
    },
    {
      title: { fr: 'Compétences', en: 'Skills' },
      type: 'text',
      items: [
        { name: { fr: 'Wireframes, Design System, Intégration d\'interfaces, Ergonomie des menus', en: 'Wireframes, Design System, UI Integration, Menu Ergonomics' } },
      ],
    },
  ],
  experiences: [
    {
      id: 'cross-the-ages',
      company: { fr: 'Cross the Ages', en: 'Cross the Ages' },
      role: { fr: 'UI/UX Designer', en: 'UI/UX Designer' },
      type: { fr: 'CDI', en: 'Full-time' },
      period: { fr: 'Depuis Mars 2024 — Marseille', en: 'Since March 2024 — Marseille' },
      description: {
        fr: 'Direction de l\'intégralité de l\'UI/UX.',
        en: 'Management of all UI/UX aspects.',
      },
      techs: ['Figma', 'Unity'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Studio de jeu vidéo à Marseille.',
          en: 'Video game studio in Marseille.',
        },
        tasks: {
          fr: [
            'Responsable de la conception, de la qualité et de la production dans les délais impartis des éléments d\'interface utilisateur pour le jeu.',
          ],
          en: [
            'Responsible for the design, quality, and timely production of user interface elements for the game.',
          ],
        },
        env: {
          fr: 'Figma / Unity',
          en: 'Figma / Unity',
        },
      },
    },
    {
      id: 'artefacts-studio',
      company: { fr: 'Artefacts Studio', en: 'Artefacts Studio' },
      role: { fr: 'UI/UX Designer — Le Maître du Donjon de Naheulbeuk', en: 'UI/UX Designer — The Dungeon of Naheulbeuk' },
      type: { fr: 'CDI / Projet', en: 'Full-time / Project' },
      period: { fr: '2022 - 2023 — Lyon', en: '2022 - 2023 — Lyon' },
      description: {
        fr: 'Réalisation de wireframes et production d\'assets graphiques pour le jeu.',
        en: 'Creation of wireframes and production of graphic assets for the game.',
      },
      techs: ['Unity', 'Figma', 'Photoshop'],
      details: {
        context: {
          fr: 'Studio de développement à Lyon.',
          en: 'Development studio in Lyon.',
        },
        tasks: {
          fr: [
            'Réalisation de wireframes et production des assets graphiques jusqu\'à leur intégration sur le moteur Unity',
            'Optimisation d\'assets et support multi-input (KBM / Pad)',
          ],
          en: [
            'Creation of wireframes and graphic assets up to integration into the Unity engine',
            'Asset optimization and multi-input support (KBM / Pad)',
          ],
        },
        env: {
          fr: 'Unity / Figma / Photoshop',
          en: 'Unity / Figma / Photoshop',
        },
      },
    },
    {
      id: 'smart-tales',
      company: { fr: 'Smart-Tales', en: 'Smart-Tales' },
      role: { fr: 'Stagiaire 2D Artiste & UI Designer / Freelance', en: '2D Artist & UI Design Intern / Freelance' },
      type: { fr: 'Stage & Freelance', en: 'Internship & Freelance' },
      period: { fr: '2020 - 2022 — Nîmes & Freelance', en: '2020 - 2022 — Nîmes & Freelance' },
      description: {
        fr: 'Amélioration des parcours utilisateurs et prestations graphiques variées pour des studios indés.',
        en: 'Improvement of user journeys and various graphic services for indie studios.',
      },
      techs: ['Photoshop', 'Illustrator', 'Twitch'],
      details: {
        context: {
          fr: 'Studio à Nîmes et activités en freelance.',
          en: 'Studio in Nîmes and freelance activities.',
        },
        tasks: {
          fr: [
            'Stagiaire 2D Artiste et UI design sur My Universe: My Baby : amélioration des parcours utilisateurs, du polissage visuel et de l\'accessibilité des interfaces',
            'Freelance & Graphiste : diverses prestations pour 2-3 studios indés (Branding, Overlays, Alertes, Emotes, Badges, etc.)',
          ],
          en: [
            '2D Artist and UI design intern on My Universe: My Baby: improved user journeys, visual polishing, and interface accessibility',
            'Freelance & Graphic Designer: various services for 2-3 indie studios (Branding, Overlays, Alerts, Emotes, Badges, etc.)',
          ],
        },
        env: {
          fr: 'Photoshop / Illustrator / Twitch',
          en: 'Photoshop / Illustrator / Twitch',
        },
      },
    },
  ],
  education: [
    {
      school: { fr: 'Artfx, Montpellier', en: 'Artfx, Montpellier' },
      degree: { fr: 'Master Game Art', en: 'Master\'s Degree in Game Art' },
      period: '2016 - 2018',
    },
    {
      school: { fr: 'La Grande Tourrache, La Garde', en: 'La Grande Tourrache, La Garde' },
      degree: { fr: 'BTS Design Graphique', en: 'BTS in Graphic Design' },
      period: '2011 - 2014',
    },
  ],
  projects: [],
  hobbies: [
    {
      title: { fr: 'Peinture sur figurine', en: 'Miniature painting' },
    },
    {
      title: { fr: 'Livres', en: 'Books' },
    },
    {
      title: { fr: 'Snowboard', en: 'Snowboard' },
    },
  ],
  theme: { preset: 'minimal' },
  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES & OUTILS', en: 'SKILLS & TOOLS' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES', en: 'WORK EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      projects: { fr: 'PROJETS', en: 'PROJECTS' },
      hobbies: { fr: 'LOISIRS', en: 'HOBBIES' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main tasks:' },
      moreTasks: { fr: 'autres missions...', en: 'more tasks...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Env. technique :', en: 'Tech stack:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails', en: 'Click on experiences to view more details' },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
}
