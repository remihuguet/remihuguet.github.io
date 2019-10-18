<template>
  <Layout>
    <Author :show-title="true" />

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
import Author from '~/components/Author.vue'

export default {
  components: {
    Author
  },
  metaInfo() {
    return {
      title: 'À propos',
      meta: [
        {
          property: "og:title",
          content: this.$page.metadata.siteTitle
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
