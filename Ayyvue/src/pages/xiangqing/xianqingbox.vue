<template>
   <div class="">
       <index-header></index-header>
       <swiper id="banner" :options="swiperOption" ref="mySwiper" v-if="sp1.length">
            <swiper-slide class="banner-slide"><img :src="sp1[0].images1"></swiper-slide>
            <swiper-slide class="banner-slide"><img :src="sp1[0].images2"></swiper-slide>
            <swiper-slide class="banner-slide"><img :src="sp1[0].images3"></swiper-slide>
            <div id="dd" class="swiper-pagination" slot="pagination"></div>
        </swiper>   
        <details-box></details-box>
        <details-tab></details-tab>
   </div>
</template>

<script type="text/ecmascript-6">
import IndexHeader from '@/pages/index/components/index-header'
import DetailsTab from '@/pages/xiangqing/components/details-tab'
import DetailsBox from '@/pages/xiangqing/components/details-box'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
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
           sp1:[],
       }
   },
  components: {
      IndexHeader,
      DetailsTab,
      DetailsBox
  },
  watch:{
      '$route': {
            handler: function(){
                axios.get('http://localhost/api/getData2.php',{
                    params: {
                        key: this.$route.params.id,
                        
                    }
                }).then((res)=>{
                     console.log(this.$route.params.id)
                    console.log(res);
                    this.sp1 = res.data;
                });
               
                
            },
            immediate: true,

          }

  }
}
</script>

<style scoped lang="stylus">
.banner-slide
     width: 100%;
     height: 7.5rem;
 
.banner-slide 
    img
        width: 100%;
        height: 7.5rem;
        background: #000;
 
#banner
    height: 7.5rem;

#dd
    .swiper-pagination-bullet 
        background red!important
</style>
<style>

#dd  .swiper-pagination-bullet{
    background: #eee
}
#dd  .swiper-pagination-bullet-active{
    background: orange
}
</style>