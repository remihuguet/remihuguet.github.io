---
title: "La newsletter 1 - Un manifeste de trop ?"
slug: "newsletter-1"
description: "Où il est question du TDD Manifesto et des quelques contenus qui m'ont plus."
date: 2021-07-14
tags: ["newsletter", "software", "tdd", "liens"]
locale: fr-fr
published: true
---

Si vous voulez recevoir la newsletter, [c'est par ici](https://landing.mailerlite.com/webforms/landing/f3t1z4). 
J'envoie au plus une édition par semaine, probablement beaucoup moins.


## L'édito - Un manifeste de trop ? 


Alors que je me demandai bien ce que j’allais pouvoir vous raconter dans première newsletter, la réponse est venue, comme souvent, grâce un à un peu de procrastination.

Il se trouve que s'est tenu le 10 juillet la première conférence consacrée au Test-Driven Development (http://tddconf.com/).
Durant cette conférence, a été annoncée la publication d’un Manifeste TDD, que vous pourrez lire ici : https://tddmanifesto.com/.
Je vais vous avouer quelque chose, je n’ai pu m’empêcher d’avoir une petite grimace en lisant cette nouvelle. Encore un manifeste ? Pourquoi ? Est-ce vraiment une bonne idée ?


Dans l’histoire des manifestes logiciels, nous avons eu le [Manifesto for Agile Software Development](https://agilemanifesto.org/) en 2001.
Comme cela ne suffisait pas, et en partie pour remettre l’excellence technique au cœur de l’agilité, il y a eu le [Manifesto for Software Craftsmanship](http://manifesto.softwarecraftsmanship.org/), en 2009.


Écrire un manifeste semble devenir la voie privilégiée pour tenter de normaliser et diffuser une pratique.


L’intérêt de l’idée de l’agilité ne réside pas dans l’utilisation du manifeste, ou de ses principes, ni même dans leur respect.
Sa force est qu’elle est la manifestation concrète de pourquoi nous faisons des logiciels : pour répondre au besoin d’un utilisateur.


Le software craftsmanhip manifesto est la concrétisation du fait que l’épanouissement de ceux qui font du logiciel est aussi important que pourquoi nous faisons du logiciel.
Il s’agit de l’expression d’un idéal de maîtrise de notre art.
Ces deux idées sont importantes, et deviennent de plus en plus prégnantes dans l’industrie.


Pour autant, cela vient avec un prix.


À partir du moment où vous écrivez un manifeste, vous mettez en place les bases d’une nouvelle église.
Certains se feront gardiens des écritures, et vont s’assurer de leur diffusion et de leur respect.
Le respect littéral du manifeste peut devenir plus important que l’esprit de l’idée qu’il porte.


Une fois le manifeste TDD écrit, viendront inévitablement les querelles d’écoles, la défense du dogme, et la volonté prosélyte de diffuser la bonne parole, sasn considération pour l’esprit de la pratique.


TDD est sans doute la pratique qui a le plus influencé mon évolution en tant que développeur.
C’est un outil que je considère comme fondamental, structurant, et qui mérite d’être plus largement diffusé.
A-t-on besoin d’un manifeste, au risque de conforter ceux qui défendent une vision puritaine de la pratique ?
A-t-on besoin de cet outil pour diffuser la pratique, en faire sa pédagogie ou expliquer sa valeur ?


Plus important encore, avait-on besoin d’écrire un manifeste pour cela ?
Quel sera le prochain manifeste ?
Le pair “programming manifesto” ?
Le “continuous integration manifesto” ?

L’avenir nous le dira.


## Les liens de la veille

### [La dette technique : une supercherie mythologique pour galériens de l’IT](https://waxzce.medium.com/la-dette-technique-une-supercherie-mythologique-pour-gal%C3%A9riens-de-lit-7ed0dfbf39c7)

Plus j’y réfléchis, plus je considère que la dette technique est, la plupart du temps, une arnaque.
Laissez-moi le formuler simplement : d'après mon expérience, la plupart de ce que les développeurs et leurs managers appellent la dette technique n'est que du logiciel pourri.
Un logiciel pourri apparaît de deux manières : il était pourri depuis le début, ou il est lentement devenu pourri par manque d'investissement et de discipline.


Quentin Adam dit plus ou moins la même chose dans cet article, d'un point de vue financier, très bien écrit.
À lire si vous voulez mieux comprendre pourquoi la dette technique est un concept toxique à éviter dès maintenant.


### [Discovery – Problem vs. Solution](https://svpg.com/discovery-problem-vs-solution/)

Dans cet article du SVPG, Marty Cagan explique que, lorsque vous considérez l'espace du problème par rapport à l'espace de la solution, sachez que la découverte de produits consiste à travailler dans les deux - probablement plus dans l'espace solution.
Ne séparez pas et n'isolez pas l'espace des problèmes de la gestion des produits et l'espace des solutions de l'ingénierie.
C’est ce que sont les équipes transversales et multi-expertises.


Il me semble que, dans le domaine de "l'ingénierie", Domain Drive Design encourage plus ou moins la même notion.
Il concerne l'espace du problème et de la solution, des interactions et des itérations entre ces espaces - travailler sur une solution changeant votre compréhension du problème.

DDD est un domaine d'ingénierie de produits. Il s'agit de découvrir et de créer des produits, pas seulement de faire de l’ingénierie de logiciel.


### [Farewell to fsync(): 10× faster database tests with Docker](https://pythonspeed.com/articles/faster-db-tests/)

Accélérer l'exécution des tests d’intégration pour une base de données est crucial.
Même avec une architecture propre, vous devez tester votre base de données réelle à certains moments.
C’est mieux si c’est très rapide.


Dans cet article, Itarmar Turner-Trauring propose des méthodes pour accélérer l’exécution des tests avec base de données et Docker, avec Python. Pratique.


### [Does it belong in the application or domain layer?](https://matthiasnoback.nl/2021/02/does-it-belong-in-the-application-or-domain-layer/)

L’un des principes de l’architecture propre est de n’autoriser que des dépendances des couches externes du logicel (entrées - sorties) vers les couches internes, le modèle du domaine étant au coeur.
Il est courant d’avoir une couche intértermédiaire entre le domaine et l’infrastructure, souvent appelée “Application Layer”.


Dans cet article, Matthias Noback explique comment il choisit si un service doit se trouver dans le domaine ou dans la couche application.
Il complète pour cela le principe ci-dessus avec un autre: une couche ne devrait dépendre que de la première couche interne.


### [Stop using tools as if they were solutions](https://www.thedigitalcatonline.com/blog/2021/05/25/stop-using-tools-as-if-they-were-solutions/)

Dans cet article, Leonardo Giordani expose, à travers l’exemple du test technique, comment nous favorisons une culture du code centrée autour des outils.
Or, comme il l’explique très bien, les outils ne sont pas des solutions, et c’est bien sur les problèmes que nous devrions travailler.


>We all make the same mistake here: we push (or at least accept) a culture in which we teach and learn tools as go-to solutions without teaching to identify and face problems.