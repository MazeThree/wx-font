<template>
    <div class="container">
        <div class="page__bd">
            <div class="weui-cells__title">选择</div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        asd
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        asd
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        asd
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__hd">
                        asd
                    </div>
                </div>
            </div>
            <div class="weui-cells__title">选择</div>
            <div class="weui-cells">
                <div class="weui-cell weui-cell_select one">
                    <div class="weui-cell__bd">
                        sada
                    </div>
                </div>
                <div class="weui-cell weui-cell_select one">
                    <div class="weui-cell__bd">
                        sada
                    </div>
                </div>
                <div class="weui-cell weui-cell_select one">
                    <div class="weui-cell__bd">
                        sada
                    </div>
                </div>
            </div>

            <div class="weui-btn-area">
                <a class="weui-btn weui-btn_primary" href="/pages/index/main" id="showTooltips">退出登录</a>
            </div>
            </div>
        <!--底部导航条-->
        <tabbar></tabbar>  
    </div>
</template>

<script>
import tabbar from '@/components/tabbar.vue'

export default {components: {tabbar}
}
</script>

<style scoped>
/* 修复样式错误 */
.one{
    padding:20rpx 30rpx;
}
</style>
