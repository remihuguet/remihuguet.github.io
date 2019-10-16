<template>
  <div class="post-card content-box">
    <div class="post-card__content">
      <g-link class="post-card__link" :to="post.path"><h2 class="post-card__title" v-html="post.title" /></g-link>
      <PostMeta class="post-card__meta" :post="post" />
      <PostTags class="post-card__tags" :post="post" />
      <p class="post-card__description" v-if="post.description" v-html="post.description" />
    </div>
  </div>
</template>

<script>
import PostMeta from "~/components/PostMeta";
import PostTags from "~/components/PostTags";

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ["post"]
};
</script>

<style lang="scss">
.post-card {
  margin-bottom: calc(var(--space) / 3);
  position: relative;
  border-bottom: solid 1px var(--link-color);

  &__title {
    font-size: 1.8rem;
    margin-top: 0;
    margin-bottom: 0;
  }

  &__tags {
    z-index: 1;
    position: relative;
  }

  &__link {
    text-decoration: none;
  }

  &__description {
    color: lighten(#292929, 20);
  }
}
</style>
