<template>
    <div class="ypSearch-holder">
        <router-link tag="div" to="/search/index" class="ypSearch-input">
            <input type="text" name="kw" value="手机麦克风" id="kw" placeholder="搜索商品">
            <img class="ypSearch-holder-search" src="/static/images/ico_02 (1).jpg" alt="">
        </router-link>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: '',
   data() {
       return {}
   },
  components: {}
}
</script>

<style scoped lang="stylus">
.ypSearch-holder {
    margin: 8px;
    border: 1px solid #f60;
    border-radius: 5px;
    background: #fff;
    position: relative;
    
}

.ypSearch-input {
    padding: 4px 0 4px 10px;
    overflow: hidden;
    background: #fff;
    margin-left: 4px;
    margin-right: 4px;
}

.ypSearch-input input {
    width: 100%;
    float: left;
    padding: 0;
    margin: 0;
    border: 0;
    height: 24px;
    outline: 0;
    font-size: 14px;
    color: #999;
    padding-left: 18px;
}

.ypSearch-holder-search {
    position: absolute;
    left: 6px;
    top: 6px;
    width: 20px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    line-height: 32px;
}
</style>
