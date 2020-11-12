<template>
    <div class="lang">
        <button class="btn-lang" v-if="currentLocale == 'en'" @click="localeChanged('fr')">
            <g-image width="30" src="~/assets/images/france.svg"/>
        </button>
        <button class="btn-lang" v-if="currentLocale == 'fr'" @click="localeChanged('en')">
            <g-image width="30" src="~/assets/images/united-kingdom.svg"/>
        </button>
    </div>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  props: ['currentLocale', 'rawPath'],
  methods: {
    localeChanged (locale) {
      this.$router.push({
        path: '/' + locale + this.rawPath
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
