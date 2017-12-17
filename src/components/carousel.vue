<template>
  <div class="swiper-container">
    <div class="swiper-wrapper" v-if="home.datas" >
      <div class="swiper-slide" v-for="(data,index) in home.datas[0].value" :key="index" >
        <img :src="data.image">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper';
  import {mapState} from 'vuex';

  export default {
    mounted(){
      var mySwiper = new Swiper ('.swiper-container', {
        autoplay:true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },
    computed:{
      ...mapState(['home'])
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*.banner_item
    min-height: 1px;
    .swiper-container
      width: 100%;
      height: 100%;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
      z-index: 1;
      img
        width: 100%;
*/
  img
    width 100%
</style>
