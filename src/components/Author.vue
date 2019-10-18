<template>
	<div class="author content-box">
		<h1>Hello, je suis Rémi.</h1>
		<div class="author__first">
			<g-image
				alt="La tête de Rémi Huguet, avec un sourire."
				class="author__image"
				src="~/assets/images/author.png" blur="5"
			/>
			<p class="author__legend">Là c'est moi.</p>
		</div>

		<div class="author__second">
			Je suis un développeur. Je construis des logiciels et aide des équipes à (mieux) construire des logiciels depuis 2008.
			<br />
			À l'heure actuelle, je suis lead developer au sein d'<a href="https://www.eshard.com" target="_blank" rel="noreferrer">eshard</a>, où je m'occupe d'esdynamic une plateforme web
			pour data science appliquée aux attaques cryptographiques par canaux cachés.
		</div>

		<div class="author__main">
			Physicien de formation 
			(pour les curieux voici <a href="https://tel.archives-ouvertes.fr/file/index/docid/410091/filename/HUGUET_REMI_2008.pdf" rel="noreferrer" target="_blank">ma thèse de doctorat</a> et <a href="https://arxiv.org/find/nucl-th/1/au:+Huguet_R/0/1/0/all/0/1" rel="noreferrer" target='_blank'>mes publications</a>),
			j'ai conçu, développé, opéré ou piloté le développement de code de calcul pour des modèles de matière nucléaire, des systèmes applicatifs métier pour un fournisseur d'énergie, 
			des applications mobiles en tout genre, des applications métier web pour des plombiers ou des aides à domicile, une place de marché pour vignerons, ...
			<br />
			Touche à tout et généraliste, j'aime construire des produits qui améliorent le quotidien des utilisateurs, comprendre et améliorer 
			les modèles de création de valeur, et interroger en permanence le fonctionnnement des organisations, et des équipes logicielles en particulier.
		</div>
		<div class="author__main">
			J'ai {{age}} ans, je suis marié et j'ai deux enfants qui m'occupent beaucoup, pour le meilleur :).
			<br />
			En dehors du numérique, je m'intéresse à la musique, aux sciences, à l'économie et à la politique,
			je joue au ping-pong (régulièrement) et je cours (un peu moins régulièrement).
			<br />			
		</div>
	</div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Social from '~/components/Social.vue';

export default {
	props: ['showTitle'],
	computed: {
		age() {
			return Math.floor(((new Date() - new Date(1982, 2, 3))/(1000 * 3600 * 24 * 365)));
		}
	},
	components: {
		Social
	}
}
</script>

<style lang="scss">
.author {
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	padding: calc(var(--space) / 2) 0;
	align-items: center;

	> h1 {
		flex-grow: 1;
		flex-basis: 100%;
		font-size: 2.5rem;
		text-align: center;
	}
	&__legend {
		text-align: center;
		font-family: var(--font-headers);
		font-style: italic;
		margin-bottom: 0;
	}

	&__first, &__second {
		text-align: center;
		flex-shrink: 0;
		flex-basis: 50%;
	}
	&__main {
		margin: 1rem 0;
		flex-shrink: 0;
		flex-basis: 100%;
		text-align: left;
	}
	&__image {
		border-radius: 10%;
		width: 180px;
		height: auto;
		margin-bottom: 1em;
	}
}
</style>
