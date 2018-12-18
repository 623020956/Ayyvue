<template>
    <div class="menu">
        <div class="mm-panel" ref="mmpanel">
            <p><b style="color:#fe8005;font-size:15px;">网站导航</b></p>
            <ul class="mm-list">
                <li><a href="/">首页</a></li>
                <li><a href="brand.html">品牌专区</a></li>
                <li><a href="suit.html">套装分类</a></li>
                <li><a href="list.html">商品分类</a></li>
                <li><a href="activity.html">活动专场</a></li>
                <li><a href="home.html">我的音平</a></li>
                <li><a href="help.html">帮助中心</a></li>
                <li><a href="announcementList.html" >商城公告</a></li>
            </ul>
            <p><b style="color:#fe8005;font-size:15px;padding:20px 0 0 0">特色服务</b></p>
            <ul class="mm-list">
                <li><a href="ingping.com"><img style="height:29px" src="/static/images/zx_logo-v1.0.0.jpg"></a></li>
                <li><a href="
                            ingping.cn"><img style="height:27px" src="/static/images/lx_logo-v1.0.0.jpg"></a></li>
                <li><a href="
                            .yshifu.com"><img style="height:29px" src="/static/images/ysf_logo-v1.0.0.jpg"></a></li>
                </ul>
                <ul style="
                            padding: 5px 0;" class="mm-list">
                <li><a href=""><img class="img_ico" src="/static/images/ico_02-v1.0.0.jpg"
                            >订单查询</a></li>
                <li><a href=" createComplaint"><img class="img_ico" src="/static/images/edit_index-1.0.0.png"
                            >投诉建议</a></li>
            </ul>
            <ul style=" padding: 5px 0;" class="mm-list">
                <li><a href="tel:4007003638" style="color:#fe8005;font-size: 13px;"><img class="img_ico" src="/static/images/ico_03-v1.0.0.jpg"
                            >400-700-3638</a></li>
            </ul>
            <div class=" pro-table">
                        <dl>
                            <dd><a href="" rel="nofollow" style="color: #999;">正品保障</a></dd>
                            <dd>售后无忧</dd>
                            <dd>货到付款</dd>
                            <dd>闪电发货</dd>
                        </dl>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: '',
   data() {
       return {
           curHeight:0,
       }
   },
   mounted(){
        var h = document.documentElement.clientHeight || document.body.clientHeight;
        this.curHeight=h;
        this.$refs.mmpanel.style.height=this.curHeight+'px';
   },
  components: {}
}
</script>

<style scoped lang="stylus">
.menu{
    position: fixed;
    left: 0;
    top: 0;
    width: 135px; 
    z-index 1;
  
}
.mm-panel{ 
    padding: 10px;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;

}
.mm-panel > .mm-list {
    margin-left: -20px;
    margin-right: -20px;
}
 .mm-list {
    padding: 10px 0;
    border-bottom: 1px solid #e6e6e6;
}
.mm-list {
    font-size: 14px;
}
 .mm-list > li {
    list-style: none;
    display: block;
    padding: 0;
    margin: 0;
}
.mm-list > li > a, .mm-list > li > span {
    overflow: hidden;
    color: #666;
    line-height: 20px;
    display: block;
    padding: 5px 10px 5px 20px;
    margin: 0;
    font-size:13px 
}
.img_ico {
    height: 12px;
    top: 1px;
    margin-right: 2px;
    position: relative;
}
.pro-table {
    padding-top: 15px;
}
.pro-table dd {
    float: left;
    width: 39%;
    margin-bottom: 10px;
    height: 20px;
    color: #999;
    line-height: 10px;
    padding-left: 11%;
    font-size: 10px;
    background: url(/static/images/ico_01-v1.0.0.jpg) no-repeat;
    background-size: 10px 10px;
}
</style>
