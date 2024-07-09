---
tags:
  - File Transfer
  - mini-KVM
  - Switchable USB
  - BIOS
---

# Questions Fréquemment Posées (FAQs)

Nous sommes absolument ravis de vous accueillir ici ! 🌟 Cette section est conçue pour répondre aux questions fréquemment posées sur l'Openterface Mini-KVM, que notre équipe organise périodiquement.

Plongeons dans les questions les plus fréquentes sur l'Openterface Mini-KVM.

### Basique

#### Qu'est-ce que l'Openterface Mini-KVM ?
L'Openterface Mini-KVM est un gadget KVM compact, riche en fonctionnalités et open-source, animé par [une communauté dynamique](https://openterface.com/community/). Il vous permet d'utiliser votre propre ordinateur portable pour afficher et contrôler des appareils sans écran directement via une [connexion USB et HDMI](https://openterface.com/quick-start/#connection-procedure). Cette solution KVM-over-USB capture la vidéo via HDMI et simule les entrées clavier et souris. Elle est particulièrement utile pour [une large gamme d'applications](https://openterface.com/use-cases/), s'adressant aux passionnés de technologie explorant des ordinateurs monocarte ainsi qu'aux professionnels de l'informatique dépannant des appareils sans écran. Elle élimine le besoin de moniteurs, claviers et souris supplémentaires, offrant une solution pratique dans les environnements où les connexions réseau sont peu fiables ou inexistantes.

#### Pourquoi l'Openterface Mini-KVM fait-il la différence ?
Notre [Openterface Mini-KVM](https://openterface.com/#product-features) propose un **design portable, une facilité de connexion plug-and-play, un temps de réponse rapide et un accès direct au niveau du BIOS avec un port USB-A commutable**, tous partagés entre les appareils hôtes et cibles. Il assure une expérience de contrôle fiable et rapide via une connexion HDMI et USB, sans les contraintes de la dépendance au réseau, le rendant adapté à divers [scénarios d'utilisation](https://openterface.com/use-cases/), en particulier pour les tâches informatiques et le dépannage en cours de route.

De plus, contrairement aux consoles KVM traditionnelles souvent coûteuses, notre mini-KVM est conçu pour être accessible et **abordable** pour un large éventail d'utilisateurs, des professionnels de l'informatique aux passionnés de technologie.

Mais la véritable magie réside dans notre engagement envers le **développement open-source** et l'**engagement communautaire**. En embrassant ces principes, nous construisons un écosystème dynamique où les utilisateurs peuvent collaborer, contribuer et personnaliser l'appareil pour répondre à leurs besoins uniques, favorisant ainsi l'innovation et repoussant les limites du possible.

#### Quels sont les cas d'utilisation de ce mini-KVM ?
Veuillez consulter cette page : [Cas d'utilisation](https://openterface.com/use-cases/)

#### Quels ordinateurs hôtes sont compatibles avec l'Openterface Mini-KVM ?
Pour utiliser ce mini-KVM, l'ordinateur hôte doit installer l'une de ces [applications hôtes](https://openterface.com/quick-start/#install-host-application) pour supporter MacOS, Windows et Linux. Une extension web et des applications Android sont actuellement en développement.

#### Quels appareils cibles sont compatibles avec l'Openterface Mini-KVM ?
Aucune pré-installation ou configuration n'est requise sur l'appareil cible. Tant que l'appareil cible prend en charge les opérations UI avec sortie vidéo (par exemple, HDMI, VGA) et dispose d'un port USB pour recevoir les signaux de contrôle émulés de clavier et de souris (HID), il peut être utilisé. Ainsi, les plateformes d'appareils cibles prises en charge incluent Windows, MacOS, Linux, Android et iOS.

#### Y aura-t-il un support technique et une documentation disponibles pour l'Openterface Mini-KVM ?
Une documentation exhaustive pour l'Openterface Mini-KVM est disponible sur notre site web à [Openterface.com](https://www.openterface.com/). Nous mettons continuellement à jour ces ressources pour optimiser votre expérience avec l'appareil.  
Pour le support technique, nous vous invitons à rejoindre notre [communauté](https://openterface.com/community/) pour partager vos questions et idées avec d'autres utilisateurs et notre équipe d'experts. Si votre problème persiste, notre équipe est disponible pour fournir une assistance technique supplémentaire. Vous pouvez nous contacter par email à : info@techxartisan.com.

#### Pourquoi votre dépôt open-source est-il vide ?
Nous nous excusons pour le retard. Nous avons été exceptionnellement occupés par diverses tâches administratives liées à notre campagne de financement participatif. Rassurez-vous, nous nous engageons pleinement à open-sourcer à la fois le matériel et le logiciel de notre projet. Veuillez faire preuve de patience pendant que nous finalisons les préparatifs. Nous commencerons à publier les détails matériels et le code progressivement au cours des deux à trois prochaines semaines, visant à tout rendre disponible avant de commencer les expéditions à nos soutiens.

En attendant, vous pouvez en apprendre plus sur notre projet ici : [Comment ça marche](https://openterface.com/how-it-works/). Cette ressource fournit un aperçu de notre intégration de capture USB-HDMI, mettant en vedette la puce **CH9329** pour le contrôle du clavier et de la souris. Les passionnés de technologie trouveront peut-être les détails sur la puce CH9329 particulièrement intéressants.

De plus, notre mini-KVM utilise la puce **CH340**, supportant deux hubs USB intégrés pour les côtés hôte et cible. Notre mini-KVM est comparable à de nombreuses cartes de capture vidéo actuellement sur le marché. Pour plus de détails techniques, veuillez consulter cette [fiche technique](https://docs.google.com/document/d/1UPw5RwGTp0AjKL3wOvQZUS1hp3IPMxkCujtqy5haeP0/edit?usp=sharing).

Merci pour votre compréhension et votre patience !

### Logiciel

#### Où puis-je télécharger les applications hôtes ?
Visitez notre [page d'installation des applications hôtes](https://openterface.com/quick-start/#install-host-application) pour les téléchargements officiels. Comme notre projet est open source, vous pouvez trouver des versions alternatives des applications hôtes compatibles avec notre mini-KVM développées par la communauté. Bien que celles-ci puissent offrir des fonctionnalités supplémentaires, assurez-vous de vérifier leurs pratiques en matière de sécurité et de confidentialité. TechxArtisan Studio ne peut pas garantir la sécurité des applications tierces. Merci !

#### Quand l'application hôte pour Android sera-t-elle disponible ?
Nous développons actuellement l'application hôte pour Android, mais elle est moins prioritaire par rapport aux versions pour les systèmes d'exploitation courants tels que macOS, Windows et Linux. Nous vous remercions de votre patience et vous encourageons à rester informé des mises à jour. Si vous êtes intéressé à aider au développement, n'hésitez pas à rejoindre notre communauté ou à nous contacter par email !

#### Existe-t-il une application hôte prenant en charge ChromeOS ?
Oui, mais elle est actuellement en cours de développement. Nous prévoyons de créer une extension web conçue pour prendre en charge les navigateurs Chrome et Firefox. Bien que sa priorité de développement soit légèrement inférieure à celle des systèmes d'exploitation courants tels que macOS, Windows et Linux, nous y travaillons activement. Merci de votre patience et restez informé des mises à jour ! Si vous êtes intéressé à contribuer à notre développement, rejoignez notre communauté ou envoyez-nous un email !

#### Existe-t-il une application hôte prenant en charge les appareils mobiles d'Apple ?
Nous explorons actuellement la compatibilité avec les systèmes mobiles d'Apple, tels que iOS et iPadOS. En raison des contrôles stricts d'Apple, ces plateformes peuvent ne pas prendre en charge les connexions filaires avec des appareils tiers. Cependant, la situation pourrait évoluer, ou il pourrait y avoir des solutions de contournement potentielles. Si vous avez des idées ou des suggestions, nous vous invitons à rejoindre notre communauté pour en discuter avec nous. Nous nous engageons à améliorer la commodité de notre appareil en prenant en charge le plus de systèmes possible. Si vous êtes intéressé à contribuer à notre développement, rejoignez notre communauté ou envoyez-nous un email !

#### Que faire si la touche F11 ne fonctionne pas sur les applications macOS ?
Sur macOS, appuyer sur F11 affiche le bureau macOS au lieu de transmettre la touche F11 à l'application et à l'ordinateur cible. Pour résoudre ce problème, vous pouvez dissocier F11 de la fonction "Afficher le bureau". Voici comment procéder :

1. Allez dans les Réglages Système.
2. Sélectionnez Bureau et Dock.
3. Faites défiler vers le bas et cliquez sur le bouton "Raccourcis…".
4. Trouvez "Afficher le bureau" et définissez-le sur le trait d'union (-) en bas de la liste déroulante.
5. Cette modification permettra à la touche F11 de passer à travers votre application sur l'ordinateur cible.

### Port USB commutable et transfert de fichiers

#### Le Mini-KVM Openterface peut-il prendre en charge les transferts de fichiers ?
Oui, le Mini-KVM Openterface comprend un port USB-A commutable partagé entre l'hôte et les appareils cibles. Avec une clé/disque USB branché sur ce port, les fichiers peuvent être transférés entre l'hôte et la cible en suivant ces étapes :

1. Montez une clé USB sur l'hôte lorsque le petit interrupteur noir est réglé du côté du port Type-C de l'hôte.
2. Copiez les fichiers sur ce lecteur monté.
3. Après la copie, démontez le lecteur sans le débrancher physiquement.
4. Basculez le petit interrupteur noir de l'autre côté. Cette action connecte le port USB-A à la cible.
5. Montez la clé USB sur l'appareil cible et copiez/déplacez les fichiers du lecteur, complétant ainsi le processus de transfert de fichiers de l'hôte vers la cible.

Cette méthode peut également être utilisée dans le sens inverse.

#### Le port USB-A commutable peut-il être basculé au niveau logiciel ?
Le design actuel ne supporte pas le basculement au niveau logiciel ; il ne peut être basculé physiquement pour l'instant.

Mettre en œuvre le basculement au niveau logiciel nécessiterait un nouveau design, intégrant un bouton et un indicateur LED (soit vert/bleu ou allumé/éteint) pour indiquer si le port USB est réglé sur le mode hôte ou cible.

De plus, cela nécessiterait l'intégration d'une puce supplémentaire, entraînant une augmentation des coûts en termes de matériel et de développement logiciel. Le design actuel représente un compromis, visant à équilibrer rentabilité et fonctionnalité de base. Malgré le potentiel d'augmentation des coûts, nous sommes intéressés à incorporer cette fonctionnalité dans une version future pour une meilleure expérience utilisateur.

#### Pourquoi USB 2.0 et non USB 3.0 pour ce port USB commutable ?
USB 2.0 est entièrement capable de gérer la capture vidéo à 1080p@30Hz, la transmission de signaux HID (pour clavier et souris), et la gestion des transferts de fichiers à vitesse standard entre les ordinateurs cibles et hôtes. Cela rend notre produit rapide, léger et portable, exactement comme conçu.

L'utilisation de l'USB 3.0 rendrait la conception du PCB beaucoup plus complexe et augmenterait considérablement les coûts de production. De plus, bien que l'USB 3.0 offre des transferts de fichiers plus rapides, il génère également plus de chaleur, ce qui pourrait raccourcir la durée de vie de l'appareil.

Nous envisageons l'application de l'USB 3.0 pour la prochaine version, ciblant des scénarios d'utilisation plus professionnels et des solutions KVM stationnaires.

### Technique

#### Le Mini-KVM Openterface est-il open source ?
Oui ! Nous allons ouvrir à la fois [le matériel](/how-it-works/#explore-hardware-details) et [le logiciel](https://openterface.com/quick-start/#install-host-application). Patientez encore un peu ; nous devons arranger pas mal de choses avant l'ouverture. Si vous êtes intéressé à [contribuer](/contributing/), faites-le nous savoir par email : info@techxartisan.com. Restez informé !

#### Puis-je accéder aux paramètres BIOS d'un appareil ?
Oui, la connexion directe du Mini-KVM Openterface permet d'accéder aux paramètres BIOS ou firmware de bas niveau.

Cette fonctionnalité se distingue des solutions KVM basées sur logiciel ou des applications de contrôle à distance comme TeamViewer et Zoom, qui ne sont généralement pas capables d'interactions au niveau BIOS.

#### Pourquoi le contrôle du clavier ne fonctionne-t-il pas au niveau du BIOS pour certains ordinateurs cibles plus anciens ?
Il semble que certains anciens BIOS d'ordinateurs ne puissent pas reconnaître le hub USB de notre appareil, ce qui peut entraîner des problèmes avec notre clavier et notre souris émulés ne fonctionnant pas correctement au niveau du BIOS. Nous surveillons ce problème.

Nous avons eu un rapport indiquant que sur un ordinateur HP spécifique, le HP Engage Flex Pro, le clavier ne fonctionne pas à l'écran du BIOS, bien qu'il fonctionne normalement une fois le système d'exploitation démarré.

Si vous rencontrez le même problème, veuillez nous le signaler via un problème GitHub.

#### Comment les données vidéo/information sont-elles transmises entre les appareils ?
Les données vidéo sont capturées via HDMI et transmises via USB 2.0 à l'ordinateur hôte pour affichage. Le port USB 2.0 commutable permet le partage de clé USB ou d'autres appareils USB entre la cible et l'hôte.

#### Comment le Mini-KVM Openterface gère-t-il l'alimentation ?
L'appareil ne nécessite pas d'alimentation externe, car il est conçu pour être alimenté via ses connexions USB Type-C de l'hôte, améliorant ainsi sa portabilité. Dans les scénarios où l'appareil cible est un micro-ordinateur basse consommation, tel qu'un Raspberry Pi, il pourrait être alimenté par l'hôte via le port USB commutable du Mini-KVM. Cependant, cela n'est pas recommandé. La méthode standard de fonctionnement consiste à avoir une alimentation externe pour l'appareil cible.

#### Puis-je fabriquer cet appareil moi-même ?
Absolument ! Nous sommes une équipe de passionnés du DIY, et nous nous assurons que ce projet soit open source, tant au niveau du matériel que du logiciel, et nous mettons à jour sa documentation. Techniquement, vous pouvez le construire de zéro. Nous envisageons même de publier un guide sur la façon de fabriquer une version breadboard de notre produit qui serait également compatible avec notre logiciel.

Notre communauté expérimente déjà différentes versions matérielles. Consultez nos publications communautaires pour en savoir plus ou partagez vos propres expériences DIY ! Cela pourrait vraiment enrichir notre communauté. De plus, vous pourriez découvrir qu'avec quelques ajustements du code, notre logiciel pourrait fonctionner parfaitement avec votre configuration DIY créative !

### Mécanisme de Contrôle

#### Y a-t-il des plans pour une version avec connectivité sans fil ou Ethernet ?
Actuellement, nous ne prévoyons pas d'ajouter la connectivité sans fil ou Ethernet à nos produits Openterface. Nous nous concentrons sur la fourniture d'un contrôle rapide et stable via USB directement à votre appareil cible, afin que vous n'ayez pas à vous soucier des problèmes de réseau.

Mais nous sommes toujours ouverts aux suggestions ! Si vous pensez qu'il y a un réel besoin pour cette fonctionnalité, ou si vous avez du mal à trouver une bonne solution KVM-over-IP, envoyez-nous un email : info@techxartisan.com. Et rappelez-vous, si nous décidons d'élargir nos options de connectivité, notre [communauté](https://www.reddit.com/r/Openterface_miniKVM/) sera la première informée.

#### En quoi cela diffère-t-il des autres solutions KVM comme les KVM traditionnels, le KVM-over-IP, et le VNC, etc. ?
Curieux de savoir comment l'Openterface Mini-KVM se compare aux autres solutions ? Consultez notre page de [Comparaison](https://openterface.com/comparison).

#### Fonctionne-t-il avec un ordinateur cible nécessitant PS/2 ?
Non. Nous sommes conscients qu'il existe encore de nombreux anciens ordinateurs sans écran qui nécessitent des claviers et des souris PS/2. À notre connaissance, il n'existe pas encore de solution élégante pour convertir les signaux USB HID en signaux de clavier et de souris PS/2. Nous continuons à étudier cette question et envisageons comment prendre en charge le PS/2 dans les futures versions du Mini-KVM. Si vous connaissez des solutions qui pourraient fonctionner élégamment avec notre Mini-KVM, veuillez les partager avec nous. Merci !

#### Puis-je utiliser plusieurs Mini-KVM pour contrôler plusieurs appareils cibles depuis un ordinateur maître ?
Oui, vous pouvez ! Notre Mini-KVM peut techniquement gérer cela, mais nous peaufinons encore le code et effectuons des tests. Nous nous concentrons sur le fait que notre logiciel puisse automatiquement lier le clavier et la souris à la bonne source vidéo lorsque vous utilisez plus d'un Mini-KVM à la fois. De plus, nous améliorons l'interface utilisateur du logiciel pour l'adapter à ce type de configuration. Restez à l'écoute de nos mises à jour communautaires pour savoir quand nous déploierons cette fonctionnalité !

#### Est-il capable d'éteindre/ allumer l'ordinateur auquel il est connecté ?
Notre appareil ne prend pas en charge l'ATX (contrôle de l'alimentation marche/arrêt pour l'ordinateur cible). Nous l'avons conçu pour être portable, rapide pour le dépannage et stable pour le contrôle local. Il est vraiment destiné à être utilisé lorsque vous êtes sur place avec votre ordinateur portable, gérant un ou plusieurs ordinateurs cibles. Nous pourrions développer une version pro à l'avenir avec l'ATX et plus de fonctionnalités.

### Vidéo

#### Qu'en est-il de la latence vidéo et de la résolution ?
Notre appareil gère la vidéo en 1080p avec une latence inférieure à 140 millisecondes, rendant votre expérience de contrôle fluide et transparente.

#### L'Openterface Mini-KVM est-il adapté aux jeux de haute qualité ?
Le design actuel se concentre sur les opérations techniques et informatiques, fournissant un contrôle fiable pour la configuration des appareils et le dépannage plutôt que pour les jeux en haute résolution. Bien qu'il soit excellent pour de nombreuses tâches, ce mini-KVM pourrait ne pas répondre aux besoins d'affichage des jeux de haute qualité.

#### Y aura-t-il une prise en charge d'un affichage de haute qualité dans les futures versions de l'Openterface Mini-KVM ?
Nous savons que beaucoup d'entre vous recherchent des fonctionnalités d'affichage de premier ordre. Bien que cela ne soit pas notre priorité actuelle, en fonction de vos retours, nous envisageons d'ajouter des capacités d'affichage améliorées dans une version professionnelle de l'Openterface Mini-KVM.

#### Pourquoi l'Openterface Mini-KVM ne diffuse-t-il pas la vidéo via IP locale ?
L'Openterface Mini-KVM a été conçu pour assurer des performances fiables et stables grâce à des connexions filaires, en utilisant HDMI et USB. Bien qu'il soit techniquement possible de diffuser la vidéo sur un réseau via nos applications hôtes, nous envisageons d'ajouter une fonctionnalité VLC, et même VNC à nos applications hôtes à l'avenir.

#### Peut-il fonctionner avec différentes sorties vidéo comme VGA, DVI, DisplayPort, etc. ?
En quelque sorte. L'Openterface Mini-KVM capture la vidéo via un port HDMI. Cependant, vous pouvez utiliser divers adaptateurs vidéo tels que [VGA-to-HDMI](https://openterface.com/use-cases/#streamlined-server-management), [DVI-to-HDMI](https://openterface.com/use-cases/#unified-control-for-diverse-devices), [miniHDMI-to-HDMI](https://openterface.com/use-cases/#simplified-setup-for-tech-enthusiasts), ou DP-to-HDMI, pour connecter différentes sources vidéo.

### Plus

#### Comment puis-je contribuer à ce projet ?
Absolument ! Il existe de nombreuses façons de participer :

- Si vous êtes passionné par la programmation, aidez-nous en signalant et en corrigeant les bugs.
- Doué pour les mots et la technologie ? Vous pourriez nous donner un coup de main avec notre documentation.
- Et si vous êtes un expert en langues, pourquoi ne pas aider à traduire nos documents pour permettre à plus de gens de nous rejoindre ?
- Si le design est votre truc, nous recherchons toujours des nouvelles idées pour le design graphique, l'interface utilisateur de l'application et rendre notre appareil encore plus convivial.
- Envie d'aider à animer notre communauté ? Nous pourrions également utiliser vos compétences ici.

Votre soutien et vos [contributions](https://openterface.com/contributing/) sont ce qui fait grandir Openterface Mini-KVM. Merci de faire partie de notre aventure ! 🚀 Vous avez envie d'aider mais ne voyez pas de rôle parfait ? Envoyez-nous simplement un email !

#### Vous voulez évaluer notre gadget pratique ?
Hé, nous adorons faire du bruit et faire connaître notre Mini-KVM ! Si vous êtes journaliste ou actif sur les réseaux sociaux et souhaitez essayer notre produit, nous sommes tout ouïe. Que vous soyez passionné par les critiques détaillées, les vidéos de déballage ou que vous souhaitiez simplement nous donner un coup de pouce, nous sommes là pour cela et faisons des vagues ensemble ! 🎉 Envoyez-nous un email MAINTENANT !

#### Quelles sont les fonctionnalités avancées prévues pour le mini-KVM ?

Nous sommes enthousiastes quant au potentiel du mini-KVM et nous nous engageons à documenter toutes nos idées actuelles dans une feuille de route complète. Cette feuille de route décrira les fonctionnalités avancées et les développements futurs que nous envisageons pour l'appareil. Nous sommes impatients de développer ces fonctionnalités en collaboration avec notre communauté. Restez à l'écoute pour plus de mises à jour alors que nous continuons de grandir et d'innover ensemble.

#### Comment le mini-KVM s'intègre-t-il avec l'IA et quelles sont ses futures possibilités ?

Notre objectif ultime est de permettre à l'IA de contrôler les ordinateurs cibles, et l'Openterface joue un rôle crucial dans cette vision. Inspirés par des projets comme [l'ordinateur auto-opérant d'OthersideAI](https://github.com/OthersideAI/self-operating-computer), nous visons à ce que le mini-KVM agisse comme une extension des 'mains' (fournissant le contrôle du clavier et de la souris) et des 'yeux' (capturant la source vidéo) pour l'ordinateur hôte. Si l'ordinateur hôte est suffisamment puissant, il pourrait potentiellement émuler les capacités vues dans le film de 2013 "Her". Bien que cela soit une aspiration future, cela met en lumière les possibilités excitantes que nous voyons pour le mini-KVM.

--------

Votre curiosité et votre soutien alimentent notre progression, et nous voulons nous assurer que chacune de vos questions trouve une réponse. Veuillez noter qu'avec le temps, le contenu ci-dessus de notre FAQ peut devenir obsolète. Si votre question n'est pas couverte dans cette FAQ, vérifiez toujours notre site web [openterface.com](https://openterface.com/) pour les informations les plus récentes. N'hésitez pas à rejoindre notre communauté enthousiaste. Nous sommes actifs sur notre Subreddit à [/r/Openterface_miniKVM/](https://www.reddit.com/r/Openterface_miniKVM/) et notre serveur Discord, [TechxArtisan](https://discord.gg/sFTJD6a3R8), où vous pouvez poser des questions, partager des idées ou simplement discuter de tout ce qui concerne la technologie.

De plus, n'hésitez pas à contacter directement notre équipe dédiée en envoyant un email à info@techxartisan.com. Nous aimons avoir de vos nouvelles et sommes toujours là pour vous aider !

<section class="dialogue-section-white" id="dialogues-section">
    <div class="container">
    <div class="callout-button-container">
        <div class="dialogue-bubble" id="op-bubble">
         <img src="/images/op-avatar.jpg" alt="Avatar" class="avatar" draggable="false">
         <p>Question ?🤔</p>
         <a href="https://www.reddit.com/r/Openterface_miniKVM/" class="md-button md-button--primary" id="join-waitlist-button">Demandez sur Subreddit</a>
        </div>
      <div class="dialogue-bubble" id="op-bubble">
        <img src="/images/op-avatar.jpg" alt="Avatar" class="avatar" draggable="false">
        <p>En savoir plus 📖</p>
        <a href="/quick-start" class="md-button md-button--primary" id="join-waitlist-button">Docs</a>
      </div>
      <div class="dialogue-bubble" id="op-bubble">
        <img src="/images/op-avatar.jpg" alt="Avatar" class="avatar" draggable="false">
        <p>Soutenez-nous ! ❤️</p>
        <a href="https://www.crowdsupply.com/techxartisan/openterface-mini-kvm" class="md-button md-button--primary" id="join-waitlist-button">Aller à Crowd Supply</a>
      </div>
    </div>
</section>