<template>
   <div class="">
       <div v-if="searchBarFixed" class="v-go-up">
            <a href="#">
                <div class="ico_x2 ico_x_04"></div>
            </a>
        </div>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: '',
   data() {
       return {
          searchBarFixed:false, 
       }
   },
  components: {},
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
},
methods:{
    handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        // console.log(scrollTop)
        if (scrollTop > 100) {
            this.searchBarFixed = true
        } else {
            this.searchBarFixed = false
        }
    },

}
}
</script>

<style scoped lang="stylus">

.v-go-up {
    position: fixed;
    right: 8px;
    bottom: 58px;
    z-index: 10;
    text-align: center;

}

.ico_x2 {
    width: 45px;
    height: 45px;
    display: block;
    overflow: hidden;
    background: url(/static/images/icon_x-v1.0.0.png) no-repeat;
    background-size: 225px;
}

.ico_x_04 {
    width: 35px;
    height: 35px;
    background-position: -112px 0;
    background-size: 185px;
}
</style>
