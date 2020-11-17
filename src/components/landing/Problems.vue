<template>
    <div class="problems">
      <div class="problems__valueprop">
        {{valueprop}}
      </div>
      <div class="problems__text">
        <p>{{intro}}</p>
        <ul>
          <li v-for="(p,i) in problems" :key="i">{{p}}</li>
        </ul>
        <button class="cta">{{cta}}</button>
      </div>
    </div>
</template>

<script>
export default {
    props: ["valueprop", "intro", "problems", "cta"]
}
</script>

<style lang="scss" scoped>
.problems {
  display: flex;
  &__valueprop {
    display: flex;
    flex-basis: 50%;
    margin: calc(-2 * var(--space)) 0 0 calc(-2*var(--space));
    background-color: var(--persian-green);
    color: var(--white);
    font-family: var(--font-headers);
    font-size: 5.5em;
    font-weight: 700;
    line-height: 1;
    padding: calc(8 * var(--space));
    text-align: right;
  }

  &__text {
    display: flex;
    flex-basis: 52%;
    flex-direction: column;
    justify-content: center;
    padding: calc(6 * var(--space));
    border-bottom: 1px solid var(--persian-green);
    border-left: none;
    margin-right: calc(-4 * var(--space));

    & li {
      margin-bottom: var(--space);
    }
  }
}
</style>
