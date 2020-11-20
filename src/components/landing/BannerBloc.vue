<template>
  <div class="bloc">
    <div v-if="valueprop" class="bloc__valueprop">
     {{valueprop}}
    </div>
    <div class="bloc__text">
      <div class="bloc__text__inner">
        <p>{{intro}}</p>
        <ul>
          <li v-for="(p, i) in items" :key="i">{{p}}</li>
        </ul>
        <button v-if="cta" class="cta">{{cta}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["valueprop", "items", "intro", "cta"]
}
</script>

<style lang="scss" scoped>

.bloc {
  display: flex;
  flex-direction: column;

  &__valueprop {
    display: flex;
    width: 100%;
    background-color: var(--persian-green);
    color: var(--white);
    font-family: var(--font-headers);
    font-size: 6em;
    font-weight: 700;
    line-height: 1;
    padding: calc(12 * var(--space)) calc(10 * var(--space));
    justify-content: center;
  }

  &__text {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: calc(4 * var(--space));
    padding: calc(2 * var(--space));

    // border-bottom: 1px solid var(--persian-green);

    &__inner {
      display: flex;
      flex-direction: column;
      width: 50%;

      & li {
        margin-bottom: var(--space);
        padding-left: var(--space);
  
        &::marker {
        content: "✔";
        color: var(--persian-green);
        }
      }

      & button {
        align-self: center;
      }
    }

  }
}
</style>
