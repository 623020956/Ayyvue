<template>
   <div class="sidebar-content ">
            <div class="sidebar-header">
                <div class="sidebar-header-left sidebary" @click="showright">
                    <span></span>
                </div>
                <div class="sidebar-header-center">
                    <span>筛选</span>
                </div>
            </div>
            <div class="sidebar-items-container">
                <div class="tit_one">价格</div>
                <div class="wbox-flex">
                    <input type="text" class="sn-input-text-b" name="begin" id="begin" value="" placeholder="起始价格">
                    <span>-</span>
                    <input type="text" class="sn-input-text-b" name="begin" id="end" value="" placeholder="终止价格">
                    <span>&nbsp;</span>
                    <a href="javascript:void(0);" class="wbox-flexa"> 确认 </a>
                </div>
                <div v-for="(item,index) in list" :key="index">
                    <div class="tit_two" @click="gainum(index)">
                        {{item.name}}
                        <img :class="num!==index?'tit_one_img':'active'" src="/static/images/yp-sprites01-v1.0.0.png" alt="">
                        <img :class="num==index?'tit_one_img2':'active'" src="/static/images/yp-sprites02-v1.0.0.png" alt="">
                    </div>
                    <ul :class="num==index?'sidebar-list':'active'">
                        <li v-for="(goods,index2) in list[index].foodlist" :key="index2" class="sidebar-iteam">
                            <a href="details.html">
                                {{goods.food1}}
                            </a>
                            <a href="details.html">
                                {{goods.food2}}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: '',
   data() {
       return {
           list:[
               {
               name:"品牌",
               foodlist:[
                   {
                       food1:"得胜(15)",
                       food2:"舒尔(14)"
                   },
                    {
                       food1:"得胜(15)",
                       food2:"舒尔(14)"
                   },
                    {
                       food1:"得胜(15)",
                       food2:"舒尔(14)"
                   },
                    {
                       food1:"得胜(15)",
                       food2:"舒尔(14)"
                   }, {
                       food1:"得胜(15)",
                       food2:"舒尔(14)"
                   }, {
                       food1:"得胜(15)",
                       food2:"舒尔(14)"
                   }, {
                       food1:"得胜(15)",
                       food2:"舒尔(14)"
                   },
               ],
             },
              {
               name:"适用设备",
               foodlist:[
                   {
                       food1:"电脑(84)",
                       food2:"移动播放设备(77)"
                   },
                   {
                       food1:"手机(32)",
                       food2:"HiFi/TV(7)"
                   },
                    {
                       food1:"手机(32)",
                   },
               ],
             },
             {
               name:"连接方式",
               foodlist:[
                   {
                       food1:"有线(78)",
                       food2:"无线(6)"
                   },
                   {
                       food1:"FM频率(5)",
                   },
               ],
             },
             {
               name:"佩戴方式",
               foodlist:[
                   {
                       food1:"头戴式(63)",
                       food2:"耳塞式(22)"
                   },
                   {
                       food1:"头戴式(63)",
                       food2:"耳塞式(22)"
                   },
               ],
             },
             {
               name:"扩展功能",
               foodlist:[
                   {
                       food1:"音量控制(6)",
                       food2:"降噪(1)"
                   },
                   {
                       food1:"带线控(1)",
                       food2:"播放控制(1)"
                   },
               ],
             },
             {
               name:"兼容系统",
               foodlist:[
                   {
                       food1:"iOS(15)",
                       food2:"Android(15)"
                   },
               ],
             },
           ],
           num:6,
       }
   },
  components: {},
  methods:{
      showright(){
          this.$parent.showright();
      },
      gainum(index){
          this.num=index;
      }
      
  }
}
</script>

<style scoped lang="stylus">
.active
    display none
.sidebar-content {
    position: fixed;
    left: 10%;
    top: 0;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    width: 90%;
    z-index: 300;
    background: #eee;
    z-index: 6000;
}
.sidebar-header {
    position: fixed;
    top: 0;
    left: 10%;
    background: #fff;
    height: 43px;
    width: 100%;
    right: 0;  
    z-index: 19;
    border-bottom: 1px solid #ddd;
}
.sidebar-header-left,.sidebar-header-center{
    float: left;
    width: 33.3%;
    color: #252525;
}
.sidebar-header span {
    display:block;
    line-height: 16px;
    padding: 14px 7px;
    font-size: 16px;
}
.sidebar-header-center{
    text-align: center;
}
.sidebar-header .sidebar-header-left span {
    margin-left: 7px;
    display: block;
    background: url(/static/images/ing-sprites-v1.0.0.png) no-repeat;
    background-size: 200px 200px;
    background-position: -23px 1px;
    width: 16px !important;
    height: 22px !important;
    margin: 11px 15px;
    padding: 0;
}
.sidebar-items-container {
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
    width: 100%;
    background: #f4f5f7;
}

.wbox-flex {
    background: #fff;
    padding: 10px;
    border-bottom: 1px solid #ddd;
}
.sn-input-text-b {
    height: 30px;
    width: 30%;
    padding: 0 3px;
    background: #fff;
    border: 1px solid #DCDCDC;
    border-radius: 2px;
    font-size: 12px;
}
.wbox-flexa{
    display: block;
    font-size: 14px;
    line-height: 30px;
    width: 20%;
    background-color: #ff8000;
    color: #ffffff;
    border-radius: 4px;
    float: right;
    text-align: center;
    margin-right: 20px;
}
.tit_one {
    padding: 10px;
    font-size: 14px;
    position: relative;
    font-weight: 700;
    border-bottom: 1px solid #ddd;
}
.tit_two{
    padding: 10px;
    font-size: 14px;
    position: relative;
    font-weight: 700;
    border-bottom: 1px solid #ddd;
}
.tit_one_img {
    width: 14px;
    position: absolute;
    right: 10px;
    top: 17px;
}
.tit_one_img2 {
    width: 14px;
    position: absolute;
    right: 10px;
    top: 17px;
}
.sidebar-list{
    overflow: hidden;
    transition: all 0.3s;

}
.sidebar-iteam a{
    display: block;
    color: #252525;
    text-align: center;
    padding: 0 10px;
    height: 1.1rem;
    line-height: 1.1rem;
    width: 50%;
    background: #fff;
}
.sidebar-iteam{
    display: flex;
    justify-content:space-between;
    border-bottom: 1px solid #eee;
}
.sidebar-iteam a:nth-child(1){
    border-right: 1px solid #eee;
}
</style>
