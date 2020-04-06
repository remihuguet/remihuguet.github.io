<template>
  <Layout>
    <Post :post="this.$page.post" />
  </Layout>
</template>

<script>
import Post from '~/components/Post';

export default {
  components: {
    Post
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        },
        {
          property: 'og:title',
          content:  this.$page.post.title + " - " + this.$page.metadata.siteName 
        },
        {
          property: "og:type",
          content: "article"
        },
        {
          property: "og:url",
          content: this.$page.metadata.siteUrl + this.$page.post.path
        }
      ]
    };
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "DD/MM/YYYY")
    lang {id}
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
  metadata {
    siteName
    siteUrl
  }
}
</page-query>
