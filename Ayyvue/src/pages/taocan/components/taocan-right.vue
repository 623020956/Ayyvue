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

             <!-- <index-header></index-header> -->
  
            <tao-box></tao-box>
            <transition name="fade">
                <div class="mm-blocker" v-if="!isShow" @click="showRight">
                </div>
            </transition>
            
             <!-- <zhe-zhao></zhe-zhao> -->
            
            <v-nav></v-nav>

        </div>
</template>

<script type="text/ecmascript-6">
import VNav from '@/pages/index/components/v-nav'
import TaoBox from '@/pages/taocan/components/taocanbox'
export default {
   name: '',
   data() {
       return {
           isShow:true,
            curHeight:0,
            curWidth:0,
       }
   },
  components: {
      VNav,
      TaoBox
  },
  mounted(){
      var h = document.documentElement.clientHeight || document.body.clientHeight;
      var k = document.documentElement.clientWidth || document.body.clientWidth;
      this.curHeight=h
      this.curWidth=k
        // console.log(this.curHeight)
  },
  methods:{
      showRight(){
            this.isShow = !this.isShow
            if(this.isShow){
                this.$refs.indexright.style.left=-0+'px'
                this.$refs.indexright.style.height=100+"%"
                this.$refs.indexright.style.width=100+"%"

            }else{
                this.$refs.indexright.style.left=135+'px'
                this.$refs.indexright.style.height=this.curHeight+'px'
                this.$refs.indexright.style.overflowY='hidden'
                this.$refs.indexright.style.width=this.curWidth-135+'px'
                this.$refs.indexright.style.overflowX='hidden'
            }
            
        },
       
  },
}
</script>

<style scoped lang="stylus">
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
.fade-leave-to 
    opacity: 0;
.indexright
    position absolute;
    left 0;
    top 0;
    bottom 0;
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

.ico_x 
    width: 45px;
    height: 45px;
    display: block;
    overflow: hidden;
    background: url(/static/images/icon_x-v1.0.0.png) no-repeat;
    background-size: 225px;

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
