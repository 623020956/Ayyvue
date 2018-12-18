<template>
    <div class="brand">
        <fen-right></fen-right>
        <index-left></index-left>
    </div>
    
</template>

<script>
    import FenRight from './components/fenlei-right'
    import IndexLeft from '@/pages/index/components/index-left';
    export default {
        name: 'Index',
        components: {
           IndexLeft,
           FenRight
        }
    }
</script>

<style  scoped lang="stylus">
.brand
    overflow hidden
    
</style>