// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'lib-flexible'//自适应


import less from 'less';
import Mint from 'mint-ui';    //移动端UI
import 'mint-ui/lib/style.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import $ from "jquery";
import vuex from 'vuex'
import store from '@/vuex/store'

Vue.use(Mint);
Vue.use(ElementUI)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
