# Comment ça marche

## Décomposition du processus

- **Diffusion d'écran** : Le mini-KVM capture le flux d'écran de l'ordinateur cible et l'affiche sur l'application de l'ordinateur hôte. Cela permet aux utilisateurs de visualiser et de gérer le système cible directement depuis leur machine hôte.
- **Contrôle du curseur et de la souris** : En déplaçant la souris vers la fenêtre de l'application sur l'ordinateur hôte, les utilisateurs peuvent contrôler le curseur sur l'appareil cible comme s'ils utilisaient un VNC. Cette fonctionnalité permet d'opérer deux systèmes simultanément sur un seul écran.
- **Saisie au clavier** : Lorsque la fenêtre de l'application est active, toutes les frappes effectuées sur le clavier de l'ordinateur hôte sont transmises à l'appareil cible, permettant une saisie et une entrée de commandes sans interruption.
- **Conversion des signaux HID** : Toutes les entrées de clavier et de souris dans l'application sont converties en signaux de contrôle de périphérique d'interface humaine (HID), qui sont ensuite envoyés à l'ordinateur cible.
- **Synchronisation** : L'application garantit que l'écran et le curseur de l'ordinateur cible sont synchronisés avec l'affichage de l'ordinateur hôte, facilitant une expérience utilisateur unifiée.

Vous pouvez explorer les [logiciels](/app) et [matériels](/open-hardware) open-source d'Openterface pour plus de détails.