# Test & Développement

## 💻 Compatibilité

- **Support des OS** : Vérifiez que les différentes versions des systèmes d'exploitation peuvent utiliser l'application hôte correspondante.
- **Tests de Performance** : Évaluez les performances sur divers systèmes hôtes.
- **Tests de Versions d'OS** : Assurez-vous de la compatibilité avec différentes versions des systèmes d'exploitation.
- **Problèmes Spécifiques aux Appareils** : Identifiez et résolvez les problèmes spécifiques à certains appareils ou versions d'OS.

## 🖱 Contrôle de la Souris

<div class="annotate" markdown>

- **Latence de Mouvement** : Assurez-vous d'un contrôle fluide et réactif.
- **Boutons de la Souris** : Testez les boutons gauche, droit et central ; cliquez et faites glisser.
- **Défilement** : Évaluez la vitesse et la direction du défilement.
- **Précision** du positionnement de la souris en mode *Absolu* (1)
- **Sensibilité** du mouvement de la souris en mode *Relatif* (2)

</div>

1. Assurez-vous que la position de la souris sur la cible est correctement mappée à celle de l'hôte. Cela peut être influencé par la résolution de la cible et les changements de taille de la fenêtre de l'application.
2. Assurez-vous que le mouvement de la souris répond aux attentes intuitives.

## ⌨️ Clavier

<div class="annotate" markdown>

- **Réactivité de la Saisie** : Assurez-vous qu'elle répond aux attentes intuitives.
- **Mappage Complet du Clavier** : Surtout pour les divers symboles spéciaux.
- **Touches Modificatrices** : Touches comme `Ctrl`, `Shift`, `Alt` et `Cmd`, ou `Win`.
- **Combinaisons de Touches** : Supporte techniquement jusqu'à 8 touches modificatrices et 6 touches supplémentaires pressées simultanément.
- **Touches Média & ACPI** : Touches comme `Volume-`, `Volume+`, `Muet`, `Réveil`, `Veille` et `Alimentation`.
- **Dispositions de Clavier** : Assurez-vous d'un appariement cohérent pour diverses dispositions. (1)

!!! astuce

    - **Testeur de Clavier** : Vous pouvez utiliser un outil de test de clavier en ligne sur les ordinateurs hôte et cible pour vérifier si leurs frappes sont synchronisées.
    - **Puce CH9329** : Consultez [les détails](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware/tree/main/CH9329) pour comprendre les limites du contrôle clavier/souris dans l'Openterface Mini-KVM.

</div>

1. ⌨️ 🌏 Les dispositions de clavier varient globalement selon les régions et les langues, avec des types populaires comme QWERTY, AZERTY, QWERTZ et Dvorak.

## ⚙️ Accès au BIOS

- **Entrée BIOS** : Testez l'entrée dans le BIOS pendant la séquence de démarrage.
- **Fonctionnalité** : Assurez-vous du contrôle complet du clavier et de la souris dans le BIOS.
- **Compatibilité** : Vérifiez l'accès au BIOS sur différentes marques et modèles de cartes mères.

## 🔊 Son

- **Qualité du Son** : Évaluez la clarté et la synchronisation de la lecture audio.
- **Latence** : Mesurez les délais entre les actions et leurs sons correspondants.
- **Compatibilité** : Testez diverses sorties audio sur différents systèmes d'exploitation.

## 🎥 Vidéo

- **Support de Résolution** : Testez diverses résolutions d'écran et ratios d'aspect.
- **Taux de Rafraîchissement** : Évaluez les performances à différents taux de rafraîchissement.
- **Qualité d'Affichage** : Vérifiez les artefacts visuels ou les problèmes de latence.

## 🔄 Port USB Commutable

- **Test du Commutateur** : Testez le commutateur dans divers scénarios pour sa fiabilité.
- **Compatibilité du Port** : Assurez-vous que le port USB-A 2.0 supporte divers périphériques USB comme les clés USB et les webcams.
- **Limitations de Puissance** : Confirmez la capacité d'alimentation du port et son adéquation pour différents appareils.

## 🔌 Connexion & Déconnexion

- **Tests de Connexion** : Testez des scénarios avec différentes séquences de connexion et de déconnexion.
- **Gestion des Erreurs** : Assurez-vous que l'appareil reconnaît et récupère des connexions incorrectes.
- **Stabilité** : Vérifiez la stabilité lorsque les appareils sont branchés et débranchés à plusieurs reprises.

## 📝 Transfert de Texte

- **Tests de Fonctionnalité** : Vérifiez que l'application hôte peut transférer du texte avec succès de l'ordinateur hôte à l'appareil cible en utilisant des codes ASCII.
- **Intégrité du Contenu** : Assurez-vous que le texte transféré de l'hôte à l'appareil cible reste intact et est reproduit avec précision.
- **Gestion des Caractères Spéciaux** : Testez la fonctionnalité de transfert de texte avec divers caractères ASCII pour assurer une gestion et une reproduction correctes sur l'appareil cible.
- **Tests de Longueur de Texte** : Testez la fonctionnalité de transfert de texte avec des textes de différentes longueurs pour vérifier qu'elle peut gérer différentes tailles de texte sans problème.
- **Gestion des Erreurs** : Testez les scénarios d'erreur, comme la perte de connexion ou l'interruption pendant le transfert de texte, pour assurer que l'application hôte gère ces situations de manière appropriée et fournit un retour d'information adéquat à l'utilisateur.
- **Tests de Performance** : Évaluez la performance de la fonctionnalité de transfert de texte dans diverses conditions, y compris sur des ordinateurs plus anciens ou plus lents, pour identifier les problèmes potentiels de réception incorrecte des signaux d'entrée HID et assurer un fonctionnement fluide.
- **Tests de l'Interface Utilisateur** : Assurez-vous que l'interface utilisateur de l'application hôte offre des contrôles intuitifs et un retour d'information pour initier et surveiller les opérations de transfert de texte, facilitant ainsi la compréhension et l'utilisation de cette fonctionnalité par les utilisateurs.

## Divers

- **Gestion des Erreurs** : Testez les mécanismes de gestion des erreurs pour une récupération en douceur après des perturbations.
- **Performance** : Évaluez les performances du mini-KVM sous divers scénarios de charge de travail.
- **Stabilité** : Effectuez des tests de résistance pour vérifier la stabilité et la fiabilité à long terme.