<template>
<div class="tbox">
  <div class="c_bread">
      <div class=" bread_word floatleft">
          <a href="javascript:void(0)">音平商城</a>
      </div>
      <div class="ico_x ico_x_05"></div>
      <div class="bread_word floatleft breadlimit">
          <h1>
              商品分类
          </h1>
      </div>
  </div>
  <t-search></t-search>
  <div class="goodsbox"> </div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul v-if="goods.length">
          <router-link tag="li" v-for="(item,index) in goods" 
              :key="index" 
              ref="menuClass"
              :class="cur==index?'active':''"
              @click.native="_scrollTo(index)"
              :to="'/good/seller/'+index"
          >{{item.name}}</router-link>
        </ul>
      </div>
      <div class="foodlist-wrapper" ref="foodlistWrapper">
        <router-view></router-view>

      </div>
      <!-- 使用购物车组件 -->
    </div>
 
</div>
</template>
<script type="text/ecmascript-6">
import axios from "axios";
import BScroll from "better-scroll";
import TSearch from './t-search';
export default {
  name: "",
  data() {
    return {
      goods:[],
      scrollY: 0,
      cur:0,
      listHeight: [0],
      menuHeight: [0],
      selectedAll:[],
    };
  },
  components: {
      TSearch
  },
  created() {
    axios.get("/api/goods").then(res => {
      let localData = res.data;
      console.log(localData)
      if (localData.errno == 0) {
        this.goods = localData.data;
        //   当数据更新后，模板再次渲染完毕后才会执行$nextTick里面的回调
        //   延迟执行
        this.$nextTick(() => {
          this._initScroll();
          // this._calculateHeight();
          this._calculateHeight2();
        });
      }
    });
    
  },
    mounted(){
         console.log(this.$refs.menuClass)
        console.log(this.$refs.menuWrapper)
    },
  methods: {
    //   进行滚动初始化
    _initScroll() {
        this.menuScroll = new BScroll(this.$refs.menuWrapper,{
            probeType:3,
            click: true
        });
        this.foodlistScroll = new BScroll(this.$refs.foodlistWrapper,{
            probeType: 3,
             click: true,
        });
        this.menuScroll.on("scroll",(pos)=>{
            this.scrollY = Math.abs(Math.round(pos.y))
        })
    },
    _calculateHeight2(){
        // 0: li->100   1:li-> 150  2:li->80  最终数组中存储 [0,100,250,330]
        this.$refs.menuClass.forEach((item,index)=>{
            let height = item.$el.clientHeight + this.menuHeight[index]
            this.menuHeight.push(height);
        })
    },
    _scrollTo(index){
        this.cur=index
        this.menuScroll.scrollToElement(this.$refs.menuClass[index].$el,300);
    },

  },
};
</script>

<style scoped lang="stylus">
.goodsbox
  border-top 1px solid #ccc
  z-index 1000
.goods {
  position: absolute;
  left: 0;
  top: 140px;
  bottom: 50px;
  width: 100%;
  overflow: hidden;
  display: flex;
  z-index 1000
}

.menu-wrapper {
  flex: 0 0 25%;
  background #F6F6F9

  ul {
    li {
        height 1rem
        text-align center
        line-height 1rem
       
    &.active {
        background-color #fff
        color #f60
    }
    }
  }
}

.foodlist-wrapper {
  flex: 1;

  ul {
    li {
      h3 {
        height: 0.8rem;
        background-color: #aaaaaa;
      }

      ul {
        li {
          position relative
          border: 1px solid #000;
          height: 2rem;
        }
      }
    }
  }
}
.ico_x {
    width: 45px;
    height: 45px;
    display: block;
    overflow: hidden;
    background: url(/static/images/icon_x-v1.0.0.png) no-repeat;
    background-size: 225px;
}
.c_bread {
    width: 100%;
    height: 30px;
    line-height: 30px;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
}

.c_bread .bread_word {
    padding: 0 8px;
}
.bread_word
    a
        display block
.floatleft {
    float: left;
}

.c_bread a {
    color: #06c;
}

.ico_x_05 {
    width: 13px;
    height: 30px;
    background-position: -130px 0;
    background-size: 151px;
    float: left;
}

.breadlimit {
    width: 27%;
    height: 30px;
    display: block;
    float: left;
}

.bread_word h1 {
    font-size: 12px;
}

.breadlimit h1 {
    font-weight: 600;
}
</style>
