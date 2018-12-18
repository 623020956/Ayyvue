<template>
   <div class="sp">
     
       <ul id="proListUl" class="sub-product-list" v-if="sp1.length">  
           <router-link tag="li"  v-for="(item,index) in sp1" :key="index" :to="'/seller/'+item.Id">
                <a class="prolist-click" >
                    <div class="wbox">
                        <div class="pro-img">
                            <img :src="item.img" :alt="item.img">
                        </div>
                        <div class="pro-info">
                            <p class="pro-name">
                                {{item.title}}
                            </p>
                            <p class="pro-tip">{{item.detail}}</p>
                            <p class="mt10">
                                <span class="ypPrice mr10 v-list-ypPrice"> ¥{{item.price}}</span>
                            </p>
                        </div>
                            <span class="arrow"></span>
                    </div>
                </a>  
           </router-link>
       </ul>
    
   </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
export default {
   name: '',
   data() {
       return {
           sp1:[],
          
       }
   },
  components: {},
  watch:{
      '$route': {
            handler: function(){
                // 根据需要可以加入axios拦截器来处理loading
                axios.get('http://localhost/api/getData.php',{
                    params: {
                        key: this.$route.params.type
                    }
                }).then((res)=>{
                    console.log(res);
                    this.sp1 = res.data;
                });
                console.log(this.$route.params.type)
               
            },
            immediate: true,
          }

  }

}
</script>

<style scoped lang="stylus">
.yp-product-list 
    overflow: hidden;

.sub-product-list
    width: 100%;

.sub-product-list 
    li 
        padding: 5px 10px;
        border-bottom: #d9d9d9 solid 1px;
        background-color: #fff;
        height: 102px;

.sub-product-list 
    li 
        .prolist-click 
            display: block;
            height: 100%;

.wbox
    display: -webkit-box;

.pro-info 
    -webkit-box-flex: 2;

.sub-product-list 
    li 
        .prolist-click 
            .pro-img 
                width: 80px;
                margin-right: 10px;

.sub-product-list 
    li 
        .prolist-click 
            .pro-img img 
                width: 80px;
                height: 80px;

.pro-name
    height: 30px;
    line-height: 15px;
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
    color: #333;
    font-size: 13px;

.pro-tip
    color: #999;
    height: 30px;
    overflow: hidden;
    line-height: 15px;
    margin-top: 5px;
    word-break: break-all;
    word-wrap: break-word;

.mt10 
    margin-top: 10px;

.ypPrice 
    font-size: 14px;
    color: #ff5600;

.arrow 
    display: inline-block;
    width: 6px;
    height: 6px;
    margin: 45px 5px 0 10px;
    border-color: #707070;
    border-style: solid;
    border-width: 0 2px 2px 0;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);

</style>
