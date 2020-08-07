import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/button/style';
import { Button } from 'vant';
import axios from 'axios'
import { Icon } from 'vant';
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant';
Vue.use(Lazyload);
Vue.use(Vant);

Vue.use(Icon);
Vue.prototype.$axios = axios

Vue.use(Button);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
