---
date: 2024-05-09
authors:
  - CNXSOFT
categories:
  - Revue technique
---

### Revue de Produit par CNX Software : Openterface Mini-KVM - Un Dispositif KVM-over-USB Abordable (Financement Participatif)

Ce post est reformulé à partir de l'article original de l'auteur [Openterface Mini-KVM is an affordable KVM-over-USB device (Crowdfunding), 9 mai 2024 par Jean-Luc Aufranc (CNXSOFT)](https://www.cnx-software.com/2024/05/09/openterface-mini-kvm-affordable-kvm-over-usb-device/)

<!-- more -->

Le **Openterface Mini-KVM** est un dispositif matériel KVM-over-USB compact et open-source avec des entrées HDMI et audio qui se connecte à l'ordinateur hôte via un port USB-C.

Au fil des ans, nous avons vu plusieurs solutions abordables de [KVM-over-IP](https://www.cnx-software.com/2023/04/18/blikvm-open-source-kvm-over-ip-raspberry-pi-cm4-raspberry-pi-hat-pcie-board-allwinner-h616/) basées sur des ordinateurs monocartes. Cependant, le **Openterface Mini-KVM** se distingue comme un dispositif KVM-over-USB moins cher, plug-and-play, indépendant du réseau, qui établit une connexion directe HDMI et USB entre l'ordinateur hôte et l'appareil cible. Il prend en charge de nombreuses fonctionnalités similaires à celles des solutions KVM-over-IP, à l'exception de certaines fonctionnalités comme le support ATX que l'on trouve dans le [PiKVM v4 Plus](https://docs.pikvm.org/v4/) ou le [Pi-Cast KVM](https://www.cnx-software.com/2023/12/24/pi-cast-portable-kvm-switch-raspberry-pi-cm4/) avec une carte d'extension permettant d'éteindre l'appareil cible depuis l'appareil hôte.

![Openinterface-Mini-KVM-1](https://www.cnx-software.com/wp-content/uploads/2024/05/Openinterface-Mini-KVM-1.jpg)

## Spécifications du Mini-KVM (Modèle LIG03D01) :
- **Méthode de Contrôle** : KVM-over-USB
- **Capture Vidéo** : Jusqu'à 1920×1080 @ 30 Hz avec une latence de moins de 140 ms via HDMI ou VGA (ce dernier nécessite un câble VGA vers HDMI supplémentaire)
- **Capture Audio** : Via HDMI
- **Transfert de Texte** : Le texte peut être envoyé de l'hôte à l'appareil cible en utilisant une sortie clavier émulée, utile pour copier des noms d'utilisateur, mots de passe ou extraits de code
- **Port USB** : Port USB 2.0 Type-A commuté vers l'hôte ou l'appareil cible pour le transfert de fichiers depuis/vers une clé USB ou le partage d'autres appareils USB
- **Accès BIOS** : Accès direct au BIOS de l'appareil cible pour les mises à jour du firmware et la gestion du démarrage
- **Alimentation** : Via USB-C depuis l'ordinateur hôte
- **Dimensions** : 61 x 53 x 13.5 mm
- **Poids** : 48 grammes

![KVM-over-USB-Raspberry-Pi-target-laptop-guest.webp](https://www.cnx-software.com/wp-content/uploads/2024/05/KVM-over-USB-Raspberry-Pi-target-laptop-guest.webp)

L'application hôte sera bientôt disponible pour **macOS, Windows, Linux et Android**. Vous pouvez suivre le développement de chaque application et accéder aux fichiers de conception matérielle sur [GitHub](https://github.com/TechxArtisanStudio) dans les dépôts suivants (actuellement vides) :
- **Openterface_MacOS** – Applications hôtes pour MacOS
- **Openterface_QT** – Applications hôtes pour Windows et Linux
- **Openterface_Android** – Applications hôtes pour Android
- **Openterface_Mini-KVM_Hardware** – Conception matérielle, schémas et composants

La société (TECHxARTISAN) affirme que la solution KVM-over-USB peut être utile pour :
- Les professionnels de l'informatique dépannant des serveurs
- Les techniciens réparant des distributeurs automatiques, VLT et kiosques
- Les développeurs gérant des appareils de calcul en périphérie
- Les passionnés de technologie expérimentant avec des ordinateurs monocartes
- Les professionnels nécessitant des opérations locales sécurisées dans une ségrégation réseau, comme ceux gérant des actifs cryptographiques
- Toute personne ayant besoin de workflows intégrés fréquemment entre ordinateurs personnels et de travail

Il semble particulièrement utile pour accéder à du matériel sans écran (headless) avec un ordinateur portable sans avoir besoin d'écrans, claviers et souris supplémentaires.

![Mini-KVM-vs-StarTech-Crash-Cart-NOTECONS02-KVM-over-USB](https://www.cnx-software.com/wp-content/uploads/2024/05/Mini-KVM-vs-StarTech-Crash-Cart-NOTECONS02-KVM-over-USB.webp)

Le kit Mini-KVM est considérablement moins cher que le dispositif KVM-over-USB StarTech Crash Cart NOTECONS02, qui prend en charge l'entrée VGA et [se vend environ 400 $](https://amzn.to/4boOmXw), ainsi que les solutions KVM-over-IP, bien que ce ne soit pas exactement [l'option la moins chère](https://www.cnx-software.com/2023/04/18/blikvm-open-source-kvm-over-ip-raspberry-pi-cm4-raspberry-pi-hat-pcie-board-allwinner-h616/) dans ce tableau comparatif...

La société vient de lancer le Mini-KVM [sur Crowd Supply](https://www.crowdsupply.com/techxartisan/openterface-mini-kvm) avec un objectif de 12 000 $ déjà dépassé. Il y a deux récompenses principales disponibles :

- **79 $** : Openterface Mini-KVM avec Guide de Démarrage Rapide
- **99 $** : Openterface Mini-KVM Toolkit avec les mêmes articles que la récompense à 79 $, plus un câble HDMI mâle-mâle de 30 cm, un câble USB-C mâle vers USB-A mâle de 30 cm avec un adaptateur USB-A femelle vers USB-C mâle, un câble USB-C mâle-mâle de 1,5 m et un sac à outils.

De plus, il y a un convertisseur VGA + audio vers HDMI, qui pourrait être utile pour les anciens systèmes de serveurs ou les systèmes qui ne disposent que d'un port VGA. Les frais de livraison ajoutent 8 $ pour les États-Unis et 18 $ pour le reste du monde. Les contributeurs devraient s'attendre à recevoir leurs récompenses d'ici la fin septembre 2024 si tout se passe comme prévu. Plus de détails peuvent également être trouvés sur le [site du projet](http://openterface.com/).

<iframe width="560" height="315" src="https://www.youtube.com/embed/6OWaVIRXCaw?si=KpzsXY0ET8KnG8qT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
