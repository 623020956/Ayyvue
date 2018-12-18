<template>
    <div id="ypSearch-box" class="search-div">
        <div class="yp-header-home-wrapper yp-header2 clearfix">
            <div class="yp-search-icon2">
                <a @click="goback" href="javascript:void(0)" class="yp-search-icon-cancel-a yp-search">
                    <i class="yp-sprite-icon2"></i>
                </a>
            </div>
            <div class="yp-search-form2">
                <div class="yp-search-form-box2">
                    <div class="yp-search-form-input-a">
                        <input @keyup="show" v-model="thing"  type="text" id="searchkwId" class="hilight1" placeholder="搜索商品" value="">
                        <a href="javascript:void(0)" class="yp-search-form-action2 ">
                            <span class="yp-sprite-icon"></span>
                        </a>
                    </div>

                </div>
            </div>
        </div>
        <div class="searchbox">
            <ul class="search-list">
                <li class="auto-li" v-for="(item,index) in list" :key="index">
                    <a href="javascript:void(0)">{{item}}</a>
                </li>
            </ul>
        </div>
        <div class="hot-search">
            <div class="hot-search-head">
                <p>热门搜索</p>
            </div>
            <div class="hot-search-tags">
                <div class="hot-search-tagst">
                    <a href="javascript:void(0)">手机麦克风</a>
                    <a href="javascript:void(0)">K歌声卡</a>
                    <a href="javascript:void(0)">录影声卡</a>
                </div>
                <div class="hot-search-tagsb">
                    <a href="javascript:void(0)">录影声卡</a>
                    <a href="javascript:void(0)">手机麦克风</a>
                    <a href="javascript:void(0)">K歌声卡</a>
                </div>
            </div>
        </div>
        <div class="search-land">
            <div class="recent-search-head">
                <p>历史搜索</p>
                <i class="garbage-pic clear-searchhis"></i>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)
export default {
   name: '',
   data() {
       return {
           thing:"",
           list:[],
       }
   },
//    https://www.ingping.com/index/zixun?m=1544756019992&jsoncallback=jQuery19108429528152273922_1544756019706&_=1544756019707
// https://sug.so.360.cn/suggest?word=a&encodein=utf-8&encodeout=utf-8&pq=&t=2574587
//    created(){
//        window.qq = function(data){
//            console.log(data);
//        }
//         this.$jsonp('https://www.ingping.com/index/zixun?jsoncallback=qq',{
                
//         }).then( data => {
//                    qq(data)
//    	 })
// },     
  components: {},

  methods:{
      goback(){
          this.$router.go(-1);
      },
      show(){
           this.$jsonp('https://www.ingping.com/search/solrCheck?',
                    {
                        term:this.thing,
                    }).then(data => {
                        this.list= data
                        // console.log(this.list)
                })   
                        
      }
  }
}
</script>

<style scoped lang="stylus">
.search-div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #eee;
    z-index: 10000;
    overflow-x: hidden;
}

.yp-search-icon1 {
    width: 30px;
    overflow: hidden;
    border-radius: 8px;
    float: left;
}

.yp-search-icon-cancel-a {
    line-height: 20px;
    display: block;
    padding: 10px 10px 10px 0;
}

.yp-search-icon-cancel-a i {
    display: block;
    width: 20px;
    height: 20px;
    background-position: -20px 0;
}

.hilight1 {
    border: 0;
    display: inline-block;
    background: 0;
    font-size: 13px;
    line-height: 1.2em;
    height: 1.2em;
    width: 90%;
    vertical-align: middle;
    margin-top: -13px;
    color: #666;
}

.yp-sprite-icon {
    background: url(/static/images/yp-sprites-v1.0.0.png) no-repeat;
    background-size: 200px 200px;
}

.top-search-box {
    position: relative;
    width: 100%;
    height: 40px;
    margin: 0 0 3px;
}

.yp-search-icon2{
	width: 30px;
	overflow: hidden;
    border-radius:8px; 
    float: left;
}
.yp-header-home-wrapper{
    line-height: 40px;
    margin: 0 9px;
    width: 100%
}
.yp-search-form2 {
    float: left;
    width: 90%;
}
.yp-search-form2 .yp-search-form-input-a {
    background: #fff;
    display: block;
    margin-top: 5px;
    width: 96%;
    border-radius: 4px;
    overflow: hidden;
    font-size: 12px;
    border: 1px solid #bfbfbf;
    height: 30px;
}
.yp-search-form-input-a{
    position: relative;
}
#searchkwId{
    text-indent: 0.5em;
}
.yp-sprite-icon2 {
    display: block;
    width: 20px;
    height: 20px;
    background-position: -40px 0 !important;
}
.yp-search-form-action2{
    position: absolute;
    right: 0;
    width: 30px;
    height: 30px;
	border-radius: 0 4px 4px 0;
    border-left:1px solid   #bfbfbf;
}

.yp-sprite-icon2{
	background: url(/static/images/yp-sprites-v1.0.0.png) no-repeat;
    background-size: 200px 200px;
}
.yp-search-form-action2 span {
    display: block;
    width: 15px;
    height: 14px;
    background-position: -83px 0;
    margin: 7px 0 0 7px;
}

.hot-search {
    padding-left: 15px;
    border-top: solid #D1D1D1 1px;
    background: #fff;
}
.hot-search-tagst,.hot-search-tagsb{
    display: flex;
    justify-content:space-between;
    
}
.hot-search-head {
    padding: 10px 15px 10px 0;
}
.hot-search-tagst a,.hot-search-tagsb a{
    display: block;
    height: 24px;
    line-height: 24px;
    border-radius: 1.5625rem;
    display: block;
    width: 100%;
    color: #666;
    font-size: 12px;
    border: 1px solid #eee;
    background-color: #eee;
    overflow: hidden;
    text-align: center;
    margin: 0 15px 7px 0;
}
.search-land{
    margin-top:10px;

}
.recent-search-head {
    padding: 10px 15px;
    overflow: hidden;
    background: #fff;
}
.recent-search-head p {
    font-size: 14px;
    color: #999;
    float: left;
    width: 6.25rem;
    padding-left: 1px;
}
.recent-search-head .garbage-pic {
    float: right;
    display: block;
    background: url(/static/images/search-sprites-v1.0.0.png) -35px 0 no-repeat;
    height: 15px;
    width: 15px;
    background-size: 50px 50px;
}

.searchbox{
    position:absolute;
    top:44px; 
    width: 100%
}
.search-list{
    background: #fff;
    width: 100%;
    padding-left:12px; 
}
.auto-li a{
    height: 42px;
    display: block;
    padding-right: 12px;
    color: #333;
    line-height: 42px;
    border-bottom:1px solid #ccc; 
    font-size: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
