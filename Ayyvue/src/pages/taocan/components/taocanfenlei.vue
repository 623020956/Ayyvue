<template>
   <ul>
        <li ref="foodClass">
          <div class="title">
            <span>所有{{goods.name}}</span>
            <b><a href="javascript:void(0)">全部</a></b>
          </div>
          <h5>{{goods.class}}</h5>
        <ul class="classflybox">
            <li v-for="(food,index) in goods.classify" :key="index">
              <a href="javascript:void(0)">{{food}}</a>
            </li>
        </ul>
        <h5>{{goods.brand}}</h5>
        <ul class="brandbox">
            <li v-for="(img,index) in goods.brandimg" :key="index">
              <a href="javascript:void(0)"><img :src="img" alt=""></a>
              <p>{{goods.brandname[index]}}</p>
            </li>
        </ul>
        </li>
    </ul>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
import BScroll from "better-scroll";
export default {
   name: '',
   data() {
       return {
           goods:[],
       }
   },
  components: {},
    watch:{
      '$route': {
            handler: function(){
                // 根据需要可以加入axios拦截器来处理loading
                axios.get("/api/goods",{
                   
                }).then((res)=>{
                     let index=this.$route.params.index
                     let localData = res.data;
                    this.goods = localData.data[index];
                });        
            },
            immediate: true,
          }

  },

}
</script>

<style scoped lang="stylus">
.title 
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #ddd;
    line-height: 45px;
    width: 90%;
    margin-left: 5%;
    margin-bottom: 15px;
    span
      float: left;
      font-size: 16px;
      color: #333;
    b
      font-size: 14px;
      float: right;
      font-weight: normal;
      position: relative;
      top: 1px;  
h5 
  font-size: 15px;
  line-height: 15px;
  font-weight: normal;
  color: #666;
  margin-bottom: 2%;
  padding-left: 3%;
  border-left: 3px solid #f60;
  margin-left: 5%;
.classflybox
  overflow: hidden;
  margin-bottom: 4%;
  padding: 2% 5%;
  li
    padding-right: .8rem;
    text-align center 
    width: 33.33%;
    height 0.8rem;
    float: left;
    padding: 1%;
    a
      height 100%
      line-height 0.8rem
      display: block;
      color #333
      font-size 14px
      img 
        width: 50px;
        height: auto;
    p
      line-height: 0.8rem;
      overflow: hidden;
      text-align: center;
      font-size: 14px;
      height 0.8rem
.brandbox
  overflow: hidden;
  margin-bottom: 4%;
  padding: 2% 5%;
  li
    padding-right: .8rem;
    text-align center 
    width: 33.33%;
    float: left;
    padding: 1%;
    a
      height 100%
      line-height 0.8rem
      display: block;
      color #333
      font-size 14px
      img 
        width: 50px;
        height: auto;
    p
      line-height: 0.8rem;
      overflow: hidden;
      text-align: center;
      font-size: 14px;
      height 0.8rem
</style>
