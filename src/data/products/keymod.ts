import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KeyMod marketing payload — Phase 1E flat landing at /keymod/.
 * Sourced from docs/products/keymod/ (index, features, use-cases).
 */
export const keymodProduct: Product = {
  slug: 'keymod',
  title: "Openterface KeyMod Series",
  slogan: "Transformez votre téléphone en clavier intelligent",
  subtitle: "Contrôle programmable du clavier et de la souris pour la technologie, les professionnels et les jeux.",
  status: 'pre-launch',
  description:
    "Un émulateur HID USB + Bluetooth programmable et compact qui transforme votre téléphone en clavier et pavé tactile portable. Basé sur le cœur HID éprouvé de l'Openterface Mini-KVM — plug and play, 100% open source.",
  seoDescription:
    "La série KeyMod transforme votre téléphone en clavier et pavé tactile portable. Émulateur HID USB + Bluetooth, open source, parfait pour les bornes et les raccourcis de flux de travail.",
  keywords:
    "KeyMod, émulateur HID, clavier pour téléphone, clavier Bluetooth, clavier USB, open source",
  heroImage: 'https://assets2.openterface.com/images/keymod/2in1.webp',
  heroImages: [
    'https://assets2.openterface.com/images/keymod/2in1.webp',
    'https://assets2.openterface.com/images/keymod/keymod.webp',
    'https://assets2.openterface.com/images/keymod/feature.webp',
  ],
  buyLabel: "Soutenir MAINTENANT",
  buyHref: siteConfig.links.keymodCrowdsupply,
  painPoints: [
    "Transporter un clavier complet pour une borne ou une installation TV n'est pas pratique",
    "Les raccourcis de flux de travail nécessitent des macros programmables en déplacement",
    "De nombreux outils HID sont propriétaires avec une personnalisation limitée",
  ],
  solutions: [
    "Utilisez votre téléphone comme clavier et pavé tactile portable",
    "HID USB et Bluetooth dans un seul appareil compact",
    "100% open source avec le support de l'application Openterface",
  ],
  hwFeatures: [
    { title: "Format compact", description: "Tient dans votre poche pour le travail sur le terrain et les déplacements." },
    { title: "USB + Bluetooth", description: "Double connectivité pour une compatibilité maximale avec les appareils." },
    { title: "Matériel libre", description: "Conception transparente basée sur le cœur HID éprouvé d'Openterface." },
  ],
  swFeatures: [
    { title: "Application KeyMod", description: "Configurez les macros, les dispositions et les profils de manette depuis votre téléphone." },
    { title: "Multiplateforme", description: "Fonctionne avec Android, iPadOS et les hôtes de bureau via les applications Openterface." },
    { title: "Open source", description: "Code complet disponible sur GitHub pour les contributions de la communauté." },
  ],
  specs: [
    { label: "Connectivité", value: "USB-C + Bluetooth LE" },
    { label: "Modes HID", value: "Clavier, souris, manette de jeu" },
    { label: "Licence", value: "Matériel et logiciel open source" },
  ],
  useCases: [
    "Saisie sur Smart TV et bornes",
    "Macros de flux de travail mobiles",
    "Configurations de jeu et d'accessibilité",
  ],
  useCaseCards: [
    {
      title: 'Outdoor display computers',
      description: 'Configure and troubleshoot outdoor PCs without carrying a keyboard.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'LED signage players',
      description: 'On-site updates to signage controllers — phone as full keyboard.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Kiosks',
      description: 'Debug, configure, or maintain kiosks with immediate HID access.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Smart TVs & set-top boxes',
      description: 'Full keyboard and trackpad when the remote is not enough.',
    },
    {
      title: 'Quick workflow shortcuts',
      description: 'Developers and IT staff — occasional input without extra gear.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Portable & plug-and-play',
      description: 'Your phone is always with you; KeyMod stays compact in your bag.',
    },
  ],
  useCasesDocsHref: docsPath('/keymod/use-cases/'),
  specsDocsHref: docsPath('/keymod/features/'),
  docsOverviewHref: docsPath('/keymod/'),
  videoProductSlug: 'keymod',
  videoSectionTitle: 'Community reviews & demos',
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest KeyMod updates',
  latestNewsSubtitle: 'Beta releases, app updates, and pre-launch news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Fonctionnalités", href: docsPath("/product/keymod/features/") },
    { label: "Contenu de la boîte", href: docsPath("/product/keymod/whats-in-the-box/") },
    { label: "Comment se connecter", href: docsPath("/product/keymod/how-to-connect/") },
    { label: "FAQ", href: docsPath("/product/keymod/faq/") },
    { label: "Télécharger l'application KeyMod", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/keymod/",
};
