/*
入口JS
 */
import Vue from 'vue'
import App from './App'
import store from './store'
import './index.css'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store
})
