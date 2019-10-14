<template>
   <div class="post-meta">
      {{ post.date }} {{fullDate()}}
      <template v-if="post.timeToRead">
        <strong>Lecture ~{{ post.timeToRead }} min.</strong>
      </template>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
.post-meta {
  margin-bottom: 0.5rem;
  font-size: .8em;
  opacity: .8;
}
</style>
