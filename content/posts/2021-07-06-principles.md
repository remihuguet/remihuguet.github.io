---
title: "De la relativité au logiciel, une question de principes"
slug: "relativite-logiciel-principes"
description: "Où il est question de physique, de principes premiers et d'A. Einstein."
date: 2021-06-12
tags: ["physics", "software", "thinking", "principles"]
locale: fr-fr
published: true
---


## Il était une fois, dans une vie lointaine...

Avant d’être développeur, j’ai été un jeune chercheur doctorant en physique.
Théoricien, j’ai étudié durant mon doctorat des modélisations de la matière nucléaire prenant en compte la chromodynamique quantique - la partie du modèle standard qui s’occupe des interactions fortes.


Lorsqu’on me demande ce qui m’a permis de faire la bascule de l’un à l’autre, j’ai tendance à donner la réponse facile : j’ai beaucoup codé pour mes travaux de recherche et j’étais un autodidacte familier de l’informatique.


Sauf que c’est assez faux. Ces raisons sont plutôt **pourquoi** j’ai choisi l’informatique.
Pour la même raison que j’en pratiquais beaucoup, et que je l’ai brièvement enseigné aux étudiants de première année en physique : ça me plaisait et ça m’avait toujours plu.


Ce qui m’a vraiment permis de m’adapter et de compenser mon manque de formation initiale, c’est la façon de penser du scientifique.
Une méthodologie de travail et de raisonnement que j’ai cultivé en tant que physicien: le raisonnement par les principes premiers, first principles thinking en anglais.


Je ne l’ai compris que récemment, mais c’est ce mode de pensée, assez peu utilisé dans le développement logiciel, qui me permet de réussir dans ce domaine.
Pratiquée régulièrement, cette façon de penser est une forme de superpouvoir.
Nous gagnerions beaucoup à la diffuser et l’utiliser plus dans l’ingénierie logicielle.


## Le petit Albert et la vitesse de la lumière

Lorsque j’étais étudiant en physique, le domaine que j’ai préféré découvrir était la relativité restreinte.
En effet, tous les résultats peuvent se retrouver à partir de principes de base fondamentaux simples.
Les mathématiques impliquées sont “relativement” faciles, et tout découle logiquement des postulats de départ.


La théorie de la relativité restreinte[^1] est publiée en 1905 par Albert Einstein, et elle traite de la dynamique des corps en mouvement et des équations électromagnétiques.
Cette année-là, Albert Einstein, alors employé au bureau des brevets à Berne, publie quatre articles fondateurs, qui vont poser les bases de la physique moderne.


Dans “Sur l’électrodynamique des corps en mouvement”, il s’attaque au problème de l’éther.
Supposé être le support matériel des ondes électromagnétiques, l’éther est un concept ancien, dont la théorie est améliorée progressivement au XVIIIème et XIXème siècles.
Mais elle avait été mise à mal dans les années 1880 par les expériences de Michelson et Morley[^2].
Alors que ces expériences auraient dû démontrer le mouvement relatif de la terre par rapport à l’éther, le résultat était négatif. Comme si l’éther n’existait pas.
Personne ne parvient à expliquer ce résultat à l’aide d’interprétations classiques durant vingt ans.


Einstein va résoudre le problème en reprenant le problème au fondement.
Il part des seules hypothèses qui lui semblent être fondamentales:
- les lois de la physique, mécaniques et électrodynamiques, sont les mêmes dans tous les référentiels galiléens
- puisqu’il n’est pas possible de mesurer une vitesse de la lumière différente selon le référentiel, il postule que la vitesse de la lumière dans le vide est la même quel que soit le référentiel.


Sur cette base, il construit, au long d’un article fascinant de 9000 mots, sans aucune référence ni note, une théorie du mouvement des corps dont les impacts vont être l’un des fondements de la physique développée au XXème siècle[^3].


Les résultats des articles de 1905, dont celui-ci, sont essentiels dans le développement de la physique moderne.
Mais c’est surtout dans son approche méthodologique qu’Einstein va changer la façon dont on fait de la physique.
Au lieu d’améliorer progressivement ce qui existe, de fonctionner par imitation et analogie, Einstein propose de remettre en question tous les fondements supposés acquis des théories classiques.
Il attaque les problèmes en les décomposant et en mettant de côté tout ce qui n’est pas suffisamment solide, pour se concentrer sur les hypothèses les plus sûres et bâtir à partir de là.


C’est le principe même du raisonnement par les principes premiers.


## First principles thinking

Le raisonnement par les principes premiers n’est pas spécifique de la physique, mais il est paradigmatique de la méthode scientifique.
Ce n’est que très récemment que j’ai mis un nom sur quelque chose que je pratique depuis très longtemps.
Durant mes études, j’avais notamment développé une méthode de travail et d’apprentissage basée sur le principe suivant : comprendre plutôt que mémoriser, apprendre les principes, pas des formules[^4].

Ma méthode de travail consistait à :
- identifier les quelques éléments fondamentaux à retenir, ceux qu’on ne peut pas retrouver
- s’approprier le domaine, par la parole (je me parlai beaucoup à moi-même), la reformulation et les lectures connexes
- la répétition d’exercices et démonstrations de base, si possible avec différentes méthodes
- en toutes circonstances, refuser de ne pas comprendre


À court terme, c’était un investissement important, assez peu payant. 
Ce n’est pas pour rien que le simple bachotage reste la méthode la plus répandue pour passer ses examens.
Mais à long terme, cela m’a permis de construire une compétence incroyable, qui m’a servie en tant que physicien et en tant que développeur : savoir trouver des solutions quand je n’en ai pas une toute prête.


Cette méthode de travail est une forme de raisonnement par les principes premiers.


Dans son article [First Principles: Elon Musk on the Power of Thinking for Yourself](https://jamesclear.com/first-principles), James Clear définit le raisonnement par les principes premiers de la façon suivante :

>First principles thinking is the act of boiling a process down to the fundamental parts that you know are true and building up from there.


Lorsque nous sommes confrontés à un problème ou avons une tâche à accomplir, nous cherchons d’abord une solution toute prête dans notre expérience.
C’est une forme d’économie d’énergie du cerveau : cela consomme beaucoup moins de ressources d’utiliser une expérience passée, une recette déjà apprise, de fonctionner par analogie ou par imitation.
Et heureusement que nous fonctionnons ainsi. Nous ne pouvons pas en permanence inventer de nouvelles solutions.
Être capable de sortir de ce mode est pourtant important.
Vinita Bansal dans [First Principles Thinking: The Most Powerful Way To Think](https://www.techtello.com/first-principles-thinking/) écrit:

>When faced with complicated problems at work or in life, they are inclined to follow a safe path to known practices and do not attempt a hard path that requires digging deeper and exploring unknown territory.


Utiliser le raisonnement par les principes premiers est d’autant plus difficile et exigeant que l’on n’a pas l’habitude de le pratiquer.
Cela peut même être inconfortable, car comme l’écrit Vinata Bansal, cela nécessite une rupture dans les croyances courantes et le dogme:

>A shift in thinking that discards conventional wisdom, cuts through the dogma and questions our own beliefs.


Pour cette raison, c’est aussi un excellent moyen de forger une pensée critique et originale : prendre l’habitude de décortiquer les problèmes, d’identifier les hypothèses implicites ou non, conserver uniquement celles que l’on ne peut pas déduire plus avant, construire sur ces bases.

>If you want to enhance an existing process or belief, continuous improvement is a great option. If you want to learn how to think for yourself, reasoning from first principles is one of the best ways to do it. 
>*James Clear*


Comment le raisonnement par les principes premiers m’a-t-il aidé depuis que je suis développeur logiciel ?


## Et l’ingénierie logicielle ?

Commençons par la réponse franche : je ne sais pas vraiment.
J’ai quelques pistes, des débuts de compréhension, beaucoup de questions en suspens.
La chose dont je suis sûre, c’est que ma méthode de travail et de raisonnement m’a permis de compenser les manques inhérents à un autodidacte.


Il se trouve que le développement logiciel est dominé par la méthode de travail par analogie et imitation.
Ce n’est pas étonnant, c’est le mode dominant que l’on apprend à l’école.
Cela reste par ailleurs une étape pédagogique probablement indispensable.


Pourtant, je suis toujours surpris de voir à quel point ce milieu semble attaché à des pratiques qui me paraissent mauvaises.
Il faut connaître un certain nombre d’algorithmes (les fameux tests au tableau blanc…), connaître les designs pattern du Gang Of Four[^6], connaître l’API de tel framework, …


Lorsque l’on doit résoudre un problème, le réflexe par défaut semble être de copier quelque chose qui y ressemble vaguement.
Le succès de Stack Overflow, et les innombrables mèmes et blagues sur le “Stackoverflow driven development”, constitue les meilleures preuves que, pour encore trop de développeurs, la discipline consiste surtout à imiter.


Ce n’est pas un mal en soi. Parfois, imiter ou utiliser une solution toute prête est la meilleure chose à faire.
Il m’arrive d’utiliser Stack Overflow, pour trouver de nouvelles pistes sur un problème ou me documenter.
Les problèmes surviennent quand c’est le seul mode de fonctionnement que l’on connaît.


J’ai l’intuition, la conviction même, qu’il y a beaucoup à gagner à apprendre à travailler selon les principes premiers.
Ne serait-ce qu’un peu.
Comme le dit Jame Clear, “aller un ou deux niveaux plus profond que la plupart des gens”[^5] suffit pour tirer un avantage d’utiliser le raisonnement par les principes premiers.


Mais comment l’utiliser dans le cadre de l’ingénierie de logiciels ?
Si je regarde ma propre pratique, j’ai quelques pistes.



La première application la plus évidente est pour la résolution de problèmes, en particulier le debug.
Dans le cadre de la résolution de bug, c’est une méthode terriblement efficace, qui ressemble à une démarche expérimentale.
Une façon de commencer à utiliser le raisonnement par les principes premiers dans ce cadre est de :
- rassembler les faits et observables dont on dispose (logs, capture d’écran, …)
- décortiquer et expliciter toutes les hypothèses et préconceptions implicites que l’on a sur le contexte
- identifier et écarter impitoyablement tout ce qui n’est pas fondé 
- pour chaque hypothèse restante, déterminer un processus et une méthode de vérification empirique


Ce mode de pensée peut aussi être utilisé pour la recherche de solutions innovantes à un problème. 
Analyser de façon systématique les différentes composantes d’un problème, identifier et porter un œil très critique sur les hypothèses faites apporte déjà un plus pour la conception de solutions.


La deuxième piste concerne l’apprentissage.
Pour un développeur, apprendre est une composante essentielle du métier.
Utiliser le raisonnement par les principes premiers permet d’apprendre à apprendre vite, et de développer une plasticité qui permet d’adopter rapidement de nouveaux outils ou technologies.


Je fais en sorte de toujours m’approprier les concepts en déconstruisant, reformulant, et refaisant par moi-même.
Il existe une tendance dans toute spécialité de noyer les concepts importants sous des montagnes de complexité artificielle et de bruit.
Lorsque j’aborde un nouveau sujet, j’essaie d’identifier les principes fondamentaux sous-jacents, et de le séparer des détails.


Par ailleurs, je me limite à quelques sources de documentation.
J’utilise en général abondamment les documentations officielles.
Je suis peu de cours en ligne, de tutoriels, et lis assez peu de livres techniques.
En la matière, l’important n’est pas la quantité mais la qualité.
Chaque lecture doit s’accompagner d’un travail de pratique et de reformulation, qui est très chronophage.


Reste la conception et l’architecture logicielle au sens large.
J’ai pour l’instant des intuitions sur la façon dont le raisonnement par les principes premiers m’aide dans ce domaine.
La méthodologie en elle-même apporte un regard différent sur l’architecture ou la conception de code.


Au-delà de la méthodologie, la question qui se pose est : quels sont les principes de conception fondamentaux ?
Classiquement, nous pouvons citer les suspects habituels : SOLID, KISS, DRY[^7], principes du Domain Driven Design, les designs pattern du Gang Of Four, …


Certaines de ces pratiques sont sans doute des principes premiers.
D’autres désignent déjà des notions composites, qui peuvent se déduire de principes plus fondamentaux.
Le jour où l’on doit résoudre un problème qui sort un peu du cadre, nous serons mieux armés si nous comprenons les principes fondamentaux qui ont permis de construire ces concepts.


Je ne sais pas quels sont ces principes.


Ils ne sont probablement pas universels d’ailleurs, mais dépendent du problème étudié, du contexte et du niveau d’abstraction où l’on se place.
J’ai quelques intuitions et idées, mais trop confuses encore pour les partager.

Je suis convaincu que l’utilisation plus large du raisonnement par les principes premiers dans la communauté de l’ingénierie logicielle et formuler, diffuser et enseigner des principes fondamentaux pourrait aider à améliorer la pratique et l’apprentissage du métier.


## Une méthode qui gagne à être connue


Pour expliquer le résultat négatif des expériences de Michelson et Morley, Albert Einstein est revenu aux principes les plus fondamentaux.
Sur cette base, il a écrit l’article de physique le plus fascinant de l’histoire de cette science, et changé notre compréhension de la physique et la façon dont on pratiquait la discipline.


Sans avoir la prétention d’avoir autant d’impact, cette façon de raisonner peut nous aider au quotidien dans notre métier de développeur.


Elle nécessite un investissement, et comme toute pratique nouvelle nécessite du temps pour s’acquérir et être efficace.
Bien utilisée, elle permet d’apprendre à mieux apprendre, d’apporter des solutions innovantes à des problèmes complexes.


Je pratique cette façon de travailler en tant que développeur depuis quelques années maintenant.
Que ce soit pour apprendre et me former, pour résoudre des bugs, pour aborder des problèmes complexes, cet héritage de mon passé de physicien a été mon meilleur atout en tant que développeur.


Je suis convaincu que la formulation claire, la diffusion des principes premiers de l’ingénierie logicielle, l’apprentissage de l’utilisation de ses méthodes, peut bénéficier à tous les développeurs.


Mon espoir, sans doute naïf et arrogant, est que cela pourrait être une contribution pour résoudre en partie la “crise” du logiciel, ces problèmes permanents de qualité rencontrés par notre industrie depuis 40 ans[^8].




[^1]: On la qualifie de “restreinte” car elle exclut la prise en compte de la gravitation, sujet qui sera abordé par Einstein plus tard, en 1915, à travers la relativité dite générale.
[^2]: Pour une description des expériences, voir [Wikipedia](https://fr.wikipedia.org/wiki/Exp%C3%A9rience_de_Michelson_et_Morley). 
[^3]: Pour une version française de l’article, voir par exemple [cette traduction](http://etienneklein.fr/wp-content/uploads/2016/01/De-l%C3%A9lectrodynamique-des-corps-en-mouvement.pdf).
[^4]: Attribué à Richard Feynman: 

    *"Understand, don’t memorize. Lean principles, not fomulas."*

[^5]: D'après [James Clear](https://jamesclear.com/first-principles): 

    *"In practice, you don’t have to simplify every problem down to the atomic level to get the benefits of first principles thinking. You just need to go one or two levels deeper than most people."*

[^6]: Désigne le livre “Design Patterns - Elements of reusable Object-Oriented software” par E. Gamma, R. Helm, R. Johnson et J. Vlissides en 1994.
[^7]: Dans l'ordre:

    - **SOLID** : désigne 5 principes de conception en programmation orientée objet, formulée par Robert C. Martin : Single responsibility principle, Open / Closed principle, Liskov susbtitution principle, Interface segregation principle, Dependency inversion principle.
    
    - **KISS**: *Keep it simple, stupid*
    
    - **DRY**: *Don’t Repeat Yourself*

[^8]: Vous remarquerez que, contrairement à A. Einstein, je fais pas mal de notes de bas de page.
