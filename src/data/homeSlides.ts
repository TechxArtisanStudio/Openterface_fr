import { siteConfig } from '../config/site';

export interface HomeSlide {
  id: number;
  category: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  images?: string[];
  primaryCta?: {
    label: string;
    href: string;
    external?: boolean;
    analyticsEvent?: string;
    analyticsProduct?: string;
  };
  secondaryCta?: { label: string; href: string; external?: boolean };
  funding?: { amount: string; date: string; backers: string };
  progressSmall: string;
  progressLarge: string;
}

export const homeSlides: HomeSlide[] = [
  {
    id: 1,
    category: 'KeyMod Series',
    headline: 'Transformez votre téléphone en mini clavier',
    description:
      'Un émulateur HID USB + Bluetooth compact qui transforme votre téléphone en clavier et pavé tactile portable. Plug and play, 100% open source. Parfait pour les bornes, les smart TV et les raccourcis de flux de travail rapides.',
    image: 'https://assets2.openterface.com/images/keymod/2in1.webp',
    imageAlt: 'Openterface KeyMod Series',
    images: [
      'https://assets2.openterface.com/images/keymod/2in1.webp',
      'https://assets2.openterface.com/images/keymod/keymod.webp',
      'https://assets2.openterface.com/images/keymod/feature.webp',
    ],
    primaryCta: { label: 'Soutenir MAINTENANT', href: siteConfig.links.keymodCrowdsupply, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'keymod' },
    secondaryCta: { label: 'Voir le produit', href: '/products/keymod/' },
    progressSmall: 'KeyMod Series',
    progressLarge: 'Transformez votre téléphone en mini clavier',
  },
  {
    id: 2,
    category: 'KVM-GO Series',
    headline: 'Le KVM ultra-compact qui tient sur un porte-clés',
    description:
      'Conçu pour s\'accrocher à votre porte-clés et vous sauver la mise en un clin d\'œil, ce gadget KVM-over-USB de nouvelle génération est conçu pour des opérations informatiques rapides sur le terrain.',
    image: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    imageAlt: 'KVM-GO Series',
    images: [
      'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
      'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
    ],
    primaryCta: { label: 'Précommander MAINTENANT', href: siteConfig.links.kvmgoPurchase, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'kvm-go' },
    secondaryCta: { label: 'Voir le produit', href: '/products/kvm-go/' },
    funding: { amount: '101 548 $', date: 'Financé le 30 déc. 2025', backers: '478' },
    progressSmall: 'KVM-GO Series',
    progressLarge: 'Le KVM ultra-compact qui tient sur votre porte-clés',
  },
  {
    id: 3,
    category: 'Mini-KVM Series',
    headline: 'La solution KVM compacte pour les professionnels',
    description:
      'Une solution KVM-over-USB compacte, riche en fonctionnalités et open source qui simplifie votre vie technique pour les tâches informatiques et le dépannage à la volée.',
    image: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    imageAlt: 'Openterface Mini-KVM',
    images: [
      'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
      'https://assets.openterface.com/images/cover/mini-kvm.webp',
    ],
    primaryCta: { label: 'Commander MAINTENANT', href: siteConfig.links.minikvmPurchase, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'minikvm' },
    secondaryCta: { label: 'Voir le produit', href: '/products/minikvm/' },
    funding: { amount: '505 471 $', date: 'Financé le 13 juin 2024', backers: '3 775' },
    progressSmall: 'Mini-KVM Series',
    progressLarge: 'La solution KVM compacte pour les professionnels',
  },
  {
    id: 4,
    category: 'Boutique TxA',
    headline: 'Complétez votre installation avec des accessoires premium',
    description:
      'Explorez notre gamme d\'accessoires essentiels, notamment des adaptateurs vidéo, des câbles haute vitesse et des solutions de stockage. Améliorez votre expérience Openterface avec des accessoires de qualité conçus pour les professionnels.',
    image: 'https://assets.openterface.com/images/cover.webp',
    imageAlt: 'Accessoires Boutique TxA',
    primaryCta: { label: 'Acheter MAINTENANT', href: siteConfig.links.shop, external: true, analyticsEvent: 'shop_click', analyticsProduct: 'accessories' },
    secondaryCta: { label: 'Voir les accessoires', href: '/products/accessories/' },
    progressSmall: 'Boutique TxA',
    progressLarge: 'Complétez votre installation avec des accessoires premium',
  },
];

export const homeSeo = {
  title: 'Openterface | Solutions KVM ultra-compactes pour les professionnels de l\'informatique',
  description:
    'Découvrez Openterface - Solutions KVM-over-USB ultra-compactes, notamment la série KVM-GO (format porte-clés), la série Mini-KVM et l\'extension KVM uConsole.',
  keywords:
    'KVM-over-USB, commutateur KVM, KVM portable, KVM USB, gestion de serveur headless, KVM-GO, Mini-KVM, KeyMod',
};
