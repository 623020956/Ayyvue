<template>
 
   <div class="v-fixed-bottom">
        <router-link to="/god" class="v-bar-i" title="首页">
            <div class="vfb-wrapper ico_d ico_d_01"></div>
            <span class="txt">客服</span>
        </router-link>
        <router-link to="/good"   class="v-bar-i" title="套餐">
            <div class="vfb-wrapper ico_d ico_d_02"></div>
            <span class="txt">套餐</span>
        </router-link>
        <router-link to="/good2"   class="v-bar-i" title="分类">
            <div class="vfb-wrapper ico_d ico_d_03"></div>
            <span class="txt">分类</span>
        </router-link>
        <router-link to="/activity"   class="v-bar-i" title="品牌">
            <div class="vfb-wrapper ico_d ico_d_04"></div>
            <span class="txt">活动</span>
        </router-link>
        <router-link to="/mycar"   class="v-bar-i" title="我的">
            <div class="vfb-wrapper ico_d ico_d_05"></div>
            <span class="txt">我的购物车</span>
        </router-link>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: 'VNav',
   data() {
       return {}
   },
  components: {}
}
</script>

<style scoped lang="stylus">
.v-bar-i
    .txt 
        font-size: 10px;
        color: #dbdbdb;
        display: block;
        line-height: 15px;
        margin-bottom: 6px;
        margin: 0 auto;


.v-fixed-bottom 
    position: fixed;
    bottom: 0;
    height: 50px;
    display: table;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index 8888


.v-fixed-bottom 
    .v-bar-i 
        display: block;
        display: table-cell;
        text-align: center;
        padding-top: 10px;
        width: 20%;


.ico_d 
    width: 20px;
    height: 22px;
    background: url(/static/images/icon_b-v1.0.0.png) no-repeat;
    background-size: 100px;


.ico_d 
    margin: 0 auto;
    display: block;
    overflow: hidden;


.ico_d_01 
    background-position: 0 0;


.ico_d_02 
    background-position: -20px 0;


.ico_d_03 
    background-position: -40px 0;


.ico_d_04 
    background-position: -60px 0;


.ico_d_05 
    background-position: -80px 0;

.router-link-active
    .txt
        color:orange 
</style>
