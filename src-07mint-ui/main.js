import Vue from 'vue'
import App from './App.vue'
import {Button} from 'mint-ui'

/*
* mint-ui组件
*   1、引入
*   2、注册成标签（全局）
* */

Vue.component(Button.name, Button)

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
