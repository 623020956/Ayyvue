<template>
   <div class="index-tab" >
        <swiper id="indextab" :options="swiperOption">
            <swiper-slide class="tab-slide">
                <ul class="tab-top">
                    <li class="tabtoplist">
                        <img src="/static/images/jiatingktv_1.png" alt="">
                        <p>音乐</p>
                    </li>
                    <li class="tabtoplist">
                        <img src="/static/images/jiatingktv_1.png" alt="">
                        <p>音乐</p>
                    </li>
                    <li class="tabtoplist">
                        <img src="/static/images/jiatingktv_1.png" alt="">
                        <p>音乐</p>
                    </li>
                    <li class="tabtoplist">
                        <img src="/static/images/jiatingktv_1.png" alt="">
                        <p>音乐</p>
                    </li>
                </ul>
                <ul class="tab-bottom">
                    <li class="tabtoplist">
                        <img src="/static/images/jiatingyingyuan_1.png" alt="">
                        <p>音乐</p>
                    </li>
                    <li class="tabtoplist">
                        <img src="/static/images/jiatingyingyuan_1.png" alt="">
                        <p>音乐</p>
                    </li>
                    <li class="tabtoplist">
                        <img src="/static/images/jiatingyingyuan_1.png" alt="">
                        <p>音乐</p>
                    </li>
                    <li class="tabtoplist">
                        <img src="/static/images/jiatingyingyuan_1.png" alt="">
                        <p>音乐</p>
                    </li>
                </ul>
            </swiper-slide>
            <swiper-slide class="tab-slide">
                <ul class="tab-top">
                    <li class="tabtoplist">
                        <img src="/static/images/jita_1.png" alt="">
                        <p>音乐</p>
                    </li>
                    <li class="tabtoplist">
                        <img src="/static/images/jita_1.png" alt="">
                        <p>音乐</p>
                    </li>
                    <li class="tabtoplist">
                        <img src="/static/images/jita_1.png" alt="">
                        <p>音乐</p>
                    </li>
                    <li class="tabtoplist">
                        <img src="/static/images/jita_1.png" alt="">
                        <p>音乐</p>
                    </li>
                </ul>
                <ul class="tab-bottom">
                    <li class="tabtoplist">
                        <img src="/static/images/jiatingyingyuan-1.0.0.png" alt="">
                        <p>音乐</p>
                    </li>
                    <li class="tabtoplist">
                        <img src="/static/images/jiatingyingyuan-1.0.0.png" alt="">
                        <p>音乐</p>
                    </li>
                    <li class="tabtoplist">
                        <img src="/static/images/jiatingyingyuan-1.0.0.png" alt="">
                        <p>音乐</p>
                    </li>
                    <li class="tabtoplist">
                        <img src="/static/images/jiatingyingyuan-1.0.0.png" alt="">
                        <p>音乐</p>
                    </li>
                </ul> 
            </swiper-slide>
            <div id="dd" class="swiper-pagination" slot="pagination"></div>
        </swiper>   
        
   </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
export default {
   name: '',
   data() {
       return {
           swiperOption: {//swiper3
               pagination: {
                    el: '.swiper-pagination',
                    clickable: true,//可以点
                    // bulletClass: 'my-bullet',
                    // bulletActiveClass: 'my-bullet-active'
                },
       
            },
       }
   },
  components: {}
}
</script>

<style scoped lang="stylus">
.index-tab
    width 100%
    background #fff
.tabtoplist
    width 1.1rem
    img
        display inline-block
        height 1.1rem
        width 1.1rem
    p
        text-align center    
.tab-top
.tab-bottom
    display flex
    justify-content space-around
    margin-bottom .2rem
.tab-bottom 
    margin-bottom .5rem
</style>
<style>
#dd  .swiper-pagination-bullet-active{
    background: orange
}
</style>
