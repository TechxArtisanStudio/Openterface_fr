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
  }
};
