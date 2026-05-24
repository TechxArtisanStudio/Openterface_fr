export const siteConfig = {
  name: 'Openterface',
  locale: 'fr',
  url: 'https://fr.openterface.com',
  legacyUrl: 'https://openterface.com',
  description:
    'Solutions KVM-over-USB ultra-compactes pour les professionnels de l\'informatique — KVM-GO, Mini-KVM, KeyMod et uConsole KVM Extension.',
  ogImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
  accent: '#ff6e42',
  links: {
    minikvmPurchase: 'https://www.crowdsupply.com/techxartisan/openterface-mini-kvm',
    kvmgoPurchase: 'https://www.crowdsupply.com/techxartisan/openterface-kvm-go',
    keymodCrowdsupply: 'https://www.crowdsupply.com/techxartisan/openterface-keymod',
    shop: 'https://shop.techxartisan.com/',
    appOverview: 'https://openterface.com/app/overview/',
    subscribe: 'https://subscribe.openterface.com/api/subscribe/',
  },
  analytics: {
    enabled: import.meta.env.PROD,
    google: {
      provider: 'google' as const,
      measurementId: 'G-EKZEH6QYWT',
      linkerDomains: [
        'openterface.com',
        'en.openterface.com',
        'de.openterface.com',
        'es.openterface.com',
        'fr.openterface.com',
        'it.openterface.com',
        'jp.openterface.com',
        'kr.openterface.com',
        'pt.openterface.com',
        'ro.openterface.com',
        'cn.openterface.com',
      ],
    },
    ahrefs: {
      dataKey: 'b3G5nUND8OglcZwfjfwixQ',
    },
    consent: {
      storageKey: 'openterface-cookie-consent',
      title: 'Consentement aux cookies',
      description:
        'Nous utilisons des cookies pour améliorer la qualité du contenu, analyser l\'efficacité du site et ses besoins. En consentant, vous nous aidez à améliorer notre site web. Merci !',
      acceptLabel: 'Accepter',
      rejectLabel: 'Refuser',
      cookieLabel: 'Cookie',
    },
  },
} as const;

/** Build a legacy openterface.com URL for doc-heavy pages not yet migrated. */
export function legacyPath(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.legacyUrl}${normalized}`;
}
