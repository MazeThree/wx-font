<template>
  <div class="page">
    <div class="page__bd">
      <div class="weui-tab">
        <div class="weui-navbar">
          <block v-for="(item,index) in tabs" :key="index">
            <div :id="index" :class="{'weui-bar__item_on':activeIndex == index}" class="weui-navbar__item" @click="tabClick">
              <div class="weui-navbar__title">{{item}}</div>
            </div>
          </block>
          <div class="weui-navbar__slider" :class="navbarSliderClass"></div>
        </div>
        <div class="weui-tab__panel">
          <div class="weui-tab__content" :hidden="activeIndex != 0">
            <div class="weui-cells__title">该班级未考试题</div>
            <div 
            v-for="item in paperlist1" :key=item.paper_id
            class="weui-cells weui-cells_after-title">
                <div
                class="weui-cell weui-cell_access" hover-class="weui-cell_active"
                @click="test(item.paper_id)"
                >
                <div class="weui-cell__bd">
                  {{item.paper_name}}--{{item.paper_id}}
                  </div>
                <div class="weui-cell__ft weui-cell__ft_in-access">参与测评</div>
                </div>
            </div>
          </div>
          <div class="weui-tab__content" :hidden="activeIndex != 1">
            <div class="weui-cells__title">已考试题</div>
            <div 
            v-for="item in paperlist2" :key=item.paper_id
            class="weui-cells weui-cells_after-title">
                <div
                class="weui-cell" hover-class="weui-cell_active"
                @click="test(item.paper_id)"
                >
                <div class="weui-cell__bd">
                  {{item.paper_name}}--{{item.paper_id}}
                  </div>
                <div class="weui-cell__ft">查看详情</div>
                </div>
            </div>
          </div>
          <div class="weui-tab__content" :hidden="activeIndex != 2">
            <!-- 选项的内容1.{{name}} -->
            <div class="weui-cells__title"></div>
            <div class="weui-cells weui-cells_after-title">
                <div class="weui-cell" hover-class="weui-cell_active">
                <div class="weui-cell__bd">
                  班级编号
                  </div>
                <div class="weui-cell__ft">{{classinfo.class_id}}</div>
                </div>
            </div>
            <div class="weui-cells__title"></div>
            <div class="weui-cells weui-cells_after-title">
                <div class="weui-cell" hover-class="weui-cell_active">
                <div class="weui-cell__bd">
                  班级名称
                  </div>
                <div class="weui-cell__ft">{{classinfo.class_name}}</div>
                </div>
            </div>
            <div class="weui-cells weui-cells_after-title">
                <div class="weui-cell" hover-class="weui-cell_active">
                <div class="weui-cell__bd">
                  创建时间
                  </div>
                <div class="weui-cell__ft">{{classinfo.class_time}}</div>
                </div>
            </div>
            <div class="weui-cells weui-cells_after-title">
                <div class="weui-cell" hover-class="weui-cell_active">
                <div class="weui-cell__bd">
                  加入方式
                  </div>
                <div v-if="classinfo.class_join==0" class="weui-cell__ft">允许任何人加入</div>
                <div v-else-if="classinfo.class_join==1" class="weui-cell__ft">申请后加入</div>
                <div v-else class="weui-cell__ft">需邀请后加入</div>
                </div>
            </div>
            <div class="weui-cells weui-cells_after-title">
                <div class="weui-cell" hover-class="weui-cell_active">
                <div class="weui-cell__bd">
                  班级描述
                  </div>
                <div class="weui-cell__ft">{{classinfo.class_desc}}</div>
                </div>
            </div>

            <div class="weui-btn-area">
              <button type="warn"
              @click="handle()"
              id="showTooltips">退出班级</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { getclasslist,finish } from '../../api/api';
export default {
  data() {
    return {
      tabs: ["已有试题", "已考试题", "班级信息"],
      activeIndex: 0,
      fontSize: 30,
      //查询所有试卷
      paperlist:[],
      //筛选出未参与考试的数据
      paperlist1:[],
      paperlist2:[],
      classinfo:[]
    }
  },
  methods:{
      getclass(){
        var _this=this;
          var userid={id:this.$store.getters.class_id,type:2};
          var classid={id:this.$store.getters.class_id,type:5};
          var fin={
            useid:_this.$store.getters.getid,
            class_id:_this.$store.getters.class_id,
          }
          getclasslist(userid).then(data =>{
            console.log(data)
            this.paperlist=data;
          });
          getclasslist(classid).then(data =>{
              this.classinfo=data[0];
          });
          finish(fin).then(data =>{
              //对比该学生在该班级下已经参与过的考试，将返回的所有试卷信息
              //分别存入已考和未考分组
              // var arr=new Array;
              // arr.push
              console.log('111')
              for(let i=0;i<this.paperlist.length;i++){
                //console.log(data.indexOf(this.paperlist[i].paper_id));
                if(data.indexOf(this.paperlist[i].paper_id)){
                  console.log('sss')
                  this.paperlist1.push(this.paperlist[i]);
                }else{
                  console.log('222')
                  this.paperlist2.push(this.paperlist[i])}
              }
          });
      },
      test(id){
          this.$store.dispatch("settest_id",id);
          var url = "/pages/test/main"
          wx.navigateTo({url})
      },
      tabClick(e) {
      console.log(e);
      this.activeIndex = e.currentTarget.id;
      },
      handle(){
        var _this=this;
        wx.showModal({
        content: '确定要退出班级吗？',
        confirmText: "确定",
        cancelText: "不了",
        success: function (res) {
          if (res.confirm) {
            var url="/pages/home/main";
            wx.redirectTo({url});   
          } 
        }
      });
    }
  },
  computed: {
    navbarSliderClass() {
      if (this.activeIndex == 0) {
        return 'weui-navbar__slider_0'
      }
      if (this.activeIndex == 1) {
        return 'weui-navbar__slider_1'
      }
      if (this.activeIndex == 2) {
        return 'weui-navbar__slider_2'
      }
    }
    // name:function() {
    //   // 通过vuex的getters方法来获取state里面的数据
    //   return this.$store.getters.class_id;
    // }
  },
  mounted(){
    this.paperlist1=[];
    this.paperlist2=[];
    this.paperlist=[];
    this.getclass();
  }
}
</script>

<style scoped>
page,
.page,
.page__bd {
  height: 100%;
}
.page__bd {
  padding-bottom: 0;
}
.weui-tab__content {
  padding-top: 10px;
}
.weui-navbar__slider_0 {
  left: 29rpx;
  transform: translateX(0);
}
.weui-navbar__slider_1 {
  left: 29rpx;
  transform: translateX(250rpx);
}
.weui-navbar__slider_2 {
  left:29rpx;
  transform: translateX(500rpx);
}
</style>