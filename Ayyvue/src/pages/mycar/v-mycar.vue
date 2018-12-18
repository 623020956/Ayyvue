<template>
   <div class="mycar">
       <mycar-right></mycar-right>
       <index-left></index-left>
   </div>
</template>

<script type="text/ecmascript-6">
import MycarRight from '@/pages/mycar/components/mycar-right';
import IndexLeft from '@/pages/index/components/index-left';
export default {
   name: '',
   data() {
       return {}
   },
  components: {
      MycarRight,
      IndexLeft
  }
}
</script>

<style scoped lang="stylus">
.mycar
    overflow hidden
</style>

