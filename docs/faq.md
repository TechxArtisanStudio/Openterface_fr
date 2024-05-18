---
comments: true
tags:
  - File Transfer
  - mini-KVM
  - Switchable USB
  - BIOS
---

# Foire aux questions (FAQ)

Nous sommes absolument ravis de vous avoir ici ! 🌟 Cette section est conçue pour répondre aux questions fréquemment posées sur le Mini-KVM Openterface, que notre équipe organise périodiquement.

Examinons les questions les plus fréquentes concernant le mini-KVM Openterface.

### Basique

#### Qu'est-ce que le mini-KVM Openterface ?
L'Openterface Mini-KVM est un gadget KVM compact, riche en fonctionnalités et open source piloté par [une communauté dynamique](https://openterface.com/community/). Il vous permet d'utiliser votre propre ordinateur portable pour afficher et contrôler des appareils sans tête directement via une [connexion USB et HDMI](https://openterface.com/quick-start/#connection-procedure). Cette solution KVM sur USB capture la vidéo via HDMI et simule les entrées du clavier et de la souris. Il est particulièrement utile pour [une large gamme d'applications](https://openterface.com/use-cases/), destiné aux passionnés de technologie explorant les ordinateurs monocarte, ainsi qu'aux professionnels de l'informatique dépannant les appareils sans tête. Il élimine le besoin de moniteurs, claviers et souris supplémentaires, offrant ainsi une solution pratique dans les environnements où les connexions réseau sont peu fiables ou indisponibles.

#### Pourquoi le mini-KVM Openterface fait-il la différence ?
Nos [fonctionnalités Openterface Mini-KVM](https://openterface.com/#product-features) sont une **conception portable, une facilité de plug-and-play, un temps de réponse rapide et un accès direct au niveau du BIOS avec un port USB commutable. Un port**, le tout partagé entre les appareils hôtes et cibles. Il garantit une expérience de contrôle fiable et rapide via une connexion HDMI et USB, sans les contraintes de dépendance au réseau, ce qui le rend adapté à divers [scénarios d'utilisation](https://openterface.com/use-cases/), en particulier pour les tâches informatiques et dépannage à la volée.

De plus, contrairement aux consoles KVM traditionnelles qui ont souvent un prix élevé, notre mini-KVM est conçu pour être accessible et **abordable** à un plus large éventail d'utilisateurs, des professionnels de l'informatique aux passionnés de technologie.

Mais la vraie magie réside dans notre engagement envers le **développement open source** et l'**engagement communautaire**. En adoptant ces principes, nous construisons un écosystème dynamique où les utilisateurs peuvent collaborer, contribuer et personnaliser l'appareil pour répondre à leurs besoins uniques, favorisant l'innovation et repoussant les limites de ce qui est possible.

#### Quels sont les cas d'utilisation de ce mini-KVM ?
Veuillez consulter cette page : [Cas d'utilisation](https://openterface.com/use-cases/)

#### Quels ordinateurs hôtes sont compatibles avec Openterface Mini-KVM ?
Pour utiliser ce mini-KVM, l'ordinateur hôte doit installer l'une de ces [applications hôtes](https://openterface.com/quick-start/#install-host-application) pour prendre en charge MacOS, Windows et Linux. Une extension Web et des applications Android sont actuellement en cours de développement.

#### Quels appareils cibles sont compatibles avec l'Openterface Mini-KVM ?
Aucune pré-installation ou configuration n’est requise sur l’appareil cible. Tant que le périphérique cible prend en charge les opérations de l'interface utilisateur avec sortie vidéo (par exemple, HDMI, VGA) et dispose d'un port USB pour recevoir les signaux de contrôle du clavier et de la souris émulés (HID), il peut être utilisé. Ainsi, les plates-formes de périphériques cibles prises en charge incluent Windows, MacOS, Linux, Android et iOS.

#### Y aura-t-il une assistance technique et une documentation disponibles pour le mini-KVM Openterface ?
Une documentation complète pour Openterface Mini-KVM est disponible sur notre site Web à l'adresse [Openterface.com](https://www.openterface.com/). Nous mettons continuellement à jour ces ressources pour optimiser votre expérience avec l'appareil.
Pour obtenir une assistance technique, nous vous invitons à rejoindre notre [communauté](https://openterface.com/community/) pour partager des requêtes et des informations entre les autres utilisateurs et notre équipe d'experts. Si votre problème n’est toujours pas résolu, notre équipe est disponible pour vous fournir une assistance technique supplémentaire. Vous pouvez nous contacter via cet e-mail : info@techxartisan.com.

#### Pourquoi votre référentiel open source est-il vide ?
Nous nous excusons pour le retard. Nous avons été exceptionnellement occupés avec diverses tâches administratives liées à notre campagne de financement participatif. Rassurez-vous, nous nous engageons pleinement à rendre open source le matériel et les logiciels de notre projet. Soyez patient avec nous pendant que nous finalisons les préparatifs. Nous commencerons à publier les détails du matériel et le code progressivement au cours des deux à trois prochaines semaines, dans le but d'avoir tout disponible avant de commencer les expéditions à nos bailleurs de fonds.

En attendant, vous pouvez en savoir plus sur notre projet ici : [Comment ça marche](https://openterface.com/how-it-works/). Cette ressource donne un aperçu de notre intégration de capture USB-HDMI, avec la puce **CH9329** pour le contrôle du clavier et de la souris. Les passionnés de technologie trouveront peut-être les détails de la puce CH9329 particulièrement intéressants.

De plus, notre mini-KVM utilise la puce **CH340**, prenant en charge deux hubs USB intégrés pour les côtés hôte et cible. Notre mini-KVM est comparable à de nombreuses cartes de capture vidéo actuellement sur le marché. Pour plus de détails techniques, veuillez vous référer à cette [fiche technique](https://docs.google.com/document/d/1UPw5RwGTp0AjKL3wOvQZUS1hp3IPMxkCujtqy5haeP0/edit?usp=sharing).

Merci de votre compréhension et de votre patience !

### Logiciel

#### Où puis-je télécharger les applications hôtes ?
Visitez notre [page Installer l'application hôte](https://openterface.com/quick-start/#install-host-application) pour les téléchargements officiels. Notre projet étant open source, vous pourrez trouver des versions alternatives d'applications hôtes compatibles avec notre mini-KVM développées par la communauté. Bien que ceux-ci puissent offrir des fonctionnalités supplémentaires, assurez-vous de consulter leurs pratiques de sécurité et de confidentialité. TechxArtisan Studio ne peut garantir la sécurité des applications tierces. Merci!

#### Quand l'application hôte pour Android sera-t-elle disponible ?
Nous développons actuellement l'application hôte pour Android, mais elle constitue une priorité moindre par rapport aux versions des systèmes d'exploitation grand public comme macOS, Windows et Linux. Nous apprécions votre patience et vous encourageons à rester à l’écoute des mises à jour. Si vous souhaitez contribuer au développement, n'hésitez pas à rejoindre notre communauté ou à nous contacter par e-mail !

#### Existe-t-il une application hôte prenant en charge ChromeOS ?
Oui, mais il est actuellement en cours de développement. Nous prévoyons de créer une extension Web conçue pour prendre en charge les navigateurs Chrome et Firefox. Bien que sa priorité de développement soit légèrement inférieure à celle des systèmes d'exploitation traditionnels tels que macOS, Windows et Linux, nous y travaillons activement. Soyez patient avec nous et restez à l’écoute des mises à jour ! Si vous souhaitez nous aider dans notre développement, venez nous rejoindre dans la communauté ou envoyez-nous un e-mail !

#### Existe-t-il une application hôte prenant en charge les appareils mobiles Apple ?
Nous étudions actuellement la compatibilité avec les systèmes mobiles d'Apple, tels qu'iOS et iPadOS. En raison des contrôles stricts d'Apple, ces plates-formes peuvent ne pas prendre en charge les connexions filaires avec des appareils tiers. Cependant, la situation pourrait changer ou il pourrait y avoir des solutions de contournement. Si vous avez des idées ou des suggestions, nous vous invitons à rejoindre notre communauté pour en discuter avec nous. Nous nous engageons à améliorer la commodité de notre appareil en prenant en charge autant de systèmes que possible. Si vous souhaitez nous aider dans notre développement, venez nous rejoindre dans la communauté ou envoyez-nous un e-mail !

#### Et si F11 ne fonctionne pas sur les applications macOS ?
Sur macOS, appuyer sur F11 affiche le bureau macOS au lieu de transmettre la touche F11 à l'application et à l'ordinateur cible. Pour résoudre ce problème, vous pouvez dissocier F11 de la fonction "Afficher le bureau". Voici comment:

1. Accédez aux paramètres système.
2. Sélectionnez Bureau et Dock.
3. Faites défiler vers le bas et cliquez sur le bouton « Raccourcis… ».
4. Recherchez « Afficher le bureau » et définissez-le sur le trait d'union (-) en bas de la liste déroulante.
5. Cette modification permettra à la touche F11 de passer à votre application sur l'ordinateur cible.

### Port USB commutable et transfert de fichiers

#### L'Openterface Mini-KVM peut-il prendre en charge les transferts de fichiers ?
Oui, l'Openterface Mini-KVM comprend un port USB-A commutable partagé entre les appareils hôte et cible. Avec une clé/un disque USB branché sur ce port, les fichiers peuvent être transférés entre l'hôte et la cible en suivant ces étapes :

1. Montez une clé USB sur l'hôte lorsque le petit interrupteur noir est placé sur le côté du port Type-C de l'hôte.
2. Copiez les fichiers sur ce lecteur monté.
3. Après la copie, démontez le lecteur sans le débrancher physiquement.
4. Basculez le petit interrupteur noir de l'autre côté. Cette action bascule la connexion du port USB-A vers la cible.
5. Montez la clé USB sur le périphérique cible et copiez/déplacez les fichiers du lecteur, complétant ainsi le processus de transfert des fichiers de l'hôte vers la cible.

Cette méthode peut également être utilisée dans le sens inverse.

#### Le port USB-A commutable peut-il être activé au niveau logiciel ?
La conception actuelle ne prend pas en charge le basculement au niveau logiciel ; il ne peut être inversé que physiquement pour l'instant.

La mise en œuvre du basculement au niveau logiciel nécessiterait une nouvelle conception, incorporant un bouton et un indicateur LED (vert/bleu ou marche/arrêt) pour indiquer si le port USB est réglé sur le mode hôte ou cible.

De plus, cela nécessiterait l’intégration d’une puce supplémentaire, ce qui entraînerait une augmentation des coûts de développement matériel et logiciel. La conception existante représente un compromis visant à équilibrer la rentabilité et les fonctionnalités de base. Malgré le potentiel d'augmentation des coûts, nous souhaitons intégrer cette fonctionnalité dans une future version pour une meilleure expérience utilisateur.

#### Pourquoi USB 2.0 mais pas USB 3.0 pour ce port USB commutable ?
L'USB 2.0 est entièrement capable de gérer la capture vidéo à 1080p à 30 Hz, de transmettre des signaux HID (pour le clavier et la souris) et de gérer les transferts de fichiers à vitesse standard entre l'ordinateur cible et l'ordinateur hôte. Cela fait de notre produit une solution rapide, légère et portable, exactement comme conçu.

L’utilisation de l’USB 3.0 rendrait la conception des PCB beaucoup plus complexe et augmenterait considérablement les coûts de production. De plus, même si l'USB 3.0 offre des transferts de fichiers plus rapides, il génère également plus de chaleur, ce qui pourrait réduire la durée de vie de l'appareil.

Nous envisageons l'application de l'USB 3.0 pour la prochaine version, ciblant des scénarios d'utilisation plus professionnels et des solutions KVM stationnaires.

### Technique

#### Le Mini-KVM Openterface est-il open source ?
Oui! Nous ouvrirons à la fois le [matériel](/how-it-works/#explore-hardware-details) et le [logiciel](https://openterface.com/quick-start/#install-host-application). Attendez-nous encore un peu ; Nous devons ranger pas mal de choses pour l'ouverture. Si vous êtes intéressé à [contribuer](/contribuer/), veuillez nous le faire savoir via cet e-mail : info@techxartisan.com. Restez à l'écoute!

#### Puis-je accéder aux paramètres du BIOS d'un appareil ?
Oui, la connexion directe de l'Openterface Mini-KVM permet d'accéder aux paramètres de bas niveau du BIOS ou du firmware.

Cette fonctionnalité contraste avec les solutions KVM logicielles ou les applications de contrôle à distance telles que TeamViewer et Zoom, qui ne sont généralement pas capables d'interagir au niveau du BIOS.

#### Pourquoi le contrôle du clavier ne fonctionne-t-il pas au niveau du BIOS pour certains ordinateurs cibles plus anciens ?
Il semble que le BIOS de certains anciens ordinateurs ne puisse pas reconnaître le hub USB de notre appareil, ce qui peut entraîner des problèmes avec notre clavier et notre souris émulés qui ne fonctionnent pas correctement au niveau du BIOS. Nous gardons un œil sur ce problème.

Nous avons reçu un rapport indiquant que sur un ordinateur HP spécifique, le HP Engage Flex Pro, le clavier ne fonctionne pas sur l'écran du BIOS, bien qu'il fonctionne normalement une fois le système d'exploitation démarré.

Si vous rencontrez le même problème, veuillez nous le signaler via un problème GitHub.

#### Comment les vidéos/données sont-elles transmises entre les appareils ?
Les données vidéo sont capturées via HDMI et transmises via USB 2.0 à l'ordinateur hôte pour affichage. Le port USB 2.0 commutable permet le partage d'une clé USB ou d'un autre périphérique USB entre la cible et l'hôte.

#### Comment le mini-KVM Openterface gère-t-il l'alimentation ?
L'appareil ne nécessite pas d'alimentation externe, car il est conçu pour être alimenté via ses connexions USB Type-C depuis l'hôte, améliorant ainsi sa portabilité. Dans les scénarios où le périphérique cible est un micro-ordinateur à faible consommation, tel qu'un Raspberry Pi, il pourrait être alimenté via l'hôte via le port USB commutable du Mini-KVM. Cependant, cela n'est pas recommandé. La méthode de fonctionnement standard consiste à disposer d’une alimentation externe pour l’appareil cible.

#### Puis-je bricoler cet appareil ?
Absolument! Nous sommes un groupe de créateurs passionnés qui aiment bricoler, et nous veillons à ce que ce projet soit open source, tant matériel que logiciel, et mettons à jour sa documentation. Techniquement, vous pouvez le construire à partir de zéro. Nous envisageons même de publier un guide sur la façon de créer une version maquette de notre produit qui serait également compatible avec notre logiciel.

Notre communauté expérimente déjà différentes versions matérielles. Consultez nos publications communautaires pour en savoir plus ou partagez vos propres expériences de bricolage ! Cela pourrait vraiment enrichir notre communauté. De plus, vous constaterez peut-être qu'avec quelques modifications du code, notre logiciel pourrait fonctionner de manière transparente avec votre configuration créative de bricolage !

### Mécanisme de contrôle

#### Une version avec connectivité sans fil ou Ethernet est-elle prévue ?
Actuellement, nous ne prévoyons pas d'ajouter une connectivité sans fil ou Ethernet à nos produits Openterface. Nous nous efforçons de fournir un contrôle rapide et stable via USB directement sur votre appareil cible, afin que vous n'ayez pas à vous soucier des problèmes de réseau.

Mais bon, nous sommes toujours ouverts aux commentaires ! Si vous pensez qu'il existe un réel besoin pour cette fonctionnalité, ou si vous avez du mal à trouver une bonne solution KVM sur IP, envoyez-nous un e-mail : info@techxartisan.com. Et n'oubliez pas que si nous décidons d'étendre nos options de connectivité, notre [communauté](https://www.reddit.com/r/Openterface_miniKVM/) sera la première à le savoir.

#### En quoi est-ce différent des autres solutions KVM telles que les KVM traditionnels, le KVM sur IP et le VNC, etc. ?
Curieux de savoir comment l'Openterface Mini-KVM se compare à d'autres solutions ? Consultez notre page détaillée [Comparaison](https://openterface.com/comparison).

#### Fonctionne-t-il avec un ordinateur cible nécessitant PS/2 ?
Non. Nous sommes conscients qu’il existe encore de nombreux vieux ordinateurs sans tête qui nécessitent des claviers et des souris PS/2. À notre connaissance, il n'existe pas encore de solution élégante pour convertir les signaux USB HID afin de les diviser en signaux de clavier et de souris PS/2. Nous étudions toujours cette question et réfléchissons à la manière de prendre en charge PS/2 dans les futures versions du Mini-KVM. Si vous connaissez des solutions qui pourraient fonctionner avec élégance avec notre Mini-KVM, partagez-les avec nous. Merci!

#### Puis-je utiliser plusieurs Mini-KVM pour contrôler plusieurs périphériques cibles à partir d'un ordinateur maître ?
Oui, vous pouvez! Notre Mini-KVM peut techniquement gérer cela, mais nous sommes encore en train de peaufiner le code et d'exécuter des tests. Nous nous efforçons de garantir que notre logiciel puisse automatiquement relier le clavier et la souris à la bonne source vidéo lorsque vous utilisez plusieurs Mini-KVM à la fois. Nous avons également amélioré l'interface utilisateur du logiciel pour la rendre plus adaptée à ce type de configuration. Restez à l'écoute des mises à jour de notre communauté lorsque nous déploierons cette fonctionnalité !

#### Est-il capable d'éteindre/rallumer l'ordinateur auquel il est connecté ?
Notre appareil ne prend pas en charge ATX (contrôle marche/arrêt pour l'ordinateur cible). Nous l'avons conçu pour qu'il soit portable, rapide pour le dépannage et stable pour le contrôle local. Il est vraiment destiné à être utilisé lorsque vous êtes là avec votre ordinateur portable, gérant un ou plusieurs ordinateurs cibles. Nous pourrions créer une version pro à l’avenir avec ATX et plus de fonctionnalités.

### Vidéo liée

#### Qu'en est-il de la latence et de la résolution vidéo ?
Notre appareil gère la vidéo 1080p avec moins de 140 millisecondes de latence, ce qui rend votre expérience de contrôle fluide et transparente.

#### Le Mini-KVM Openterface est-il adapté aux jeux de haute qualité ?
La conception actuelle se concentre sur les opérations techniques et informatiques, offrant un contrôle fiable pour la configuration et le dépannage des appareils plutôt que sur les jeux haute résolution. Bien qu’il soit idéal pour de nombreuses tâches, ce mini-KVM pourrait ne pas répondre aux besoins d’affichage des jeux de haute qualité.

#### L'affichage de haute qualité sera-t-il pris en charge dans les futures versions d'Openterface Mini-KVM ?
Nous savons que vous êtes nombreux à rechercher des fonctionnalités d’affichage de premier ordre. Bien que ce ne soit pas notre objectif principal pour le moment, sur la base de vos commentaires, nous envisageons d'ajouter des capacités d'affichage améliorées dans une version professionnelle du Mini-KVM Openterface.

#### Pourquoi Openterface Mini-KVM ne diffuse-t-il pas de vidéo sur IP locale ?
Le Mini-KVM Openterface a été conçu pour garantir des performances fiables et stables grâce à des connexions filaires, via HDMI et USB. Bien qu'il soit techniquement possible de diffuser de la vidéo sur un réseau via nos applications hôtes, nous envisageons d'ajouter une fonctionnalité VLC, et même VNC, à nos applications hôtes à l'avenir.

#### Peut-il fonctionner avec différentes sorties vidéo comme VGA, DVI, DisplayPort, etc. ??
Sorte de. L'Openterface Mini-KVM capture la vidéo via un port HDMI. Cependant, vous pouvez utiliser divers adaptateurs vidéo tels que [VGA-to-HDMI](https://openterface.com/use-cases/#streamlined-server-management), [DVI-to-HDMI](https://openterface .com/use-cases/#unified-control-for-diverse-devices), [miniHDMI-to-HDMI](https://openterface.com/use-cases/#simplified-setup-for-tech-enthusiasts) , ou DP vers HDMI, pour connecter différentes sources vidéo.

### Plus

#### Comment puis-je contribuer à ce projet ?
Absolument! Il existe de nombreuses façons de contribuer :

- Si vous aimez le codage, aidez-nous en signalant et en corrigeant les bugs.
- Bon avec les mots et la technologie ? Vous pourriez donner un coup de main avec notre documentation.
- Et si vous êtes un expert en langues, pourquoi ne pas aider à traduire nos documents pour aider davantage de personnes à embarquer ?
- Si le design est votre truc, nous sommes toujours à la recherche de nouvelles idées en matière de conception graphique, d'interface utilisateur d'application et de rendre notre appareil encore plus convivial.
- Envie de contribuer à maintenir le dynamisme de notre communauté ? Nous pourrions également utiliser vos compétences là-bas.

Votre soutien et vos [contributions](https://openterface.com/contributing/) sont ce qui permet à Openterface Mini-KVM de croître. Merci de faire partie de notre aventure! 🚀 Vous avez envie d’aider mais vous ne trouvez pas la solution idéale ? Envoyez-nous simplement un e-mail !

#### Vous souhaitez consulter notre gadget pratique ?
Hé, nous aimons faire du bruit et faire connaître notre Mini-KVM ! Si vous êtes de la presse ou si vous le faites sur les réseaux sociaux et que vous avez envie d'essayer notre produit, nous sommes tout ouïe. Que vous souhaitiez des critiques détaillées, des vidéos de déballage ou que vous vouliez simplement nous faire signe, nous sommes là pour cela et faisons des vagues ensemble ! 🎉 Envoyez-nous simplement un e-mail MAINTENANT !

#### Quelles sont les fonctionnalités avancées prévues pour le mini-KVM ?

Nous sommes enthousiasmés par le potentiel du mini-KVM et nous nous engageons à documenter toutes nos idées actuelles dans une feuille de route complète. Cette feuille de route présentera les fonctionnalités avancées et les développements futurs que nous envisageons pour l'appareil. Nous sommes impatients de développer ces fonctionnalités en collaboration avec notre communauté. Restez à l’écoute pour plus de mises à jour alors que nous continuons à grandir et à innover ensemble.

#### Comment le mini-KVM s'intègre-t-il à l'IA et quelles sont ses possibilités futures ?

Notre objectif ultime est de permettre à l’IA de contrôler les ordinateurs cibles, et Openterface joue un rôle crucial dans cette vision. Inspirés par des projets tels que [l'ordinateur autonome d'OthersideAI](https://github.com/OthersideAI/self-operating-computer), nous visons à ce que le mini-KVM agisse comme une extension des « mains » (fournissant le clavier et contrôle de la souris) et les « yeux » (capturant la source vidéo) pour l'ordinateur hôte. Si l'ordinateur hôte est suffisamment puissant, il pourrait potentiellement émuler les capacités vues dans le film "Her" de 2013. Bien qu’il s’agisse d’une aspiration future, elle met en évidence les possibilités passionnantes que nous voyons pour le mini-KVM.

---------

Votre curiosité et votre soutien alimentent nos progrès et nous voulons nous assurer que chacune de vos questions trouve une réponse. Veuillez noter qu'au fil du temps, le contenu ci-dessus dans notre FAQ peut devenir obsolète. Si votre requête n'est pas couverte dans cette FAQ, consultez toujours notre site Web [openterface.com](https://openterface.com/) pour obtenir les informations les plus récentes. N’hésitez pas non plus à rejoindre notre communauté enthousiaste. Nous sommes actifs sur notre Subreddit à l'adresse [/r/Openterface_miniKVM/](https://www.reddit.com/r/Openterface_miniKVM/) et sur notre serveur Discord, [TechxArtisan](https://discord.gg/sFTJD6a3R8) , où vous pouvez poser des questions, partager des idées ou simplement discuter de tout ce qui concerne la technologie.

De plus, n'hésitez pas à contacter directement notre équipe dédiée en envoyant un email à info@techxartisan.com. Nous aimons avoir de vos nouvelles et sommes toujours là pour vous aider !