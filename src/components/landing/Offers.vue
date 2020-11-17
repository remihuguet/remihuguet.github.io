<template>
    <div class="bg-wrapper">
        <div class="offers">
          <div class="offers__pres">
              <h2>{{presentation}}</h2>
              <hr />
          </div>

        <div class="offers__offer">
            <div v-for="(offer, j) in offers" :key="j" class="offers__offercol">
              <p>{{offer[1]}}</p>
              <span class="rule"></span>

              <g-image :src="cloudy_url(offer[0])" blur=5 />
              <p v-for="(p,i) in items(offer)" :key="i">{{p}}</p>

            </div>
        </div>
      </div>
    </div>
</template>

<script>
import {Cloudinary} from 'cloudinary-core';

const cl = new Cloudinary({cloud_name: "dy3n8on06", secure: true});

  export default {
      props: ["presentation", "offers"],
      methods: {
        items: function (offer) {
          return offer.filter((v, i, a) => i > 1);
        },
        cloudy_url: function (img) {
          return cl.url(img);
        }
      },

  }
</script>

<style lang="scss" scoped>

.bg-wrapper {
  background-color: var(--light-grey);
  padding: calc(6 * var(--space));

    .offers {
        display: flex;
        flex-direction: column;
        align-items: center;

        &__pres {
            max-width: var(--content-width);
        }

        &__offer {
            display:flex;
            margin: calc(2 * var(--space)) calc(2 * var(--space));
            
        }
        &__offercol {
            flex-basis: 33%;
            text-align: center;
            margin: var(--space);
            padding: calc(2 * var(--space));

            & img {
              width: 66.6%;
            }
            // border: 2px solid var(--border-color);
            // border-radius: var(--radius);
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
