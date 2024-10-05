# Comment se connecter

## Interfaces

![host-side](images/product/host-htc.svg#only-light){:style="width:360px"}

![target-side](images/product/target-htc.svg#only-light){:style="width:360px"}

![host-side](images/product/host-htc_1.svg#only-dark){:style="width:360px"}

![target-side](images/product/target-htc_1.svg#only-dark){:style="width:360px"}

① ![Type-C vers Hôte](images/shell-icons/host.svg#only-light){:style="height:15px"} ![Type-C vers Hôte](images/shell-icons/host_1.svg#only-dark){:style="height:15px"} - **Port USB-C Hôte** (Femelle) : Port USB pour connecter l'ordinateur hôte pour le transfert de données via le hub USB intégré.

② ![Type-C vers Cible](images/shell-icons/target.svg#only-light){:style="height:18px"} ![Type-C vers Cible](images/shell-icons/target_1.svg#only-dark){:style="height:18px"} - **Port USB-C Cible** (Femelle) : Port USB pour connecter l'ordinateur hôte pour émuler la sortie HID du clavier et de la souris via le hub USB intégré.

③ ![Entrée HDMI](images/shell-icons/input.svg#only-light){:style="height:18px"} ![Entrée HDMI](images/shell-icons/input_1.svg#only-dark){:style="height:18px"} - **Port d'entrée HDMI** (Femelle) : Entrée HDMI de l'ordinateur cible.

④ ![Port USB-A](images/shell-icons/switchable-usb.svg#only-light){:style="height:26px"} ![Port USB-A](images/shell-icons/switchable-usb_1.svg#only-dark){:style="height:26px"} - **Port USB-A 2.0 Commutable** (Femelle) : Port USB hôte utilisé soit par l'ordinateur hôte, soit par l'ordinateur cible, mais pas simultanément.

!!! avertissement "Ajustement Serré"
    Veuillez noter que ce port USB-A femelle est conçu avec un mécanisme de verrouillage, nécessitant un peu plus de force pour brancher et débrancher vos appareils USB.

⑤ ![Interrupteur](images/shell-icons/toggle-h-t.svg#only-light){:style="height:20px"} ![Interrupteur](images/shell-icons/toggle-h-t_1.svg#only-dark){:style="height:20px"} - **Interrupteur** : Pour basculer la connexion du port USB-A 2.0 entre l'ordinateur hôte et l'ordinateur cible.

⑥ ![Broches d'extension](images/shell-icons/pins.svg#only-light){:style="height:15px"} ![Broches d'extension](images/shell-icons/pins_1.svg#only-dark){:style="height:15px"} - **Broches d'extension** : Pour plus d'informations, veuillez consulter [Broches d'extension](/extension-pin) pour une utilisation par les développeurs.

## Étapes de Connexion

![vers-hôte](images/product/to-host.svg#only-light){:style="height:260px"} ![vers-hôte](images/product/to-host_1.svg#only-dark){:style="height:260px"}
![vers-cible](images/product/to-target.svg#only-light){:style="height:260px"} ![vers-cible](images/product/to-target_1.svg#only-dark){:style="height:260px"}

Pour configurer votre Mini-KVM, suivez ces étapes dans l'ordre :

1. **Connexion de l'ordinateur hôte** (Côté Orange) :
    - Connectez l'ordinateur hôte au mini-KVM en utilisant le câble USB Type-C orange de 1,5 m. Branchez-le dans le port femelle Type-C du côté orange du mini-KVM.

    !!! note "Application Hôte Requise"
        L'ordinateur hôte doit avoir l'application hôte installée. Pour plus d'informations et des liens de téléchargement, veuillez consulter la [Documentation de l'Application](/app).

2. **Connexion de l'appareil cible** (Côté Noir) :
    - Connectez l'appareil cible au mini-KVM en utilisant le câble USB Type-C noir de 0,3 m. Branchez-le dans le port femelle Type-C du côté noir du mini-KVM.

3. **Connexion de la sortie vidéo de l'appareil cible** (Côté Noir) :
    - Connectez le port de sortie vidéo de l'appareil cible au port HDMI femelle du côté noir du mini-KVM. Utilisez le câble HDMI noir de 0,3 m, ou tout autre câble approprié de source vidéo à HDMI, tel qu'un câble convertisseur VGA vers HDMI.

    !!! note "Aucune Application Requise pour la Cible"
        Aucune pré-installation ou configuration n'est requise sur l'appareil cible. Tant que l'appareil cible prend en charge les opérations UI avec sortie vidéo (HDMI, VGA, etc.) et dispose d'un port USB pour recevoir les signaux de contrôle du clavier et de la souris émulés (HID), il peut être utilisé. Ainsi, les plateformes d'appareils cibles prises en charge incluent Windows, macOS, Linux, Android et iOS.

4. **Connexion du port USB-A 2.0 commutable** (Optionnel) :
    - Si vous souhaitez connecter un appareil USB au port USB-A 2.0 commutable, il est recommandé de le faire après avoir terminé les trois connexions ci-dessus et vous être assuré que l'application hôte est ouverte.