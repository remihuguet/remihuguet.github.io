<template>
  <div>
    <div class="content-box">
      <h2>{{title}}</h2>
      <hr />
    </div>
    <div class="testimonies">
      <div class="testimonies__testimony" v-for="(t, i) in testimonies" :key="i">
        <p class="testimonies__testimony__text">
          {{t.text}} <br>
          <a :href="t.linkedin" target="_blank">Full version</a>
        </p>
        <div class="testimonies__testimony__id">
          <g-image alt="" class="testimonies__testimony__id__image" :src="cloudy_url(t.image)" blur="5"/>
          <div class="testimonies__testimony__id__text">
            <p>{{t.name}}</p>
            <p><a target="_blank" :href="t.link">{{t.context}}</a></p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {Cloudinary} from 'cloudinary-core';

const cl = new Cloudinary({cloud_name: "dy3n8on06", secure: true});
export default {
  props: ["testimonies", "title"],
  methods: {
    cloudy_url: function (img) {
      return cl.url(img, {transformation: [
        {effect: "sharpen:100", width: 100, crop: "scale"},
      ]});
    }
  },
}
</script>

<style lang="scss" scoped>

.testimonies {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &__testimony {
    display: flex;
    flex-direction: column;
    flex-basis: 20%;
    flex-shrink: 0;
    flex-grow: 0;
    background-color: var(--cultured);
    padding: calc(2 * var(--space));
    margin: calc(2 * var(--space)) calc(2 * var(--space));
    font-size: 0.8em;

    &__text {
      margin-bottom: calc(2 * var(--space));
      font-size: 0.8em;
      line-height: 2;

      & > a {
        font-style: italic;
        font-weight: 400;
      }
    }

    &__id {
      display: flex;
      align-items: center;
      justify-content: center;

      &__image {
        align-self: center;
        border: 5px solid var(--white);
        border-radius: 50%;
      }

      &__text {
        display:flex;
        flex-direction: column;
        padding: var(--space);

        & > p {
          margin-bottom: calc( 0.2 * var(--space));
        
          &:first-child {
            font-weight: 700;
          }
        }
      }
    }
 }
}
</style>
