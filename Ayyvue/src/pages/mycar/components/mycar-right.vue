<template>
    <div class="indexright" ref="indexright">
       <div class="header">
            <a href="javascript:void(0)" class="menu_nav" @click="showRight" >
                <div class="ico_x ico_x_01"></div>
            </a>
            <div class="header-left">
                <router-link to="/god" class="header-logo"></router-link>
            </div>
            <div class="header-right">
                <a class="header-a" rel="nofollow" href="javascript:void(0);">
                    <div class="ico_x ico_x_02 global_search_icon"></div>
                    <p class="header-link-tag">搜索</p>
                </a>
                <a href="" class="header-a">
                    <div class="ico_x ico_x_03"></div>
                    <p class="header-link-tag">我的</p>
                </a>
            </div>
        </div>
        <div class="c_bread">
            <div class=" bread_word floatleft">
                <a href="javascript:void(0)">音平商城</a>
            </div>
            <div class="ico_x ico_x_05"></div>
            <div class="bread_word floatleft breadlimit">
                <h1>
                    购物车
                </h1>
            </div>
        </div>  
        <mycar-box></mycar-box>
        <transition name="fade">
            <div class="mm-blocker" v-if="!isShow" @click="showRight">
            </div>
        </transition>   
        <go-top></go-top>
        <fl-foot></fl-foot>
        <v-nav></v-nav>
   </div>
</template>

<script type="text/ecmascript-6">
import GoTop from '@/pages/index/components/goTop'
import VNav from '@/pages/index/components/v-nav'
import FlFoot from '@/pages/fenlei/components/fenleifoot'
import MycarBox from '@/pages/mycar/components/mycar-box'
export default {
   name: '',
   data() {
       return {
        isShow:true,
        curHeight:0,
       }
   },
  components: {
    GoTop,
      VNav,
      FlFoot,
      MycarBox
  },
    mounted(){
      var h = document.documentElement.clientHeight || document.body.clientHeight;
      this.curHeight=h
        // console.log(this.curHeight)
  },
  methods:{
      showRight(){
            this.isShow = !this.isShow
            if(this.isShow){
                this.$refs.indexright.style.left=-0+'px'
                this.$refs.indexright.style.height=100+"%"

            }else{
                this.$refs.indexright.style.left=135+'px'
                this.$refs.indexright.style.height=this.curHeight+'px'
                this.$refs.indexright.style.overflowY='hidden'
            }
            
        },
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
.mm-blocker{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;  
    z-index:10000 ;
    background rgba(0,0,0,0.7)
}
 .fade-enter-active
 .fade-leave-active 
        transition: all 0.5s;
.fade-enter
    opacity: 0;

.fade-leave-to 
    opacity: 0;
.indexright
    position relative;
    left 0;
    top 0;
    width 100%;
    transition all 0.3s
    overflow-y hidden
    background #fff
    z-index 100
.header
    height: 47px;
    background: #f8f8f8;
    line-height: 44px;
    border-bottom: 2px solid #ff7f00;
    overflow hidden
.header a.menu_nav 
    display: block;
    width: 40px;
    height: 40px;
    text-align: center;
    position: absolute;
    left: 3px;
    background: #f8f8f8;

.ico_x_01 
    width: 40px;
    height: 40px;
    background-position: 0 0;

.header 
    .header-left 
        position: absolute;
        left: 40px;
        top: 0;
        height: 45px;
        width: 118px;
        background: #f8f8f8;

.header 
    .header-logo 
        position: absolute;
        left: 3px;
        top: 8px;
        width: 118px;
        height: 32px;
        background: url(/static/images/logo-v1.0.0.png) no-repeat;
        background-size: 100% 100%;

.header 
    .header-right 
        position: absolute;
        right: 0;
        top: 0;
        height: 45px;
        background: #f8f8f8;

.ico_x_02, 
.ico_x_03 
    width: 20px;
    height: 20px;
    margin-top: 7px;
    margin-left: 5px;
    background-size: 100px;

.header 
    .header-a 
        float: left;
        display: block;
        margin-right: 8px;
        width: 30px;
        height: 45px;
        background: #f8f8f8;
        text-align: center;

.ico_x_02 
    background-position: -20px 0;

.header 
    .header-link-tag 
        line-height: 1.2;
        font-size: 9px;
    
.ico_x_03 
    background-position: -40px 0;
</style>
