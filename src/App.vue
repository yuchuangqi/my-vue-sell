<template>
  <div>
    <!-- 头部内容 -->
    <v-header :seller='seller'></v-header>
    <!-- 中间导航条，flex布局 -->
    <div class="tab border-1px">
      <div class="tab-item">
        <a v-link="{path:'/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/ratings'}">评论</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/seller'}">商家</a>
      </div>
    </div>
    <!-- 路由外链，改变路由刷新-->
    <router-view :seller="seller"></router-view>
  </div>
</template>
<script>
import header from 'components/header/header.vue';
const ERR_OK = 0;
export default {
  data() {
    return {
      seller: {}
    };
  },
  created () {
    this.$http.get('/api/seller').then(res => {
      res = res.body;
      console.log(res);
      if (res.errno === ERR_OK) {
        this.seller = res.data;
        console.log(this.seller);
      }
    });
  },
  components: {
    'v-header': header
  }
};
</script>
<style lang="stylus">
// @import是stylus
@import './common/stylus/mixin.styl';
// 中间导航条样式
.tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-1px(rgba(7, 17, 27, 0.1));
  .tab-item {
    flex: 1;
    text-align: center;
    & > a {
      display: block;
      font-size: 14px;
      color: rgb(77, 85, 93);
      &.active {
        color: rgb(240, 20, 20);
      }
    }
  }
}
</style>
