<template>
   <div class="">
       <ul class="pro-table clearfix">
            <li v-for="(item,index) in goods" :key="index" @click="transfer(index)" :type="name">
                <router-link tag="a" to="/good3" class="protable-width">
                    <div :class="'proclass-icon '+item.csname"></div>
                    <div class="proclass-des ">
                        <p class="proclass-title">{{item.name}}</p>
                        <p class="proclass-subtitle">监听耳机 音乐耳机 语音耳机 游戏耳机</p>
                    </div>
                </router-link>
            </li>
        </ul>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: '',
   data() {
       return {
           name:'',
           goods:[
               {
                   name:"耳机",
                   csname:"pi-erji",
               },
               {
                   name:"麦克风",
                   csname:"pi-mkf",
               },
               {
                   name:"声卡",
                   csname:"pi-shengka",
               },
               {
                   name:"声卡调试",
                   csname:"pi-services",
               },
               {
                   name:"键盘",
                   csname:"pi-midi",
               },
               {
                   name:"调音台",
                   csname:"pi-mixer",
               },
               {
                   name:"话放",
                   csname:"pi-huafang",
               },
               {
                   name:"耳放",
                   csname:"pi-erfang",
               },
               {
                   name:"播放器",
                   csname:"pi-bofangqi",
               },
               {
                   name:"录音机",
                   csname:"pi-luyinji",
               },
               {
                   name:"KTV点歌机",
                   csname:"pi-diangeji",
               },
               {
                   name:"功放",
                   csname:"pi-gongfang",
               },
               {
                   name:"触摸屏",
                   csname:"pi-chumoping",
               },
               {
                   name:"音响",
                   csname:"pi-yinxiang",
               },
               {
                   name:"耳机",
                   csname:"pi-erji",
               },
               {
                   name:"麦克风",
                   csname:"pi-mkf",
               },
               {
                   name:"声卡",
                   csname:"pi-shengka",
               },
               {
                   name:"声卡调试",
                   csname:"pi-services",
               },
               {
                   name:"键盘",
                   csname:"pi-midi",
               },
               {
                   name:"调音台",
                   csname:"pi-mixer",
               },
               {
                   name:"话放",
                   csname:"pi-huafang",
               },
               {
                   name:"耳放",
                   csname:"pi-erfang",
               },
               {
                   name:"播放器",
                   csname:"pi-bofangqi",
               },
               {
                   name:"录音机",
                   csname:"pi-luyinji",
               },
               {
                   name:"KTV点歌机",
                   csname:"pi-diangeji",
               },
               {
                   name:"功放",
                   csname:"pi-gongfang",
               },
               {
                   name:"触摸屏",
                   csname:"pi-chumoping",
               },
               {
                   name:"音响",
                   csname:"pi-yinxiang",
               },
           ]
       }
   },
  components: {},
  methods:{
      transfer(index){
         Bus.$emit("name",this.goods[index].name);
      }
  }
}
</script>

<style scoped lang="stylus">
.pro-table {
    padding-top: 15px;
}

.pro-table li {
    float: left;
    width: 50%;
}

.pro-table li .protable-width {
    display: block;
    margin: 0 5px 10px 14px;
}

.proclass-icon {
    width: 30px;
    height: 30px;
    display: block;
    overflow: hidden;
    float: left;
    margin-right: 5px;
    background: url(/static/images/icon-list-min-v1.0.0.png) no-repeat;
    background-size: 1500px;
}

.pi-erji {
    background-position: -300px 0;
}

.pi-mkf {
    background-position: -990px 0;
}

.pi-shengka {
    background-position: -1170px 0;
}

.pi-services {
    background-position: -1380px 0;
}
.pi-midi{
    background-position: -600px 0;

}
.pi-mixer{
    background-position: -1290px 0;

}
.pi-huafang{
    background-position: -540px 0;

}
.pi-erfang{
    background-position: -270px 0;
}
.pi-bofangqi{
    background-position: -60px 0;
}
.pi-luyinji{
    background-position: -900px 0;
}
.pi-diangeji{
    background-position: -180px 0;
}
.pi-gongfang{
    background-position: -480px 0;

}
.pi-chumoping{
    background-position: -120px 0;

}
.pi-yinxiang{
    background-position: -1410px 0;

}

.pro-table .proclass-des {
    margin-left: 30px;
    border-bottom: 1px solid #e3e3e3;
    padding-bottom: 10px;
}

.pro-table .proclass-des .proclass-title {
    font-size: 14px;
    color: #333;
    line-height: 18px;
    width: 100%;
}

.pro-table .proclass-des .proclass-subtitle {
    font-size: 10px;
    color: #acacac;
    line-height: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
