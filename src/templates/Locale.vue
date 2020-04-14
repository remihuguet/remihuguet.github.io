<template>
  <Layout> 
    <div>
      <div class="banner">
        <div class="content-box">
          <h1>
            <span v-for="(b, i) in $page.locale.banners" :key="i">{{b}}</span></h1>
        </div>
      </div>
      <div class="content-box pres">
        <g-image alt=""
				  class="pres__image"
				  src="~/assets/images/author.png" blur="5"
        />
        <div class="pres__text">
          <p v-for="p in $page.locale.press" :key="p">{{p}}</p>
          <p class="mantra">{{$page.locale.pres_mantra}}</p>
        </div>
      </div>
      <div class="content-box social">
        <Social/>
      </div>
      <div class="content-box">
        <h2>{{$page.locale.doing_title}}</h2>
        <p v-for="p in $page.locale.doings" :key="p">{{p}}</p>
        <ul>
          <li v-for="v in $page.locale.challenges" :key="v">{{v}}</li>
        </ul>
      </div>
      <div class="content-box">
        <h2>{{$page.locale.values_title}}</h2>
        <p v-for="v in $page.locale.values" :key="v">{{v}}</p>
      </div>
      <div class="content-box skills">
        <h2>{{$page.locale.skills_title}}</h2>
        <p><span v-for="s in $page.locale.skills" :key="s"> {{s}}</span></p>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Locale ($id: ID!) {
  locale: locale (id: $id) {
    id
    path
    banners,
    pres_title,
    press,
    pres_mantra,
    doing_title,
    doings,
    challenges,
    values_title,
    values,
    skills_title,
    skills
  }
  metadata {
      siteDescription
      siteName
      siteUrl
    }
  }
</page-query>

<script>
import Social from '~/components/Social.vue';

export default {
  components: {
    Social
  },
  metaInfo() {
    return {
      title: 'Accueil',
      htmlAttrs: {
        lang: this.$page.locale.id
      },
      meta: [
        {
          property: "og:title",
          content: this.$page.metadata.siteTitle
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

.banner {
  margin: 0 -15px 0 -15px;
  background-color: var(--link-color);

  h1 {
    color:darken(white, 7%);
    font-size: 1.6rem;
    line-height: 1.4;
    font-weight: 400;
    margin: calc(var(--space) / 4) calc(var(--space) * 2);
    span {
      &:first-of-type{
        font-variant:small-caps;
        font-weight: 700;
      }

      display: block;
    }
  }
}

h2 {
  border-bottom: 2px solid var(--title-color);
  text-align: right;
  font-style: italic;
  font-weight: 300;
  color: lighten(black, 20%);
  margin-top:0;
}

.pres {
  display: flex;
  padding: calc(var(--space) / 2) 0;
  align-items: flex-end;

  &__image {
    width: 200px;
    flex-shrink: 0;
    border-radius: 5%;
  }

  &__text {
    padding: 0 calc(var(--space) / 4);

    p{

      font-size: 1rem;

      &.mantra {
          margin-bottom: 0;
          text-align: right;
          font-family: var(--font-headers);
          font-weight: 300;
          font-size: 1.2rem;
          font-style: italic;
        }
     }
  }
}

.social {
  margin: 0 auto;
  padding: 0;

  .links {
    font-size: 1.2rem;
  }
}

.skills {
  p {
    text-align: center;
    font-weight: 300;
    padding: 0 calc(var(--space) * 1.5);
    span:not(:last-of-type):after {
      content: "\002014"
  }

  }
}
</style>
