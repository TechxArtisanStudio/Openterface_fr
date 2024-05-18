---
comments: true
---

# Tests de fonctionnement de base

<iframe width="560" height="315" src="https://www.youtube.com/embed/m7OpUem0zqY?si=3kHl1kmk6VQRnPu7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/ERzpGtRvP2o?si=2DQrHqk-GhzvvL24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Souris 🖱

- Mode Absolu & Relatif
    - Latence de mouvement, pour assurer un contrôle fluide et réactif.
    - Précision du mappage de la position de la souris
    - Test de clic (clic simple, double clics)
    - Test de glisser-déposer

## Clavier ⌨️
- Test de mappage du clavier, en particulier pour divers symboles spéciaux
- Test de réactivité de la frappe
- Test de pression de plusieurs touches
- Test des touches de fonction
- Test avec différents agencements de clavier pour s'assurer d'un appariement cohérent

!!! conseil

    Vous pouvez utiliser un outil de test de clavier en ligne à la fois sur les ordinateurs hôte et cible pour vérifier si leurs frappes sont synchronisées.

## Transfert de texte 📝
- Fonctionnalité de transfert de texte : Vérifiez que l'application hôte peut transférer du texte avec succès de l'ordinateur hôte vers l'appareil cible en utilisant les [codes ASCII](https://theasciicode.com.ar/).
- Intégrité du contenu : Assurez-vous que le contenu du texte transféré de l'hôte à l'appareil cible reste intact et est reproduit avec précision.
- Gestion des caractères spéciaux : Testez la fonctionnalité de transfert de texte avec divers caractères ASCII, y compris les symboles, signes de ponctuation et caractères non alphanumériques, pour assurer une gestion et une reproduction correctes sur l'appareil cible.
- Test de la longueur du texte : Testez la fonctionnalité de transfert de texte avec des textes de différentes longueurs, allant de courtes chaînes à des paragraphes plus longs, pour vérifier qu'elle peut accueillir différentes tailles de texte sans problème.
- Gestion des erreurs : Testez les scénarios d'erreur, tels que la perte de connexion ou l'interruption pendant le transfert de texte, pour s'assurer que l'application hôte gère ces situations avec élégance et fournit des commentaires appropriés à l'utilisateur.
- Test de performance : Évaluez la performance de la fonctionnalité de transfert de texte dans diverses conditions, y compris sur des ordinateurs plus anciens ou plus lents, pour identifier tout problème potentiel de réception incorrecte des signaux d'entrée HID et assurer un fonctionnement fluide.
- Test de l'interface utilisateur : Assurez-vous que l'interface utilisateur de l'application hôte offre des contrôles et des retours intuitifs pour initier et surveiller les opérations de transfert de texte, facilitant la compréhension et l'utilisation de cette fonctionnalité par les utilisateurs.

!!! note
    La fonctionnalité de transfert de texte est conçue pour émuler le comportement de frappe pour reproduire le contenu textuel sur l'ordinateur cible. Elle ne prend pas en charge l'intégration du presse-papiers, donc, elle ne peut pas transférer du contenu non textuel, comme des images. Cette fonctionnalité ne prend en charge que le transfert de texte basé sur les codes ASCII. Par conséquent, elle ne prend pas en charge les langues qui ne sont pas basées sur les codes ASCII, telles que les caractères chinois, japonais, coréens, etc. De plus, il n'est pas recommandé de transférer trop de texte à la fois.

## Accès au niveau du BIOS ⚙️
- Si l'application peut accéder au BIOS des différents appareils cibles.

## Son 🔊
- Si le son de l'ordinateur cible peut être joué normalement sur l'ordinateur de contrôle.

## Vidéo 🎥
- Si l'application peut afficher correctement l'ordinateur cible avec différentes résolutions et fréquences.

## Branchez et débranchez 🔌
- Séquence de connexion recommandée des appareils
- Perturbation de la séquence selon les recommandations ci-dessus, test de différents scénarios pour assurer un fonctionnement normal.

## Port USB commutable et son interrupteur 🔄
- Test de l'interrupteur : Testez l'interrupteur dans divers scénarios pour vous assurer qu'il fonctionne de manière fiable et qu'il commute efficacement entre les connexions des ordinateurs hôte et cible.
- Compatibilité des ports : Vérifiez que le port USB-A 2.0 prend en charge la connexion avec les ordinateurs hôte et cible comme prévu pour divers périphériques USB, tels qu'une clé USB ou une webcam.

!!! note

    Un seul ordinateur peut utiliser le port à la fois. Si le port est utilisé par une clé USB, assurez-vous de l'éjecter avant de basculer l'interrupteur pour changer l'utilisation du port vers un autre ordinateur.

!!! avertissement
    Le port USB peut fournir une alimentation de 5V à un périphérique USB externe, mais il a une capacité d'alimentation très limitée, environ 10W. Sachez que cela peut ne pas être suffisant pour alimenter certains appareils externes, comme un Jetson Nano exécutant des tâches intensives en GPU.

## Cible différente 💻🎯
- Tester différents appareils cibles, tels que différentes versions de macOS, Windows, Linux, Android, iOS, etc.

## Hôte différent 💻👑
- Tester notre logiciel de test interne actuellement publié, tel que les versions prises en charge pour macOS, Windows ou Linux
- Tester si différentes versions de l'OS peuvent utiliser l'application hôte correspondante

# Tests supplémentaires
- Test de l'interface utilisateur : Vérifiez que l'interface utilisateur des applications hôtes est intuitive et conviviale, offrant un accès facile aux fonctionnalités et réglages essentiels.
- Test de gestion des erreurs : Testez les mécanismes de gestion des erreurs pour assurer une récupération élégante des situations inattendues, telles que les interruptions de connexion ou les dysfonctionnements des appareils.
- Revue de la documentation : Passez en revue les manuels d'utilisateur et la documentation pour vous assurer qu'ils sont complets, précis et faciles à comprendre, fournissant des instructions claires pour la configuration, le fonctionnement et le dépannage.
- Test de performance : Évaluez la performance de l'appareil mini-KVM dans divers scénarios de charge de travail pour vous assurer qu'il respecte les normes de performance requises et ne dégrade pas la performance du système pendant son fonctionnement.
- Test de stabilité : Réalisez des tests de stress et des tests de longue durée pour évaluer la stabilité et la fiabilité de l'appareil mini-KVM en utilisation continue.
