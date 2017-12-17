<template>
  <div>
    <header>
      <div class="sort nav-sort cur">
        <a href=""><span>分类</span></a>
      </div>
      <div class="brand nav-sort">
        <a href=""><span>品牌</span></a>
      </div>
      <a href="">
        <img src="../common/images/search.png" class="search">
      </a>
    </header>
    <div id="tab1" class="kindbox">
      <div class="leftbox">
        <div>
          <ul>
            <li class="on">为您推荐</li>
            <li>狗狗主粮</li>
            <li>狗狗零食</li>
            <li>狗狗服饰</li>
            <li>狗狗窝垫</li>
            <li>狗狗生活</li>
            <li>狗狗玩具</li>
            <li>狗狗保健</li>
            <li>狗狗医疗</li>
            <li>狗狗牵引</li>
            <li>狗狗美容</li>
            <li>狗狗周边</li>
            <li>狗狗清洁</li>
          </ul>
        </div>
      </div>
      <div class="rightbox">
        <div class="sort-detail-list"><!----> <!---->
          <div class="sort-recom bgfff">
            <div class="hot-recom bbtf3">
              <a href="javascript:;" class="title">热门分类</a>
              <ul class="clearfix">
                <li>
                  <a href="" class="db">
                  <div class="rela loadimg-nofixed">
                    <img src="https://img2.epetbar.com/nowater/2017-05/12/10/f38b8a4245c34c33061d04ad1e8009dd.jpg@!300w-b">
                  </div>
                  <p class="ftc ft12 mt10 c333">国产狗粮</p>
                  </a>
                </li>
                <li>
                  <a href="" class="db">
                  <div class="rela loadimg-nofixed">
                    <img src="https://img2.epetbar.com/nowater/2017-05/26/10/2eeb97d6268f555de24ec370fd0de2ad.jpg@!300w-b">
                  </div>
                  <p class="ftc ft12 mt10 c333">磨牙洁齿</p>
                  </a>
                </li>
                <li>
                  <a href="" class="db">
                  <div class="rela loadimg-nofixed">
                    <img src="https://img2.epetbar.com/nowater/2016-08/20/14/8095e54e9414a06705acb7471eac7629.jpg@!300w-b">
                  </div>
                  <p class="ftc ft12 mt10 c333">肠胃调理</p>
                  </a>
                </li>
                <li>
                  <a href="" class="db">
                  <div class="rela loadimg-nofixed">
                    <img src="https://img2.epetbar.com/nowater/2017-05/04/16/fd206e6489657294e9067d349ea297f1.jpg@!300w-b">
                  </div>
                  <p class="ftc ft12 mt10 c333">强化免疫</p>
                  </a>
                </li>
                <li>
                  <a href="" class="db">
                  <div class="rela loadimg-nofixed">
                    <img src="https://img2.epetbar.com/nowater/cates/2014-03/24/81f4ac6b5b31143c056046bd9dc14b9e.jpg@!300w-b">
                  </div>
                  <p class="ftc ft12 mt10 c333">体内驱虫</p>
                  </a>
                </li>
                <li>
                  <a href="" class="db">
                  <div class="rela loadimg-nofixed">
                    <img src="https://img2.epetbar.com/nowater/2016-07/21/14/0f972761c08a37c8baff88fa9302053d.jpg@!300w-b">
                  </div>
                  <p class="ftc ft12 mt10 c333">进口狗粮</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  header
    height: 40px;
    background: #fff;
    padding: 0 15px;
    border-bottom: 1px solid #cbcbcb;
    /*position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 11;*/
    .nav-sort
      float: left;
      width: 50%;
      height: 40px;
      line-height: 40px;
      font-weight: 700;
      box-sizing border-box
      span
        display: inline-block;
        height: 40px;
        padding: 0 4px;
        cursor: pointer;
      &.cur span
        color: #ed4044;
        border-bottom: 2px solid #ed4044;
    .sort
      text-align: right;
      padding-right: 5%;
      font-size: 13px;
    .brand
      padding-left: 5%;
      font-size: 13px;
    .search
      position: absolute;
      top: 13px;
      right: 15px;
      width: 14px;
      height: 14px;


  .leftbox
    position: fixed;
    top: 40px;
    left: 0;
    overflow-y: scroll;
    bottom: 0;
    padding-bottom: 45px;
    background: #fff;
    li
      width: 70px;
      height: 50px;
      line-height 50px
      background: #fff;
      font-size: 13px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      text-align: center;
      &.on
        background: #f3f4f5;
        color: #ed4044;
  .rightbox
    margin-left: 75px;
    background: #fff;
    .hot-recom
      padding: 15px 5px 20px;
      border-top: 1px solid #f3f4f5;
      .title
        display: block;
        font-size: 12px;
        color: #999;
        padding-left: 5px;
        margin-top: 10px;

      ul
        overflow hidden
        li
          float: left;
          width: 33.33%;
          /*padding: 0 5px;*/
          margin-top: 10px;
          .db
            display: block;
            div
              position: relative;
              padding-top: 100%;
              img
                position: absolute;
                top: 0;
                left: 0;
                width: 90%;
            p
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              height: 20px;
              font-size: 12px;
              color: #333;
              margin-top: 10px;
              text-align: center;


</style>
