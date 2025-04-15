---
title: "Comment se Connecter"
description: "Guide étape par étape pour configurer l'Openterface Mini-KVM. Apprenez à connecter votre ordinateur hôte et votre appareil cible avec des instructions détaillées pour les connexions USB-C, HDMI et périphériques. Inclut les descriptions des interfaces et des conseils importants de configuration."
keywords: "Configuration Mini-KVM, guide de connexion KVM, configuration USB-C KVM, connexion HDMI KVM, guide d'installation KVM, configuration des périphériques, connexion USB, guide d'interface KVM, configuration d'ordinateur sans écran, configuration KVM"
---

# **Comment se Connecter** | Guide de Configuration | Openterface Mini-KVM

## Étapes de Connexion

![to-host](/images/product/to-host.svg#only-light){:style="height:260px"} ![to-host](/images/product/to-host_1.svg#only-dark){:style="height:260px"}
![to-target](/images/product/to-target.svg#only-light){:style="height:260px"} ![to-target](/images/product/to-target_1.svg#only-dark){:style="height:260px"}

Pour configurer votre Mini-KVM, suivez ces étapes dans l'ordre :

1. **Connexion de l'Ordinateur Hôte** (Côté Orange) :
    - Connectez l'ordinateur hôte au mini-KVM à l'aide du câble USB Type-C orange de 1,5 m. Branchez-le dans le port femelle Type-C du côté orange du mini-KVM.

    !!! note "Application Hôte Requise"
        L'ordinateur hôte doit avoir l'application hôte installée. Pour plus d'informations et les liens de téléchargement, veuillez consulter la page [App](/app).

2. **Connexion de l'Appareil Cible** (Côté Noir) :
    - Connectez l'appareil cible au mini-KVM à l'aide du câble USB Type-C noir de 0,3 m. Branchez-le dans le port femelle Type-C du côté noir du mini-KVM.

3. **Connexion de la Sortie Vidéo Cible** (Côté Noir) :
    - Connectez le port de sortie vidéo de l'appareil cible au port femelle HDMI du côté noir du mini-KVM. Utilisez le câble HDMI noir de 0,3 m, ou tout autre câble approprié de source vidéo vers HDMI, comme un câble convertisseur VGA vers HDMI.

    !!! note "Aucune Application Requise pour la Cible"
        Aucune pré-installation ou configuration n'est requise sur l'appareil cible. Tant que l'appareil cible prend en charge les opérations d'interface utilisateur avec sortie vidéo (HDMI, VGA, etc.) et dispose d'un port USB pour recevoir les signaux de contrôle clavier et souris émulés (HID), il peut être utilisé. Ainsi, les plateformes d'appareils cibles prises en charge incluent Windows, macOS, Linux, Android et iOS.

4. **Connexion du Port USB-A 2.0 Commutable** (Optionnel) :
    - Si vous souhaitez connecter un périphérique USB au Port USB-A 2.0 Commutable, il est recommandé de le faire après avoir terminé les trois connexions ci-dessus et vous être assuré que l'application hôte est ouverte.


## Interfaces

![host-side](/images/product/host-htc.svg#only-light){:style="width:360px"}

![target-side](/images/product/target-htc.svg#only-light){:style="width:360px"}

![host-side](/images/product/host-htc_1.svg#only-dark){:style="width:360px"}

![target-side](/images/product/target-htc_1.svg#only-dark){:style="width:360px"}

① ![Type-C to Host](/images/shell-icons/host.svg#only-light){:style="height:15px"} ![Type-C to Host](/images/shell-icons/host_1.svg#only-dark){:style="height:15px"} - **Port USB-C Hôte** (Femelle) : En tant que port de périphérique USB, se connecte à l'ordinateur Hôte pour le transfert de données via le hub USB intégré

② ![Type-C to Target](/images/shell-icons/target.svg#only-light){:style="height:18px"} ![Type-C to Target](/images/shell-icons/target_1.svg#only-dark){:style="height:18px"} - **Port USB-C Cible** (Femelle) : En tant que port de périphérique USB, se connecte à l'ordinateur Hôte pour émuler la sortie clavier et souris HID via le hub USB intégré

③ ![HDMI Input](/images/shell-icons/input.svg#only-light){:style="height:18px"} ![HDMI Input](/images/shell-icons/input_1.svg#only-dark){:style="height:18px"} - **Port d'Entrée HDMI** (Femelle) : Entrée source HDMI depuis l'ordinateur Cible

④ ![USB-A Port](/images/shell-icons/switchable-usb.svg#only-light){:style="height:26px"} ![USB-A Port](/images/shell-icons/switchable-usb_1.svg#only-dark){:style="height:26px"} - **Port USB-A 2.0 Commutable** (Femelle) : En tant que port hôte USB, utilisé soit par l'ordinateur hôte soit par l'ordinateur cible à un moment donné, mais pas simultanément. Veuillez consulter le [Guide de Commutation du Port USB](../usb-switch) pour plus d'informations.

!!! warning "Limitations de puissance USB"
    La puissance fournie par le port USB dépend de la carte mère de l'Hôte. Il n'est pas recommandé de connecter des périphériques USB nécessitant beaucoup de puissance. Typiquement, la consommation d'énergie ne doit pas dépasser 1,5W. La connexion d'appareils à haute puissance peut entraîner un fonctionnement instable ou des dommages potentiels.

!!! warning "Le Port USB-A Dispose d'un Mécanisme de Verrouillage Ferme"
    Le port USB-A inclut un mécanisme de verrouillage qui nécessite une force supplémentaire lors du branchement ou du retrait des périphériques. C'est intentionnel et assure une connexion sécurisée. **Évitez d'utiliser des périphériques USB très petits** (comme des clés USB ultra-compactes), car ils peuvent être difficiles à saisir et à retirer, pouvant potentiellement entraîner des dommages.

!!! warning "Un Hub USB Supplémentaire Nécessite une Alimentation Externe et Peut Affecter la Compatibilité"
    Le mini-KVM inclut déjà un hub USB intégré qui se connecte à la fois à l'ordinateur hôte et à l'ordinateur cible. Si vous connectez un hub USB externe supplémentaire au port USB-A, tous les périphériques USB qui y sont connectés fonctionneront à un niveau plus profond dans l'arborescence des périphériques USB. Certains ordinateurs peuvent avoir des limitations sur la profondeur de l'arborescence USB, ce qui peut causer des problèmes de compatibilité ou empêcher certains périphériques de fonctionner correctement.

    De plus, assurez-vous que tout hub USB connecté est alimenté en externe. Les hubs non alimentés peuvent causer une instabilité ou un dysfonctionnement de l'ensemble de la configuration mini-KVM.

⑤ ![Toggle Switch](/images/shell-icons/toggle-h-t.svg#only-light){:style="height:20px"} ![Toggle Switch](/images/shell-icons/toggle-h-t_1.svg#only-dark){:style="height:20px"} - **Interrupteur à Bascule** : Pour basculer la connexion du port USB-A 2.0 entre l'ordinateur hôte et l'ordinateur cible

⑥ ![Extension Pins](/images/shell-icons/pins.svg#only-light){:style="height:15px"} ![Extension Pins](/images/shell-icons/pins_1.svg#only-dark){:style="height:15px"} - **Broches d'Extension** : Cachées par défaut et accessibles uniquement en remplaçant le couvercle supérieur par un capuchon alternatif. Pour plus d'informations, veuillez consulter [Broches d'Extension](../extension-pins) pour l'utilisation par les développeurs.