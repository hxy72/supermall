<template>
  <div class="cart">
    <!--导航-->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>

    <!--商品的列表-->
    <cart-list/>

     <!--底部的汇总-->
     <cart-bottom-bar/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      // cartLength() {
      //   return this.$store.getters.cartLength
      // }
      // ...mapGetters, // 第一种写法全部导入
      // ...mapGetters(['cartLength', 'cartList']), // 第二种写法指定导入的属性(方法)
       ...mapGetters({ // 对象语法的写法
        length: 'cartLength', // 起别名叫:length
      })
    }
  }
</script>

<style scoped>
.cart {
    height: 100vh;
    /* position: relative; */
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    /*z-index: 1;*/
  }
</style>
