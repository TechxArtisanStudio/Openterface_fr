import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KVM-GO marketing payload — cloned from Mini-KVM template (Phase 1D).
 * Sourced from docs/products/kvmgo/ (index, features, reviews, use-cases).
 */
export const kvmgoProduct: Product = {
  slug: 'kvm-go',
  title: "Openterface KVM-GO Series",
  slogan: "Le KVM ultra-compact qui tient sur votre porte-clés",
  subtitle: "Pour les moments techniques critiques — Branchez. Contrôlez. Partez.",
  status: 'pre-order',
  description:
    "La solution KVM-over-USB de nouvelle génération avec connecteurs vidéo intégrés (HDMI, DisplayPort ou VGA). Ultra-compact, de la taille d'un porte-clés, et conçu pour des opérations informatiques rapides dans les centres de données et les salles de serveurs.",
  seoDescription:
    "Contrôlez des ordinateurs sans écran avec Openterface KVM-Go. HDMI/DP/VGA intégré, format porte-clés, KVM-over-USB 4K pour les professionnels de l'informatique.",
  keywords:
    "KVM-Go, KVM over USB, KVM ultra-compact, KVM porte-clés, KVM 4K, contrôle headless",
  heroImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
  ],
  buyLabel: "Précommander MAINTENANT",
  buyHref: siteConfig.links.kvmgoPurchase,
  funding: { amount: "101 548 $", date: "Financé le 30 déc. 2025", backers: "478" },
  painPoints: [
    "L'équipement KVM traditionnel est encombrant et nécessite des câbles vidéo séparés",
    "L'accès aux serveurs d'urgence sur le terrain nécessite un outil de poche",
    "Le dépannage headless sans accès au réseau est lent",
  ],
  solutions: [
    "Les connecteurs vidéo intégrés éliminent les câbles supplémentaires",
    "Le format porte-clés est toujours à portée de main",
    "KVM-over-USB — aucun réseau ou pilote requis sur la cible",
  ],
  hwFeatures: [
    { title: "Vidéo intégrée", description: "Modèles HDMI, DisplayPort ou VGA — pas de câbles mobiles." },
    { title: "Format porte-clés", description: "Le plus petit KVM-over-USB de la gamme Openterface." },
    { title: "Support 4K", description: "Capture haute résolution pour les écrans modernes." },
  ],
  swFeatures: [
    { title: "Application Openterface Qt", description: "Contrôle hôte multiplateforme pour Windows, macOS et Linux." },
    { title: "Commutateur MicroSD", description: "Stockage commutable pour les images de systèmes d'exploitation et les outils portables." },
    { title: "Pile open source", description: "Firmware et applications hôtes pilotés par la communauté." },
  ],
  specs: [
    { label: "Vidéo", value: "HDMI / DP / VGA (selon le modèle)" },
    { label: "Résolution", value: "Jusqu'à 4K" },
    { label: "Connexion", value: "USB-C KVM-over-USB" },
  ],
  useCases: [
    "Visites de centres de données",
    "Configuration d'appareils headless",
    "Informatique de terrain et sauvetage de serveurs personnels",
  ],
  useCaseCards: [
    {
      title: 'Data center & server rooms',
      description: 'Replace rolling crash carts with a keychain KVM that plugs straight in.',
      href: docsPath('/products/kvmgo/use-cases/'),
    },
    {
      title: 'EDC field toolkit',
      description: 'Always in your bag — built-in connector means one less cable to forget.',
      href: docsPath('/products/kvmgo/use-cases/'),
    },
    {
      title: 'Headless homelab rescue',
      description: 'Configure NAS, SBC, and lab nodes without a spare monitor.',
    },
    {
      title: 'Legacy VGA systems',
      description: 'VGA model targets older racks and industrial gear (in development).',
      href: docsPath('/products/kvmgo/features/'),
    },
    {
      title: 'BIOS & firmware access',
      description: 'Boot menus and recovery screens with no network dependency.',
      href: docsPath('/products/kvmgo/features/'),
    },
    {
      title: 'MicroSD OS installs',
      description: 'Switchable storage for imaging and portable recovery tools.',
      href: docsPath('/products/kvmgo/microsd-switch/'),
    },
  ],
  useCasesDocsHref: docsPath('/products/kvmgo/use-cases/'),
  specsDocsHref: docsPath('/products/kvmgo/features/'),
  docsOverviewHref: docsPath('/products/kvmgo/'),
  videoProductSlug: 'kvm-go',
  videoSectionTitle: 'Community reviews & demos',
  socialProofTitle: 'What press & early users say',
  socialProof: [
    {
      quote:
        'Small enough to fit on a keychain, Openterface KVM-GO is a tiny, open-source hardware KVM-over-USB gadget with HDMI, DisplayPort, or VGA connectors.',
      author: 'Jean-Luc Aufranc — CNX Software',
      href: 'https://www.cnx-software.com/2026/01/05/openterface-kvm-go-an-ultra-compact-kvm-over-usb-solution-with-hdmi-dp-or-vga-video-input/',
    },
    {
      quote:
        "Openterface's KVM-GO is a pocket-sized, open source tool for hardware-level access to headless computers.",
      author: 'Hackster News',
      href: 'https://www.hackster.io/news/a-kvm-that-fits-on-your-keychain-e2adb39f7a2b',
    },
    {
      quote:
        'Following the nearly half-million dollar crowdfunding success of the Mini-KVM, Openterface is back with the KVM-GO — a tiny KVM that reduces cable clutter.',
      author: 'Notebookcheck',
      href: 'https://www.notebookcheck.net/KVM-GO-Openterface-is-back-with-a-more-compact-and-refined-KVM.1196402.0.html',
    },
    {
      quote:
        'Keychain-friendly KVM-over-USB gadget comes in a smaller form factor but with upgraded 4K60-capable internals.',
      author: 'Hackster News',
      href: 'https://www.hackster.io/news/techxartisan-is-back-with-a-smaller-yet-more-powerful-openterface-the-openterface-kvm-go-26174b2d11c0',
    },
  ],
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest KVM-GO updates',
  latestNewsSubtitle: 'Production milestones, app releases, and community news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Fonctionnalités", href: docsPath("/product/kvm-go/features/") },
    { label: "Démarrage rapide bêta", href: docsPath("/product/kvm-go/beta-quick-start/") },
    { label: "Comment se connecter", href: docsPath("/product/kvm-go/how-to-connect/") },
    { label: "FAQ", href: docsPath("/product/kvm-go/faq/") },
    { label: "Télécharger l'application", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/kvm-go/",
};
