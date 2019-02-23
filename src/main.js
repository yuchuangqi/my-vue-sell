import Vue from 'vue'
import App from './App'

/* eslint-disable no-new  */
/* 实例化一个Vue实例  */
/* el是一个挂载点，挂载到body上  */
/* components:注册了一个APP */
new Vue({
  el: 'body',
  /* 怎么没改呢，可以会出现es6语法无法识别，设置 */
  components: { App }
})
