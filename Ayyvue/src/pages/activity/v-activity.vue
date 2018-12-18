<template>
   <div class="activity">
       <ac-right></ac-right>
       <index-left></index-left>
   </div>
</template>

<script type="text/ecmascript-6">
import AcRight from '@/pages/activity/components/activity-right';
import IndexLeft from '@/pages/index/components/index-left';
export default {
   name: '',
   data() {
       return {
           
       }
   },
  components: {
      AcRight,
    IndexLeft
  }
}
</script>

<style scoped lang="stylus">
.activity
    overflow hidden
</style>
