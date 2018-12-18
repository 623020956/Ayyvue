<template>
   <div class="mb_frame">
        <div class="xcx-banner"><img src="/static//images/xcx-banner.jpg"></div>
            <div class="gray-holder" style="height: 10px;background: #eee;"></div>
        <div class="plc_footer">
            <div class="footer-title">
                <div class="footer-login" style="margin-left: 27px">
                    <a href="login.html">登录</a>
                    <span> | </span>
                    <a href="register.html">注册</a>
                </div>
                <div class="sec_phone">
                    <a href="tel:4007003638">
                        <span>
                            客服热线：
                            <i class="colorf60 fontarial f18">
                                400-700-3638
                            </i>
                        </span>
                    </a>
                </div>
            </div>
            <div class="ftr_list versionsftr_list versions clearfix">
                <a href="" rel="nofollow">
                    <span class="seclist">
                        <div class="boderrightddd"><i class="service footer-icon footer-zheng"></i> 正品保障</div>
                    </span>
                </a>
                <a href="" rel="nofollow">
                    <span class="seclist">
                        <div class="boderrightddd"><i class="service footer-icon footer-mail"></i> 满99包邮</div>
                    </span>
                </a>
                <a href="" rel="nofollow">
                    <span class="seclist">
                        <div class="boderrightddd"><i class="service footer-icon footer-7day"></i> 七天退换</div>
                    </span>
                </a>
                <a href="" rel="nofollow">
                    <span class="seclist"><i class="service footer-icon footer-after"></i> 售后保障</span>
                </a>
            </div>
            <div class="ftr_list login">
                <a href="help.html">
                    <img src="/static/images/bottom_logo1-1.0.2.png" data-original="">
                    <span style="color: #666;">了解音平</span>
                </a>
                <a href="javascript:void(0);">
                    <img src="/static/images/bottom_logo2-1.0.2.png" data-original="">
                    <span style="color:#FF6600;">触屏版</span>
                </a>
                <a href="javascript:void(0);">
                    <img src="/static/images/bottom_logo3-1.0.2.png" data-original="">
                    <span style="color: #666;">电脑版</span>
                </a>
                <a href="javascript:void(0);">
                    <img src="/static/images/bottom_logo4-1.0.0.png" data-original=" ">
                    <span style="color: #666;">小程序</span>
                </a>
            </div>
            <div class="mbft_bom v-mbft" style="line-height: 18px;">
                <p>增值电信业务经营许可证：粤B2-20110237 | 粤ICP备11032710号</p>
                <p>© 2011-2018 音平商城</p>
            </div>
            <div class="footer-holder"></div>
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
.v-bar-i .txt {
    font-size: 10px;
    color: #dbdbdb;
    display: block;
    line-height: 15px;
    margin-bottom: 6px;
    margin: 0 auto ;
    
}

.v-fixed-bottom {
    position: fixed;
    bottom: 0;
    height: 50px;
    display: table;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
}

.v-fixed-bottom .v-bar-i {
    display: block;
    display: table-cell;
    text-align: center;
    padding-top: 10px;
    width: 20%;
}

.ico_d {
    width: 20px;
    height: 22px;
    background: url(/static/images/icon_b-v1.0.0.png) no-repeat;
    background-size: 100px;
}

.ico_d {
    margin: 0 auto;
    display: block;
    overflow: hidden;
}

.ico_d_01 {
    background-position: 0 0;
}

.ico_d_02 {
    background-position: -20px 0;
}

.ico_d_03 {
    background-position: -40px 0;
}

.ico_d_04 {
    background-position: -60px 0;
}

.ico_d_05 {
    background-position: -80px 0;
}
.xcx-banner{
    margin-top: 10px;
    width: 100%;
}
.xcx-banner img{
    width: 100%;
}
.plc_footer {
    background: #fff;
}
.mb_frame .footer-title {
    border-bottom: 1px solid #ebeced;
    overflow: hidden;
    padding-bottom: 5px;
    padding-top: 5px;
}
.mb_frame .footer-login {
    float: left;
    margin-left: 27px;
    padding: 10px 0;
    padding-bottom: 0;
}
.mb_frame .footer-login a {
    font-size: 14px;
}
.mb_frame .footer-login span {
    display: inline-block;
    margin: 0 5px;
    color: #ccc;
}
.mb_frame .sec_phone {
    float: right;
    margin-right: 20px;
    border: none;
}
.plc_footer .sec_phone {
    text-align: center;
    border-bottom: 1px #ebeced solid;
    padding: 8px 0;
    font-size: 12px;
}
.plc_footer .ftr_list.versions {
    padding: 10px;
    border-bottom: 1px #ebeced solid;
}
.breadlimit, .filter ul, .plc_footer .ftr_list, .uof {
    overflow: hidden;
}
.versions a{
    display: block;
    float: left;
    width: 25%;
    text-align: center
}
.boderrightddd{
    border-left:1px solid #ebeced; 
}
.footer-icon {
    display: inline-block;
    width: 14px;
    height: 14px;
    background: url(/static/images/icon-footer-v1.0.0.png) no-repeat;
    background-size: 56px;
    vertical-align: -2px;
}
.footer-zheng {
    background-position: -42px 0;
}
.footer-mail {
    background-position: -14px 0;
}
.footer-7day {
    background-position: 0 0;
}
.footer-after {
    background-position: -28px 0;
}
.mb_frame .ftr_list.login {
    padding: 20px 35px !important;
}
.mb_frame .login a {
    width: 25%;
    text-align: center;
    display: block;
    float: left;
}
.mb_frame .login a img {
    width: 42px;
    height: 42px;
    margin-left: 3px;
}
.mb_frame .login span {
    display: block;
}
.mbft_bom {
    font-size: 9px;
    text-align: center;
    padding: 5px 0 8px;
    color: #888;
    line-height: 14px;
}
.v-mbft .footer-holder{
    background-color: #fff;
}
.footer-holder {
    height: 50px;
}
</style>
