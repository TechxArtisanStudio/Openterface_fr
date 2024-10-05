---
tags:
  - File Transfer
  - mini-KVM
  - Switchable USB
  - BIOS
  - USBKVM
---
# Questions Fréquemment Posées (FAQ)

Nous sommes absolument ravis de vous accueillir ici ! 🌟 Cette section est conçue pour répondre aux questions fréquemment posées sur l'Openterface Mini-KVM, que notre équipe organise périodiquement.

Plongeons dans les questions les plus courantes sur l'Openterface Mini-KVM.

*Mis à jour : 20 août 2024*

### Basique

#### Qu'est-ce que l'Openterface Mini-KVM ?
L'Openterface Mini-KVM vous permet d'utiliser votre ordinateur portable ou de bureau pour afficher et contrôler des appareils sans écran via une connexion USB et HDMI. Cette solution KVM-over-USB offre un contrôle KVM léger, rapide et fluide. Elle élimine le besoin de moniteurs, claviers et souris supplémentaires, offrant une solution pratique dans les endroits où les connexions réseau sont peu fiables ou inexistantes. Elle est particulièrement utile pour [une large gamme d'applications](/use-cases/), notamment pour les professionnels de la technologie qui dépannent des appareils sans écran ou des ordinateurs monocarte. Avec l'utilisation d'un adaptateur vidéo, elle peut également prendre en charge [VGA](https://www.crowdsupply.com/techxartisan/openterface-mini-kvm#product-3914), Micro HDMI, DVI et d'autres sources d'entrée.

L'Openterface Mini-KVM est ==entièrement open-source== à la fois en [matériel](/how-it-works/#explore-hardware-details) et en [logiciel](/quick-start/#install-host-application), certifié par [OSHWA](https://certification.oshwa.org/cn000015.html), et soutenu par [une communauté dynamique](/community/).

#### Pourquoi l'Openterface Mini-KVM fait-il la différence ?

Avec diverses solutions KVM disponibles, voici pourquoi l'Openterface Mini-KVM se distingue :

- Portabilité et Fonctionnalité
- Dépannage sans réseau et à la volée
- Prix abordable
- Entièrement Open Source et Communautaire

Pour en savoir plus, visitez notre page [Pourquoi Openterface Mini-KVM](/why-openterface).

#### Quels sont les cas d'utilisation de ce mini-KVM ?
L'Openterface Mini-KVM est le compagnon idéal pour une large gamme d'utilisateurs et de scénarios :

- Professionnels de l'informatique dépannant des serveurs
- Techniciens entretenant des distributeurs automatiques, VLT et kiosques
- Développeurs gérant des appareils de calcul en périphérie
- Passionnés de technologie expérimentant avec des ordinateurs monocarte
- Professionnels nécessitant des opérations locales sécurisées sur la ségrégation du réseau, comme ceux gérant des actifs cryptographiques
- Toute personne ayant besoin de flux de travail fréquemment intégrés entre ordinateurs personnels et professionnels.

Veuillez également consulter cette page : [Cas d'utilisation](/use-cases/)

#### Quels ordinateurs hôtes sont compatibles avec l'Openterface Mini-KVM ?
Pour utiliser ce mini-KVM, l'ordinateur hôte doit installer l'une de ces [applications hôtes](/quick-start/#install-host-application) pour prendre en charge MacOS, Windows, Linux et Android.

#### Quels appareils cibles sont compatibles avec l'Openterface Mini-KVM ?
Aucune pré-installation ou configuration n'est requise sur l'appareil cible. Tant que l'appareil cible prend en charge les opérations UI avec sortie vidéo (par exemple, HDMI, VGA) et dispose d'un port USB pour recevoir les signaux de contrôle de clavier et de souris émulés (HID), il peut être utilisé. Ainsi, les plateformes d'appareils cibles prises en charge incluent Windows, MacOS, Linux, Android et iOS.

#### Y aura-t-il un support technique et une documentation disponibles pour l'Openterface Mini-KVM ?
Une documentation complète pour l'Openterface Mini-KVM est disponible sur notre site web à [Openterface.com](/). Nous mettons continuellement à jour ces ressources pour optimiser votre expérience avec l'appareil.
Pour le support technique, nous vous invitons à rejoindre notre [communauté](/community/) pour partager des questions et des idées avec d'autres utilisateurs et notre équipe d'experts. Si votre problème reste non résolu, notre équipe est disponible pour fournir une assistance technique supplémentaire. Vous pouvez nous contacter par email à info@techxartisan.com.

### Logiciel

#### Où puis-je télécharger les applications hôtes ?
Visitez notre page [Installer l'application hôte](/quick-start/#install-host-application) pour les téléchargements officiels.

??? avertissement "Confidentialité et Sécurité : Soyez prudent lors de l'utilisation d'applications hôtes tierces"
    Comme notre projet est open-source, vous pouvez trouver des versions alternatives des applications hôtes compatibles avec notre Mini-KVM développées par d'autres. Bien que celles-ci puissent offrir des fonctionnalités supplémentaires, veuillez vous assurer de vérifier leurs pratiques de sécurité et de confidentialité. **L'équipe Openterface ne peut garantir ni être responsable de la sécurité des applications tierces**.
#### Existe-t-il une application hôte pour ChromeOS ?
Oui, mais elle est actuellement en cours de développement. Nous prévoyons de créer une extension web compatible avec les navigateurs Chrome et Firefox. Bien que la priorité de développement soit légèrement inférieure à celle des systèmes d'exploitation principaux comme macOS, Windows et Linux, nous y travaillons activement. Merci de votre patience et restez à l'écoute pour les mises à jour ! Si vous souhaitez contribuer à notre développement, rejoignez notre communauté ou envoyez-nous un email !

#### Existe-t-il une application hôte pour les appareils mobiles Apple ?
Nous explorons actuellement la compatibilité avec les systèmes mobiles d'Apple, tels que iOS et iPadOS. En raison des contrôles stricts d'Apple, ces plateformes peuvent ne pas prendre en charge les connexions filaires avec des appareils tiers. Cependant, la situation pourrait évoluer ou des solutions de contournement pourraient être trouvées. Si vous avez des idées ou des suggestions, nous vous invitons à les partager avec nous dans notre communauté. Nous nous engageons à rendre notre appareil aussi pratique que possible en prenant en charge un maximum de systèmes. Si vous souhaitez aider au développement, rejoignez notre communauté ou envoyez-nous un email !

#### Que faire si la touche F11 ne fonctionne pas sur les applications macOS ?
Sur macOS, appuyer sur F11 affiche le bureau au lieu de transmettre la touche F11 à l'application et à l'ordinateur cible. Pour résoudre ce problème, vous pouvez désactiver la fonction "Afficher le bureau" pour la touche F11. Voici comment faire :

1. Allez dans les Réglages Système.
2. Sélectionnez Bureau et Dock.
3. Faites défiler vers le bas et cliquez sur le bouton "Raccourcis...".
4. Trouvez "Afficher le bureau" et définissez-le sur le tiret (-) en bas de la liste déroulante.
5. Ce changement permettra à la touche F11 de passer à travers l'application sur l'ordinateur cible.

### Port USB Commutable et Transfert de Fichiers

#### L'Openterface Mini-KVM peut-il prendre en charge les transferts de fichiers ?
Oui, l'Openterface Mini-KVM dispose d'un port USB-A commutable partagé entre les appareils hôte et cible.

??? note "Comment partager une clé/disque USB entre les appareils Hôte et Cible ?"
    Les fichiers peuvent être transférés entre l'hôte et la cible en suivant ces étapes :

    1. Montez une clé USB sur l'hôte lorsque le petit interrupteur noir est réglé du côté du port Type-C de l'hôte.
    2. Copiez les fichiers sur cette clé montée.
    3. Après la copie, démontez la clé sans la débrancher physiquement.
    4. Basculez le petit interrupteur noir de l'autre côté. Cette action transfère la connexion du port USB-A à la cible.
    5. Montez la clé USB sur l'appareil cible et copiez/déplacez les fichiers de la clé, complétant ainsi le transfert des fichiers de l'hôte à la cible.

    Cette méthode peut également être utilisée dans le sens inverse.

??? note "N'oubliez pas d'éjecter la clé USB avant de basculer l'interrupteur"
    Si le port USB est utilisé par une clé USB, assurez-vous de l'éjecter avant de basculer l'interrupteur pour transférer l'utilisation du port à un autre ordinateur.

#### Le port USB-A commutable peut-il être basculé au niveau logiciel ?
Avec la mise à niveau matérielle vers la version 1.9, oui ! Nous travaillons actuellement à l'intégration de cette fonctionnalité dans notre application. Une fois en place, elle prendra en charge à la fois le basculement physique et le basculement au niveau logiciel. Consultez notre équipe de développement sur Discord pour en savoir plus sur l'avancement de cette fonctionnalité.

#### Pourquoi utiliser l'USB 2.0 et non l'USB 3.0 pour ce port USB commutable ?
L'USB 2.0 est parfaitement capable de gérer la capture vidéo en 1080p@30Hz, de transmettre les signaux HID (pour le clavier et la souris) et de gérer les transferts de fichiers à vitesse standard entre les ordinateurs cible et hôte. Cela fait de notre produit une solution rapide, légère et portable, exactement comme prévu.

L'utilisation de l'USB 3.0 rendrait la conception du PCB beaucoup plus complexe et augmenterait considérablement les coûts de production. De plus, bien que l'USB 3.0 offre des transferts de fichiers plus rapides, il génère également plus de chaleur, ce qui pourrait réduire la durée de vie de l'appareil.

Nous envisageons l'application de l'USB 3.0 pour la prochaine version, ciblant des scénarios d'utilisation plus professionnels et des solutions KVM stationnaires.

### Technique

#### L'Openterface Mini-KVM est-il open-source ?
Oui ! L'Openterface Mini-KVM est entièrement open-source à la fois en [matériel](/how-it-works/#explore-hardware-details) et en [logiciel](/quick-start/#install-host-application), certifié par [OSHWA](https://certification.oshwa.org/cn000015.html), et soutenu par [une communauté dynamique](/community/). Si vous êtes intéressé par [contribuer](/contributing/), veuillez nous contacter à info@techxartisan.com. Restez à l'écoute !

#### Puis-je accéder aux paramètres du BIOS d'un appareil ?
Oui, la connexion directe de l'Openterface Mini-KVM permet d'accéder aux paramètres du BIOS ou du firmware.

Cette fonctionnalité contraste avec les solutions KVM basées sur des logiciels ou les applications de contrôle à distance comme TeamViewer et VNC, qui ne sont généralement pas capables d'interactions au niveau du BIOS.

#### Pourquoi le contrôle du clavier ne fonctionne-t-il pas au niveau du BIOS pour certains anciens ordinateurs cibles ?
Il semble que certains anciens BIOS d'ordinateurs ne reconnaissent pas le hub USB de notre appareil, ce qui peut entraîner des problèmes avec notre clavier et notre souris émulés ne fonctionnant pas correctement au niveau du BIOS. Nous surveillons ce problème.

Nous avons reçu un rapport indiquant que sur un ordinateur HP spécifique, le HP Engage Flex Pro, le clavier ne fonctionne pas à l'écran du BIOS, bien qu'il fonctionne normalement une fois le système d'exploitation démarré.

Si vous rencontrez le même problème, veuillez nous le signaler via un problème sur GitHub.

#### Comment les données vidéo sont-elles transmises entre les appareils ?
Les données vidéo sont capturées via HDMI et transmises via USB 2.0 à l'ordinateur hôte pour affichage. Le port USB 2.0 commutable permet le partage de clé USB ou d'autres périphériques USB entre la cible et l'hôte.

#### Comment l'Openterface Mini-KVM gère-t-il l'alimentation ?
L'appareil ne nécessite pas d'alimentation externe, car il est conçu pour être alimenté via ses connexions USB Type-C depuis l'hôte, améliorant ainsi sa portabilité. Dans les scénarios où l'appareil cible est un micro-ordinateur à faible consommation, comme un Raspberry Pi, il pourrait être alimenté par l'hôte via le port USB commutable du Mini-KVM. Cependant, cela n'est pas recommandé. La méthode standard de fonctionnement consiste à avoir une alimentation externe pour l'appareil cible.

#### Puis-je fabriquer cet appareil moi-même ?
Absolument ! Nous sommes une bande de passionnés de bricolage et nous nous assurons que ce projet soit open-source à la fois en matériel et en logiciel. Vous pouvez techniquement le construire à partir de zéro. Nous envisageons même de publier un guide sur la façon de fabriquer une version sur breadboard de notre produit qui serait également compatible avec notre logiciel.

Notre communauté expérimente déjà différentes versions matérielles. Consultez les publications de notre communauté pour en savoir plus, ou partagez vos propres expériences de bricolage ! Cela pourrait vraiment enrichir notre communauté. De plus, vous pourriez découvrir qu'avec quelques ajustements au code, notre logiciel pourrait fonctionner parfaitement avec votre configuration DIY créative !

### Mécanisme de Contrôle

#### Y a-t-il des plans pour une version avec connectivité sans fil ou Ethernet ?
Actuellement, nous ne prévoyons pas d'ajouter une connectivité sans fil ou Ethernet à nos produits Openterface. Nous nous concentrons sur la fourniture d'un contrôle rapide et stable via USB directement à votre appareil cible, afin que vous n'ayez pas à vous soucier des problèmes de réseau.

Mais nous sommes toujours ouverts aux retours ! Si vous pensez qu'il y a un réel besoin pour cette fonctionnalité, ou si vous avez du mal à trouver une bonne solution KVM-over-IP, envoyez-nous un email : info@techxartisan.com. Et rappelez-vous, si nous décidons d'élargir nos options de connectivité, notre [communauté](/reddit) sera la première informée.

#### En quoi cela diffère-t-il des autres solutions KVM comme les KVM traditionnels, KVM-over-IP, et VNC, etc. ?
Curieux de savoir comment l'Openterface Mini-KVM se compare aux autres solutions ? Consultez notre page [Comparaison](/comparison) détaillée.

#### Fonctionne-t-il avec un ordinateur cible nécessitant un port PS/2 ?
Non. Nous savons qu'il existe encore de nombreux anciens ordinateurs sans écran qui nécessitent des claviers et des souris PS/2. Autant que nous le sachions, il n'existe pas encore de solution élégante pour convertir les signaux HID USB en signaux de clavier et de souris PS/2. Nous étudions toujours cette question et envisageons comment prendre en charge le PS/2 dans les futures versions du Mini-KVM. Si vous connaissez des solutions qui pourraient fonctionner élégamment avec notre Mini-KVM, veuillez les partager avec nous. Merci !

#### Puis-je utiliser plusieurs Mini-KVM pour contrôler plusieurs appareils cibles depuis un ordinateur maître ?
Oui, vous pouvez ! Notre Mini-KVM peut techniquement gérer cela, mais nous peaufinons encore le code et effectuons des tests. Nous nous concentrons sur la garantie que notre logiciel puisse automatiquement lier le clavier et la souris à la bonne source vidéo lorsque vous utilisez plus d'un Mini-KVM à la fois. De plus, nous améliorons l'interface utilisateur du logiciel pour rendre ce type de configuration plus convivial. Restez à l'écoute des mises à jour de notre communauté pour savoir quand nous déploierons cette fonctionnalité !

#### Est-il capable d'éteindre/allumer l'ordinateur auquel il est connecté ?
Notre appareil ne prend pas en charge l'ATX (contrôle de l'alimentation pour l'ordinateur cible). Nous l'avons conçu pour être portable, rapide pour le dépannage et stable pour le contrôle local. Il est vraiment destiné à être utilisé lorsque vous êtes sur place avec votre ordinateur portable, gérant un ou plusieurs ordinateurs cibles. Nous pourrions créer une version pro à l'avenir avec l'ATX et plus de fonctionnalités.

### Vidéo

#### Qu'en est-il de la latence vidéo et de la résolution ?
Notre appareil gère la vidéo en 1080p avec une latence inférieure à 140 millisecondes, rendant votre expérience de contrôle fluide et sans accroc.

#### L'Openterface Mini-KVM est-il adapté aux jeux de haute qualité ?
La conception actuelle se concentre sur les opérations techniques et informatiques, offrant un contrôle fiable pour la configuration et le dépannage des appareils plutôt que pour les jeux de haute qualité. Bien qu'il soit excellent pour de nombreuses tâches, ce mini-KVM pourrait ne pas répondre aux besoins d'affichage des jeux de haute qualité.

#### Y aura-t-il un support pour un affichage de haute qualité dans les futures versions de l'Openterface Mini-KVM ?
Nous savons que beaucoup d'entre vous recherchent des fonctionnalités d'affichage de premier ordre. Bien que ce ne soit pas notre priorité principale pour le moment, en fonction de vos retours, nous envisageons d'ajouter des capacités d'affichage améliorées dans une version professionnelle de l'Openterface Mini-KVM.

#### Pourquoi l'Openterface Mini-KVM ne diffuse-t-il pas de vidéo sur IP local ?
L'Openterface Mini-KVM a été conçu pour garantir des performances fiables et stables via des connexions filaires, en utilisant HDMI et USB. Bien qu'il soit techniquement possible de diffuser de la vidéo sur un réseau via nos applications hôtes, nous envisageons d'ajouter une fonctionnalité VLC, voire VNC, à nos applications hôtes à l'avenir.

#### Peut-il fonctionner avec différentes sorties vidéo comme VGA, DVI, DisplayPort, etc. ?
En quelque sorte. L'Openterface Mini-KVM capture la vidéo via un port HDMI. Cependant, vous pouvez utiliser divers adaptateurs vidéo comme [VGA-vers-HDMI](/use-cases/#streamlined-server-management), [DVI-vers-HDMI](/use-cases/#unified-control-for-diverse-devices), [miniHDMI-vers-HDMI](/use-cases/#simplified-setup-for-tech-enthusiasts), ou DP-vers-HDMI, pour connecter différentes sources vidéo.

### Dépannage

#### Pourquoi l'Openterface Mini-KVM rencontre-t-il parfois des problèmes lorsqu'il est connecté via un hub USB ?
Lorsqu'un hub USB est utilisé du côté cible, l'Openterface Mini-KVM peut devenir instable. Cela est dû au fait que l'Openterface Mini-KVM dépend principalement du port cible pour l'alimentation. Si le hub USB connecté à la cible est entièrement chargé, cela peut entraîner une chute de tension significative, entraînant une instabilité de l'Openterface Mini-KVM en raison d'une alimentation insuffisante. Si vous devez utiliser un hub USB du côté cible, envisagez d'utiliser un hub USB alimenté avec une alimentation externe pour garantir un fonctionnement stable.
#### Que faire si l'Openterface Mini-KVM devient instable, par exemple si l'application n'affiche pas l'écran de la cible ou si la souris et le clavier ne répondent pas ?

Si vous rencontrez des problèmes de stabilité avec l'Openterface Mini-KVM, comme l'application qui n'affiche pas l'écran de la cible ou l'impossibilité de contrôler la souris et le clavier, essayez de déconnecter tous les câbles. Après un court instant, reconnectez les câbles et réessayez. Ce simple redémarrage résout souvent les problèmes de connexion.

### Plus

#### Comment puis-je contribuer à ce projet ?
Absolument ! Il y a plein de façons de participer :

- Si vous êtes passionné de code, aidez-nous en signalant et en corrigeant les bugs.
- Vous êtes doué avec les mots et la technologie ? Vous pourriez nous aider avec notre documentation.
- Et si vous êtes un as des langues, pourquoi ne pas aider à traduire nos documents pour toucher plus de monde ?
- Si le design est votre truc, nous cherchons toujours de nouvelles idées pour le design graphique, l'interface de l'application et rendre notre appareil encore plus convivial.
- Vous aimez animer des communautés ? Nous avons aussi besoin de vos compétences dans ce domaine.

Votre soutien et vos [contributions](/contributing/) sont ce qui fait grandir Openterface Mini-KVM. Merci de faire partie de notre aventure ! 🚀 Vous avez envie d'aider mais ne trouvez pas de rôle parfait ? Envoyez-nous simplement un email !

#### Vous voulez tester notre gadget pratique ?
Nous adorons faire du bruit et faire connaître notre Mini-KVM ! Si vous êtes de la presse ou un influenceur sur les réseaux sociaux et que vous souhaitez essayer notre produit, nous sommes tout ouïe. Que vous soyez fan de critiques détaillées, de vidéos de déballage ou que vous vouliez simplement nous donner un coup de pouce, nous sommes là pour ça et faisons des vagues ensemble ! 🎉 Envoyez-nous un email dès maintenant !

#### Quelles sont les fonctionnalités avancées prévues pour le mini-KVM ?

Nous sommes enthousiastes quant au potentiel du mini-KVM et nous nous engageons à documenter toutes nos idées actuelles dans une feuille de route complète. Cette feuille de route décrira les fonctionnalités avancées et les développements futurs que nous envisageons pour l'appareil. Nous avons hâte de développer ces fonctionnalités en collaboration avec notre communauté. Restez à l'écoute pour plus de mises à jour à mesure que nous continuons à grandir et à innover ensemble.

#### Comment le mini-KVM s'intègre-t-il avec l'IA et quelles sont ses possibilités futures ?

Notre objectif ultime est de permettre à l'IA de contrôler les ordinateurs cibles, et l'Openterface joue un rôle crucial dans cette vision. Inspirés par des projets comme [OthersideAI's self-operating computer](https://github.com/OthersideAI/self-operating-computer), nous visons à ce que le mini-KVM agisse comme une extension des "mains" (fournissant le contrôle du clavier et de la souris) et des "yeux" (capturant la source vidéo) pour l'ordinateur hôte. Si l'ordinateur hôte est suffisamment puissant, il pourrait potentiellement émuler les capacités vues dans le film de 2013 "Her". Bien que ce soit une aspiration future, cela met en lumière les possibilités passionnantes que nous voyons pour le mini-KVM.

#### Quels accessoires sont disponibles pour l'Openterface Mini-KVM ?
Nous proposons une gamme d'accessoires pour améliorer votre expérience avec l'Openterface Mini-KVM. Consultez notre section [Accessoires](accessories.md) pour plus de détails sur les produits disponibles, y compris notre câble convertisseur VGA vers HDMI.

--------

Votre curiosité et votre soutien alimentent nos progrès, et nous voulons nous assurer que chacune de vos questions trouve une réponse. Veuillez noter qu'avec le temps, le contenu ci-dessus dans notre FAQ peut devenir obsolète. Si votre question n'est pas couverte dans cette FAQ, consultez toujours notre site web [openterface.com](/) pour les informations les plus récentes. N'hésitez pas à rejoindre notre communauté enthousiaste. Nous sommes actifs sur notre Subreddit à [/r/Openterface_miniKVM/](/reddit) et notre serveur Discord, [TechxArtisan](/discord), où vous pouvez poser des questions, partager des idées ou simplement discuter de tout ce qui concerne la technologie.

De plus, n'hésitez pas à contacter directement notre équipe dédiée en envoyant un email à info@techxartisan.com. Nous adorons avoir de vos nouvelles et sommes toujours là pour vous aider !