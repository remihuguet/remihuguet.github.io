<template>
  <div class="bg-wrapper">
    <div class="whyme">
      <div class="whyme__pres">
      <h2>{{valueprop}}</h2>
      <hr />
        <ul class="whyme__text">
          <li v-for="(p, i) in items" :key="i">{{p}}</li>
        </ul>
      </div>
      <button class="cta">{{cta}}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["valueprop", "items", "cta"]
}
</script>

<style lang="scss" scoped>
.bg-wrapper {
  // background-color: var(--light-grey);
  padding: calc(2 * var(--space)) calc(6 * var(--space));

  .whyme {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__text {
      max-width: var(--content-width);
      margin: calc(2 * var(--space)) calc(2 * var(--space));

      & li {
        &::marker {
          content: "✔";
          color: var(--persian-green);
        }
        padding-left: var(--space);
        margin-bottom: calc(2 * var(--space));
      }
    }
  }
}
</style>
