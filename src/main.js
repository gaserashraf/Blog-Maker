import Vue from 'vue'
import App from './App.vue'
import Routes from './routes'
import Router from 'vue-router'

Vue.config.productionTip = false



Vue.directive('rand-color', {
  bind(el) {
    el.style.color = '#' + Math.random().toString(16).slice(2, 8)
  }
})

Vue.filter('snippet', value => {
  return value.slice(0, 100) + '...'
})

Vue.use(Router);
const router = new Router({
  routes: Routes,
  mode: 'history'
})

new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  render: h => h(App),
  router: router
}).$mount('#app')
