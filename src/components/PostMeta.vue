<template>
   <div class="post-meta">
      <template v-if="post.timeToRead">{{ post.timeToRead }} min</template>
       - {{ post.date }}
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
.post-meta {
  // margin-bottom: var(--space);
  font-size: .7em;
  color: var(--black);
}
</style>
