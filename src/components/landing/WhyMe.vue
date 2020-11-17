<template>
  <div class="whyme">
    <ul class="whyme__text">
      <li v-for="(p, i) in args" :key="i">{{p}}</li>
    </ul>
    <div class="whyme__vp">
     {{valueprop}}
    </div>
  </div>
</template>

<script>
export default {
  props: ["valueprop", "args"]
}
</script>

<style lang="scss" scoped>

.whyme {
  display: flex;
  &__vp {
    display: flex;
    flex-basis: 52%;
    margin: 0 calc(-1 * var(--space)) 0 0;
    background-color: var(--persian-green);
    color: var(--white);
    font-family: var(--font-headers);
    font-size: 5.5em;
    font-weight: 700;
    line-height: 1;
    padding: calc(8 * var(--space));
    text-align: left;
  }

&__text {
    display: flex;
    flex-basis: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 0 0 calc(12 * var(--space));
    border: 4px solid var(--persian-green);
    border-right: none;
    margin: 0;
    margin-left: calc(-1 * var(--space));

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
</style>
