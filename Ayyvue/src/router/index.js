import Vue from 'vue'
import Router from 'vue-router'
import Vindex from '@/pages/index/v-index'
import Vindex3 from '@/pages/fenlei/v-index3'
import Vindex2 from '@/pages/taocan/v-index2'
import VNav2 from '@/pages/t-details/components/sp1'
import Xiangqin from '@/pages/xiangqing/xianqingbox'
import Goods from '@/pages/taocan/components/taocanbox'
import TFlei from '@/pages/taocan/components/taocanfenlei'
import SearchI from '@/pages/search/search-index'
import TDetails from '@/pages/t-details/v-index4'
import Activity from '@/pages/activity/v-activity'
import Mycar from '@/pages/mycar/v-mycar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/god'
    },
    {
      path: '/god',
      component: Vindex
    },
    {
      path: '/good',
      component: Vindex2,
      children: [
        {
          path: '/good', 
          redirect: '/good/seller/0'
        },
        {
          name: 'Goods',
          path: '/good/seller/:index',
          component: TFlei
        },
        // {
        //   name: 'Ratings',
        //   path: '/good/seller/ratings',
        //   component: Ratings
        // },
        // {
        //   name: 'SellerDesc',
        //   path: '/good/seller/sellerdesc',
        //   component: SellerDesc
        // }
        
      ]
    },
    {
      path: '/good2',
      component: Vindex3,
    },
    {
      path: '/good3',
      component: TDetails,
      children:[
        {
          path: '/good3/', 
          redirect: '/good3/food/id'
        },
        {
          name: 'Goods3',
          path: '/good3/food/:type',
          component: VNav2
        }
        // {
        //   path: '/good2/food/:type', 
        //   components:{
        //     default: VNav2,
        //         main: VNav2
        //   }
             
        // },
        
      ]

    },
    {
      name: 'Seller',
      path: '/seller/:id', 
      component:Xiangqin,
    },
    {
      name: 'Search',
      path: '/search/index', 
      component:SearchI,
    },
    {
      name: 'Activity',
      path: '/activity', 
      component:Activity,
    },
    {
      name: 'Mycar',
      path: '/mycar', 
      component:Mycar,
    }
  ],
  // linkExactActiveClass: 'active'
})
