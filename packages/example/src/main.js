import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUIPro from 'element-ui-pro'
import 'element-ui-pro/lib/es/index.css'
import App from './App.vue'
import router from './router'
import Auth from './components/Auth.vue'
import './main.css'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.component(Auth.name, Auth);
Vue.use(ElementUIPro);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
