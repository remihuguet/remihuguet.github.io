---
title: "IA, TDD et pair programming - kata game of life"
slug: "game-of-life-cursor"
description: "Où je fais un kata game of life en TDD et en pair programming avec l'IA"
date: 2025-02-07
tags: ["craft", "ia"]
locale: fr-fr
published: true
---

Le week-end du 10 novembre, c'était Global Day Of Code Retreat. Impossible pour moi d’y participer : j’ai beaucoup trop d’enfants et d’occupations 😅.

Mais le 11 novembre, j’avais un peu de temps, et j’avais envie d’expérimenter un truc qui me trottait en tête depuis un moment : faire du pair programming en TDD avec une IA générative.

💡 **Setup**

- Kata _Game of Life_
- Cursor + Claude-Sonnet 3.5 (avec un abonnement pro, les quotas gratuits n’ont pas tenu longtemps)
- Python
- Contraintes strictes : je pilote, l’IA code. Objectif : respecter au maximum les principes TDD (baby steps, fake it, refactoring systématique).

💡 **Déroulé**  
Après avoir préparé l’environnement Python, j’ai démarré avec Composer pour analyser le README et poser les contraintes. On a défini une TODO list, puis attaqué les premiers items en TDD.

💡 **Retour d’expérience**  
✅ **Le résultat est plutôt bon.** On est allés au bout du kata et le code est fonctionnel.  
✅ **L’IA force à être ultra-clair dans nos exigences.** Il faut analyser, expliciter, reformuler… et tout ça par écrit. Un excellent exercice.  
✅ **Grosse nécessité de cadrage.** L’IA a tendance à partir en roue libre et à proposer des solutions fonctionnelles mais médiocres. Sans recadrage constant (baby steps, petits tests, implémentations minimales), ça devient vite du spaghetti code.  
✅ **Qualité du code : ça dépend…** Si on ne sait pas où on va en termes d’architecture et de maintenabilité, le code dégénère vite. Sans refactoring systématique, on accumule rapidement des défauts qui rendent le tout ingérable (même pour l’IA).  
✅ **Elle ne sait pas toujours résoudre ses propres bugs.** À plusieurs reprises, elle s’est enfermée dans une boucle où elle corrigeait un test… sans vraiment le corriger. Il a fallu intervenir manuellement pour en sortir.  
✅ **Erreurs basiques.** Import manquants, réintroduction de bugs précédemment corrigés… des petites fautes qui peuvent ralentir la progression.  
✅ **Productivité ?** Difficile à dire si j’aurais été plus rapide seul. Mais il y a une vraie plus-value à déléguer à l’IA tout ce qui est “boring” ou répétitif, pour se concentrer sur le fond : les bons test cases, l’amélioration du design…

💡 **Conclusion**  

Ce n'est qu'un kata, et un kata est assez peu représentatif de notre quotidien.

Mais j'ai apprécié l'exercice, et avec mon expérience, je me sens en contrôle. L'outil m'aide, il ne me domine pas.

Mais je sens aussi que cela pourrait être assez facilement l'inverse. Comment gérer un contexte technique que je ne maîtrise pas ? Un contexte métier qui n'est pas clair pour moi ? Si je n'ai pas d'idées claires sur l'architecture ou les exigences de qualité sur le code produit ? 

---

Publié sur Linkedin https://www.linkedin.com/posts/remihuguet_quand-je-fais-un-kata-en-pair-programming-activity-7295705764273287169-f8e7