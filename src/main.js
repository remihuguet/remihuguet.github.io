import '~/assets/style/index.scss'
import 'typeface-merriweather';
import 'typeface-oswald';
import DefaultLayout from '~/layouts/Default.vue';


// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, appOptions, isClient }) {
  Vue.component('Layout', DefaultLayout);
}
