<template>
  <div id="app">
    <v-header :seller = 'seller'></v-header>
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header'
// 会直接去找api下面的index文件
import { getSeller } from 'api'

export default {
  name: 'app',
  data () {
    return {
      seller: {}
    }
  },
  created() {
    // 这里的技巧
    this._getSeller()
  },
  methods: {
    _getSeller() {
      getSeller().then((seller) => {
        console.log('获取seller', seller)
        this.seller = seller
      })
    }
  },
  components: {
    VHeader
  }
}
</script>

<style lang="stylus">

</style>
