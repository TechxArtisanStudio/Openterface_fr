import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

const KVMEXT_SHOP =
  'https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole';

/**
 * KVM Extension (uConsole) marketing payload — Phase 1F flat landing at /kvmext/.
 * Sourced from docs/products/kvmext/ (index, features).
 */
export const kvmextProduct: Product = {
  slug: 'uconsole-kvm-extension',
  title: "uConsole KVM Extension",
  slogan: "La puissance du KVM pour votre uConsole",
  subtitle: "Transformez l'uConsole portable en un terminal KVM complet.",
  status: 'oshwa',
  description:
    "Une extension matérielle qui ajoute la capacité KVM-over-USB à la Clockwork uConsole. Parfait pour le travail informatique portable avec un clavier et un écran intégrés.",
  seoDescription:
    "L'extension KVM uConsole ajoute le KVM-over-USB à l'ordinateur portable Clockwork uConsole.",
  keywords:
    "uConsole, extension KVM, KVM portable, Clockwork uConsole",
  heroImage:
    'https://assets.openterface.com/images/cover/uconsole.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/uconsole.webp',
    'https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension.webp',
  ],
  buyLabel: "En savoir plus",
  buyHref: KVMEXT_SHOP,
  painPoints: [
    "Les consoles portables manquent de KVM intégré pour les cibles sans écran",
    "Les techniciens de terrain veulent un seul appareil pour tout faire",
  ],
  solutions: [
    "Carte d'extension native au format uConsole",
    "Pile KVM Openterface complète sur un appareil de poche",
  ],
  hwFeatures: [
    { title: "Natif uConsole", description: "Conçu spécifiquement pour la Clockwork uConsole." },
    { title: "PCB compact", description: "S'installe à l'intérieur du châssis de l'uConsole." },
  ],
  swFeatures: [
    { title: "Applications Openterface", description: "Le même logiciel de confiance que Mini-KVM et KVM-GO." },
    { title: "Guides de configuration", description: "Documentation d'installation matérielle et logicielle étape par étape." },
  ],
  specs: [
    { label: "Compatibilité", value: "Clockwork uConsole" },
    { label: "Certification", value: "Certifié OSHWA" },
  ],
  useCases: [
    "Outil de centre de données portable",
    "Maker et serveurs personnels en déplacement",
  ],
  useCaseCards: [
    {
      title: 'Portable datacenter tool',
      description: 'Walk racks with your uConsole — one device for display, keyboard, and KVM.',
      href: docsPath('/products/kvmext/'),
    },
    {
      title: 'Maker & homelab on the go',
      description: 'Configure headless SBCs, NAS nodes, and lab gear from a pocketable console.',
      href: docsPath('/products/kvmext/features/'),
    },
    {
      title: 'Field IT & MSP visits',
      description: 'BIOS access and quick fixes without hauling a crash cart.',
    },
    {
      title: 'Network-free troubleshooting',
      description: 'When the target has no IP — HDMI + HID still works.',
      href: docsPath('/products/kvmext/connect-to-target/'),
    },
  ],
  useCasesDocsHref: docsPath('/products/kvmext/'),
  specsDocsHref: docsPath('/products/kvmext/features/'),
  docsOverviewHref: docsPath('/products/kvmext/'),
  videoProductSlug: 'uconsole-kvm-extension',
  videoSectionTitle: 'Installation & community demos',
  latestNewsHref: `${siteConfig.links.news}/products/kvmext/2025-08-28-oshwa-certification/`,
  latestNewsTitle: 'OSHWA certification achieved',
  latestNewsSubtitle: 'Official Open Source Hardware Association certification for the uConsole KVM Extension.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Installation matérielle", href: docsPath("/product/uconsole-kvm-extension/hardware-installation/") },
    { label: "Configuration logicielle", href: docsPath("/product/uconsole-kvm-extension/software-setup/") },
    { label: "Comment se connecter", href: docsPath("/product/uconsole-kvm-extension/connect-to-target/") },
    { label: "FAQ", href: docsPath("/product/uconsole-kvm-extension/faq/") },
  ],
  legacyBase: "/products/uconsole-kvm-extension/",
};
