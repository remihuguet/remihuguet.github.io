<template>
  <Layout> 
    <div class="title content-box">
      <lang/>
      <h1 class="title__title">{{ $page.locale.hello }}</h1>
    </div>
  </Layout>
</template>

<page-query>
query Locale ($id: ID!) {
  locale: locale (id: $id) {
    id
    path
    hello
  }
  metadata {
      siteDescription
      siteName
      siteUrl
    }
  }
</page-query>

<script>
import Lang from '~/components/LanguageSwitch.vue'

export default {
  components: {
    Lang
  },
  metaInfo() {
    return {
      title: 'Accueil',
      htmlAttrs: {
        lang: this.$page.locale.id
      },
      meta: [
        {
          property: "og:title",
          content: this.$page.metadata.siteTitle
        },
        {
          property: "og:description",
          content: this.$page.metadata.siteDescription
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:url",
          content: this.$page.metadata.siteUrl
        }
      ]
    };
  }
}
</script>

<style lang="scss">
.title {
  padding: 0;
  .title__title {
    font-size: 4rem;
    margin: 0;
  }
  .title__subtitle {
    font-size: 1.5rem;
    font-variant: small-caps;
    color: rgba(0, 0, 0, 0.7);
    margin: 0;
  }
}
.pager {
  list-style: none;
  display:flex;
  align-items: center;
  justify-content: space-around;
  font-family: var(--font-headers);
  font-variant: small-caps;
}

</style>
