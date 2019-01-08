<template>
    <div class="page">
        <div class="hd">
            <h1 class="page_title">Online-Test</h1>
        </div>
        <div class="bd">
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        账号：
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text"  v-model="login.tel" placeholder="手机号/用户名">
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        密码：
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="password" v-model="login.password" placeholder="请输入文本">
                    </div>
                </div>
            </div>
            <div class="weui-btn-area">
                    <button type="primary"
                    @click="handle()"
                    id="showTooltips">确定</button>
                    <!-- <a href="javascript:;" class="weui-btn weui-btn_primary weui-btn_loading"><i class="weui-loading"></i>确定</a> -->
            </div>

            <label for="weuiAgree" class="weui-agree">
        <span class="weui-agree__text">
            <a href="javascript:void(0);">管理员登录</a>
        </span>
            </label>
        </div>        
    </div>   
</template>

<script>
import { Login } from '../../api/api';
import { log } from 'util';
export default{
    data(){
        return {
            logining:false,
            login:{
                tel:'12306',
                password:'123456'
            },
        };
    },
    methods:{
        handle(){
            if(this.login.tel==''||this.login.password==''){
                wx.showModal({
                    content: '请输入非空值',
                    showCancel: false,
                });
            }else{
                var loginparams={
                    username:this.login.tel,
                    password:this.login.password
                };
                Login(loginparams).then(data =>{

                    //console.log(data);
                    let { id, usename,tel,password,level } = data;
                    if (!id) {
                        wx.showModal({
                        content: '账户或密码错误,请重新输入',
                        showCancel: false,
                        success: function (res) {
                        if (res.confirm) {
                            //console.log('用户点击确定')
                    }
                    }
                });
                    } else {
                        // 调用vuex的ations设置城市的值
                        this.$store.dispatch("setName",usename);
                        this.$store.dispatch("setid",id);
                        var url = "/pages/home/main";
                        wx.redirectTo({url});
                    }
                });
            }
        }
    },
    mounted(){

    }
}
</script>

<style scoped>
.page_title {
    text-align: center;
    font-size: 34px;
    color: #3CC51F;
    font-weight: 400;
    margin: 0 15%;
}
.weui-cell{
    font-size:14px;
    height: 45px;
}
span{
    float: right;
}
</style>
