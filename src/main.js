import '~/assets/style/index.scss'
import 'typeface-merriweather';
import 'typeface-oswald';
import DefaultLayout from '~/layouts/Default.vue'
import VueI18n from 'vue-i18n'
import messages from '~/locale'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, appOptions, isClient }) {
  
  Vue.use(VueI18n);

  let browser_language;
  if (isClient) {
    browser_language = window.navigator.language.split('-')[0];
  }
  let languages = ['fr', 'en'];
  let selected_language = languages.includes(browser_language) ? browser_language : 'en';

  appOptions.i18n = new VueI18n({
    locale: selected_language,
    fallbackLocale: 'fr',
    messages
  });
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
