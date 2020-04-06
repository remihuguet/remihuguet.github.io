<template>
  <Layout>
    <h1 class="tag-title text-center space-bottom">
      #{{ $page.tag.title }}
    </h1>

    <div class="posts">
      <PostCard v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            title
            path
            lang {id}
            date (format: "DD/MM/YYYY")
            timeToRead
            description
            content
          }
        }
      }
    }
  }
  metadata {
    siteName
    siteUrl
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    Author,
    PostCard
  },
  metaInfo () {
    return {
      title: "#" + this.$page.tag.title,
      meta: [
        {
          property: 'og:title',
          content:  "#" + this.$page.tag.title + " - " + this.$page.metadata.siteName 
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:url",
          content: this.$page.metadata.siteUrl + this.$page.tag.path
        }
      ]
    };
  }
}
</script>

<style lang="scss">

</style>

