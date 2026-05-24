import { legacyPath, newsPath } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Produits',
    href: '#',
    children: [
      { label: 'KeyMod Series', href: '/products/keymod/' },
      { label: 'KVM-GO Series', href: '/products/kvm-go/' },
      { label: 'Mini-KVM', href: '/products/minikvm/' },
      { label: 'uConsole KVM Extension', href: '/products/uconsole-kvm-extension/' },
      { label: 'Accessoires', href: '/products/accessories/' },
    ],
  },
  { label: 'Vidéos', href: '/videos/' },
  { label: 'Cas d\'utilisation', href: '/use-cases/' },
  { label: 'FAQ', href: legacyPath('/faq/'), external: true },
  { label: 'Application', href: legacyPath('/app/overview/'), external: true },
  { label: 'Tutoriel', href: legacyPath('/tutorial/'), external: true },
  { label: 'Support', href: legacyPath('/support/'), external: true },
  { label: 'Actualités', href: newsPath(), external: true },
  { label: 'À propos', href: '/about/' },
];
