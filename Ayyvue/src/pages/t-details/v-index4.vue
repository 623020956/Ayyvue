<template>
   <div class="">
       <index-header></index-header>
       <div class="c_bread">
            <div class=" bread_word floatleft">
                <a href="javascript:void(0)">音平商城</a>
            </div>
            <div class="ico_x ico_x_05"></div>
            <div class=" bread_word floatleft">
                <a href="javascript:void(0)">套餐分类</a>
            </div>
            <div class="ico_x ico_x_05"></div>
            <div class="bread_word floatleft breadlimit">
                <h1>
                    {{this.msg}}
                </h1>
            </div>
        </div> 
        <v-nav2></v-nav2>
        <router-view></router-view>
        <go-top></go-top>
        <fl-foot></fl-foot>
        
        <v-nav></v-nav>
   </div>
</template>

<script type="text/ecmascript-6">
import IndexHeader from '@/pages/index/components/index-header'
import VNav2 from '@/pages/t-details/components/v-nav2'
import GoTop from '@/pages/index/components/goTop'
import VNav from '@/pages/index/components/v-nav'
import FlFoot from '@/pages/fenlei/components/fenleifoot'

export default {
   name: '',
   data() {
       return {
        isShow:false,
        msg:'',
       }
   },

  components: {
      IndexHeader,
      VNav2,
      GoTop,
      VNav,
      FlFoot,

  },
  methods:{
      showRight(){
          this.isShow=!this.isShow
      }
  }
}
</script>

<style scoped lang="stylus">
.ico_x {
    width: 45px;
    height: 45px;
    display: block;
    overflow: hidden;
    background: url(/static/images/icon_x-v1.0.0.png) no-repeat;
    background-size: 225px;
}
.c_bread {
    width: 100%;
    height: 30px;
    line-height: 30px;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
}

.c_bread .bread_word {
    padding: 0 8px;
}
.bread_word
    a
        display block
.floatleft {
    float: left;
}

.c_bread a {
    color: #06c;
}

.ico_x_05 {
    width: 13px;
    height: 30px;
    background-position: -130px 0;
    background-size: 151px;
    float: left;
}

.breadlimit {
    width: 27%;
    height: 30px;
    display: block;
    float: left;
}

.bread_word h1 {
    font-size: 12px;
}

.breadlimit h1 {
    font-weight: 600;
}
</style>
