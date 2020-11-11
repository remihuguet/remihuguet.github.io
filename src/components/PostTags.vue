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
  margin: 0 0 0.5rem;

  &__link {
  	margin-right: .7em;
	font-size: .8em;
	font-family: var(--font-headers);
	text-transform: lowercase;
  	border-radius: var(--radius);
  }
}
</style>
