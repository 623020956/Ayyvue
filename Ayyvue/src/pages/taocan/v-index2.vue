<template>
    <div class="taocan">
        <tao-right></tao-right>
        <index-left></index-left>
     
    </div>
    
</template>

<script>
     import TaoRight from '@/pages/taocan/components/taocan-right'
    import IndexLeft from '@/pages/index/components/index-left';
    export default {
        name: 'ShangPing',
        components: {
             IndexLeft,
            TaoRight
        },
        data(){
            return{
              
            }
        },

    }
</script>

<style  scoped lang="stylus">
.taocan
    overflow hidden
</style>