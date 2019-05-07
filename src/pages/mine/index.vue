<template>
<div class="container">
    <div class="page__bd">
        <div class="userinfo" v-if="userInfo.nickName">
        <p style="text-align:center">用户基本信息</p>
        <div class="pic">
            <img class="userinfo-avatar" :src="userInfo.avatarUrl" background-size="cover" />
        </div>
      <p style="text-align:center">用户名：{{userInfo.nickName}}</p>  
      <p>详细地址：{{userInfo.province+'-'+userInfo.city}}</p>
    </div>
    <button v-if="!userInfo.nickName" open-type="getUserInfo" @getuserinfo="authSetUser">
        授权登录
        </button>
        <div class="weui-btn-area">
            <a class="btn" href="/pages/index/main" id="btn">退出登录</a>
        </div>
    </div>
    <!--底部导航条-->
    <tabbar></tabbar>  
</div>
</template>

<script>
import tabbar from '@/components/tabbar.vue'

export default {
    components: {tabbar},
    data () {
        return {
            userInfo: {}
        }
    },

created () {
      this.getUserInfo();
    },
methods: {
      authSetUser (e) {
        this.userInfo=e.mp.detail.userInfo;
      },
      getUserInfo () {
        // 调用登录接口
        var _this=this;
            wx.getUserInfo({//当已授权getUserInfo时
              success(res) {
                console.log(res);
                _this.userInfo=res.userInfo
              },
              fail(err) {
                console.log(err);
            }
        })
      }
    }
}
</script>

<style scoped>
/* 修复样式错误 */
.one{
    padding:20rpx 30rpx;
}
.btn{
    width: 100%;
    height: 90rpx;
    line-height: 90rpx;
    border-radius: 8rpx;
    text-align: center;
    color: aliceblue;
    background-color: red;
}
image{
    border-radius: 50%;
    width:200px;
    height:200px;
    margin-left:25%; 
}
</style>
