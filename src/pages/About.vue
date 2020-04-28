<template>
  <Layout>
    <div class="author content-box">
      <h1>À propos ...</h1>

      <h2>... de moi</h2>
      <p>Ce site est avant tout le reflet de mes activités professionnelles. Cependant, les frontières sont poreuses - voici donc un peu de ma sphère privée ;)</p>

      <p>
      J'ai {{age}} ans, je suis marié et j'ai deux enfants qui m'occupent beaucoup, pour le meilleur :).
      </p>
      <p>
      En dehors du numérique et de l'entrepreuneuriat, je m'intéresse à la musique, aux sciences, à l'économie et à la politique, je lis beaucoup, j'écris trop peu,
      je joue au ping-pong (régulièrement) et je cours (un peu moins régulièrement).
      Je vis dans la proche campagne au sud de Bordeaux. 
      </p>

      <p>Physicien de formation 
      (pour les curieux voici <a href="https://tel.archives-ouvertes.fr/file/index/docid/410091/filename/HUGUET_REMI_2008.pdf" rel="noreferrer" target="_blank">ma thèse de doctorat</a> et <a href="https://arxiv.org/find/nucl-th/1/au:+Huguet_R/0/1/0/all/0/1" rel="noreferrer" target='_blank'>mes publications</a>),
      je suis un touche à tout, éternel apprenant.
      </p>

      <h2>... de ce site</h2>

      Ce site statique est compilé et propulsé par <a href="https://gridsome.org/" rel="noreferrer" target="_blank">Gridsome</a> et hébergé par <a href="https://www.netlify.com/" rel="noreferrer" target="_blank">Netlify</a>.
      Il n'utilise aucun cookie et ne fait aucune mesure d'audience ou tracking.

      <h2>Mentions légales</h2>

      <ul>
        <li>Responsable de la publication: Rémi Huguet</li>
        <li><em>Rhug, SAS au capital de 100 €<br>
            7B Le Petit Bout du Banc<br>
            33640 Castres-Gironde <br>
          </em></li>
        <li>Tél: +33 6 35 59 83 155</li>
        <li>RCS Bordeaux (France), SIRET 834 224 875 00015 </li>
      </ul>
      <p>
        Ce site est hébergé par Netlify, Inc., located at 2325 3rd Street, Suite 215, San Francisco, California 94107.
      </p>
    </div>
  </Layout>
</template>

<page-query>
query {
  metadata {
    siteDescription
    siteName
    siteUrl
  }
}
</page-query>
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
	},
  metaInfo() {
    return {
      title: 'À propos',
      meta: [
        {
          property: "og:title",
          content: this.$page.metadata.siteName
        },
        {
          property: "og:description",
          content: 'À propos'
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:url",
          content: this.$page.metadata.siteUrl + '/about'
        }
      ]
    };
  }
}
</script>

<style lang="scss">
</style>
