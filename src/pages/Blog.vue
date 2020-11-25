<template>
  <Layout> 
    <div class="title content-box">
      <h1 class="title__title">Le blog</h1>
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
        locale
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
import PostCard from '~/components/PostCard.vue'
import {Pager} from 'gridsome';

export default {
  components: {
    PostCard,
    Pager
  },
  metaInfo: {
    title: 'Accueil'
  },
  computed: {
    nextPageUrl() {
      return 'blog/' + String(this.$page.posts.pageInfo.currentPage + 1) + '/';
    },
    previousPageUrl() {
      if (this.$page.posts.pageInfo.hasPreviousPage) {
          if (this.$page.posts.pageInfo.currentPage === 2) {
              return '/blog/';
          }
          else {
              return '/blog/' + String(this.$page.posts.pageInfo.currentPage - 1) + '/';
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
  font-size: 0.8em;
}

.posts {
  display: flex;
  flex-direction: column;
  max-width: var(--content-width);
  margin: calc(3 * var(--space)) auto;
}

.title {
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title__title {
    font-size: 6em;
    margin: 0;
    color: var(--primary-color);
    text-decoration: underline;
  }

  hr {
    border: 1px solid var(--primary-color);
    width: 66.67%;
    margin-left: 0;
  }

}
</style>
