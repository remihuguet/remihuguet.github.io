<template>
  <div class="bg-wrapper">
    <div class="skills">
      
      <div class="skills__pres">
        <h2>{{title}}</h2>
        <hr />
        <p v-for="(p, i) in presentation" :key="i">{{p}}</p>
      </div>
      
      <div class="skills__domains">
        <div v-for="(domain, j) in domains" :key="j" class="skills__domain">
          <p v-for="(p,i) in domain" :key="i">
            {{p}}
            <span class="rule" v-if="i === 0"></span>
          </p>
        </div>
      </div>
      
      <button class="cta">{{cta}}</button>

    </div>
  </div>
</template>

<script>
export default {
  props : ["domains", "presentation", "cta", "title"]
}
</script>


<style lang="scss" scoped>

.bg-wrapper {
  background-color: var(--light-grey);
  padding: calc(2 * var(--space)) calc(6 * var(--space));

  @media screen and (max-width: 650px) {
    padding: calc(2 * var(--space)) calc(2 * var(--space));
  }

  .skills {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__pres {
      max-width: var(--content-width);
      margin: calc(2 * var(--space));
    }

    &__domains {
      display:flex;
      margin: calc(2 * var(--space));
      justify-content: space-evenly;

      @media screen and (max-width: 1080px) {
       flex-wrap: wrap;
       justify-content: space-evenly;
      }
    }

    &__domain {
      flex-basis: 25%;
      text-align: center;
      margin: var(--space);
      padding: calc(2 * var(--space));

      @media screen and (min-width:651px ) and (max-width: 1080px) {
        flex-basis: 35%;
      }

      @media screen and (max-width: 650px) {
        flex-basis: 90%;
      }


      & span.rule {
        display: block;
        width: 50%;
        margin: calc(2 * var(--space)) auto;
        height: 5px;
        border-bottom: 1px solid var(--persian-green);
      }

      & p:not(first-child) {
        font-size: 0.8em;
      }

      & p:first-child{
        font-weight: 700;
        font-size: 1em;
      }
    }
  }
}
</style>
