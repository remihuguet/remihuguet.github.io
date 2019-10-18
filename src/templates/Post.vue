<template>
  <Layout>
    <div class="post-title content-box">
      <h1 class="post-title__text">
        {{ $page.post.title }}
      </h1>
      <PostMeta :post="$page.post" />
      <p v-if="$page.post.description" class="post-title__subtitle">{{ $page.post.description }}</p>
    </div>

    <div class="post content-box">
      <div class="post__content" v-html="$page.post.content" />

      <div class="post__footer">
        <PostTags :post="$page.post" />
      </div>
      <div class="post__note">
          Si vous avez aimé, et que le coeur vous en dit, n'hésitez pas à partager.
          Si vous voyez une coquille, une grosse bêtise, que vous souhaitez réagir ou discuter,
          vous pouvez m'envoyer un message sur Twitter, ou faire une demande sur le <a target='_blank' rel="noreferrer" href="https://github.com/remihuguet/remihuguet.github.io">repository</a> Github du site pour les plus courageux.
      </div>
    </div>
  </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import Author from '~/components/Author.vue'

export default {
  components: {
    Author,
    PostMeta,
    PostTags
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

<style lang="scss">
.post-title {
  text-align: center;
  
  &__text {
    margin-bottom: 0.5rem;
  }
  &__subtitle {
    color: rgba(0, 0, 0, 0.6);
    font-family: var(--font-headers);
    font-size: 1.5rem;
    padding: 1rem 0;
    border-top: solid 1px var(--link-color);
    border-bottom: solid 1px var(--link-color);
    font-variant: small-caps;
    margin-top: var(--space);
  }

}

.post {

  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__note{
    margin: 1rem 0;
    padding-top: 0.5rem;
    border-top: solid 1px rgba(0, 0, 0, 0.4);
    font-style: italic;
    color: rgba(0, 0, 0, 0.6);
  }
  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1rem;
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>
