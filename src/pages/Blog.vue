<template>
  <Layout> 
    <div class="title content-box">
      <h1 class="title__title">Ma veille.</h1>
      <p class="title__subtitle">Je partage ici ma veille autour du logiciel, entrepreneuriat, et autres ...</p>
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
</style>
