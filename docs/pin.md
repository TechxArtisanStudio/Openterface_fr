# Guide des Broches d'Extension

![change-cap](images/product/change-cap.svg#only-light){:style="height:300px"}
![change-cap](images/product/change-cap_1.svg#only-dark){:style="height:300px"}

Le Mini-KVM d'Openterface est équipé de broches d'extension pour le développement avancé et l'expérimentation avec des [logiciels ouverts](/app). Ces broches ne sont pas accessibles dans la configuration standard du boîtier.

### Accéder aux Broches d'Extension pour le Développement

Pour accéder aux broches d'extension :

1. Démontez l'appareil
2. Remplacez le couvercle du boîtier d'origine par un capot spécialisé pour les broches d'extension
3. Téléchargez le modèle 3D du capot pour les broches d'extension depuis notre [répertoire GitHub](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware)

!!! warning "Garantie Annulée"
    Retirer le boîtier d'origine annule la garantie du produit. Toutes les modifications ou démontages sont effectués aux risques et périls de l'utilisateur.

!!! note "Fonctionnalités Expérimentales"
    Les fonctionnalités développées avec ces broches sont expérimentales et n'ont pas été entièrement testées. Openterface n'est pas responsable des dommages, blessures ou dysfonctionnements résultant de modifications, de l'exposition des broches d'extension ou d'autres altérations de l'appareil.

### Disposition des Broches

![target-side](images/product/extension-pins-1.svg#only-light){:style="height:200px"}
![host-side](images/product/extension-pins-2.svg#only-light){:style="height:200px"}
![target-side](images/product/extension-pins-1_1.svg#only-dark){:style="height:200px"}
![host-side](images/product/extension-pins-2_1.svg#only-dark){:style="height:200px"}

Les broches d'extension fournissent les connexions suivantes :

1. Alimentation USB 5V pour composants externes
2. Données positives vers le hub USB de l'hôte
3. Données négatives vers le hub USB de l'hôte
4. Données positives vers le hub USB de la cible
5. Données négatives vers le hub USB de la cible
6. Masse

!!! danger "Connexions Incorrectes"
    Inverser VCC et GND peut causer des dommages graves à l'appareil et aux composants connectés. Vérifiez toujours les connexions des broches avant de mettre l'appareil sous tension.
