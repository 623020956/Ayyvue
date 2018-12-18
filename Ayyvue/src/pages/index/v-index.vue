<template>
    <div class="qq">
        <index-right></index-right>
        <index-left></index-left>
    </div>
    
</template>

<script>
     import IndexRight from './components/index-right'
    import IndexLeft from './components/index-left'
    // import VBanner from '@/pages/index/components/banner'
    // import VNav from '@/pages/index/components/v-nav'
    export default {
        name: 'Index',
        components: {
            IndexRight,
            IndexLeft
            
        }
    }
</script>

<style  scoped lang="stylus">
    .qq
        overflow hidden
    
</style>