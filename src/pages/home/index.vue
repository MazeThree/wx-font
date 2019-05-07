<template>
    <div class="container">
        <div class="hd">
        <a href="/pages/join/main" class="button">+加入新班级</a>
        </div>
        <div class="bd">
            <div class="weui-cells__title">已加入班级</div>
            <div 
            v-for="item in classlist" :key=item.class_id
            class="weui-cells weui-cells_after-title">
                <div
                v-if="item.type==0"
                class="weui-cell weui-cell_access" hover-class="weui-cell_active"
                @click="classin(item.class_id)">
                <div class="weui-cell__bd">{{item.class_name}}</div>
                <div class="weui-cell__ft weui-cell__ft_in-access">已加入</div>
                </div>
                <div v-else class="weui-cell" hover-class="weui-cell_active">
                    <div class="weui-cell__bd">{{item.class_name}}</div>
                <div class="weui-cell__ft">等待审核</div>
                </div>
            </div>
        </div>
        <!-- <div>
            <h2>1.{{name}}</h2>
            <h2>2.{{id}}</h2>
        </div> -->
        <!--底部导航条-->
        <tabbar></tabbar>
    </div>
</template>

<script>
 import tabbar from '@/components/tabbar.vue';
 import { getclasslist } from '../../api/api';

export default {
    data () {
    return {
        classlist:[
            {
                class_id:"201815",
                class_name:"ssss",
                type:"1",
            },
            {
                class_id:"201817",
                class_name:"xxxx",
                type:"2"
            }
        ],
    }
  },
  methods:{
      getclass(){
          var userid={id:this.$store.getters.getid,type:1};
          getclasslist(userid).then(data =>{
              this.classlist=data;
          });
      },
      classin(item){
          this.$store.dispatch("setclass_id",item);
          var url = "/pages/class/main"
          wx.navigateTo({url})
      }
  },
  computed:{
    name:function(){
      // 通过vuex的getters方法来获取state里面的数据
      return this.$store.getters.getname;
    },
    id:function() {
      // 通过vuex的getters方法来获取state里面的数据
      return this.$store.getters.getid;
    }
  },
  mounted(){
      this.getclass();
  },
  components: {tabbar}
}
</script>

<style scoped>
.hd{
    margin: 0 10px;
}
.button{
    display: block;
    width: 100%;
    height: 45px;
    line-height: 45px;
    border: 1px solid salmon;
    border-radius: 5px;
    text-align: center;
    }
</style>
