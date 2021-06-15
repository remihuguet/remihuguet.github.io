---
title: "Pourquoi les choix techniques ne sont pas (si) importants"
description: "Où il est question de succès et de problèmes dans les équipes logicielles, et des choix techniques"
date: 2021-06-12
tags: ["agile", "software", "architecture"]
locale: fr-fr
published: true
---


## Alors, elle est bien ma stack ?

Lorsque je prends contact avec une nouvelle équipe, la première question qui m'est posée concerne les choix techniques, et leur viabilité. En particulier, pour identifier ce qui ne s'est pas bien passé : maintenabilité et qualité en berne, temps de développement qui explosent, bref, la sempiternelle litanie des problèmes rencontrés dans presque tous les projets.

Il est de bon ton alors de chercher un coupable du côté des choix techniques.


- *"Est-ce qu'il ne faudrait pas utiliser *langage machin* à la place de *langage truc* ?"*
- *"Est-ce qu'il ne faudrait pas changer le framework web, le précédent nous a causé une grosse dette technique”*
- *"On devrait passer sur une architecture microservices pour résoudre nos problèmes avec le monolithe”*

Le choix technique, c'est stratégique. Vraiment ?

En fait non. Les choix techniques ne sont pas un facteur (si) déterminant dans les réussites et les échecs d'une équipe.


## Un outil pour chaque tâche

Se concentrer sur les choix techniques est naturel. En tant qu'ingénieur nous aimons penser qu'il existe un outil adapté pour chaque tâche. Y compris pour construire des logiciels. Après tout, nous sommes formés pour ça, et aimons ça. C'est un biais structurel de notre profession : nous adorons discuter choix techniques, mérites et compromis respectifs.

Nos formations initiales et notre culture, encore très imprégnées de l'ingénierie industrielle classique et de taylorisme, nous poussent à penser qu'il nous faut tout définir au début d'un projet. Si par ailleurs, il y a un outil adapté pour chaque tâche, cela rend les choix techniques critiques : il ne faut pas se planter d'outil ! Cela structure même en grande partie le recrutement des développeurs. On recherche un développeur Javascript, Python ou Java, quand ce n'est pas un développeur React, Django ou Spring.


La multiplication exponentielle des technologies et écosystèmes disponibles pour créer du logiciel rend le sujet encore plus complexe - et potentiellement anxiogène. Cette complexité croissante du paysage technique rend les choix techniques illisibles et donc intimidants. Pour les responsables, le succès du produit semble lié aux choix techniques, ce qui renforce l'obsession du "bon choix" : si on se plante au démarrage, on risque l'échec. La mythologie autour du "bon choix" est un biais qui fait surestimer le rôle des choix techniques dans les succès de logiciel, tout comme dans les échecs.


Mais c'est au final bien humain. Pour tous les acteurs, le choix technique, c'est un sujet rassurant.

Concrète, investi par les plus grands cabinets conseils, qualifier une technologie semble être une démarche rationnelle, voire presque scientifique. Cela semble objectivable. Qui n'a jamais vu une matrice de choix, dont les critères et la notation, parfaitement arbitraire au demeurant, ne sont là que pour justifier par un vernis rationnel la décision qui a en fait déjà été prise ?

_"Nobody ever gets fired for choosing IBM"_

De même qu'on ne pouvait pas reprocher à quelqu'un de choisir IBM comme fournisseur, on ne reprochera à personne l'échec d'un projet si on peut l'imputer à une technologie, surtout si le choix a pu être rationalisé en apparence. C'est un terrain sur lequel tout le monde est à l'aise.

## Le voile des illusions


Les technologies ne peuvent pas être le facteur primaire de succès ou d'échec d'un produit.

D'un point de vue des organisations, il existe des échecs et des réussites à peu près pour n'importe écosystème technique. L'open source devenu quasiment universel, les écosystèmes se développent et se nourrissent des organisations qui les utilisent avec succès. Les échecs et difficultés se rencontrent dans tous les écosystèmes. Les technologies se développent malgré ces difficultés, et n'empêchent pas l'adoption par de nouveaux usagers. Même s'il existe des cycles dans l'usage de toutes les technologies, ils sont plus dictés par les modes et les influences du moment que par un facteur discriminant sur la réussite ou l'échec des projets qui les utilisent.


La multiplication des technologies rend au contraire le choix de plus en plus indifférent pour la majorité des problèmes.

Si vous devez faire une application web, il existe de très nombreux choix possibles, et il y a peu de chances qu'aucun soit discriminant pour la réussite du projet. La majorité des développements logiciels n'ont pas de contraintes critiques. Sauf à envoyer une capsule sur l'ISS ou à devoir encaisser le trafic de Google ou de Facebook, vous n'avez probablement pas de grosse pression à choisir la bonne technologie. Les choix techniques ont leur importance bien sûr. Mais la plupart du temps pas sur la base de leurs qualités propres.

Les choix techniques sont utilisés, inconsciemment la plupart du temps, pour éviter le facteur vraiment critique pour toute équipe logicielle : les gens qui la composent et leurs compétences.

## Le facteur X

Le projet de refonte est un grand classique de la communication sur les mérites intrinsèques supposés d'une technologie. Classiquement, après avoir fait une première version d'un logiciel qui connaît un peu de succès, il faut repartir de zéro parce que les performances ou l'évolutivité se dégradent. Il est souvent de bon ton d'incriminer les choix techniques dans ce genre de cas. Si jamais le projet de refonte se passe bien - ce qui n'est pas si courant - on sera renforcé dans cette vision des choses.


Pourtant le facteur décisif, ce sont les compétences de l'équipe, la qualité de son fonctionnement et la connaissance du domaine.

Les compétences techniques des développeurs mises en avant sont les pures compétences technologies : langage, framework, … Les compétences transverses, les tests automatisés, le Test Driven Development, l'intégration continue, le Domain Driven Design, sont plus souvent négligées. Ces compétences sont longues à acquérir, complexes à aborder et à installer, en particulier dans des équipes avec des habitudes ancrées. Elles ont bien plus d'impact sur la réussite d'une équipe que la connaissance d’un langage. À long terme, elles sont un facteur bien plus décisif sur le succès.


Le bon fonctionnement d'une équipe est un facteur clé également. Une équipe bien organisée, qui sait communiquer et collaborer est bien plus prédictive de succès que n'importe quel framework. Développer ces compétences nécessite un travail au long cours qui ne peut pas être seulement effectué par des sessions de formations. Cela implique de laisser les ingénieurs avec suffisamment d'espace à consacrer, durant leur temps de travail, pour leur formation et leur veille technique. Comme je l'écrivais [ici](/blog/2021/01/18/learning-is-the-software-engineer-job), apprendre est une activité de base pour tout ingénieur logiciel, et une entreprise qui veut vraiment réussir devrait viser 20% du temps de travail dédié à cela.


L’un des facteurs le plus critique de réussite, celui qui peut éventuellement rendre un projet de refonte pertinent, c'est la connaissance du domaine. Cette compétence intangible sur le problème que l'équipe cherche à résoudre s'accumule au fil du temps. Comprendre ses utilisateurs intimement, avoir une connaissance fine du problème à résoudre est un actif critique.


## Vous reprendrez bien des microservices ?

Les technologies et les choix techniques que nous faisons sont structurants dans l'activité de développement logiciel. Nous pouvons penser que les choix techniques sont critiques pour la réussite des produits. Nous nous y intéressons trop, par biais professionnel, parce que c'est un terrain en apparence ferme qui permet d'éviter les sujets désagréables : les problèmes humains et le développement des compétences des équipes.


Le succès, et les problèmes, d'une équipe sont déterminés par les compétences transverses, le bon fonctionnement de l'équipe, sa capacité à innover et à s'approprier le domaine et le problème qu'elle essaye de résoudre. Développer ces aspects exige un investissement important et de long terme sur les gens. Cela peut être difficile à faire, les résultats peuvent mettre du temps, c'est un terrain mouvant et complexe. Sur le long terme, c'est votre levier le plus sûr sur le succès ou l'échec d'un produit - bien plus que n'importe quel choix technologique.


Il peut arriver qu’un échec soit réellement imputable à un mauvais choix technique. Mais même dans ce cas, le vrai problème sous-jacent, c’est bien la compétence des membres de l’équipe et la connaissance du problème à résoudre, qui a mené a taper totalement à côté de la cible.

Il reste un autre déterminant majeur de succès ou d’échecs: les dysfonctionnements de l'organisation, et les problèmes systémiques en qui en découlent. Pour résoudre ces problèmes, résistez à l'envie de déployer une architecture microservices comme solution.


