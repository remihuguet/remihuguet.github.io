<template>
  <Layout>
    <Author :show-title="true" />

  </Layout>
</template>


<script>
import Author from '~/components/Author.vue'

export default {
  components: {
    Author
  },
  metaInfo: {
    title: 'À propos'
  }
}
</script>
