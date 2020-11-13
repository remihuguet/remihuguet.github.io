<template>
  <Localized :locale="$page.messages.locale" :rawpath="$page.messages.rawpath"> 
    <div class="content-box pres">
      <g-image alt=""
          class="pres__image"
          src="~/assets/images/author.jpg" blur="5"
      />
    </div>
    <div class="valueprop">
      <p>{{$page.messages.valueprop}}</p>
    </div>

    <div class="content-box">
      <p v-for="(p, i) in $page.messages.presentation" :key="i">
        {{p}}
      </p>
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
    offer_3
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

export default {
  components: {
    Social,
    LocaleSwitcher,
    Localized
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

<style lang="scss" scoped>

.pres {
  display: flex;
  margin: 0 auto;
  .pres__image {
    // max-width: 200px;
  }
}

.valueprop {
    // flex-basis: 77%;
    flex-grow: 1;
    background-color: var(--ruby);
    color: var(--white);
    font-family: var(--font-headers);
    font-size: 6rem;
    font-weight: 700;
    line-height: 1;
    padding: calc(8 * var(--space));
    p {
      margin:0;
    }
  }
</style>
