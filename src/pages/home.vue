<template>
  <div class="content">
    <div class="overflow xiazaiApp">
      <div class="overflow rela">
        <span class="clsoebtn">
          <img id="close_down_bar" src="//static.epetbar.com/static_wap/lib/common_images/closebtn_03.png">
        </span>
        <div class="appdowimg">
          <a
            href="https://wap.epet.com/download.html?do=market&amp;utm_content=mob1%E5%93%81%E7%89%8C%E8%AF%8De%E5%AE%A0%E7%89%A9%E7%BD%91&amp;utm_type=content">
            <img src="https://img2.epetbar.com/nowater/2017-12/13/18/c63b6e6cf483cbb61196f658920a9d6e.jpg@!water">
          </a>
        </div>
      </div>
    </div>
    <eHeader></eHeader>
    <div class="scrollWrapper" ref="scrollWrapper">
      <div>
        <carousel></carousel>
        <lists></lists>
        <surprise></surprise>
        <xline></xline>
        <imagea></imagea>
        <xline></xline>
        <div class="go">
          <div class="divboximg flex">
            <div class="divimg">
              <a href="">
                <img src="https://img2.epetbar.com/nowater/2017-12/13/09/1ec9379f83eb421db9a09195c9594e29.jpg@!water" lazy="loaded">
              </a>
            </div>
            <div class="divimg">
              <a href="">
                <img src="https://img2.epetbar.com/nowater/2017-12/13/09/c023e6c441d726b0c1b1caafae8999f0.jpg@!water" lazy="loaded">
              </a>
              <a href="">
                <img src="https://img2.epetbar.com/nowater/2017-12/13/10/35bb7f3bd146cb9a9e74a935803f0d9a.jpg@!water" lazy="loaded">
              </a>
            </div>
          </div>
        </div>
        <xline></xline>
        <minheader></minheader>
        <videoimg></videoimg>
        <xline></xline>
        <minheader></minheader>
        <imagea></imagea>
        <xline></xline>
        <imagea></imagea>
        <xline></xline>
        <imagea></imagea>
        <xline></xline>
        <imagea></imagea>
        <xline></xline>
        <imagea></imagea>
        <xline></xline>
        <imagea></imagea>
        <xline></xline>
        <imagea></imagea>
        <xline></xline>
        <imagea></imagea>
        <xline></xline>
        <minheader></minheader>
        <carousel></carousel>
        <xline></xline>
        <minheader></minheader>
        <videoimg></videoimg>
        <xline></xline>
        <minheader></minheader>
        <videoimg></videoimg>
        <xline></xline>
        <div>
          <a href="javascript:;">
            <img src="https://img2.epetbar.com/nowater/2017-12/13/11/be84f01e893b0e631d8512566eb79117.jpg@!water" lazy="loaded">
          </a>
        </div>
        <div class="wap-footer-bar">
          <div class="footer">
            <div class="ft">
              <span class="bt" title="触屏版">触屏版</span>
              <span><a href="https://wap.epet.com/app.html">手机客户端</a></span>
              <span><a href="https://wap.epet.com/AboutEpet.html">关于我们</a></span>
              <span><a href="https://wap.epet.com/faq.html">联系我们</a></span>
            </div>
            <div class="copyright">
              © wap.epet.com 版权：重庆易宠科技有限公司
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import header from '../components/header.vue';
  import carousel from '../components/carousel.vue';
  import lists from '../components/lists.vue';
  import surprise from '../components/surprise.vue';
  import xline from '../components/line.vue';
  import imagea from '../components/imagea.vue';
  import minheader from '../components/minheader.vue';
  import videoimg from '../components/video.vue';

  export default {
    mounted() {
      new BScroll(this.$refs.scrollWrapper,{
        click: true
      });
    },
    components: {
      imagea,
      videoimg,
      minheader,
      xline,
      surprise,
      lists,
      carousel,
      eHeader: header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .content
    height 100%
    .xiazaiApp
      max-width: 640px;
      margin: 0 auto;
      background: rgba(61, 61, 61, 1);
      color: #fff;
      position: relative;
      z-index: 102;
      overflow: hidden !important;
    .scrollWrapper
      height 100%
    .overflow
      position: relative;
      overflow: hidden !important;
      .clsoebtn
        display: inline-block;
        width: 5%;
        margin-right: 2%;
        vertical-align: middle;
        position: absolute;
        top: 20%;
        left: 2%;
        img
          height: 100%;
          width: 100%;
          vertical-align: middle;

      .appdowimg
        a
          color: #333;
          img
            width: 100%;
            vertical-align: middle;
    .go
      .divboximg
        display: flex;
        .divimg
          img
            width: 100%;
          &:nth-child(1)
            width: 50.13%;
          &:nth-child(2)
            width: 50.13%;
    .footer
      margin: 1em 0 0;
      background: #fff;
      clear: both;
      height 270px
      .ft
        font-size: 14px;
        padding: 15px 0 5px;
        text-align: center;
        span
          padding-right: 10px;
        .bt
          color: red;

    .copyright
      text-align: center;
      margin: 5px 10px 0 10px;
      padding-bottom: 75px;
      font-size: 12px;

</style>
