# Mécanique du Port USB Commutable

![switch-graphics](images/product/switch-graphics.svg#only-light){:style="width:460px"}
![switch-graphics](images/product/switch-graphics_1.svg#only-dark){:style="width:460px"}

Le mini-KVM dispose d'un port USB-A 2.0 commutable qui peut être basculé entre l'ordinateur hôte et l'ordinateur cible, mais pas les deux simultanément. Cette fonctionnalité est contrôlée à la fois par un interrupteur physique et un interrupteur logiciel dans l'application hôte. Ce document explique la mécanique et la logique derrière ces commutateurs.

## Types de Commutateurs

- **Commutateur Logiciel** : Un bouton de bascule dans l'application hôte.
      - Permet de basculer la connexion du port USB entre l'ordinateur hôte et l'ordinateur cible

- ![Toggle Switch](images/shell-icons/toggle-h-t.svg#only-light){:style="height:20px"} ![Toggle Switch](images/shell-icons/toggle-h-t_1.svg#only-dark){:style="height:20px"} **Commutateur Matériel** : Un interrupteur physique à deux positions sur l'appareil.
      - Position intérieure : Connecte à l'ordinateur hôte
      - Position extérieure : Connecte à l'ordinateur cible

## Configuration Initiale et Synchronisation

Lorsque le mini-KVM est correctement connecté et que l'application hôte est lancée :

1. La connexion réelle du port USB de l'appareil (circuit) se connecte initialement à l'hôte.
2. L'application hôte détecte la position actuelle de l'interrupteur matériel, qui est réglé soit sur l'ordinateur hôte, soit sur l'ordinateur cible.
3. Le commutateur logiciel se synchronise avec la position de l'interrupteur matériel.
4. La connexion du circuit réel est mise à jour pour correspondre aux positions des commutateurs.

!!! avertissement "Limitation Matérielle"
    Si une clé USB est déjà branchée sur l'appareil avant la mise sous tension ou le lancement de l'application hôte, l'ordinateur hôte émettra un avertissement concernant le retrait non sécurisé du périphérique USB. Il s'agit d'une limitation matérielle pour la version 1.9. Il est donc recommandé de ne pas connecter de périphérique USB avant de mettre l'appareil sous tension ou de démarrer notre application hôte.

## États Opérationnels

En raison de la présence des commutateurs matériel et logiciel, quatre états possibles peuvent se produire :

- **État 1** (Synchronisé, Connecté à l'Hôte) :
      - Commutateur Matériel : Pointe vers l'Hôte ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Commutateur Logiciel : Pointe vers l'Hôte ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Connexion du Port USB : Connecté à l'Hôte ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}

- **État 2** (Synchronisé, Connecté à la Cible) :
      - Commutateur Matériel : Pointe vers la Cible ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Commutateur Logiciel : Pointe vers la Cible ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Connexion du Port USB : Connecté à la Cible ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}

- **État 3** (Désynchronisé, USB Connecté à l'Hôte) :
      - Commutateur Matériel : Pointe vers la Cible ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Commutateur Logiciel : Pointe vers l'Hôte ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Connexion du Port USB : Connecté à l'Hôte ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}

- **État 4** (Désynchronisé, USB Connecté à la Cible) :
      - Commutateur Matériel : Pointe vers l'Hôte ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Commutateur Logiciel : Pointe vers la Cible ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Connexion du Port USB : Connecté à la Cible ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}

## Transitions et Logique des États

### De **l'État 1** (Synchronisé à l'Hôte)

- ^^***Scénario 1a***^^ : L'utilisateur Bascule le Commutateur Matériel vers la Cible
      - Met à jour la variable d'état interne vers la Cible ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Met à jour l'affichage de l'application hôte pour montrer la Cible ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Bascule la connexion du circuit réel vers la Cible ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Transition vers l'État 2, synchronisé

- ***Scénario 1b*** : L'utilisateur Clique sur le Commutateur Logiciel vers la Cible
      - Met à jour la variable d'état interne vers la Cible ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - La position du commutateur matériel reste inchangée (pointant vers l'Hôte ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"})
      - Bascule la connexion du circuit réel vers la Cible ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Transition vers l'État 3, désynchronisé

### De **l'État 2** (Synchronisé à la Cible)

- ^^***Scénario 2a***^^ : L'utilisateur Bascule le Commutateur Matériel vers l'Hôte ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"} :
      - Met à jour la variable d'état interne vers l'Hôte ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Met à jour l'affichage du commutateur logiciel pour montrer l'Hôte ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Bascule la connexion du circuit réel vers l'Hôte ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Transition vers l'État 1, synchronisé

- ***Scénario 2b*** : L'utilisateur Clique sur le Commutateur Logiciel vers l'Hôte ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"} :
      - Met à jour la variable d'état interne vers l'Hôte ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - La position du commutateur matériel reste inchangée (pointant vers la Cible ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"})
      - Bascule la connexion du circuit réel vers l'Hôte ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Transition vers l'État 4, désynchronisé

### De **l'État 3** (Désynchronisé, USB Connecté à l'Hôte)

- ^^***Scénario 3a***^^ : L'utilisateur Bascule le Commutateur Matériel vers la Cible ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"} :
      - Aucun changement aux variables
      - Transition vers l'État 2, synchronisé

- ***Scénario 3b*** : L'utilisateur Clique sur le Commutateur Logiciel vers l'Hôte ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"} :
      - Met à jour la variable d'état interne vers l'Hôte ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - La position du commutateur matériel reste inchangée (pointant vers la Cible ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"})
      - Bascule la connexion du circuit réel vers l'Hôte ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"}
      - Transition vers l'État 1, synchronisé

### De **l'État 4** (Désynchronisé, USB Connecté à la Cible)

- ^^***Scénario 4a***^^ : L'utilisateur Bascule le Commutateur Matériel vers l'Hôte ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"} :
      - Aucun changement aux variables
      - Transition vers l'État 1, synchronisé

- ***Scénario 4b*** : L'utilisateur Clique sur le Commutateur Logiciel vers la Cible ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"} :
      - Met à jour la variable d'état interne vers la Cible ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - La position du commutateur matériel reste inchangée (pointant vers l'Hôte ![host-computer](images/shell-icons/host-computer.svg#only-light){:style="height:18px"} ![host-computer](images/shell-icons/host-computer_1.svg#only-dark){:style="height:18px"})
      - Bascule la connexion du circuit réel vers la Cible ![target-computer](images/shell-icons/target-computer.svg#only-light){:style="height:18px"} ![target-computer](images/shell-icons/target-computer_1.svg#only-dark){:style="height:18px"}
      - Transition vers l'État 2, synchronisé

!!! avertissement "N'oubliez pas d'éjecter la clé USB avant de basculer l'interrupteur"
    Si le port USB est utilisé par une clé USB, assurez-vous de l'éjecter avant de basculer l'interrupteur pour transférer l'utilisation du port à un autre ordinateur.

!!! avertissement "Limitations de puissance USB"
    La puissance fournie par le port USB dépend de la carte mère de l'Hôte. Il n'est pas recommandé de connecter des périphériques USB nécessitant beaucoup de puissance. En général, la consommation électrique ne doit pas dépasser 1,5W. Connecter des périphériques à haute consommation peut entraîner un fonctionnement instable ou des dommages potentiels.

!!! Note "Conseils pour l'utilisateur"
    - **Priorité au Commutateur Logiciel** : Quelle que soit la position du commutateur matériel, cliquer sur le commutateur logiciel changera immédiatement la direction du circuit.

    - **Synchronisation du Commutateur Matériel** : Tout basculement manuel du commutateur matériel alignera son état avec le commutateur logiciel, passant à l'État 1 ou à l'État 2 depuis l'État 3 ou l'État 4 désynchronisé. Cependant, cette synchronisation ne modifie pas nécessairement la connexion réelle du circuit.

    - **Surveillance du Commutateur Matériel** : Le commutateur matériel, bien que physique, est surveillé par le logiciel et ne contrôle pas directement la direction du circuit. Au lieu de cela, le logiciel interprète la position du commutateur et gère le basculement réel du circuit.

## Pourquoi le Commutateur USB Contrôlé par Logiciel est Important

L'amélioration du commutateur USB contrôlé par logiciel introduite dans la version 1.9 est une fonctionnalité clé pour nos futurs plans de développement, en particulier pour prendre en charge des solutions KVM-over-IP comme VNC (que nous n'avons pas encore implémentées). Cette capacité permet aux utilisateurs de basculer et de partager à distance le port USB entre les ordinateurs cible et hôte, ce qui est particulièrement crucial pour faciliter les transferts de fichiers dans un environnement distant.

Cette fonctionnalité ouvre un monde de possibilités pour la gestion et le contrôle à distance. Par exemple, elle permet des transferts de fichiers entre appareils sans intervention physique, améliorant ainsi l'efficacité du dépannage et de la gestion des systèmes à distance.

Avez-vous des idées créatives sur la façon de tirer parti de cette fonctionnalité ? Nous serions ravis d'en discuter avec vous ! Rejoignez la [communauté](/community/) Openterface et partagez vos pensées 😃
