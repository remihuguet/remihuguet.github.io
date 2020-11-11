<template>
    <div class="lang">
        <button class="btn-lang" v-if="currentLocale == 'en-gb'" @click="localeChanged('fr-fr')">
            <g-image width="30" src="~/assets/images/france.svg"/>
        </button>
        <button class="btn-lang" v-if="currentLocale == 'fr-fr'" @click="localeChanged('en-gb')">
            <g-image width="30" src="~/assets/images/united-kingdom.svg"/>
        </button>
    </div>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  data: function () {
    return {
      currentLocale: this.$i18n.locale.toString(),
      availableLocales: this.$i18n.availableLocales
    }
  },
  methods: {
    localeChanged (locale) {
      this.currentLocale = locale;
      this.$router.push({
        path: this.$tp(this.$route.path, locale, true)
      })
    }
  }
}
</script>

<style>

div.lang {
    display: flex;
    align-items: center;
}

button.btn-lang {
    border: none;
    background-color: transparent;
}
</style>
