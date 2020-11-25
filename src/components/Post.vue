<template>
    <div>
      <div class="post-title content-box">
        <h1 class="post-title__title">
          {{ post.title }}
        </h1>
        <div class="post-title__meta">
          <PostTags :post="post" />
          <PostMeta :post="post" />
        </div>
        <p v-if="post.description" class="post-title__subtitle">{{ post.description }}</p>
      </div>

      <div class="post content-box">
        <div class="post__content" v-html="post.content" />
      </div>
    </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ["post"],
  metaInfo () {
    return {
      title: this.post.title,
      meta: [
        {
          name: 'description',
          content: this.post.description
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.post-title {
  text-align: center;

  &__title {
    margin-bottom: var(--space);
    color: var(--primary-color);

    @media screen and (max-width: 650px) {
      font-size: 4rem;
    }
  }

  &__meta {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__subtitle {
    color: var(--independence);
    font-family: var(--font-headers);
    font-size: 1.3rem;
    padding: 1rem 0;
    border-top: solid 1px var(--secondary-color);
    border-bottom: solid 1px var(--secondary-color);
    font-variant: small-caps;
    margin-top: var(--space);
  }
}

.post {
  padding-top: 0;

  &__content {
    font-size: 0.95rem;

    h2:first-child {
      margin-top: 0;
    }

    h2 {
      & a {
        color: var(--secondary-color);
      }
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}
</style>
