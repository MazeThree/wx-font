<template>
    <div class="page">
        <div class="page__hd">
        <div class="weui-cell weui-cell_vcode">
            <div class="weui-cell__hd">
                <input v-model="class_id" class="weui-input" type="number" placeholder="输入班级名或id"/>
            </div>
            <div class="weui-cell__ft">
                <button class="weui-vcode-btn" @click="handle()">确定</button>
            </div>
        </div>
        </div>
        <div class="page__bd">
            <div class="weui-cell">
            <div class="weui-cell__hd">
                班级名称:
                </div>
            <div class="weui-cell__bd">
                {{class_info.class_name}}
                </div>
            </div>
            <div class="weui-cell">
            <div class="weui-cell__hd">
                班级id：
                </div>
            <div class="weui-cell__bd">
                {{class_info.class_id}}
                </div>
            </div>
            <div class="weui-cell">
            <div class="weui-cell__hd">
                创建时间：
            </div>
            <div class="weui-cell__bd">
                {{class_info.class_time}}
                </div>
            </div>
            <div class="weui-cell">
            <div class="weui-cell__hd">
                加入方式：
            </div>
            <div v-if="class_info.class_join==0" class="weui-cell__bd">
                任何人可加入
                </div>
                <div v-else-if="class_info.class_join==1" class="weui-cell__bd">
                申请通过后加入
                </div>
                <div v-else class="weui-cell__bd">
                需邀请加入
                </div>
            </div>
            <div class="weui-cell">
            <div class="weui-cell__hd">
                班级描述：
            </div>
            <div class="weui-cell__bd">
                {{class_info.class_desc}}
                </div>
            </div>
            <div class="weui-btn-area">
                <button class="primary" style="background-color:skyblue;"
                id="showTooltips" @click="join(class_info.class_join)" :disabled="flag">申请加入</button>
            </div>
        </div> 
    </div>
</template>

<script>
import { Search,joinClass } from '../../api/api';

export default {
    data () {
    return {
        flag:true,
        class_id:"201812",
        class_info:{
            class_id:"暂无数据",
            class_name:"暂无数据",
            class_time:"暂无数据",
            class_join:"1",
            class_desc:"暂无数据"
        },
        }
    },
    methods:{
        handle(){
            if(!this.class_id){
                wx.showModal({
                    content: '请输入非空值',
                    showCancel: false,
                    success: function (res) {
                    if (res.confirm) {
                        //console.log('用户点击确定')
                    }
                    }
                });
            }else{
                var params={id:this.class_id,type:5};
                //console.log(params);
                Search(params).then(data =>{
                    if (data=="") {
                        this.flag=true;
                        wx.showModal({
                        content: '暂无查找班级，请重新输入',
                        showCancel: false,
                        success: function (res) {
                        if (res.confirm) {
                            //console.log('用户点击确定')
                            }
                        }
                        });
                    }else{
                        this.class_info=data[0];
                        if(this.class_info.class_join!=3){
                        this.flag=false;}else{
                            this.flag=true}

                    }
                });
            }
        },
        join(type){
            var type=parseInt(type);
            let useparams={
                userid:this.$store.getters.getid,
                user_name:this.$store.getters.getname,
                class_id:this.class_info.class_id,
                class_name:this.class_info.class_name,
                type
            }
            joinClass(useparams).then(data =>{
                let _this=this;
                let code=data;
                if(code==1){
                    wx.showModal({
                    content: '已加入班级',
                    confirmText: "进入班级",
                    cancelText: "辅助操作",
                    success: function (res) {
                    if (res.confirm) {
                        var classid=_this.class_info.class_id;
                        console.log(classid);
                        var url = "/pages/class/main";
                         // 调用vuex的ations设置城市的值
                        _this.$store.dispatch("setclass_id",classid);
                        wx.navigateTo({url})
                    } 
                    }
                    });
                }else if(code==2){
                    wx.showToast({
                    title: "申请已提交",
                    icon: 'success',
                    duration: 2000,
                    mask: true
                });
                }else{
                    wx.showModal({
                    content: '提交失败，请确定未加入班级或未提交审核',
                    showCancel: false,
                    });
                }
            });
        }
    },
    mounted(){

    }
}
</script>

<style scoped>
.hd{
    margin: 0 10px;
}
</style>
