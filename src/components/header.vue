<template>
  <div>
    <div class="indexheader">
      <div class="indexnavcon">
        <div class="headerbox float-div">
          <div class="main">
            <div class="clearfix">
              <div class="epet-search">
                <div class="location">
                  <a href="https://wap.epet.com/place.html?pet_type=dog&amp;fw=0">
                    <span class="catordog c89">狗狗站</span>
                    <span class="c89">|</span>
                    <span data-name="my-place" class="myposition c89 ft13">重庆</span>
                    <i></i></a>
                </div>
                <p class="search-text">
                  <a href="https://wap.epet.com/search.html?pet_type=dog&amp;fw=0">
                    <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
                    <span class="eico serach-ico"></span>
                  </a>
                </p>
                <a href="https://wap.epet.com/wappms/pms.html?fw=0" class="epet-category">
                  <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png">
                </a>
              </div>
            </div>
            <div class="find_nav">
              <div class="find_nav_left dscroll">
                <div class="find_nav_list">
                  <ul class="dscroll-ul">
                    <li class="dscroll-li" v-for="(menu,index) in home.menus" :key="index">
                      <router-link to="/classify">
                      <span class="rela"><span>{{menu.menu_name}}</span><i></i></span>
                    </router-link>
                      <router-view></router-view>
                      <!--<a href=""><span class="rela"><span>{{menu.menu_name}}</span><i></i></span></a>-->
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="switchtype">
        <div type="dog" class="go-dog"></div>
        <div class="changepop">
          <div class="cartc-bg db"></div>
          <div class="cartc-box">
            <div class="main">
              <p class="dogbox">DOG<b class="b-line c000 ft12">▁</b></p>
              <p class="dearbox">亲爱的小主</p>
              <p class="will">您即将进入<span>狗狗站</span></p>
              <ul class="clearfix change-ul">
                <li class="fl cat">
                  <img src="//static.epetbar.com/static_web/wap/src/images/change-cat.png">
                  <div>猫猫站</div>
                </li>
                <li class="fl dog">
                  <img src="//static.epetbar.com/static_web/wap/src/images/change-dog1.png">
                  <div>狗狗站</div>
                  <a href="javascript:;">立即进入</a>
                </li>
                <li class="fl fish">
                  <img src="//static.epetbar.com/static_web/wap/src/images/change-fish.png">
                  <div>水族站</div>
                </li>
              </ul>
            </div>
          </div>
          <a href="javascript:;" class="cartc-close afff ft20 ftc c666">
            <img src="//static.epetbar.com/static_web/wap/src/images/close2.png">
          </a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll';
  import {mapState} from 'vuex';
  export default {
    mounted() {
//      new BScroll(this.$refs.scrollWrapperx,{
//        scrollX: true,
//        click: true
//      })
      this.$store.dispatch('reqhome');
    },
    computed:{
      ...mapState(['home']),
    },
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">

  .indexnavcon
    position relative
    z-index 99
    height: 86px;
    background white
    .main
      max-width: 640px;
      margin: auto;
      .clearfix
        padding: 5px 10px;
        .epet-search
          padding: 8px 0;
          background: #fff;
          text-align: center;
          display: -webkit-box;
          -webkit-box-align: center;
          display: -moz-box;
          -moz-box-align: center;
          width: 100%;
          .location
            margin-right: 20px;
            position: relative;
            font-size: 14px;
            float: left;
            a
              color: #333;
            i
              position: absolute;
              top: 5px;
              right: -11px;
              border-width: 4px;
              font-size: 0;
              line-height: 0;
              border-style: solid solid dotted;
              border-color: #898989 transparent transparent;

          p
            position: relative;
            -webkit-box-flex: 1;
            a
              color: #333;
              input
                width: 100%;
                border: 0;
                height: 25px;
                background: #e9e9e9;
                border-radius: 4px;
                color: #bcbcbc;
                text-indent: 10px;
                font-size: 13px;
                outline: 0;
              .serach-ico {
                width: 11px;
                height: 11px;
                position: absolute;
                right: 5px;
                top: 0;
                bottom: 0;
                margin: auto 0;
                background-position: 0 0;
                background: url(../common/images/search.png) no-repeat;
                background-size: 11px auto;
              }

          a
            display: block;
            color: #333;
            img
              width: 25px;
              margin-left: 10px;
              vertical-align: middle;

      .find_nav
        width: 100%;
        height: 35px;
        min-width: 320px;
        .dscroll
          height 100%
          .find_nav_list
            width: 140%;
            height 100%
            .dscroll-ul
              display: flex;
              height 100%
              .dscroll-li
                width: 74.5px;
                float: left;
                text-align center
                &:first-child
                  span
                    color: #459d36;
                    display: inline-block;
                    position relative
                    i
                      background: #459d36;
                      position: absolute;
                      bottom: 1px;
                      left: -10%;
                      width: 120%;
                      height: 2px;
                a
                  display: block;
                  width: 100%;
                  height: 100%;
                  line-height: 36px;
                  font-size: 14px;
                  text-align: center;
                  color: #666;

  .switchtype
    .go-dog
      background: url(../common/images/godog.png) no-repeat;
      width: 41px;
      height: 46px;
      background-size: 80px auto;
      position: fixed;
      bottom: 15%;
      right: -1px;
      z-index: 2;
      -webkit-animation: nnh 2.5s steps(2) infinite;
      animation: nnh 2.5s steps(2) infinite;

    .changepop
      background: #fff;
      visibility hidden
      transform: scale(.01, .01);
      transition: all .4s linear 0s;
      position: fixed;
      top: 0;
      width: 100%;
      left: 0;
      height: 100%;
      z-index: 1;
      .cartc-bg
        background: #fff;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 1;
        display: none;
        z-index: 1;

      .cartc-box
        width: 100%;
        position: fixed;
        top: 108px;
        left: 0px;
        /*display: none;*/
        border-radius: 5px;
        z-index: 1;
        overflow: hidden!important;
        .main
          max-width: 640px;
          margin: auto;
          .dogbox
            color: #999;
            position: relative;
            font-size: 16px;
            text-align: center;
            .b-line
              width: 100%;
              position: absolute;
              bottom: -4px;
              left: 0;
              text-align: center;


          .dearbox
            font-size: 16px;
            color: #666;
            margin-top: 20px;
            text-align: center;

          .will
            font-size: 20px;
            text-align: center;
          change-ul
            margin-top: 35px;
            min-width: 305px;
            padding-left: 10%;
            text-align: center;
            .cat
              float: left;
              width: 25%;
              text-align: center;
              margin-top: 21%;
              .pet1name
                margin-top: 5px;
                font-size: 12px;
                color: #999;
              img
                max-width: 70%;
            .dog
              float: left;
              position: relative;
              text-align: center;
              color: #4e9a36;
              width: 40%;
              margin-top: 14%;
              div
                margin-top: 5px;
              img
                max-width: 80%;
              a
                background: #4e9a36;
                border-radius: 30px;
                padding: 3px 15px;
                margin-top: 25px;
                font-size: 12px;
                color: #fff;
                display: inline-block;
                text-align: center;

            .fish
              float: left;
              width: 25%;
              text-align: center;
              margin-top: 21%;
              img
                max-width: 70%;
                margin-top: 5px;
                font-size: 12px;
                color: #999;

      .cartc-close
        font-size: 20px;
        text-align: center;
        width: 100%;
        height: 40px;
        line-height: 50px;
        position: fixed;
        bottom: 20px;
        left: 0;
        display: block;
        border-top: 1px solid #e7e7e7;
        z-index: 1;
  @keyframes nnh {
    from {background-position: 0% 0%}
    to {background-position: 210% 0%}
  }
</style>
