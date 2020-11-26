<template>
  <div class="bg-wrapper">
    <div class="offers">

      <div class="offers__pres">
          <h2>{{title}}</h2>
          <hr />
          <p>{{presentation}}</p>
      </div>

      <div class="offers__offer">
        <div v-for="(offer, j) in offers" :key="j" class="offers__offercol">
          <p>{{offer[1]}}</p>
          <span class="rule"></span>
          <g-image :src="cloudy_url(offer[0])" blur=5 />
          <p v-for="(p,i) in items(offer)" :key="i">{{p}}</p>
        </div>
      </div>
      <contact-button :cta="cta" />
    </div>
  </div>
</template>

<script>
import ContactButton from './ContactButton.vue';
import {Cloudinary} from 'cloudinary-core';

const cl = new Cloudinary({cloud_name: "dy3n8on06", secure: true});

export default {
  components: { ContactButton },
  props: ["presentation", "title", "offers", "cta"],
  methods: {
      items: function (offer) {
        return offer.filter((v, i, a) => i > 1);
      },
      cloudy_url: function (img) {
        return cl.url(img);
      }
    }
} 
</script>

<style lang="scss" scoped>

.bg-wrapper {
  background-color: var(--light-grey);
  padding: calc(2 * var(--space)) calc(6 * var(--space)) calc(4 * var(--space)) calc(6 * var(--space));

  @media screen and (max-width: 650px) {
    padding: calc(2 * var(--space)) calc(2 * var(--space));
  }

  .offers {
    display: flex;
    flex-direction: column;
    
    &__pres {
      flex-wrap: wrap;
      max-width: var(--content-width);
      min-width: 60vw;
      align-self: center;
      margin: calc(2 * var(--space)) calc(2 * var(--space));
      justify-content: space-evenly;
    }

    &__offer {
      display: flex;
      justify-content: space-evenly;
    }
    &__offercol {
      flex-basis: 40%;
      text-align: center;
      margin: var(--space);
      padding: calc(2 * var(--space));
      
      @media screen and (min-width:651px ) and (max-width: 1080px) {
        flex-basis: 45%;
      }

      @media screen and (max-width: 650px) {
        flex-basis: 95%;
      }

      & img {
        width: 66.6%;
      }

      & span.rule {
        display: block;
        width: 50%;
        margin: calc(2 * var(--space)) auto;
        height: 5px;
        border-bottom: 1px solid var(--persian-green);
      }

      & p:nth-child(1){
          font-weight: 700;
          font-size: 1em;
      }

      & p:not(first-child) {
          font-size: 0.8em;
      }
    }
  }
}
</style>
