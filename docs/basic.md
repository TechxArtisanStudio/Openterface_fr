# Contrôle de Base

![use-case-pc-angled-view](images/product/use-case-pc-angled-view.jpg)

## 💻 Compatibilité

- **Logiciel Hôte** : Installez notre [application hôte](/app) pour macOS, Windows et Linux afin de contrôler vos appareils cibles. Assurez-vous que votre système hôte est compatible avec la version correspondante de l'application.
- **Compatibilité des Appareils Cibles** : Aucune pré-installation ou configuration n'est nécessaire sur l'appareil cible. Tant que l'appareil cible prend en charge les opérations UI avec sortie vidéo (par exemple, HDMI, VGA) et dispose d'un port USB pour recevoir les signaux de contrôle de clavier et de souris émulés (HID), il peut être utilisé. Les plateformes cibles prises en charge incluent Windows, macOS, Linux, Android et iOS.

## 🖱 Contrôle de la Souris

- **Mode Absolu** : Le curseur de la souris de l'appareil cible est directement mappé à une position spécifique sur l'écran de l'hôte via notre application. Cela signifie que partout où vous déplacez la souris de l'hôte dans notre application, la souris de l'appareil cible suivra le même mouvement. Notez qu'il peut y avoir un léger décalage dans les mouvements du curseur. Vous pouvez choisir de masquer ou d'afficher le curseur de la souris de l'hôte lorsqu'il est sur notre application.

- **Mode Relatif** : Le mouvement de la souris de l'appareil cible est relatif à la position actuelle de la souris de l'hôte. Cela signifie que déplacer la souris de l'hôte déplacera le curseur de l'appareil cible d'une certaine distance dans la même direction, sans point de départ ou d'arrivée fixe. Vous pouvez quitter ce mode relatif en utilisant un raccourci spécifique.

## ⌨️ Clavier

Lorsque l'application est au premier plan, vous pouvez taper directement, et ces frappes seront transmises à l'ordinateur cible.

## ⚙️ Accès au BIOS

- **Accès au BIOS** : Utilisez notre application pour accéder au BIOS de vos appareils cibles. Cela vous permet de contrôler et de configurer les paramètres directement depuis le BIOS.

??? astuce "Touches pour entrer dans le BIOS pour différentes cartes mères"

    - F2 : Dell, Lenovo, ASUS, Acer, Toshiba, Samsung, Sony
    - F1 : Lenovo
    - Del : ASUS, Acer, Gigabyte, MSI
    - F10 : HP
    - Bouton Assist : Sony
    - Touche Option (⌥) : Apple (pour accéder au gestionnaire de démarrage)

## 🔊 Son

- **Transmission Audio** : L'audio de l'ordinateur cible est transmis via le port d'entrée HDMI du mini-KVM. Lorsque vous utilisez notre application, le son de l'ordinateur cible sera diffusé sur l'ordinateur hôte, vous permettant d'entendre tout sans interruption.

## 🎥 Vidéo

- **Affichage Vidéo** : Notre application vous permet de visualiser l'écran de l'ordinateur cible sans problème. Elle prend en charge des résolutions vidéo allant jusqu'à 1920x1080 à 30Hz pour l'affichage dans l'application. La résolution vidéo maximale prise en charge est de 3840x2160 à 30Hz via HDMI. De plus, avec l'utilisation d'un adaptateur, elle peut également prendre en charge VGA, Micro HDMI, DVI et d'autres sources d'entrée vidéo.

## 🔄 Port USB Commutable

- **Utilisation du Port USB** : Le mini-KVM dispose d'un port USB-A 2.0 commutable qui peut être basculé entre les ordinateurs hôte et cible, mais pas les deux simultanément.
- **Méthodes de Commutation** : 
    - Commutateur Matériel : Un bouton physique sur l'appareil
    - Commutateur Logiciel : Un bouton dans l'application hôte
- **Logique de Commutation** : Pour plus d'informations détaillées sur la logique de fonctionnement du port USB commutable, y compris l'interaction entre les commutateurs matériel et logiciel, la configuration initiale, les états opérationnels et les transitions d'état, veuillez consulter la [documentation du commutateur USB](usb-switch.md).

!!! avertissement "Important"
    - N'oubliez pas d'éjecter tout lecteur USB connecté avant de changer la connexion du port.
    - Le port USB a des limitations de puissance. Ne connectez pas d'appareils nécessitant beaucoup de puissance, car cela pourrait entraîner un fonctionnement instable ou des dommages potentiels.
