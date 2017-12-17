<template>
  <div class="columnnavdiv">
    <div>
      <ul class="clearfix hottype" v-if="home.datas">
        <li class="fl" v-for="(menu,index) in home.datas[2].menus.slice(0,5)" :key="index">
          <a href="">
            <img :src="menu.image">
          </a>
        </li>
      </ul>
      <ul class="clearfix hottype" v-if="home.datas">
        <li class="fl" v-for="(menu,index) in home.datas[2].menus.slice(5)" :key="index">
          <a href="">
            <img :src="menu.image">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  export default {

    computed:{
      ...mapState(['home'])
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .columnnavdiv
    ul
      display flex
      li
        flex 1
</style>
