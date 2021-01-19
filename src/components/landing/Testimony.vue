<template>
  <div class="bg-wrapper">
    <div class="test">
      <div class="testimony">
        <g-link :to="`/${locale}/landing/testimonies/`"><h2>{{title}}</h2></g-link>
        <hr />
      </div>
      <div class="testimonies">
        <div class="testimonies__testimony" v-for="(t, i) in testimonies" :key="i">
          <p class="testimonies__testimony__text">
            {{t.shorttext}} <br>
            <g-link :to="`/${locale}/landing/testimonies/#${t.id}`">See full version</g-link>
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
  </div>
</template>

<script>
import {Cloudinary} from 'cloudinary-core';

const cl = new Cloudinary({cloud_name: "dy3n8on06", secure: true});
export default {
  props: ["testimonies", "title", "locale"],
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

.bg-wrapper {
  padding: calc(2 * var(--space)) calc(6 * var(--space));

  @media screen and (max-width: 650px) {
    padding: calc(2 * var(--space)) calc(2 * var(--space));
  }

  .test {

    .testimony {
      max-width: var(--content-width);
      margin: calc(2 * var(--space)) auto;
    }

    .testimonies {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      flex-direction: row;

      &__testimony {
        display: flex;
        flex-direction: column;
        flex-basis: 40%;
        flex-shrink: 0;
        flex-grow: 0;
        justify-content: space-between;
        background-color: var(--cultured);
        padding: calc(2 * var(--space));
        margin: calc(2 * var(--space)) calc(2 * var(--space));
        font-size: 0.8em;

        @media screen and (min-width:651px ) and (max-width: 1080px) {
          flex-basis: 35%;
        }

        @media screen and (max-width: 650px) {
          flex-basis: 90%;
        }

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
  }
}
</style>
