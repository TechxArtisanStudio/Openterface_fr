import { docsPath, siteConfig } from '../config/site';

export interface ProductDocLink {
  label: string;
  href: string;
}

export interface Product {
  slug: string;
  title: string;
  slogan: string;
  subtitle: string;
  description: string;
  seoDescription: string;
  keywords: string;
  heroImage: string;
  heroImages: string[];
  buyLabel: string;
  buyHref: string;
  painPoints: string[];
  solutions: string[];
  hwFeatures: { title: string; description: string }[];
  swFeatures: { title: string; description: string }[];
  specs: { label: string; value: string }[];
  useCases: string[];
  funding?: { amount: string; date: string; backers: string };
  docLinks: ProductDocLink[];
  legacyBase: string;
}

export const products: Record<string, Product> = {
  keymod: {
    slug: 'keymod',
    title: 'Openterface KeyMod Series',
    slogan: 'Transformez votre téléphone en clavier intelligent',
    subtitle: 'Contrôle programmable du clavier et de la souris pour la technologie, les professionnels et les jeux.',
    description:
      'Un émulateur HID USB + Bluetooth programmable et compact qui transforme votre téléphone en clavier et pavé tactile portable. Basé sur le cœur HID éprouvé de l\'Openterface Mini-KVM — plug and play, 100% open source.',
    seoDescription:
      'La série KeyMod transforme votre téléphone en clavier et pavé tactile portable. Émulateur HID USB + Bluetooth, open source, parfait pour les bornes et les raccourcis de flux de travail.',
    keywords: 'KeyMod, émulateur HID, clavier pour téléphone, clavier Bluetooth, clavier USB, open source',
    heroImage: 'https://assets2.openterface.com/images/keymod/2in1.webp',
    heroImages: [
      'https://assets2.openterface.com/images/keymod/2in1.webp',
      'https://assets2.openterface.com/images/keymod/keymod.webp',
      'https://assets2.openterface.com/images/keymod/feature.webp',
    ],
    buyLabel: 'Soutenir MAINTENANT',
    buyHref: siteConfig.links.keymodCrowdsupply,
    painPoints: [
      'Transporter un clavier complet pour une borne ou une installation TV n\'est pas pratique',
      'Les raccourcis de flux de travail nécessitent des macros programmables en déplacement',
      'De nombreux outils HID sont propriétaires avec une personnalisation limitée',
    ],
    solutions: [
      'Utilisez votre téléphone comme clavier et pavé tactile portable',
      'HID USB et Bluetooth dans un seul appareil compact',
      '100% open source avec le support de l\'application Openterface',
    ],
    hwFeatures: [
      { title: 'Format compact', description: 'Tient dans votre poche pour le travail sur le terrain et les déplacements.' },
      { title: 'USB + Bluetooth', description: 'Double connectivité pour une compatibilité maximale avec les appareils.' },
      { title: 'Matériel libre', description: 'Conception transparente basée sur le cœur HID éprouvé d\'Openterface.' },
    ],
    swFeatures: [
      { title: 'Application KeyMod', description: 'Configurez les macros, les dispositions et les profils de manette depuis votre téléphone.' },
      { title: 'Multiplateforme', description: 'Fonctionne avec Android, iPadOS et les hôtes de bureau via les applications Openterface.' },
      { title: 'Open source', description: 'Code complet disponible sur GitHub pour les contributions de la communauté.' },
    ],
    specs: [
      { label: 'Connectivité', value: 'USB-C + Bluetooth LE' },
      { label: 'Modes HID', value: 'Clavier, souris, manette de jeu' },
      { label: 'Licence', value: 'Matériel et logiciel open source' },
    ],
    useCases: ['Saisie sur Smart TV et bornes', 'Macros de flux de travail mobiles', 'Configurations de jeu et d\'accessibilité'],
    docLinks: [
      { label: 'Fonctionnalités', href: docsPath('/product/keymod/features/') },
      { label: 'Contenu de la boîte', href: docsPath('/product/keymod/whats-in-the-box/') },
      { label: 'Comment se connecter', href: docsPath('/product/keymod/how-to-connect/') },
      { label: 'FAQ', href: docsPath('/product/keymod/faq/') },
      { label: 'Télécharger l\'application KeyMod', href: docsPath('/app/overview/') },
    ],
    legacyBase: '/product/keymod/',
  },
  'kvm-go': {
    slug: 'kvm-go',
    title: 'Openterface KVM-GO Series',
    slogan: 'Le KVM ultra-compact qui tient sur votre porte-clés',
    subtitle: 'Pour les moments techniques critiques — Branchez. Contrôlez. Partez.',
    description:
      'La solution KVM-over-USB de nouvelle génération avec connecteurs vidéo intégrés (HDMI, DisplayPort ou VGA). Ultra-compact, de la taille d\'un porte-clés, et conçu pour des opérations informatiques rapides dans les centres de données et les salles de serveurs.',
    seoDescription:
      'Contrôlez des ordinateurs sans écran avec Openterface KVM-Go. HDMI/DP/VGA intégré, format porte-clés, KVM-over-USB 4K pour les professionnels de l\'informatique.',
    keywords: 'KVM-Go, KVM over USB, KVM ultra-compact, KVM porte-clés, KVM 4K, contrôle headless',
    heroImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    heroImages: [
      'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
      'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
    ],
    buyLabel: 'Précommander MAINTENANT',
    buyHref: siteConfig.links.kvmgoPurchase,
    funding: { amount: '101 548 $', date: 'Financé le 30 déc. 2025', backers: '478' },
    painPoints: [
      'L\'équipement KVM traditionnel est encombrant et nécessite des câbles vidéo séparés',
      'L\'accès aux serveurs d\'urgence sur le terrain nécessite un outil de poche',
      'Le dépannage headless sans accès au réseau est lent',
    ],
    solutions: [
      'Les connecteurs vidéo intégrés éliminent les câbles supplémentaires',
      'Le format porte-clés est toujours à portée de main',
      'KVM-over-USB — aucun réseau ou pilote requis sur la cible',
    ],
    hwFeatures: [
      { title: 'Vidéo intégrée', description: 'Modèles HDMI, DisplayPort ou VGA — pas de câbles mobiles.' },
      { title: 'Format porte-clés', description: 'Le plus petit KVM-over-USB de la gamme Openterface.' },
      { title: 'Support 4K', description: 'Capture haute résolution pour les écrans modernes.' },
    ],
    swFeatures: [
      { title: 'Application Openterface Qt', description: 'Contrôle hôte multiplateforme pour Windows, macOS et Linux.' },
      { title: 'Commutateur MicroSD', description: 'Stockage commutable pour les images de systèmes d\'exploitation et les outils portables.' },
      { title: 'Pile open source', description: 'Firmware et applications hôtes pilotés par la communauté.' },
    ],
    specs: [
      { label: 'Vidéo', value: 'HDMI / DP / VGA (selon le modèle)' },
      { label: 'Résolution', value: 'Jusqu\'à 4K' },
      { label: 'Connexion', value: 'USB-C KVM-over-USB' },
    ],
    useCases: ['Visites de centres de données', 'Configuration d\'appareils headless', 'Informatique de terrain et sauvetage de serveurs personnels'],
    docLinks: [
      { label: 'Fonctionnalités', href: docsPath('/product/kvm-go/features/') },
      { label: 'Démarrage rapide bêta', href: docsPath('/product/kvm-go/beta-quick-start/') },
      { label: 'Comment se connecter', href: docsPath('/product/kvm-go/how-to-connect/') },
      { label: 'FAQ', href: docsPath('/product/kvm-go/faq/') },
      { label: 'Télécharger l\'application', href: docsPath('/app/overview/') },
    ],
    legacyBase: '/product/kvm-go/',
  },
  minikvm: {
    slug: 'minikvm',
    title: 'Openterface Mini-KVM',
    slogan: 'Transformez votre ordinateur portable en console KVM',
    subtitle: 'Simplifiez votre vie technique.',
    description:
      'Une solution KVM-over-USB plug-and-play. Contrôlez un ordinateur distant sans écran depuis votre ordinateur portable via USB et HDMI — pas de périphériques supplémentaires ni de réseau requis.',
    seoDescription:
      'Openterface Mini-KVM : KVM-over-USB plug-and-play avec HDMI. Contrôlez des ordinateurs sans écran depuis votre ordinateur portable sans réseau.',
    keywords: 'Mini-KVM, KVM over USB, contrôle headless, KVM HDMI, KVM plug and play',
    heroImage: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    heroImages: [
      'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
      'https://assets.openterface.com/images/cover/mini-kvm.webp',
    ],
    buyLabel: 'Commander MAINTENANT',
    buyHref: siteConfig.links.minikvmPurchase,
    funding: { amount: '505 471 $', date: 'Financé le 13 juin 2024', backers: '3 775' },
    painPoints: [
      'Transporter un écran et un clavier pour chaque réparation de serveur n\'est pas pratique',
      'Le KVM réseau nécessite une configuration et une connectivité',
      'Les professionnels de l\'informatique ont besoin d\'un KVM de poche fiable au quotidien',
    ],
    solutions: [
      'Utilisez votre ordinateur portable existant comme console KVM',
      'Capture HDMI + HID USB dans un seul appareil compact',
      'Éprouvé par plus de 5 000 membres de la communauté depuis 2024',
    ],
    hwFeatures: [
      { title: 'Capture HDMI', description: 'Vidéo complète de la machine cible vers votre ordinateur portable hôte.' },
      { title: 'Commutateur USB', description: 'Basculez les périphériques USB entre l\'hôte et la cible.' },
      { title: 'Broches d\'extension', description: 'Options de bidouillage matériel et d\'intégration personnalisée.' },
    ],
    swFeatures: [
      { title: 'Applications Qt / macOS / Android', description: 'Applications natives pour chaque plateforme hôte majeure.' },
      { title: 'Open source', description: 'Écosystème matériel et logiciel entièrement ouvert.' },
      { title: 'Communauté active', description: 'Discord, GitHub et mises à jour régulières du firmware.' },
    ],
    specs: [
      { label: 'Entrée vidéo', value: 'HDMI' },
      { label: 'USB', value: 'USB-C avec port commutable' },
      { label: 'Statut', value: 'Expédition en cours — Crowd Supply' },
    ],
    useCases: ['Gestion de serveurs personnels', 'Contrôle côte à côte de stations de travail de développeurs', 'Dépannage sur banc d\'essai informatique'],
    docLinks: [
      { label: 'Fonctionnalités', href: docsPath('/product/minikvm/features/') },
      { label: 'Commutateur USB', href: docsPath('/product/minikvm/usb-switch/') },
      { label: 'Support technique', href: docsPath('/product/minikvm/support/') },
      { label: 'FAQ', href: docsPath('/product/minikvm/faq/') },
      { label: 'Télécharger l\'application', href: docsPath('/app/overview/') },
    ],
    legacyBase: '/product/minikvm/',
  },
  'uconsole-kvm-extension': {
    slug: 'uconsole-kvm-extension',
    title: 'uConsole KVM Extension',
    slogan: 'La puissance du KVM pour votre uConsole',
    subtitle: 'Transformez l\'uConsole portable en un terminal KVM complet.',
    description:
      'Une extension matérielle qui ajoute la capacité KVM-over-USB à la Clockwork uConsole. Parfait pour le travail informatique portable avec un clavier et un écran intégrés.',
    seoDescription:
      'L\'extension KVM uConsole ajoute le KVM-over-USB à l\'ordinateur portable Clockwork uConsole.',
    keywords: 'uConsole, extension KVM, KVM portable, Clockwork uConsole',
    heroImage: 'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    heroImages: [
      'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    ],
    buyLabel: 'En savoir plus',
    buyHref: docsPath('/product/uconsole-kvm-extension/'),
    painPoints: [
      'Les consoles portables manquent de KVM intégré pour les cibles sans écran',
      'Les techniciens de terrain veulent un seul appareil pour tout faire',
    ],
    solutions: [
      'Carte d\'extension native au format uConsole',
      'Pile KVM Openterface complète sur un appareil de poche',
    ],
    hwFeatures: [
      { title: 'Natif uConsole', description: 'Conçu spécifiquement pour la Clockwork uConsole.' },
      { title: 'PCB compact', description: 'S\'installe à l\'intérieur du châssis de l\'uConsole.' },
    ],
    swFeatures: [
      { title: 'Applications Openterface', description: 'Le même logiciel de confiance que Mini-KVM et KVM-GO.' },
      { title: 'Guides de configuration', description: 'Documentation d\'installation matérielle et logicielle étape par étape.' },
    ],
    specs: [
      { label: 'Compatibilité', value: 'Clockwork uConsole' },
      { label: 'Certification', value: 'Certifié OSHWA' },
    ],
    useCases: ['Outil de centre de données portable', 'Maker et serveurs personnels en déplacement'],
    docLinks: [
      { label: 'Installation matérielle', href: docsPath('/product/uconsole-kvm-extension/hardware-installation/') },
      { label: 'Configuration logicielle', href: docsPath('/product/uconsole-kvm-extension/software-setup/') },
      { label: 'Comment se connecter', href: docsPath('/product/uconsole-kvm-extension/connect-to-target/') },
      { label: 'FAQ', href: docsPath('/product/uconsole-kvm-extension/faq/') },
    ],
    legacyBase: '/product/uconsole-kvm-extension/',
  },
  accessories: {
    slug: 'accessories',
    title: 'Accessoires Openterface',
    slogan: 'Complétez votre installation',
    subtitle: 'Câbles, adaptateurs et sacoches de transport premium pour les professionnels.',
    description:
      'Accessoires essentiels comprenant des adaptateurs vidéo, des câbles haute vitesse et des solutions de stockage. Améliorez votre expérience Openterface avec du matériel de qualité provenant de la boutique TxA.',
    seoDescription: 'Accessoires Openterface — câbles, adaptateurs, sacoches de transport et connecteurs vidéo.',
    keywords: 'accessoires KVM, câble HDMI, câble USB-C, sacoche de transport',
    heroImage: 'https://assets.openterface.com/images/cover.webp',
    heroImages: ['https://assets.openterface.com/images/cover.webp'],
    buyLabel: 'Acheter MAINTENANT',
    buyHref: siteConfig.links.shop,
    painPoints: ['L\'absence du bon câble sur le terrain retarde chaque réparation'],
    solutions: ['Accessoires sélectionnés testés avec les produits Openterface'],
    hwFeatures: [
      { title: 'Adaptateurs vidéo', description: 'HDMI, VGA et connecteurs spécialisés.' },
      { title: 'Câbles haute vitesse', description: 'Câbles USB-C et Type-A conçus pour les charges de travail KVM.' },
      { title: 'Sacoche de transport', description: 'Organisez votre kit Openterface complet.' },
    ],
    swFeatures: [],
    specs: [],
    useCases: ['Organisation du kit de terrain', 'Conversion de format vidéo', 'Câbles de secours pour les sacs de dépannage informatique'],
    docLinks: [
      { label: 'Toutes les références', href: docsPath('/product/accessories/') },
      { label: 'Boutique TxA', href: siteConfig.links.shop },
    ],
    legacyBase: '/product/accessories/',
  },
};

export const productSlugs = Object.keys(products);
