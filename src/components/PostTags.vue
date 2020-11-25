<template>
  <div class="post-tags">
    <g-link class="post-tags__link" v-for="tag in post.tags" :key="tag.id" :to="tag.path">
      <span>#</span>{{ tag.title }}
    </g-link>
  </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
.post-tags {
  margin: 0;

  > a.post-tags__link {
    margin-right: .5em;
    font-size: .7em;
    font-family: var(--font-headers);
    text-transform: lowercase;
  }
}
</style>
