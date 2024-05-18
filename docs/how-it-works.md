---
comments: true
---

# Comment ça marche

## Décomposition du processus

- **Diffusion de l'écran** : Le mini-KVM capture le flux de l'écran de l'ordinateur cible et l'affiche sur l'application de l'ordinateur hôte. Cela permet aux utilisateurs de visualiser et de gérer le système cible directement depuis leur machine hôte.
- **Contrôle du curseur et de la souris** : En déplaçant la souris vers la fenêtre de l'application sur l'ordinateur hôte, les utilisateurs peuvent contrôler le curseur sur l'appareil cible comme s'ils utilisaient un VNC. Cette fonctionnalité permet d'exploiter deux systèmes simultanément sur un seul écran.
- **Saisie au clavier** : Lorsque la fenêtre de l'application est active, toutes les frappes faites sur le clavier de l'ordinateur hôte sont transmises à l'appareil cible, permettant une saisie et une entrée de commande fluides.
- **Conversion du signal HID** : Toutes les entrées clavier et souris au sein de l'application sont converties en signaux de contrôle Human Interface Device (HID), qui sont ensuite envoyés à l'ordinateur cible.
- **Synchronisation** : L'application assure que l'écran et le curseur de l'ordinateur cible sont synchronisés avec l'affichage de l'ordinateur hôte, facilitant une expérience utilisateur unifiée.

## Explorer les détails matériels

- [Openterface_Mini-KVM_Hardware](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware) : Explorez notre conception matérielle complète, les schémas et les composants.

![openterface-mini-kvm-product-with-PCB](/images/product/openterface-mini-kvm-product-with-PCB.jpg)