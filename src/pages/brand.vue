<template>
  <div ref="bcontent">
    <div class="bandsbox">
      <div class="brand-list" v-if="sort[2]">
        <div>
          <div class="recom" v-for="(brand,index) in sort[2].brands" :key="index">
            <div class="title"><span class="c999">—— {{brand.title}} ——</span></div>
            <div class="list">
              <ul>
                <li v-for="(list,index) in brand.lists">
                <span class="block">
                  <div>
                    <img :src="list.logo">
                  </div>
                  <p class="name">{{list.name}}</p>
                  <p class="address">{{list.address}}</p>
                </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--右下角的圆-->
        <div><span class="all">全部</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import Bscroll from 'better-scroll';
  export default {
    mounted () {
      this.$store.dispatch('reqsort');
      new Bscroll(this.$refs.bcontent,{
        click:true
      })
    },
    computed:{
      ...mapState(['sort'])
    },
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .bandsbox .all
    width: 40px;
    height: 40px;
    right: 6px;
    top: 520px;
    position: fixed;
    z-index: 10;
    background: rgba(0,0,0,.4);
    line-height: 40px;
    border-radius: 50%;
    font-size: 12px;
    color: #fff;
    text-align: center;
  .brand-list
    background: #f3f4f5;
    .recom
      float left
      padding-bottom: 15px;
      margin-bottom: 10px;
      background: #fff;
      .title
        padding-top: 20px;
        font-size: 12px;
        color: #999;
        text-align: center;
      .list
        padding: 0 5px;
        ul
          overflow hidden
          li
            position: relative;
            margin-top: 20px;
            width: 30%;
            padding: 0 5px;
            float: left;
            .block
              display: block;
              color: #333;
              div
                box-sizing border-box
                position: relative;
                border: 1px solid #e2e2e2;
                text-align: center;
                padding: 50px 10px 10px;
                height: 50px;
                img
                  position: absolute;
                  top: 0;
                  left: 0;
                  max-width: 90%;
                  margin: 10px auto 0;
                  height: 40px;
                  right: 0;
              .name
                height: 20px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 13px;
                margin-top: 5px;
                text-align: center;
              .address
                height: 20px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 12px;
                color: #999;
                text-align: center;
</style>
