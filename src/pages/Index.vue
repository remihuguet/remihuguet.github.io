<template>
  <Layout> 
    <div class="content-box">
      <h1>Hello, je suis Rémi.</h1>
      <p class="subtitle">Je suis un développeur, je construis des logiciels et aide des équipes à (mieux) construire des logiciels.</p>
    </div>
    
    <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
    <ul class="pager content-box">
        <li v-if="$page.posts.pageInfo.hasPreviousPage" class="pager__previous">
            <g-link :to="previousPageUrl">Précédent</g-link>
        </li>
        <li>Page {{$page.posts.pageInfo.currentPage}} / {{$page.posts.pageInfo.totalPages}}</li>
        <li v-if="$page.posts.pageInfo.hasNextPage" class="pager__next">
            <g-link :to="nextPageUrl">Suivant</g-link>
        </li>
  </ul>

  </Layout>
</template>

<page-query>
query ($page: Int){
  posts: allPost(perPage: 10, page: $page, filter: { published: { eq: true }}) @paginate {
    pageInfo {
      totalPages
      currentPage
      hasPreviousPage
      hasNextPage
    }
    edges {
      node { 
        id
        title
        date (format: "DD/MM/YYYY")
        timeToRead
        description
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'
import {Pager} from 'gridsome';

export default {
  components: {
    Author,
    PostCard,
    Pager
  },
  metaInfo: {
    title: 'Accueil'
  },
  computed: {
    nextPageUrl() {
      return String(this.$page.posts.pageInfo.currentPage + 1) + '/';
    },
    previousPageUrl() {
      if (this.$page.posts.pageInfo.hasPreviousPage) {
          if (this.$page.posts.pageInfo.currentPage === 2) {
              return '/';
          }
          else {
              return String(this.$page.posts.pageInfo.currentPage - 1) + '/';
          }
      }
      return '/';
    }
  }
}
</script>

<style lang="scss">
.pager {
  list-style: none;
  display:flex;
  align-items: center;
  justify-content: space-around;
  font-family: var(--font-headers);
  font-variant: small-caps;
}

.subtitle {
  font-variant: small-caps;
  color: rgba(0, 0, 0, 0.7);
}
</style>
