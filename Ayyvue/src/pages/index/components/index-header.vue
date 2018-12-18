<template>
   <div class="header">
        <a href="javascript:void(0)" class="menu_nav">
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
</template>

<script type="text/ecmascript-6">
export default {
   name: '',
//    props:['right'],
    
   data() {
       return {}
   },
   created(){
    //   console.log(this.right)
  },
  components: {}
}
</script>

<style scoped lang="stylus">
.header
    height: 47px;
    background: #f8f8f8;
    line-height: 44px;
    border-bottom: 2px solid #ff7f00;

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
