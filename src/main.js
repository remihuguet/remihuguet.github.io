import '~/assets/style/index.scss'
import 'typeface-merriweather';
import 'typeface-oswald';
import CountryFlag from 'vue-country-flag';
import DefaultLayout from '~/layouts/Default.vue';


// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, appOptions, isClient }) {

  let browser_language;
  if (isClient) {
    browser_language = window.navigator.language.split('-')[0];
  }
  let languages = ['fr', 'en'];
  let selected_language = languages.includes(browser_language) ? browser_language : 'fr';

    // Set default layout as a global component
  Vue.component('country-flag', CountryFlag);
  Vue.component('Layout', DefaultLayout);
}
