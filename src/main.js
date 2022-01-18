import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/app.scss"

Vue.config.productionTip = false



// components
Vue.component("AboutMe", require("./components/AboutMe.vue").default);
Vue.component("Skills", require("./components/Skills.vue").default);
Vue.component("Experience", require("./components/Experience.vue").default);
Vue.component("Contact", require("./components/Contact.vue").default);
Vue.component("Language", require("./components/Language.vue").default);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')