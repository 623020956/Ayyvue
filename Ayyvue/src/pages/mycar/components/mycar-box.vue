<template>
<div class="homepagebox">
    <div class="info-mine info-first">
      <div class="mine-info">
        <div class="user-img">
        </div>
        <div class="user-info">
          <p class="user-name">
            wwwwwxs
          </p>
          <p>注册会员</p>
        </div>
      </div>
      <div class="mine-state">
        <a href="###">
          <em>我的余额</em>
          <i>￥0.00</i>
        </a>
        <a href="###">
          <em>我的积分</em>
          <i>0</i>
        </a>
      </div>

    </div>
    <div class="info-mine">
      <div class="all-list">
        <a href="###">
          <div class="all-list-l">
            <img src="/static/images/qbdd-v1.0.0.png" alt="">
            <span>全部订单</span>
          </div>
          <div class="all-list-r">
            查看更多订单
          </div>
        </a>
      </div>
      <div class="pro-state">
        <div>
          <a href="###">
            <img src="/static/images/item-icon01-v1.0.4.png" alt="">
            <p>待付款</p>
          </a>
        </div>
        <div>
          <a href="###">
            <img src="/static/images/item-icon02-v1.0.4.png" alt="">
            <p>待发货</p>
          </a>
        </div>
        <div>
          <a href="###">
            <img src="/static/images/item-icon03-v1.0.4.png" alt="">
            <p>待收货</p>
          </a>
        </div>
        <div>
          <a href="###">
            <img src="/static/images/item-icon04-v1.0.4.png" alt="">
            <p>待评价</p>
          </a>
        </div>
        <div>
          <a href="###">
            <img src="/static/images/item-icon05-v1.0.4.png" alt="">
            <p>退换货</p>
          </a>
        </div>
      </div>
      <div class="shaidan">
        <a href="###">
          <img src="/static/images/sdlhb-v1.0.0.png" alt="">
          晒单领微信红包
        </a>
      </div>
    </div>
    <div class="info-mine mylive">
      <div>
          <div>
              <a href="###">
                <img src="/static/images/user-icon-01-v1.0.4.png" alt="">
                <p>我的收藏</p>
              </a>
            </div>
            <div>
              <a href="###">
                <img src="/static/images/user-icon-02-v1.0.4.png" alt="">
                <p>我的评论</p>
              </a>
            </div>
            <div>
              <a href="###">
                <img src="/static/images/user-icon-03-v1.0.4.png" alt="">
                <p>我的咨询</p>
              </a>
            </div>
            <div>
              <a href="###">
                <img src="/static/images/user-icon-04-v1.0.4.png" alt="">
                <p>我的投诉</p>
              </a>
            </div>
      </div>
      <div>
          <div>
              <a href="###">
                <img src="/static/images/user-icon-05-v1.0.4.png" alt="">
                <p>我的优惠券</p>
              </a>
            </div>
            <div>
              <a href="###">
                <img src="/static/images/user-icon-06-v1.0.4.png" alt="">
                <p>中奖记录</p>
              </a>
            </div>
            <div>
              <a href="###">
                <img src="/static/images/user-icon-07-v1.0.4.png" alt="">
                <p>账号管理</p>
              </a>
            </div>
            <div>
              <a href="###">
                <img src="/static/images/user-icon-08-v1.0.4.png" alt="">
                <p>声卡调试</p>
              </a>
            </div>
      </div>
      
    </div>
    <div class="info-mine">
      <div class="info-news">
        <a href="###" style="color:#20bbca">
          <img src="/static/images/icon-lexiang-v1.0.0.png" alt="">
          音平乐享，音友原创翻唱
        </a>
      </div>
      <div class="info-news">
        <a href="###" style="color:#ff6600">
          <img src="/static/images/icon-yinshifu-v1.0.0.png" alt="">
          设备使用，有问题找音师傅
        </a>
      </div>
      <div class="info-news">
        <a href="###" style="color:#64d012">
          <img src="/static/images/list-01.png" alt="">
          音平资讯，了解行业一手音频资讯
        </a>
      </div>
    </div>
    <div class="info-mine server">
        <a href="###">
            <img src="/static/images/khfw-v1.0.0.png" alt="">
            客户服务
          </a>
    </div>
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
.homepagebox
    background #eee
    border-top 1px solid #eee
    border-bottom 1px solid #eee
.info-mine{
  border: 1px solid #dddddd;
  background-color: #fff;
  margin: 10px;
}
.server
    line-height 0.8rem
.mine-info{
  display:flex;
  justify-content: flex-start;
  padding:0.2rem;
  border-bottom:1px solid #eee;
  margin-bottom:0.1rem;
  font-size: 0.24rem;
  
}
.mine-info .user-img{
  background: url(/static/images/bromember-v1.0.0.jpg);
  width: 0.7rem;
  height: 0.7rem;
  background-size: cover;
}
.mine-info .user-info{
  padding-left:0.2rem;
}
.info-mine .mine-state{
  margin-bottom:0.2rem;
  display:flex;
}
.info-mine .mine-state a{
  width: 50%;
  display:flex;
  flex-direction: column;
  align-items: center;
}
.info-mine .mine-state a em{
  line-height: 0.48rem;
  color:#333;
  font-size: 0.28rem;
}
.info-mine .mine-state a i{
  line-height: 0.4rem;
  color:#ff3c3c;
  font-size: 0.28rem;
}
.info-mine .mine-state a:nth-child(1){
  border-right:1px solid #eee;
}
.info-mine .all-list{
  padding:0.2rem;
  border-bottom:1px solid #eee;
}
.info-mine .all-list a{
  display:flex;
  justify-content: space-between;
  font-size: 0.28rem;
}
.info-mine .all-list a img{
  width: 0.36rem;
  height: 0.36rem;
  margin:0 0.06rem 0 0;
  vertical-align: -0.08rem;
}
.info-mine .all-list a .all-list-r{
  padding-right:0.4rem;
  position: relative;
}
.info-mine .all-list a .all-list-r:after{
  content: "";
  position: absolute;
  right: 5px;
  top: 50%;
  margin-top:-0.03rem;
  border: 1px solid #686B72;
  border-width: 1px 0 0 1px;
  width: 9px;
  height: 9px;
  transform: rotate(135deg) translateY(50%);
}
.info-mine .pro-state{
  margin:0.1rem auto;
  border-bottom:1px solid #eee;
  height: 1.2rem;
  display:flex;
  justify-content: space-between;
  text-align: center;
}
.info-mine .pro-state div{
  width: 20%;
  margin-top:0.16rem;
}
.info-mine .pro-state img{
  width: 22px;
  height: 22px;
}
.info-mine .shaidan{
  padding:0.2rem;
  border-bottom:1px solid #ddd;
  line-height: 0.36rem;
}
.info-mine .shaidan a{
  position: relative;
}
.info-mine .shaidan a:after{
  content: "";
  position: absolute;
  right: -175px;
  top: 50%;
  margin-top:-0.04rem;
  border: 1px solid #686B72;
  border-width: 1px 0 0 1px;
  width: 9px;
  height: 9px;
  transform: rotate(135deg) translateY(50%);
}
.info-mine .shaidan img{
  width: 0.36rem;
  height: 0.36rem;
  margin:0 0.06rem 0 0;
  vertical-align: -0.1rem;
}
.info-mine.mylive{
  padding:0.4rem 0;
}
.info-mine.mylive>div{
  display:flex;
  justify-content: space-between;
  
}
.info-mine.mylive>div div{
  width: 25%;
  text-align: center;

}
.info-mine.mylive>div:first-child{
  margin-bottom:0.3rem;
}
.info-mine.mylive>div img{
  width: 0.44rem;
  height: 0.44rem;
}
.info-mine .info-news{
  padding:0.2rem;
  border-bottom:1px solid #eee;
}
.info-mine .info-news a{
  font-size: 0.28rem;
  position: relative;
}
.info-mine .info-news a:after{
  content: "";
  position: absolute;
  top: 50%;
  border: 1px solid #686B72;
  border-width: 1px 0 0 1px;
  width: 9px;
  height: 9px;
  transform: rotate(135deg) translateY(50%);
}
.info-mine .info-news:nth-child(1) a:after
    right -123px
.info-mine .info-news:nth-child(2) a:after
    right -111px 
.info-mine .info-news:nth-child(3) a:after
    right -76px  
.info-mine .info-news img{
  width: 0.36rem;
  height: 0.36rem;
  margin-right:0.06rem;
  vertical-align: -0.08rem;
}
.info-mine.server a{
  font-size: 0.28rem;
  position: relative;
  padding:0.2rem;
}
.info-mine.server a:after{
  content: "";
  position: absolute;
  right: -200px;
  top: 50%;
  margin-top:-0.04rem;
  border: 1px solid #686B72;
  border-width: 1px 0 0 1px;
  width: 9px;
  height: 9px;
  transform: rotate(135deg) translateY(50%);
}
.info-mine.server img{
  width: 0.36rem;
  height: 0.36rem;
  margin-right:0.06rem;
  vertical-align: -0.08rem;
}
</style>
