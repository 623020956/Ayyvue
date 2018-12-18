<template>
   <div class="carousel" >
        <swiper id="banner" :options="swiperOption">
            <swiper-slide class="banner-slide" v-for="(item,index) in list" :key="index"><img :src="'/static/images/' + item.imgUrl"></swiper-slide>
            
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
                speed:400,//动画速度
                autoplay: {
                    delay: 2000,//延迟几秒
                    disableOnInteraction: false,//拖动后是否在执行
                },

            //  freeMode : true,//启用拖动
            // freeModeMomentum : false,//拖动回弹关；

            // direction: 'vertical', // 垂直切换选项
                loop: true, // 循环模式选项
            
            // // 如果需要分页器
            },
            list:[]
       }
   },
  components: {},
  created(){
      //向后台发起请求，获取轮播图信息
      this.list = [
          {
              id: "001",
              imgUrl: '201609241805370073131.jpg'
          },
          {
              id: "002",
              imgUrl: '201609241805490447220.jpg'
          },
          {
              id: "003",
              imgUrl: '201609241805560741564.jpg'
          },
          {
              id: "004",
              imgUrl: '201609241806360961994.jpg'
          },
          {
              id: "005",
              imgUrl: '201609241806480108411.jpg'
          },
      ]
  }
}
</script>

<style scoped lang="stylus">
 .banner-slide
     width: 100%;
     height: 3rem;
 
 .banner-slide 
    img
        width: 100%;
        height: 3rem;
        background: #000;
 
 #banner
     height: 3rem;
 
 
</style>
