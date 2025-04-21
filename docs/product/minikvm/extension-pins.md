---
title: "Broches d'Extension"
description: "Explorez le potentiel des broches d'extension du Mini-KVM Openterface pour le développement de matériel personnalisé et les projets open-source."
keywords: "broches d'extension Mini-KVM, développement personnalisé, modification matérielle, KVM open-source"
---

# **Broches d'Extension** | Mode Développeur | Openterface Mini-KVM

![mini-kvm-pins-port](https://assets.openterface.com/images/product/mini-kvm-pins-port.png){:style="height:360px"}
![pin-cap](https://assets.openterface.com/images/product/part/pin-cap.webp){:style="height:300px"}

Le Mini-KVM Openterface dispose de broches d'extension pour le développement avancé et l'expérimentation avec le [Logiciel Open Source](/app). Ces broches ne sont pas exposées dans la configuration standard du boîtier.

## Comment Accéder aux Broches

1. Démontez l'appareil.
2. Remplacez le couvercle original du boîtier par un capuchon spécialisé pour broches d'extension.
3. Téléchargez le [modèle 3D](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware/tree/main/models) du capuchon pour broches d'extension.
4. Consultez notre [dépôt GitHub Hardware](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware).

![change-cap](https://assets.openterface.com/images/product/change-cap.svg#only-light){:style="height:300px"}
![change-cap](https://assets.openterface.com/images/product/change-cap_1.svg#only-dark){:style="height:300px"}

!!! warning "Garantie Annulée"
    Le retrait du boîtier d'origine peut annuler la garantie du produit. Toutes les modifications ou démontages sont effectués aux risques de l'utilisateur.

!!! note "Fonctionnalités Expérimentales"
    Les fonctionnalités développées à l'aide de ces broches sont expérimentales et n'ont pas été entièrement testées. Openterface n'est pas responsable des dommages, blessures ou dysfonctionnements résultant des modifications, de l'exposition des broches d'extension ou d'autres altérations de l'appareil.

## Configuration des Broches

![target-side](https://assets.openterface.com/images/product/extension-pins-1.svg#only-light){:style="height:200px"}
![host-side](https://assets.openterface.com/images/product/extension-pins-2.svg#only-light){:style="height:200px"}
![target-side](https://assets.openterface.com/images/product/extension-pins-1_1.svg#only-dark){:style="height:200px"}
![host-side](https://assets.openterface.com/images/product/extension-pins-2_1.svg#only-dark){:style="height:200px"}

Les broches d'extension fournissent les connexions suivantes :

1. Alimentation USB 5V pour les composants externes
2. Data positive vers le hub USB de l'hôte
3. Data negative vers le hub USB de l'hôte
4. Data positive vers le hub USB de la cible
5. Data negative vers le hub USB de la cible
6. Masse

!!! danger "Les Connexions Incorrectes Causent des Dommages"
    La confusion entre VCC et GND peut causer de graves dommages à l'appareil et aux composants connectés. Vérifiez toujours deux fois les connexions des broches avant de mettre l'appareil sous tension.

## Capuchon pour Broches d'Extension

![pin-cap](https://assets.openterface.com/images/product/part/pin-cap.webp){:style="height:360px"}

Ce capuchon pour broches d'extension imprimé en 3D remplace le capuchon d'origine sur le Mini-KVM Openterface, permettant aux utilisateurs avancés d'exposer et d'accéder aux broches d'extension pour le développement personnalisé. Vous pouvez télécharger les fichiers du modèle 3D depuis notre dépôt GitHub et imprimer le capuchon vous-même.

- **Utilisation**: Permet l'accès aux broches d'extension pour le développement matériel avancé.
- **Téléchargement**: [Fichiers du Modèle 3D](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware/tree/main/models)

## Participez au Développement

Au fur et à mesure que nous continuons à développer et à expérimenter, nous mettrons à jour cette section avec plus d'informations sur les capacités de ces broches et leurs utilisations créatives. Votre créativité et votre expertise peuvent aider à repousser les limites du possible avec le Mini-KVM Openterface. Participez :

1. **Partagez Vos Idées**: Vous avez un concept intéressant pour utiliser ces broches ? Nous aimerions l'entendre !
2. **Contribuez avec des Projets DIY**: Si vous avez créé quelque chose d'intéressant, envisagez de le partager avec notre communauté [Discord Openterface](/discord).
3. **Rejoignez la Discussion**: Connectez-vous avec d'autres développeurs et enthousiastes pour échanger des idées et collaborer.

Construisons et innovons ensemble !