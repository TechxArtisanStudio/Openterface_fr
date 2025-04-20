---
title: "Port USB Commutable"
description: "Découvrez le système de commutation USB matériel-logiciel double dans l'Openterface Mini-KVM. Comprenez les quatre états opérationnels, les directives de sécurité et les futures capacités d'accès à distance."
keywords: "Commutation USB, switch KVM, interrupteur matériel, interrupteur logiciel, contrôle de port USB, KVM over USB, KVM over IP, accès à distance, gestion de périphériques USB, périphériques informatiques, gestion de l'alimentation USB"
---

# **Guide du Port USB Commutable** | Openterface Mini-KVM

L'appareil mini-KVM dispose d'un seul port USB-A 2.0 qui peut **se connecter soit** à l'ordinateur hôte, soit à l'ordinateur cible, mais **jamais aux deux en même temps**.

Le contrôle provient de deux interrupteurs :

- **Interrupteur Matériel** : Un commutateur physique à deux positions sur l'appareil ![Toggle Switch](https://assets.openterface.com/images/shell-icons/toggle-h-t.svg#only-light){:style="height:20px"} ![Toggle Switch](https://assets.openterface.com/images/shell-icons/toggle-h-t_1.svg#only-dark){:style="height:20px"} (vers l'intérieur = hôte, vers l'extérieur = cible).
- **Interrupteur Logiciel** : Un bouton de commutation dans l'application hôte qui redirige instantanément le port USB vers l'hôte ou la cible.

## États Opérationnels

La connexion du port USB-A dépend des positions de l'**Interrupteur Matériel** et de l'**Interrupteur Logiciel**. Le tableau suivant résume les quatre états possibles :

| **État** | **Interrupteur Matériel** | **Interrupteur Logiciel** | **Port Connecté À** | **État de Synchronisation** |
|----------|---------------------------|---------------------------|---------------------|----------------------------|
| 1        | Hôte                      | Hôte                      | Hôte                | Synchronisé                |
| 2        | Cible                     | Cible                     | Cible               | Synchronisé                |
| 3        | Cible                     | Hôte                      | Hôte                | Désynchronisé (→ Hôte)     |
| 4        | Hôte                      | Cible                     | Cible               | Désynchronisé (→ Cible)    |

- **Synchronisé** signifie que les paramètres matériels et logiciels correspondent.
- **Désynchronisé** signifie que le logiciel remplace temporairement l'interrupteur matériel jusqu'à ce que l'interrupteur matériel soit déplacé à nouveau.

Tout mouvement manuel de l'interrupteur matériel mettra à jour l'affichage du logiciel et reviendra à un état synchronisé.

Au démarrage, l'appareil se connecte par défaut à l'hôte. Le logiciel détecte la position de l'interrupteur matériel et se synchronise en conséquence.

!!! warning "N'oubliez pas d'éjecter la clé USB avant de basculer l'interrupteur"
    Si le port USB est utilisé par une clé USB, assurez-vous d'éjecter la clé USB avant de basculer l'interrupteur pour transférer l'utilisation du port vers un autre ordinateur.

??? note "Comment partager une clé/disque USB entre les appareils Hôte et Cible ?"
    Les fichiers peuvent être transférés entre l'hôte et la cible en suivant ces étapes :

    1. Montez une clé USB sur l'hôte lorsque le petit interrupteur noir est réglé du côté du port Type-C de l'hôte.
    2. Copiez les fichiers sur ce lecteur monté.
    3. Après la copie, démontez le lecteur sans le débrancher physiquement.
    4. Basculez le petit interrupteur noir de l'autre côté. Cette action bascule la connexion du port USB-A vers la cible.
    5. Montez la clé USB sur l'appareil cible et copiez/déplacez les fichiers du lecteur, complétant ainsi le processus de transfert des fichiers de l'hôte vers la cible.

    Cette méthode peut également être utilisée dans la direction opposée.

!!! Note "Guide de l'Utilisateur"
    - **Priorité de l'Interrupteur Logiciel** : Quelle que soit la position de l'interrupteur matériel, cliquer sur l'interrupteur logiciel changera immédiatement la direction du circuit.

    - **Synchronisation de l'Interrupteur Matériel** : Toute bascule manuelle de l'Interrupteur Matériel alignera son état avec l'Interrupteur Logiciel, passant soit à l'État 1 ou à l'État 2 depuis l'État 3 ou 4 désynchronisé. Cependant, cette synchronisation ne modifie pas nécessairement la connexion réelle du circuit.

    - **Surveillance de l'Interrupteur Matériel** : L'Interrupteur Matériel, bien que physique, est surveillé par le logiciel et ne contrôle pas directement la direction du circuit. Au lieu de cela, le logiciel interprète la position de l'interrupteur et gère la commutation réelle du circuit.