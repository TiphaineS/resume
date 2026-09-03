import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: "Tiphaine Sola",
    photoBackEmoji: "🎮",
    title: {
      fr: "UI / UX Game Designer",
    },
    subtitle: {
      fr: "5+ ans d'expérience",
    },
    location: "France",
  },
  seo: {
    title: "Tiphaine Sola — UI/UX Game Designer",
    description: "CV interactif de Tiphaine Sola, UI/UX Game Designer spécialisée dans la création d'interfaces immersives et accessibles pour le jeu vidéo.",
  },
  languages: {
    default: "fr",
    available: ["fr"],
    labels: { fr: "FR" },
  },
  contact: [
    { type: "website", label: "Portfolio", href: "https://tsola1.wixsite.com/" },
    { type: "email", label: "tsola@artfx.fr" },
    { type: "phone", label: "+33 6 10 30 68 89" },
  ],
  skills: [
    {
      title: { fr: "Langues" },
      type: "languages",
      items: [
        { name: { fr: "Français" }, level: { fr: "Natif" } },
        { name: { fr: "Anglais" }, level: { fr: "Professionnel (B2)" } },
      ],
    },
    {
      title: { fr: "Design & UI/UX" },
      type: "badges",
      items: [
        { name: "Figma" },
        { name: "Photoshop" },
        { name: "Illustrator" },
        { name: "After Effects" },
      ],
    },
    {
      title: { fr: "Moteurs & Intégration" },
      type: "badges",
      items: [
        { name: "Unity" },
      ],
    },
    {
      title: { fr: "Gestion & Suivi" },
      type: "badges",
      items: [
        { name: "Jira" },
        { name: "Trello" },
      ],
    },
    {
      title: { fr: "Spécialités" },
      type: "text",
      items: [
        { name: { fr: "Wireframing, Ergonomie, Design Systems, Polissage visuel, Accessibilité, Support multi-input (KBM/Pad)" } },
      ],
    },
  ],
  experiences: [
    {
      id: "cross-the-ages",
      company: { fr: "Cross the Ages" },
      role: { fr: "Lead UI/UX Designer" },
      type: { fr: "CDI" },
      period: { fr: "Mars 2024 - Présent" },
      description: {
        fr: "Direction de l'intégralité de l'UI/UX sur le jeu Arise (Marseille).",
      },
      techs: ["Figma", "Unity", "Jira"],
      isHighlighted: true,
      details: {
        context: {
          fr: "Supervision de la conception et de la livraison des interfaces du jeu dans le respect des délais.",
        },
        tasks: {
          fr: [
            "Direction de la conception ergonomique et visuelle de l'ensemble des interfaces",
            "Garantie de la qualité finale et du respect des contraintes de production",
            "Collaboration étroite avec les équipes de développement pour l'intégration",
          ],
        },
        env: {
          fr: "Figma / Unity / Jira",
        },
      },
    },
    {
      id: "artefacts-studio",
      company: { fr: "Artefacts Studio" },
      role: { fr: "UI/UX Designer" },
      type: { fr: "CDD" },
      period: { fr: "2022 - 2023" },
      description: {
        fr: "Conception et intégration des interfaces pour Le Maître du Donjon de Naheulbeuk (Lyon).",
      },
      techs: ["Figma", "Unity", "Photoshop", "Illustrator"],
      context: {
        fr: "UI/UX Designer",
},
        tasks: {
          fr: [
            "Réalisation de wireframes et production des assets graphiques",
            "Intégration directe des éléments d'interface sur le moteur Unity",
            "Optimisation des assets et prise en charge du support multi-input (Clavier/Souris & Manette)",
          ],
        },
        env: {
          fr: "Unity / Figma / Photoshop / Illustrator",
        },
      },
    {
      id: "smart-tales-freelance",
      company: { fr: "Smart-Tales & Freelance" },
      role: { fr: "UI Designer & 2D Artist" },
      type: { fr: "Freelance / Stage" },
      period: { fr: "2020 - 2022" },
      description: {
        fr: "Projets de jeu vidéo (My Universe: My Baby) à Nîmes et prestations graphiques pour studios indépendants.",
      },
      techs: ["Photoshop", "Illustrator", "Figma"],
      context: {
  fr: "UI Designer",
},
        tasks: {
          fr: [
            "Amélioration des parcours utilisateurs, polissage visuel et accessibilité des interfaces",
            "Prestations graphiques sur mesure pour 2 à 3 studios indés",
            "Création de charte graphique et d'assets Twitch (Branding, Overlays, Alertes, Emotes, Badges)",
          ],
        },
        env: {
          fr: "Photoshop / Illustrator / Figma",
        },
      },
    },
  ],
  education: [
    {
      school: { fr: "Artfx Montpellier" },
      degree: { fr: "Master Game Art" },
      period: "2016 - 2018",
    },
    {
      school: { fr: "La Grande Tourrache (La Garde)" },
      degree: { fr: "BTS Design Graphique" },
      period: "2011 - 2014",
    },
  ],
  hobbies: [
    {
      title: { fr: "Peinture sur figurines" },
    },
    {
      title: { fr: "Lecture & Bibliothèques" },
    },
    {
      title: { fr: "Rubik's Cube" },
    },
  ],
  theme: { preset: "slate" },
  labels: {
    sections: {
      contact: { fr: "CONTACT" },
      skills: { fr: "COMPÉTENCES & OUTILS" },
      experience: { fr: "EXPÉRIENCES PROFESSIONNELLES" },
      education: { fr: "FORMATION" },
      projects: { fr: "PROJETS" },
      hobbies: { fr: "LOISIRS" },
    },
    experience: {
      mainTasks: { fr: "Missions principales :" },
      moreTasks: { fr: "autres missions..." },
      training: { fr: "Formations :" },
      techEnv: { fr: "Env. technique :" },
      technologies: { fr: "Technologies" },
    },
    actions: {
      clickHint: { fr: "Cliquez sur les expériences pour voir plus de détails" },
      switchTheme: { fr: "Changer le thème" },
      downloadPdf: { fr: "Télécharger le PDF" },
    },
  },
}
