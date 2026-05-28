import { docsPath, newsPath, siteConfig } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: "Produits",
    href: '/products/',
    children: [
      { label: "Tous les produits", href: '/products/' },
      { label: 'KeyMod Series', href: '/keymod/' },
      { label: 'KVM-GO Series', href: '/kvmgo/' },
      { label: 'Mini-KVM', href: '/minikvm/' },
      { label: 'uConsole KVM Extension', href: '/kvmext/' },
      { label: "Accessoires", href: '/accessories/' },
    ],
  },
  {
    label: "Apps",
    href: '/app/',
    children: [
      { label: "Toutes les apps", href: '/app/' },
      { label: "Contrôle KVM", href: '/kvm/' },
      { label: 'KeyCmd', href: '/keycmd/' },
    ],
  },
  { label: "Médias", href: '/videos/' },
  { label: "À propos", href: '/about/' },
  { label: "Documentation", href: docsPath(), external: true },
  { label: "Actualités", href: newsPath(), external: true },
  { label: "Boutique", href: siteConfig.links.shop, external: true },
];
