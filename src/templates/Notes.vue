<template>
  <Layout> 
    <div class="title content-box">
      <h1 class="title__title">Mes notes</h1>
      <!-- <p class="title__subtitle">Je partage ici mes réflexions dans un format de notes courtes.</p> -->
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
query ($page: Int, $lang: String!){
  posts: allNote(perPage: 10, page: $page, filter: { published: { eq: true }, lang: { eq: $lang}}) @paginate {
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
        lang {id}
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
  metadata {
    siteDescription
    siteName
    siteUrl
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
  metaInfo() {
    return {
      title: 'Accueil',
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
