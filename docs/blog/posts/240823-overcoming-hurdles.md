---
date: 2024-08-22
authors:
  - Openterface
categories:
  - Updates
---
# Surmonter les Obstacles : Mise à Jour et Nouveau Calendrier

Bonjour à tous,

J'espère que vous allez bien. Cela fait un moment depuis notre dernière mise à jour. J'aurais aimé vous dire que tout se passe comme sur des roulettes pour Openterface, mais nous avons rencontré quelques obstacles qui vont retarder notre calendrier de livraison. Bien que ce ne soit pas ce que nous avions prévu, nous relevons ces défis avec détermination et faisons des progrès constants avec de nombreuses bonnes nouvelles à partager. Ce post est une lecture d'environ **7 minutes**, alors plongeons dans les détails pour que vous sachiez exactement où nous en sommes et ce qui nous attend.

## Réglementation, Production et Qualité

Avant de pouvoir lancer la production, nous devions passer les tests de qualité nécessaires conformément aux réglementations, en particulier la certification CE. Comme notre version du kit comprend non seulement le Mini-KVM mais aussi plusieurs accessoires, chaque pièce devait passer les tests CE. Ces tests ont pris plus de temps que prévu (il s'avère que les câbles peuvent être assez capricieux), mais la bonne nouvelle est que **nous avons obtenu la certification CE pour notre Mini-KVM et tous ses composants !** Voici un aperçu des certifications pour toutes nos pièces : Mini-KVM, câble HDMI, câble Type-C orange, câble Type-C court noir et câble VGA2HDMI. Avec la certification en main, notre calendrier de production est maintenant certain, et nos fabricants **produisent actuellement toutes les pièces** pendant que je vous parle.

![240823-0](pic/240823-0.jpg)
*Les exigences UKCA et CE sont les mêmes pour nos produits électroniques, avec la CE couvrant également la conformité RoHS.*

Il y a deux semaines, nous avons rendu visite à l'un de nos fabricants pour former leurs responsables de ligne sur le contrôle qualité des câbles orange avant de les expédier. Maintenant, TOUS les câbles orange ont été produits et sont entreposés dans un coin de notre studio.
![240823-1](pic/240823-1.jpg)
*Kevin et Shawn expliquaient les méthodes de test pour s'assurer que le câble orange fonctionne correctement avec notre Openterface Mini-KVM.*

Nous ferons la même tâche cette semaine pour former l'équipe QA en première ligne de production pour les autres pièces également. Voici des échantillons des câbles supplémentaires.
![240823-2](pic/240823-2.jpg)
*Fièrement marqués de notre logo TechxArtisan, voici des échantillons du câble HDMI, du câble Type-C court et du câble VGA-vers-HDMI.*

Nous attendons que les autres pièces et Mini-KVMs arrivent bientôt de nos fabricants, à ce moment-là, nous vérifierons la qualité de chaque composant et les emballerons correctement dans notre studio avant expédition. En d'autres termes, **notre équipe s'assurera personnellement de la qualité** avant que cela n'arrive entre vos mains.

## Expédition, Retards Potentiels et Nouvelle ETA

**L'incertitude actuelle réside dans le processus d'expédition**. Après avoir enquêté sur plusieurs entreprises de transport, nous avons constaté que l'expédition prendra plus de temps car nous transférerons probablement les colis via un entrepôt avant d'atteindre l'entrepôt de Crowd Supply. Nous débattons encore pour savoir si nous choisirons le fret maritime ou aérien—veuillez patienter encore quelques jours pendant que nous réglons les arrangements.

Le dédouanement est un autre obstacle potentiel qui pourrait causer des retards inattendus. Une fois que nos produits arriveront à l'entrepôt de Crowd Supply aux États-Unis, il leur faudra une à deux semaines pour être expédiés à l'échelle mondiale en fonction de chaque commande. Pour les soutiens en dehors des États-Unis, les colis individuels devront encore passer par l'expédition mondiale et le dédouanement dans le pays de destination.

En tenant compte de la situation actuelle et en ajoutant un peu de temps tampon, je reste prudemment optimiste que nous terminerons la livraison avant la fin de cette année, avec **une nouvelle ETA pour la mi-janvier**. Je suis vraiment désolé pour l'inconvénient et j'apprécie votre soutien et votre patience pendant ce changement.

## Matériel Finalisé V1.9

Comme vous le savez peut-être de notre précédent [post Reddit](https://www.reddit.com/r/Openterface_miniKVM/comments/1e25pco/openterface_minikvm_v19_with_pins_for_more/), nous avons décidé de **mettre à niveau notre matériel vers la version V1.9**, incluant un ensemble de broches d'extension hackables. Cela ne faisait pas partie du plan initial pour la campagne de financement participatif, mais nous pensons que cela améliore considérablement le **potentiel d'utilisation plus large** du matériel.

![240823-3](pic/240823-3.jpg)
*Les broches VCC, GND, Target D+, Target D-, Host D+ et Host D-—où 'D' signifie données USB.*

Une motivation clé était de permettre **le basculement du commutateur USB au niveau logiciel**. Pourquoi est-ce important ? Sur notre feuille de route, nous **visons à prendre en charge une solution KVM-over-IP**, telle que VNC, à l'avenir. L'idée est de faire correspondre le contrôle KVM local avec le protocole VNC, permettant aux utilisateurs de contrôler à distance l'ordinateur cible via l'ordinateur hôte. Dans un tel scénario à distance, la capacité des utilisateurs à basculer le port USB est essentielle, surtout lorsque des transferts de fichiers entre l'hôte et la cible sont nécessaires.

**Les broches d'extension ouvrent également des possibilités supplémentaires**, comme l'intégration avec iPadOS, le contrôle ATX, le pont réseau et le contournement audio. Bien que je ne plonge pas dans tous les détails ici, je vous encourage à rejoindre notre communauté Openterface pour en discuter davantage avec nous.

Cette mise à niveau matérielle pourrait potentiellement étendre notre solution Openterface pour fonctionner sur IP et inclure des fonctionnalités plus avancées tout en conservant sa force principale en tant qu'outil KVM-over-USB plug-and-play—parfait pour les professionnels de l'informatique naviguant dans des environnements informatiques incertains, comme des centres de données inconnus.

Je suis heureux de vous annoncer que la version V1.9 a passé nos tests internes de base et sera finalisée comme la version officielle pour tous nos soutiens. Cependant, cette mise à niveau matérielle nécessitera des tests supplémentaires, et tout développement basé sur ces broches d'extension sera expérimental et susceptible de contenir des bugs. C'est là que vous pouvez contribuer. Nous comptons sur la communauté open-source pour nous aider à améliorer Openterface ensemble.

## Plus de Mises à Jour Logicielles

Sur le plan logiciel, nous faisons des progrès passionnants. Nous nous plongeons maintenant dans l'application **Openterface Android** ! Découvrez ce [tweet](https://x.com/TechxArtisan/status/1825460088922071398) pour une démo précoce montrant un contrôle KVM fluide, le mouvement de la souris et les clics en action. D'autres fonctionnalités sont en cours, et comme toujours, une fois que nous aurons un peu plus peaufiné le code, **cette application sera également open-source** sur notre dépôt GitHub [Openterface_Android](https://github.com/TechxArtisanStudio/Openterface_Android).
![240823-4](pic/240823-4.jpg)
*Utiliser simplement nos doigts pour contrôler un ordinateur Linux depuis une tablette Android. Sympa !*

Notre version QT vient de recevoir une mise à jour pratique—vous pouvez maintenant [transférer du texte de l'hôte à la cible](https://x.com/TechxArtisan/status/1825919721960780131) ! Cette fonctionnalité est donc désormais prise en charge sur les applications hôtes macOS, Windows et Linux.

De plus, nous prévoyons également d'ajouter une fonctionnalité amusante — [un mouvement automatique de la souris pour empêcher votre ordinateur cible de se mettre en veille](https://x.com/TechxArtisan/status/1825471186668847241). Devons-nous opter pour la balle de ping-pong rebondissant sur l'écran ou l'effet classique de l'économiseur d'écran DVD ? Votez et commentez le [tweet](https://x.com/TechxArtisan/status/1825470086800691459) 😃

## Conception de l'Emballage, Étiquetage et Manuel

Nous avons [expérimenté divers prototypes et designs d'emballage](https://www.reddit.com/r/Openterface_miniKVM/comments/1elm4vq/almost_ready_to_finalize_our_package_design/) pour trouver le parfait équilibre entre plusieurs facteurs clés :

- Sélectionner des matériaux suffisamment robustes pour protéger le produit et ses pièces pendant l'expédition,
- Créer un étiquetage informatif qui aide les utilisateurs à comprendre le produit en un coup d'œil,
- Assurer la conformité avec les réglementations,
- Rendre l'emballage visuellement attrayant,
- Et être respectueux de l'environnement en minimisant l'utilisation de plastique autant que possible.

De plus, nous avons apporté plusieurs améliorations à l'ancien sac à outils, notamment :

- Un espace de rangement plus grand,
- Une fermeture éclair orange élégante,
- Des matériaux extérieurs et intérieurs améliorés,
- Et une poche en maille super extensible.

Nous avons choisi ce matériau car il offre le parfait équilibre entre un coût abordable, une sensation agréable au toucher et une durabilité suffisante pour protéger les articles à l'intérieur. **Nous sommes convaincus que vous allez l'adorer**.

![240823-5](pic/240823-5.jpg)

Nous mettons également à jour les étiquettes sur le boîtier en aluminium pour les rendre aussi informatives et visuellement attrayantes que possible. Nous espérons que ces améliorations amélioreront votre expérience utilisateur et faciliteront la prise en main d'Openterface.

![240823-6](pic/240823-6.jpg)

Nous finalisons le manuel Openterface, qui sera disponible en anglais, allemand, français, japonais et chinois. Désolé si nous avons manqué votre langue—notre boîte n'est pas de la taille d'un TARDIS (la cabine de police du Docteur Who) ! Mais nous ferons de notre mieux pour ajouter plus de traductions sur notre site web.

![240823-7](pic/240823-7.jpg)

## Revue de Langue par la Communauté

J'ai utilisé ChatGPT pour m'aider avec les traductions, mais il peut parfois manquer de précision dans les formulations et le choix des mots. Si cela ne vous dérange pas, j'apprécierais grandement toute aide pour revoir le contenu dans d'autres langues, en particulier pour les documents imprimés que nous sommes sur le point de finaliser. J'ai mis à jour tout le contenu textuel pour l'emballage dans notre dossier GitHub [product-printed-materials](https://github.com/TechxArtisanStudio/Openterface/tree/main/product-printed-materials), où vous pouvez examiner et soumettre des améliorations. Vous pouvez également m'envoyer un message directement. Merci !

## Remarques Finales et Progrès Continus

Nous nous excusons encore pour les retards et le changement de l'ETA de notre produit. Merci pour votre patience et de rester avec nous—nous travaillons dur pour vous livrer cela dès que possible ! Je vous tiendrai informés dès que notre expédition sera arrangée. D'autres mises à jour sont en cours, alors rejoignez notre communauté Openterface et restez à l'écoute !

À bientôt,

Billy Wang  
Chef de Produit  
Équipe Openterface | TechxArtisan