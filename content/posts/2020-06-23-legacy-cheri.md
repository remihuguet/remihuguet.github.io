---
title: "Chérissez votre legacy"
description: "Où il est question de ce truc affreux: le legacy software."
date: 2020-06-23
tags: ["software", "quality", "legacy"]
published: true
locale: fr-fr
---

Le legacy est un concept commun dans l'ingéniérie logicielle. Il est connoté très négativement. Cet héritage est lourd à porter. Il est n'est pas maintenable, conçu et codé en dépit du bon sens. La moindre modification est difficile à mener. 

Le legacy, c'est donc ce vieux logiciel dont personne ne veut plus s'occuper. Les développeurs préfèrent les "greenfields", partir d'une page blanche et construire de zéro. Et promis, cette fois on fera mieux, pas de legacy en vue!

Michael Feathers dans _Working effectively with legacy code_ définit le legacy code comme le code sans tests. C'est une définition qui a l'avantage d'être simple. Elle coupe le monde en deux. Pourtant, je lui trouve deux défauts.

- Elle comporte beaucoup d'hypothèses implicites. Les tests sont automatisés. Ils servent à quelque chose. Ils sont faciles à comprendre et à maintenir. Une codebase bourrée de tests fragiles et incompréhensibles vaut-elle vraiment mieux que son équivalent sans tests automatisés ?
- Elle parle du code - pas du logiciel. Est-ce équivalent? Si l'on hérite d'un code, c'est sans doute parce qu'on hérite du logiciel qui va avec. Hors un logiciel a des utilisateurs.

La caractéristique première d'un logiciel hérité (_legacy software_), c'est qu'il est utilisé et qu'il crée de la valeur. C'est la raison même pour laquelle nous devons intervenir dessus. C'est bien un héritage - un patrimoine. 

Cette seule caractéristique rend le changement difficile. Quelque soit la qualité du code, de l'architecture, l'alignement avec le métier, avoir des utilisateurs qui comptent sur le produit est une énorme source de complexité pour le changement. Au fond, si les développeurs préfèrent les projets page blanche, c'est peut-être parce qu'ils n'ont pas d'utilisateurs réels. Ils peuvent être l'objet de tous les fantasmes et spéculations. 

Dès qu'il a des utilisateurs, ce nouveau projet chéri, qui devait être parfait, devient instantanément un affreux héritage sur lequel toute opération devient beaucoup plus complexe. Convaincre un utilisateur de changer son utilisation du logiciel, quand bien même ce serait pour son bien, est beaucoup plus difficile que de remanier un code pourri.

Pourtant, ces projets ont de l'intérêt. Nous créons des logiciels pour les gens, pour qu'ils soient utilisés. Ils nous permettent de gagner notre vie. Nous devrions leur prêter plus d'attention.

Voici ma définition du legacy software - et du code qui va avec. Le legacy software, c'est un logiciel qui est utilisé. Nous devrions en prendre soin.
