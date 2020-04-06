<template>
  <Layout>
    <Post :post="this.$page.note"/>
  </Layout>
</template>

<script>
import Post from '~/components/Post'

export default {
  components: {
    Post,
  },
  metaInfo () {
    return {
      title: this.$page.note.title,
      meta: [
        {
          name: 'description',
          content: this.$page.note.description
        }
      ]
    }
  }
}
</script>

<page-query>
query Note ($id: ID!) {
  note: note (id: $id) {
    title
    path
    date (format: "DD/MM/YYYY")
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
}
</page-query>
