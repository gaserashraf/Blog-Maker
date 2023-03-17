import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('rand-color', {
  bind(el) {
    el.style.color = '#' + Math.random().toString(16).slice(2, 8)
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
