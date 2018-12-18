<template>
<div>
    <div class="sptopbox">
        <div  :class="searchBarFixed==true?'sptop active':'sptop'">
            <router-link to="/good3/food/id">
                <p class="spp1">综合</p>
                <p class="spp2"></p>
            </router-link>
            <router-link to="/good3/food/price">
                <p class="spp1">价格</p>
                <p class="spp2"></p></router-link>
            <router-link to="/good3/food/num">
                <p class="spp1">销量</p>
                <p class="spp2"></p>
            </router-link>
            <a href="javascript:void(0)" @click="showright">
                <p class="spp1">筛选</p>
                <p class="spp2"></p>
            </a>
        </div>
    </div>
    <transition name="fade">
        <div v-if="isShow" @click="showright" id="screenPannelDiv" class="md-popCover sidebary">
        </div>
    </transition>
    <transition name="move">
        <screen-box v-if="isShow"></screen-box>
    </transition>

</div>
</template>

<script type="text/ecmascript-6">
import ScreenBox from '@/pages/t-details/components/screen'
export default {
   name: 'VNav2',
   data() {
       return {
           searchBarFixed:false,
           isShow:false
       }
   },
  components: {
      ScreenBox
  },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods:{
        showright(){
            this.isShow=!this.isShow
        },
    handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        // console.log(scrollTop)
        if (scrollTop > 80) {
            this.searchBarFixed = true
        } else {
            this.searchBarFixed = false
        }
    },

}
}
</script>

<style scoped lang="stylus">
#screenPannelDiv{
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0,0.6); 
    z-index: 5000;
}
.fade-enter-active
.fade-leave-active 
    transition: all 0.6s;
.fade-enter   
.fade-leave-to 
    opacity  : 0;
.move-enter-active
.move-leave-active 
    transition: all 0.1s;
.move-enter   
.move-leave-to 
    left : 0px;
.sptopbox
    height 42px
.sptop
    width :100%;
    height :41px;
    border-bottom: 1px solid #dfdfdf;
    background-color: #fff;
    overflow hidden
.active
    position fixed
    top 0;
    left 0;
    z-index 1000
.sptop
    a
        display :block;
        width :25%;  
        float left 

.sptop
    .spp1
        width :100%;
        height :38px;
        line-height :38px;
        text-align :center

.sptop
    .spp2
        height :2px;

.router-link-active
    .spp2
        background :orange 
</style>
