export interface MarketingUi {
  docLinkBanner: {
    aboutMessage: string;
    homeMessage: string;
    productMessage: string;
    linkLabel: string;
  };
  homeSubscribe: {
    kicker: string;
    heading: string;
    description: string;
    benefitCrowdfunding: string;
    benefitGuides: string;
    benefitUnsubscribe: string;
    submitLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    footnote: string;
  };
  productSubscribe: {
    kicker: string;
    heading: string;
    description: string;
    benefitCrowdfunding: string;
    benefitGuides: string;
    benefitUnsubscribe: string;
    submitLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    footnote: string;
  };
  siteFooter: {
    tagline: string;
    productsHeading: string;
    keymodSeries: string;
    kvmGoSeries: string;
    miniKvm: string;
    accessories: string;
    resourcesHeading: string;
    videos: string;
    faqs: string;
    apps: string;
    support: string;
    newsletterLink: string;
    newsletterTitle: string;
    newsletterDescription: string;
    newsletterSubmit: string;
    newsletterNamePlaceholder: string;
    newsletterEmailPlaceholder: string;
    newsletterFootnote: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
  productLanding: {
    downloadApp: string;
    backers: string;
    theProblem: string;
    theSolution: string;
    hwSoftwareTitle: string;
    hwSoftwareSubtitle: string;
    hardware: string;
    software: string;
    swFallback: string;
    keySpecs: string;
    useCases: string;
    documentation: string;
    ctaTitle: string;
    ctaSubtitle: string;
  };
}

export const ui: MarketingUi = {
  "docLinkBanner": {
    "aboutMessage": "Guides produits, FAQ, tutoriels et téléchargements d’apps sont sur docs.openterface.com.",
    "homeMessage": "Tutoriels, FAQ, téléchargements d’apps et guides produits sont sur docs.openterface.com.",
    "linkLabel": "Ouvrir la documentation ↗",
    "productMessage": "Spécifications détaillées, guides d’installation et FAQ sont sur docs.openterface.com."
  },
  "homeSubscribe": {
    "kicker": "Restez informé",
    "heading": "Recevez en premier les actualités KVM-GO, KeyMod et Mini-KVM",
    "description": "Lancements produits, firmware et astuces IT pratiques — au plus une fois par mois. Pas de spam, uniquement des nouvelles utiles de l’équipe Openterface.",
    "benefitCrowdfunding": "Accès anticipé au crowdfunding et aux précommandes",
    "benefitGuides": "Guides d’installation et notes de version des apps",
    "benefitUnsubscribe": "Désabonnement en un clic à tout moment",
    "submitLabel": "S’abonner aux actualités",
    "namePlaceholder": "Nom (facultatif)",
    "emailPlaceholder": "Adresse e-mail *",
    "footnote": "Au plus un e-mail par mois. Désabonnement à tout moment. Contact : info@openterface.com"
  },
  "siteFooter": {
    "tagline": "Solutions KVM-over-USB ultra-compactes pour les professionnels de l'informatique.",
    "productsHeading": "Produits",
    "keymodSeries": "KeyMod Series",
    "kvmGoSeries": "KVM-GO Series",
    "miniKvm": "Mini-KVM",
    "accessories": "Accessoires",
    "resourcesHeading": "Ressources",
    "videos": "Vidéos",
    "faqs": "FAQ",
    "apps": "Applications",
    "support": "Support",
    "newsletterTitle": "Newsletter",
    "newsletterDescription": "Accès anticipé aux lancements, mises à jour produit et firmware mensuelles, et astuces KVM — au plus un e-mail par mois.",
    "newsletterSubmit": "S'abonner",
    "newsletterNamePlaceholder": "Nom",
    "newsletterEmailPlaceholder": "E-mail *",
    "newsletterFootnote": "Désabonnement à tout moment.",
    "copyright": "Openterface. KVM-over-USB open source.",
    "privacy": "Confidentialité",
    "terms": "Conditions",
    "newsletterLink": "Newsletter"
  },
  "productLanding": {
    "downloadApp": "Télécharger l'app",
    "backers": "Contributeurs",
    "theProblem": "Le problème",
    "theSolution": "La solution",
    "hwSoftwareTitle": "Matériel + Logiciel",
    "hwSoftwareSubtitle": "Les produits Openterface fonctionnent mieux avec nos apps hôtes open source.",
    "hardware": "Matériel",
    "software": "Logiciel",
    "swFallback": "Voir TxA Shop pour les détails de compatibilité des accessoires.",
    "keySpecs": "Spécifications clés",
    "useCases": "Cas d'usage",
    "documentation": "Documentation",
    "ctaTitle": "Prêt à commencer ?",
    "ctaSubtitle": "Commandez le matériel et téléchargez l’app Openterface pour votre plateforme."
  },
  "productSubscribe": {
    "kicker": "Restez informé",
    "heading": "Recevez les lancements et firmware {product}",
    "description": "Soyez informé en premier des précommandes, firmware et conseils de configuration — au plus un e-mail par mois.",
    "benefitCrowdfunding": "Accès anticipé au crowdfunding et aux précommandes",
    "benefitGuides": "Guides d’installation et notes de version des apps",
    "benefitUnsubscribe": "Désabonnement en un clic à tout moment",
    "submitLabel": "S’abonner aux actualités",
    "namePlaceholder": "Nom (facultatif)",
    "emailPlaceholder": "Adresse e-mail *",
    "footnote": "Au plus un e-mail par mois. Désabonnement à tout moment. Contact : info@openterface.com"
  }
};
