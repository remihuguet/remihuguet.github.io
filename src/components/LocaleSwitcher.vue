<template>
  <div class="lang">
    <a class="lang__link" v-if="currentLocale == 'en'" :href="localeChanged('fr')">
        Français 
        <g-image width="30" src="~/assets/images/france.svg"/>
    </a>
    <a class="lang__link" v-if="currentLocale == 'fr'" :href="localeChanged('en')">
        English
        <g-image width="30" src="~/assets/images/united-kingdom.svg"/>
    </a>
  </div>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  props: ['currentLocale', 'rawpath'],
  methods: {
    localeChanged (locale) {
      return '/' + locale +'/' + this.rawpath;
    }
  }
}
</script>

<style lang="scss" scoped>

  .lang {

    &__link {
      font-size: 0.8em;
      display: flex;
      justify-content: space-evenly;

      & img {
        margin: 0 var(--space);
      }
    }
  }
</style>
