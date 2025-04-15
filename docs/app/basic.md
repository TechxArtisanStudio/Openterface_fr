---
description: "Guide complet des contrôles de base d'Openterface Mini-KVM : modes de souris, saisie clavier, accès BIOS, support audio/vidéo et commutation USB. Compatible avec plusieurs systèmes d'exploitation et appareils, prenant en charge l'entrée vidéo jusqu'à 4K@30Hz."
keywords: "Contrôles Mini-KVM, modes de contrôle souris, saisie clavier, accès BIOS, transmission audio, affichage vidéo, commutation USB, compatibilité des appareils, configuration KVM, contrôle matériel, support 4K, signaux HID, contrôle d'appareil cible, logiciel hôte, entrée HDMI"
---

# Contrôle de base pour les applications hôtes

![use-case-pc-angled-view](/images/product/use-case-pc-angled-view.jpg){ width=600 }

## 💻 Compatibilité

- **Logiciel hôte** : Installez notre [application hôte](/app) pour macOS, Windows et Linux pour contrôler vos appareils cibles. Assurez-vous que votre système hôte est compatible avec la version correspondante de l'application.
- **Compatibilité des appareils cibles** : Aucune pré-installation ou configuration n'est requise sur l'appareil cible. Tant que l'appareil cible prend en charge les opérations d'interface utilisateur avec sortie vidéo (par exemple, HDMI, VGA) et dispose d'un port USB pour recevoir les signaux de contrôle clavier et souris émulés (HID), il peut être utilisé. Les plateformes cibles prises en charge incluent Windows, macOS, Linux, Android et iOS.

## 🖱 Contrôle de la souris

- **Mode absolu** : Le curseur de la souris de la cible est directement mappé à une position spécifique sur l'écran de l'hôte via notre application. Cela signifie que partout où vous déplacez la souris de l'hôte dans notre application, la souris de la cible suivra le même mouvement. Notez qu'il peut y avoir un léger délai dans les mouvements du curseur. Vous pouvez choisir de masquer ou d'afficher le curseur de la souris de l'hôte lorsqu'il est sur notre application.

- **Mode relatif** : Le mouvement de la souris de la cible est relatif à la position actuelle de la souris de l'hôte. Cela signifie que déplacer la souris de l'hôte déplacera le curseur de la cible d'une certaine distance dans la même direction, sans point de départ ou d'arrivée fixe. Vous pouvez quitter ce mode relatif en utilisant un raccourci spécifique.

## ⌨️ Clavier

Lorsque l'application est active, vous pouvez taper directement n'importe quoi, et ces frappes seront transmises à l'ordinateur cible.

## ⚙️ Accès au BIOS

- **Accès au BIOS** : Utilisez notre application pour accéder au BIOS de vos appareils cibles. Cela vous permet de contrôler et de configurer les paramètres directement depuis le BIOS.

??? tip "Touches pour accéder au BIOS selon les différentes cartes mères"

    - F2 : Dell, Lenovo, ASUS, Acer, Toshiba, Samsung, Sony
    - F1 : Lenovo
    - Del : ASUS, Acer, Gigabyte, MSI
    - F10 : HP
    - Bouton Assist : Sony
    - Touche Option (⌥) : Apple (pour accéder au gestionnaire de démarrage)

## 🔊 Son

- **Transmission audio** : L'audio de l'ordinateur cible est transmis via le port d'entrée HDMI du mini-KVM. Lors de l'utilisation de notre application, le son de l'ordinateur cible sera diffusé par l'ordinateur hôte, garantissant que vous entendiez tout de manière transparente.

## 🎥 Vidéo

- **Affichage vidéo** : Notre application vous permet de visualiser l'écran de l'ordinateur cible de manière transparente. Elle prend en charge les résolutions vidéo jusqu'à 1920x1080 à 30Hz pour l'affichage dans l'application. L'entrée vidéo maximale prise en charge est de 3840x2160 à 30Hz via HDMI. De plus, avec l'utilisation d'un adaptateur, elle peut également prendre en charge les sources d'entrée vidéo VGA, Micro HDMI, DVI et autres.

## 🔄 Port USB commutable

- **Utilisation du port USB** : Le mini-KVM dispose d'un port USB-A 2.0 commutable qui peut être basculé entre les ordinateurs hôte et cible, mais pas les deux simultanément.
- **Méthodes de commutation** : 
    - Commutateur matériel : Un interrupteur physique sur l'appareil
    - Commutateur logiciel : Un bouton dans l'application hôte
- **Logique de commutation** : Pour des informations plus détaillées sur la logique de fonctionnement du port USB commutable, y compris l'interaction entre les commutateurs matériels et logiciels, la configuration initiale, les états opérationnels et les transitions d'état, veuillez consulter la [documentation sur le commutateur USB](/usb-switch).

!!! warning "Important"
    - N'oubliez pas d'éjecter les lecteurs USB connectés avant de changer la connexion du port.
    - Le port USB a des limitations de puissance. Ne connectez pas d'appareils nécessitant beaucoup d'énergie, car cela pourrait entraîner un fonctionnement instable ou des dommages potentiels.
