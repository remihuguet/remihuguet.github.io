<template>
  <Localized :locale="$page.messages.locale" :rawpath="$page.messages.rawpath" path=""> 

    <Presentation :presentations="$page.messages.presentation" :cta="$page.messages.cta1" />

    <ClientBanner 
      :title="$page.messages.client_banner.title"
      :clients="$page.messages.client_banner.clients"
    />
    <BannerBloc 
      :valueprop="$page.messages.valueprop"
      :intro="$page.messages.problems_intro"
      :items="$page.messages.solve_problems"
      :cta="$page.messages.cta3"
    />
 
    <Skills 
      :title="$page.messages.who"
      :presentation="$page.messages.skills_presentation"
      :domains="[$page.messages.skill_domain_2, $page.messages.skill_domain_1, $page.messages.skill_domain_3]"
      :cta="$page.messages.cta2"
    />

    <Testimony :locale="$page.messages.locale" :testimonies="$page.messages.testimonies" :title="$page.messages.testimonies_title" />

    <Offers
      :presentation="$page.messages.offers_presentation"
      :title="$page.messages.offers_title"
      :offers="[$page.messages.offer_1, $page.messages.offer_2]"
      :cta="$page.messages.cta3"
    />


    <WhyMe 
      :valueprop="$page.messages.why_me_vp"
      :items="$page.messages.why_me"
      :cta="$page.messages.cta1"
    />

    <div class="ml-form-embed"
      data-account="3133558:z6k9c8a6o1"
      data-form="4049125:f3t1z4">
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
    valueprop,
    presentation,
    why_me,
    solve_problems,
    skill_domain_1,
    skill_domain_2,
    skill_domain_3,
    offer_1,
    offer_2,
    cta1,
    cta2,
    cta3,
    problems_intro,
    skills_presentation,
    offers_presentation,
    why_me_vp,
    client_banner {
      title,
      clients {
        name,
        logo
      }
    },
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
    who,
    offers_title
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
import Presentation from '~/components/landing/Presentation.vue';
import Skills from '~/components/landing/Skills.vue';
import BannerBloc from '~/components/landing/BannerBloc.vue';
import Offers from '~/components/landing/Offers.vue';
import Testimony from '~/components/landing/Testimony.vue';
import WhyMe from '~/components/landing/WhyMe.vue';
import ClientBanner from '~/components/landing/ClientBanner.vue';
import {Cloudinary} from 'cloudinary-core';

const cl = new Cloudinary({cloud_name: "dy3n8on06", secure: true});


export default {
  components: {
    Social,
    LocaleSwitcher,
    Localized,
    Presentation,
    Skills,
    BannerBloc,
    Offers,
    Testimony,
    WhyMe,
    ClientBanner
  },
  computed: {
    myself_url: function () {
      return cl.url('portrait2018_p3ku3w.jpg', {transformation: [
        {effect: "sharpen:100", width: 360, crop: "scale"},
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

<style lang="scss">

</style>
