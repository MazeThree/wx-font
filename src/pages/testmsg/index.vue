<template>
<div class="container">
    <div class="weui-panel">
        <div class="weui-panel__hd">尚未完成问卷</div>
        <div class="weui-panel__bd">
            <div class="weui-media-box weui-media-box_text">
                <h4 class="weui-media-box__title">试卷名称</h4>
                <p class="weui-media-box__desc">试卷描述试卷描述试卷描述试卷描述试卷描述试卷描述试卷描述</p>
                <ul class="weui-media-box__info">
                    <li class="weui-media-box__info__meta">文字来源</li>
                    <li class="weui-media-box__info__meta">时间</li>
                    <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">其它信息</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="weui-panel1">
        <div class="weui-panel__hd">已完成问卷</div>
        <div class="weui-panel__bd" v-for="item in paper">
            <div class="weui-media-box weui-media-box_text">
                <p class="weui-media-box__desc">{{item.paperName}}</p>
                <ul class="weui-media-box__info">
                    <li class="weui-media-box__info__meta">{{item.paperClassName}}</li>
                    <li class="weui-media-box__info__meta">{{item.paperTime}}</li>
                    <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">{{item.paperid}}</li>
                </ul>
            </div>
        </div>
    </div>
    <!--底部导航条-->
    <tabbar></tabbar>  
</div>
</template>

<script>
import tabbar from '@/components/tabbar.vue'
export default{
    data(){
        return {
            paper:[
                {
                    paperid:'111',
                    paperClass:'1005',
                    paperClassName:'测试班',
                    paperName:'测试卷',
                    paperTime:'2019年3月24日',
                },
                {
                    paperid:'112',
                    paperClass:'1005',
                    paperClassName:'测试班11',
                    paperName:'测试卷',
                    paperTime:'2019年3月24日',
                }]
        };
    },
    methods:{
    },
    components: {tabbar},
    mounted(){
    }
}
</script>

<style scoped>
/* 修复样式错误 */
.one{
    padding:20rpx 30rpx;
}
.page-panel{
    overflow: auto
}
</style>
