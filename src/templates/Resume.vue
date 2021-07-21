<template>
  <Localized :locale="$page.messages.locale" rawpath="resume" path=""> 
    <div class="panel">
      <div class="left-panel">
        <g-image alt="" class="me__image" :src="myself_url" blur="5"/>

        <div class="contact">
          <a target='_blank' rel="noreferrer" href="mailto:me@remihuguet.dev" title="Email">
            <g-image src='~/assets/images/mail.svg' width="24" />
            {{$page.messages.basics.email}}
          </a>
          <p>
            <g-image src='~/assets/images/phone-call.svg' width="24" />
            {{$page.messages.basics.phone}}
          </p>
          <a target='_blank' rel="noreferrer" :href="website" title="Website">
            <g-image src='~/assets/images/world-wide-web.svg' width="24" />
            {{$page.messages.basics.url}}
          </a>
          <p>
            <g-image src='~/assets/images/placeholder.svg' width="24" />
            {{$page.messages.basics.location.address}}
          </p>
        </div>
      </div>

      <div class="right-panel">
        <div class="title">
          <h1>{{$page.messages.basics.name}}</h1>
          <p v-html="$page.messages.basics.label"></p>
        </div>

        <div class="summary">
          <p v-html="$page.messages.basics.summary"></p>
          <ul>
              <li v-for="(p, i) in $page.messages.basics.summary_items" :key="i">{{p}}</li>
          </ul>
        </div>
      </div>
    </div>

    <hr />

    <div class="panel">
      <div class="panel__header">
        <h2>{{$page.messages.skills_title}}</h2>
        <p>
          {{$page.messages.skills_intro}}
        </p>
      </div>

      <template v-for="(s, i) in  $page.messages.skills">
        <div :key="i" class="left-panel">
          <p class="position">{{s.name}}</p>
        </div>

        <div :key="i" class="right-panel__cols">
          <ul>
            <li v-for="(p, j) in s.keywords" :key="j">{{p}}</li>
          </ul>
        </div>
      </template>
    </div>

    <hr />

    <div class="panel">
      <div class="panel__header">
        <h2>Work</h2>
      </div>
      <template v-for="(w, i) in $page.messages.work">
          <div class="left-panel work" :key="i">
            <p>{{w.name}}</p>
            <p class="position">{{w.position}}</p>
            <p>{{w.startDate}} - {{w.endDate}}</p>
            <a target='_blank' rel="noreferrer" :href="w.url">{{w.url}}</a>
          </div>
          <div class="right-panel" :key="i">
            <p class="work">{{w.summary}}</p>
            <ul class="work">
              <li v-for="(p, j) in w.missions" :key="j">
                {{p}}
              </li>
            </ul>

            <ul class="work">
              <li v-for="(p, j) in w.actions" :key="j">
                {{p}}
              </li>
            </ul>

            <ul class="work">
              <li v-for="(p, j) in w.highlights" :key="j">
                {{p}}
              </li>
            </ul>
          </div>
      </template>
    </div>
    <hr />
    <div class="panel">
      <div class="panel__header">
        <h2>Education</h2>
      </div>
      <template v-for="(w, i) in $page.messages.education">
          <div class="left-panel work" :key="i">
            <p>{{w.institution}}</p>
            <p>{{w.startDate}} to {{w.endDate}}</p>
          </div>
          <div class="right-panel" :key="i">
            <p class="position">{{w.studyType}}</p>
            <p class="work">{{w.area}}</p>
          </div>
      </template>
    </div>


  </Localized>
</template>

<page-query>
query Resume ($id: ID!) {
  messages: resume (id: $id) {
    id,
    locale,
    basics {
      name,
      label,
      image,
      email,
      phone,
      url,
      summary,
      summary_items,
      location {
        address,
        postalCode,
        city,
        countryCode,
        region
      },
    },
    work {
      name,
      position,
      url,
      startDate (format: "YYYY-MM"),
      endDate (format: "YYYY-MM"),
      summary,
      actions,
      highlights
    },
    education {
      institution,
      area,
      studyType,
      startDate (format: "YYYY-MM"),
      endDate (format: "YYYY-MM"),
      score
    },
    skills_title,
    skills_intro,
    skills {
      name,
      keywords
    }
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
import {Cloudinary} from 'cloudinary-core';

const cl = new Cloudinary({cloud_name: "dy3n8on06", secure: true});

export default {
  components: {
    Localized
  },
  computed: {
    myself_url: function () {
      return cl.url('portrait2018_p3ku3w.jpg', {transformation: [
        {effect: "sharpen:100", width: 360, crop: "scale"},
      ]});
    },
    mailto: function () {
      return "mailto:" + this.$page.messages.basics.email;
    },
    website: function () {
      return "https://" + this.$page.messages.basics.url;
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
        }
      ]
    };
  }
}
</script>

<style lang="scss">

hr {
  max-width: var(--content-width);
  border-color: var(--ruby);
}

  
.panel {
  display: flex;
  margin: auto;
  max-width: var(--content-width);
  flex-wrap: wrap;

  &__header {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex-grow: 1;

    margin: calc(2 * var(--space));

    font-size: 0.9rem;
  }

  .position {
    font-weight: bold;
  }

  .work {
    font-size: 0.8rem;
  }

  .left-panel {

    display: flex;
    flex-direction: column;
    flex-basis: 33%;
    
    margin: calc(4 * var(--space)) calc(var(--space));

    .contact {
      margin: calc(2 * var(--space)) var(--space);
      p, a {
        display: flex;
        font-size: 0.7rem;
        margin: var(--space);
        justify-content: flex-start;

        img {
          margin-right: var(--space);
        }
      }
    }

    .me__image {
      height: auto;
      width: 20vw;
    }
  }


  .right-panel {
    display: flex;
    flex-direction: column;
    flex-basis: 60%;

    margin: calc(4 * var(--space)) calc(var(--space));
    font-size: 0.9rem;

    &__cols {
      display: flex;
      flex-basis: 60%;
      margin: calc(4 * var(--space)) calc(var(--space));
      font-size: 0.9rem;
    }

    .title {
      h1 {
        color: var(--persian-green);
      }
      p {
        background-color: var(--persian-green);
        color: var(--cultured);
        padding: calc(2 * var(--space)) var(--space);
        text-align: center;
        font-family: var(--font-headers);
        font-size: 1.2rem;
      }
    }
  }
}

@media print {
  h1 {
    font-size: 4.5rem;
  }
  .panel {
    .left-panel {

    .me__image {
        width: 22vw;
      }

    }
  }

}
</style>
