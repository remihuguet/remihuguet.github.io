<template>
  <Layout>
    <template v-slot:headerleft>
      <LocaleSwitcher currentLocale="en" rawpath="about" />
    </template>

    <div class="author content-box">
      <h1>About ...</h1>

      <h2>... myself</h2>
      <p>
      I'm {{age}} years old, married, and I have two kids who keep me busy, for the best 😍.
      </p>
      <p>
      Besides tech and entrepreneuship, I'm interested in music, sciences, economy and politics, I read a lot, I write too little, play ping-pong (when not in lock-in) and run (not so often).
      I'm living near Bordeaux, in the vineyard.
      </p>

      <p>Having studied physics 
      (for the braves here are <a href="https://tel.archives-ouvertes.fr/file/index/docid/410091/filename/HUGUET_REMI_2008.pdf" rel="noreferrer" target="_blank">my PhD thesis (in french)</a> and <a href="https://arxiv.org/find/nucl-th/1/au:+Huguet_R/0/1/0/all/0/1" rel="noreferrer" target='_blank'>my publications (in english)</a>),
      I'm a Jack of all trades, perpetual learner.
      </p>

      <h2>... this website</h2>

      This static site is compiled and build by <a href="https://gridsome.org/" rel="noreferrer" target="_blank">Gridsome</a> and hosted by <a href="https://www.netlify.com/" rel="noreferrer" target="_blank">Netlify</a>.

      It doesn't use any cookie.

      <h2>Legal Notice</h2>

      <ul>
        <li>Publication director: Rémi Huguet</li>
        <li><em>Rhug, SAS au capital de 100 €<br>
            7B Le Petit Bout du Banc<br>
            33640 Castres-Gironde <br>
          </em></li>
        <li>Tél: +33 6 35 59 83 155</li>
        <li>RCS Bordeaux (France), SIRET 834 224 875 00015 </li>
      </ul>
      <p>
        This site is hosted by Netlify, Inc., located at 2325 3rd Street, Suite 215, San Francisco, California 94107.
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
import LocaleSwitcher from '~/components/LocaleSwitcher.vue';

export default {
	props: ['showTitle'],
	computed: {
		age() {
			return Math.floor(((new Date() - new Date(1982, 2, 3))/(1000 * 3600 * 24 * 365)));
		}
	},
	components: {
    Social,
    LocaleSwitcher
	},
  metaInfo() {
    return {
      htmlAttrs: {
        lang: 'en-gb'
      },
      title: 'About',
      meta: [
        {
          property: "og:title",
          content: this.$page.metadata.siteName
        },
        {
          property: "og:description",
          content: 'About'
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:url",
          content: this.$page.metadata.siteUrl + '/en/about'
        }
      ]
    };
  }
}
</script>
