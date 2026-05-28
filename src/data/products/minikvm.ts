import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * Mini-KVM marketing payload — reference template for Phase 1D–1G.
 * Sourced from docs/products/minikvm/ (index, features, reviews).
 */
export const minikvmProduct: Product = {
  slug: 'minikvm',
  title: "Openterface Mini-KVM",
  slogan: "Transformez votre ordinateur portable en console KVM",
  subtitle: "Simplifiez votre vie technique.",
  status: 'shipping',
  description:
    "Une solution KVM-over-USB plug-and-play. Contrôlez un ordinateur distant sans écran depuis votre ordinateur portable via USB et HDMI — pas de périphériques supplémentaires ni de réseau requis.",
  seoDescription:
    "Openterface Mini-KVM : KVM-over-USB plug-and-play avec HDMI. Contrôlez des ordinateurs sans écran depuis votre ordinateur portable sans réseau.",
  keywords:
    "Mini-KVM, KVM over USB, contrôle headless, KVM HDMI, KVM plug and play",
  heroImage: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    'https://assets.openterface.com/images/cover/mini-kvm.webp',
  ],
  buyLabel: "Commander MAINTENANT",
  buyHref: siteConfig.links.minikvmPurchase,
  funding: { amount: "505 471 $", date: "Financé le 13 juin 2024", backers: "3 775" },
  painPoints: [
    "Transporter un écran et un clavier pour chaque réparation de serveur n'est pas pratique",
    "Le KVM réseau nécessite une configuration et une connectivité",
    "Les professionnels de l'informatique ont besoin d'un KVM de poche fiable au quotidien",
  ],
  solutions: [
    "Utilisez votre ordinateur portable existant comme console KVM",
    "Capture HDMI + HID USB dans un seul appareil compact",
    "Éprouvé par plus de 5 000 membres de la communauté depuis 2024",
  ],
  hwFeatures: [
    { title: "Capture HDMI", description: "Vidéo complète de la machine cible vers votre ordinateur portable hôte." },
    { title: "Commutateur USB", description: "Basculez les périphériques USB entre l'hôte et la cible." },
    { title: "Broches d'extension", description: "Options de bidouillage matériel et d'intégration personnalisée." },
  ],
  swFeatures: [
    { title: "Applications Qt / macOS / Android", description: "Applications natives pour chaque plateforme hôte majeure." },
    { title: "Open source", description: "Écosystème matériel et logiciel entièrement ouvert." },
    { title: "Communauté active", description: "Discord, GitHub et mises à jour régulières du firmware." },
  ],
  specs: [
    { label: "Entrée vidéo", value: "HDMI" },
    { label: "USB", value: "USB-C avec port commutable" },
    { label: "Statut", value: "Expédition en cours — Crowd Supply" },
  ],
  useCases: [
    "Gestion de serveurs personnels",
    "Contrôle côte à côte de stations de travail de développeurs",
    "Dépannage sur banc d'essai informatique",
  ],
  useCaseCards: [
    {
      title: 'Data center & server rooms',
      description: 'Replace rolling crash carts with the laptop you already carry.',
      href: docsPath('/minikvm/reviews/'),
    },
    {
      title: 'Homelab & SBC setup',
      description: 'Configure headless Raspberry Pi, NAS, and lab nodes from one laptop.',
    },
    {
      title: 'BIOS & firmware access',
      description: 'Reach boot menus and recovery screens with no network KVM required.',
      href: docsPath('/minikvm/features/'),
    },
    {
      title: 'Developer bench',
      description: 'Side-by-side host/target control without a second monitor.',
    },
    {
      title: 'Kiosk & embedded systems',
      description: 'Field configuration for displays, signage, and appliances.',
    },
    {
      title: 'MSP field toolkit',
      description: 'Quick headless access on customer sites — fast, offline-capable, pocket-sized.',
      href: docsPath('/minikvm/reviews/'),
    },
  ],
  useCasesDocsHref: docsPath('/minikvm/'),
  specsDocsHref: docsPath('/minikvm/features/'),
  docsOverviewHref: docsPath('/minikvm/'),
  videoProductSlug: 'minikvm',
  videoSectionTitle: 'Community reviews & demos',
  socialProofTitle: 'What reviewers & testers say',
  socialProof: [
    {
      quote:
        'Promises to be a low cost, feature packed way to use a laptop as a monitor, keyboard and mouse for accessing servers and other computers.',
      author: 'Cameron Gray — YouTube review',
      href: 'https://www.youtube.com/watch?v=xAEQpWyfY-c',
    },
    {
      quote:
        'A simple gadget concept that has a permanent home on my test bench, turning my laptop into my display, keyboard, and mouse.',
      author: "apalrd's adventures",
      href: 'https://www.youtube.com/watch?v=ZZ5P6MnBcHw',
    },
    {
      quote:
        'Plug-and-play and network-independent KVM-over-USB that establishes a direct HDMI and USB connection between host and target.',
      author: 'Jean-Luc Aufranc — CNX Software',
      href: 'https://www.cnx-software.com/2024/05/09/openterface-mini-kvm-affordable-kvm-over-usb-device/',
    },
    {
      quote:
        "In datacenters it's cool that this totally replaces a crash cart using the laptop you'd already have with you!",
      author: 'samw — tinytoolk.it',
      href: 'https://tinytoolk.it/tools/openterface-kvm/',
    },
    {
      quote:
        'Latency is definitely better than using VNC… Overall a very solid device, it has been a very worthy addition to my daily carry toolkit.',
      author: '65Diamond — r/msp',
      href: 'https://www.reddit.com/r/msp/comments/1j2dlde/comment/mju6uru/',
    },
    {
      quote:
        'An extremely useful tool… The hardware is more than solid and the toolbox also contains all the accessories you need.',
      author: 'Florian Bernd — beta tester',
      href: 'https://blog.flobernd.de/2024/06/openterface-beta-test/',
    },
  ],
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest Mini-KVM updates',
  latestNewsSubtitle: 'Firmware releases, app updates, and community news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Fonctionnalités", href: docsPath("/product/minikvm/features/") },
    { label: "Commutateur USB", href: docsPath("/product/minikvm/usb-switch/") },
    { label: "Support technique", href: docsPath("/product/minikvm/support/") },
    { label: "FAQ", href: docsPath("/product/minikvm/faq/") },
    { label: "Télécharger l'application", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/minikvm/",
};
