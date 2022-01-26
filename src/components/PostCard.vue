<template>
  <div class="post-card">
    <g-link :to="post.path">
      <div class="post-card__header">
        <PostTags class="post-card__tags" :post="post" />
        <div class="post-card__title">
          <h2> {{post.title}}</h2>
          <PostMeta class="post-card__meta" :post="post" />
        </div>
      </div>
      <p class="post-card__description" v-if="post.description" v-html="post.description" />
    </g-link>
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
  display: flex;
  border-bottom: 1px solid var(--green);
  border-left: none;
  border-right: none;
  margin: calc(var(--space)) auto;
  margin-bottom: 0;
  width: 100%;
  &:hover {
    transform: translate(5px, 5px);
    border: 2px solid var(--ruby);
  }

  & a {
    text-decoration: none;
    color: inherit;
    margin-bottom: 0;

    &:hover {
      opacity: inherit;
    }
  }

  &__header {
    padding: calc(2 * var(--space));
    padding-bottom: 0;
  }

  &__title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & > h2 {
      font-size: 1.5rem;
      line-height: 1.1;
      margin-top: 0;
      margin-bottom: var(--space);
    }
  }

  &__description {
    padding: 0 calc(2 * var(--space));
    font-size: 0.8em;
  }
}
</style>
