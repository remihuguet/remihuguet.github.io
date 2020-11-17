<template>
  <Localized :locale="$page.messages.locale" :rawpath="$page.messages.rawpath"> 

    <Problems 
      :valueprop="$page.messages.valueprop"
      :intro="$page.messages.problems_intro"
      :problems="$page.messages.solve_problems"
      :cta="$page.messages.cta1"
    />

    <Presentation :presentations="$page.messages.presentation" />
    
    <Skills 
      :presentation="$page.messages.skills_presentation"
      :domains="[$page.messages.skill_domain_2, $page.messages.skill_domain_1, $page.messages.skill_domain_3]"
      :cta="$page.messages.cta2"
    />
    <!-- <WhyMe
      :valueprop="$page.messages.why_me_vp"
      :args="$page.messages.why_me"
    /> -->

    <Offers
      :presentation="$page.messages.offers_presentation"
      :offers="[$page.messages.offer_1, $page.messages.offer_2, $page.messages.offer_3]"
    />
    <Testimony :testimonies="$page.messages.testimonies" :title="$page.messages.testimonies_title" />
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
    offer_3,
    cta1,
    cta2,
    problems_intro,
    skills_presentation,
    offers_presentation,
    why_me_vp,
    testimonies {
      name,
      image,
      context,
      text,
      linkedin,
      link
    },
    testimonies_title
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
import Problems from '~/components/landing/Problems.vue';
import Skills from '~/components/landing/Skills.vue';
import WhyMe from '~/components/landing/WhyMe.vue';
import Offers from '~/components/landing/Offers.vue';
import Testimony from '~/components/landing/Testimony.vue';

export default {
  components: {
    Social,
    LocaleSwitcher,
    Localized,
    Presentation,
    Problems,
    Skills,
    WhyMe,
    Offers,
    Testimony
  },
  metaInfo() {
    return {
      title: 'Accueil',
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
        }
      ]
    };
  }
}
</script>

<style lang="scss">
button.cta {
  font-family: var(--font-body);
  font-size: 1em;

  border: none;
  border-radius: var(--border-radius);
  box-shadow: 2px 2px 5px var(--independence);
  
  background-color: var(--persian-green);
  color: var(--white);

  padding: calc(1.5 * var(--space)) calc(3 * var(--space));

  align-self: center;
  &:hover {
    box-shadow: 5px 5px 10px var(--independence);
  }
}

</style>
