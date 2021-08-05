// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Global from './components/Global';

Vue.prototype.$Global = Global;

const bus = new Vue({});

Object.defineProperty(Vue.prototype, '$bus', {
  get() {
    return this.$root.bus;
  },
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
    return {
      bus,
    };
  },
  components: { App },
  template: '<App/>',
});
