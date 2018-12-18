<template>
   <div class="tabbox">
       <div class="tabboxtop">
           <a v-for="(item,index) in tabtop" :class="[index==num?'active':'']" @click="change(index)"  href="javascript:void(0)" :key="index">
               <p>{{item}}</p>
           </a>
       </div>
       <transition name="fade" mode="out-in" appear>
           <ul class="tabinb" v-if="num==index" v-for="(item,index) in tabin" :key="index" >
               <li class="tabinbli" v-for="(name,num) in tabin[index].name" :key="num">
                   {{name}}
               </li>
           </ul>
       </transition>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: '',
   data() {
       return {
           tabtop:["基本属性","规格参数","包装清单"],
           tabin:[
               {name:["适合音乐：民谣","话筒类型：云杉木（spruce）","拾音器：无","类型：民谣吉他","指板：玫瑰木（Rosewood","琴颈：吉他","品格：20","尺寸：41","芬达品牌评价：芬达相关产品评价"]},
               {name:["• 型号代码：0961545021","• 型号全称：CD-60","• 所属系列：Classic Design","• 颜色：原木色","• 琴体轮廓：Dreadnought 41寸",
               "• 面板：云杉","• 背侧板：那都木（Nato）","• 琴颈：那都木（Nato）","• 琴身漆面：高光漆面","• 音梁：圆齿状“X”音梁","• 上弦枕宽度：1.69”（43mm）","• 音孔：珍珠碎花亚克力音孔环饰"]},
               {name:["• CD-60 吉他 1把"]},
           ],
           num:0
       }
   },
    methods: {
        change(index){
            this.num = index;
        },
        
    },
  components: {}
}
</script>

<style scoped lang="stylus">
.tabinbli{
    font-size: 0.24rem;
    margin: 0.02rem 0.2rem 0.2rem 0.2rem;
    padding-top: 0.2rem;
}
.tabbox
    overflow hidden

    .tabboxtop
        width :100%;
        height :0.85rem;
        border-bottom: 1px solid #dfdfdf;
        background-color: #fff;
        overflow hidden

    .tabboxtop
        a
            display :block;
            width :33.3%;  
            float left 
            
    .tabboxtop
        p
            width :100%;
            height :0.8rem;
            line-height :0.8rem;
            text-align :center



    .tabboxtop
        a.active
            border-bottom 1px solid orange
    
    .tabinb
        height 100%
        width 100%

     .fade-enter-active
        transition: all 1s;
    
    .fade-leave-active 
        transition: all 0.5s;
    

    .fade-enter
        opacity: 0;
        transform: translate3d(-500px,0,0)
    
    .fade-leave-to 
        opacity: 0;
        transform: translate3d(1000px,0,0)
        
</style>
