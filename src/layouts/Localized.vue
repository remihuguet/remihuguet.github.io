<template>
  <Layout> 
    <template v-slot:headerleft>
      <LocaleSwitcher :currentLocale="locale" :rawpath="rawpath" />
    </template>
    <template>
      <slot />
    </template>
  </Layout>
</template>

<script>
import LocaleSwitcher from '~/components/LocaleSwitcher.vue';

export default {
  props: ["locale", "rawpath"],
  components: {
    LocaleSwitcher
  }
};
</script>
