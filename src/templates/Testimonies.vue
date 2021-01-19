<template>
  <Localized :locale="$page.messages.locale" :rawpath="$page.messages.rawpath" path="testimonies">
    <div class="content-box">
      <h1>{{$page.messages.testimonies_title}}</h1>
      <hr>

      <div class="testimonies">
        <div class="testimonies__testimony" v-for="(t, i) in $page.messages.testimonies" :key="i">
          <div :id="t.id" class="testimonies__testimony__id">
            <g-image alt="" class="testimonies__testimony__id__image" :src="cloudy_url(t.image)" blur="5"/>
            <div class="testimonies__testimony__id__text">
              <p>{{t.name}}</p>
              <p><a target="_blank" :href="t.link">{{t.context}}</a></p>
            </div>
          </div>
          <p class="testimonies__testimony__text">
            {{t.longtext}}
          </p>
        </div>
      </div>
    </div>

  </Localized>
</template>

<page-query>
query Landing ($id: ID!) {
  messages: landing (id: $id) {
    id
    path
    rawpath,
    locale,
    testimonies {
      id,
      name,
      image,
      context,
      shorttext,
      longtext,
      linkedin,
      link
    },
    testimonies_title,
  }
  metadata {
      siteDescription
      siteName
      siteUrl
    }
  }
</page-query>

<script>
import Localized from '~/layouts/Localized.vue';
import Social from '~/components/Social.vue';
import LocaleSwitcher from '~/components/LocaleSwitcher.vue';
import Testimony from '~/components/landing/Testimony.vue';
import {Cloudinary} from 'cloudinary-core';

const cl = new Cloudinary({cloud_name: "dy3n8on06", secure: true});

export default {
  components: {
    Social,
    LocaleSwitcher,
    Localized,
    Testimony,
  },
  computed: {
    myself_url: function () {
      return cl.url('portrait2018_p3ku3w.jpg', {transformation: [
        {effect: "sharpen:100", width: 360, crop: "scale"},
      ]});
    }
  },
  methods: {
    cloudy_url: function (img) {
      return cl.url(img, {transformation: [
        {effect: "sharpen:100", width: 100, crop: "scale"},
      ]});
    }
  },
  metaInfo() {
    return {
      htmlAttrs: {
        lang: this.$page.messages.locale
      },
      meta: [
        {
          property: "og:title",
          content: this.$page.metadata.siteName
        },
        {
          property: "og:description",
          content: this.$page.metadata.siteDescription
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:url",
          content: this.$page.metadata.siteUrl
        },
        {
          property: "og:image",
          content: this.myself_url
        }
      ]
    };
  }
}
</script>

<style lang="scss" scoped>

.testimonies {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  max-width: var(--content-width);
  margin: calc(2 * var(--space)) auto;

  &__testimony {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: calc(2 * var(--space));
    margin: calc(2 * var(--space)) calc(2 * var(--space));
    font-size: 0.8em;

    &__text {
      margin-bottom: calc(2 * var(--space));
      line-height: 2;

      & > a {
        font-style: italic;
        font-weight: 400;
      }
    }

    &__id {
      display: flex;

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
