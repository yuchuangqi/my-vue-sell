/* eslint-disable */
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from 'components/goods/goods';
import seller from 'components/seller/seller';
import ratings from 'components/ratings/ratings';
// 引入全局样式
import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);
/* eslint-disable no-new  */
/* 实例化一个Vue实例  */
/* el是一个挂载点，挂载到body上  */
/* components:注册了一个APP */
// new Vue({
//   el: 'body',
//   /* 怎么没改呢，可以会出现es6语法无法识别，设置 */
//   components: { App }
// })

let app = Vue.extend(App);
// 实例化router
let router = new VueRouter(
  {linkActiveClass :'active'}
);
// 配置路由
router.map({
  "/goods": {
    component: goods
  },
  "/seller": {
    component: seller
  },
  "/ratings": {
    component: ratings
  },
});

router.start(app, "#app");
// router.go("/goods")
