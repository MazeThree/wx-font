<template>
  <div class="page" style="height:100%">
    <div class="page__hd">
        题型
      <div style="float:right">
          计时器
      </div>
    </div>
    <div class="page__bd">
      <swiper :current="current" :duration="duration" :circular="circular"  @animationfinish="animationfinish"
      class="swiper">
        <div v-for="(item,index) in question" :key="index">
          <swiper-item>
              <div style="margin-top:45px;"></div>
            <div v-if="item.type==1">
                <div>
                    <span>单选题</span>
                    <span style="float:right"> {{index+1}}/ {{question.length}}</span>
                </div>
                <div>
                    {{item.question}}
                </div>
                <div>
                    <radio-group @change="radioChange" >
                        <label><div><radio value="A" />A:{{item.optionA}}</div></label>
                        <label><div><radio value="B" />B:{{item.optionB}}</div></label>
                        <label><div><radio value="C" />C:{{item.optionC}}</div></label>
                        <label><div><radio value="D" />D:{{item.optionD}}</div></label>
                    </radio-group>
                </div>
            </div>
            <div v-else-if="item.type==2">
                <span>多选题</span>
                <span style="float:right">{{index+1}}/{{question.length}}</span>
                <div>
                    {{item.question}}
                </div>
                <div>
                   <checkbox-group @change="radioChange">
                        <label><div><checkbox value="A" />A:{{item.optionA}}</div></label>
                        <label><div><checkbox value="B" />B:{{item.optionB}}</div></label>
                        <label><div><checkbox value="C" />C:{{item.optionC}}</div></label>
                        <label><div><checkbox value="D" />D:{{item.optionD}}</div></label>
                    </checkbox-group>
                </div>
            </div>
            <div v-else>
                <div>
                <span>判断题</span>
                <span style="float:right">{{index+1}}/{{question.length}}</span>
                </div>
                <div>
                    {{item.question}}
                </div>
                <div>
                    <radio-group @change="radioChange" >
                        <label><div><radio value="A" />正确</div></label>
                        <label><div><radio value="B" />错误</div></label>
                    </radio-group>
                </div>
            </div>
            <div class="ft">
                <div v-if="index==0" style="width:50%;float:left;">
                    <button>无</button></div>
                <div v-else style="width:50%;float:left;">
                    <button @click="pre()">上一题</button></div>             
                <div><button @click="next()">下一题</button></div>
            </div>
          </swiper-item>
        </div>
        <div>
          <swiper-item>
              <div style="margin-top:45px;"></div>
            <div>
                <span>答题卡</span>
            </div>
            <div class="card">
                <div v-for="(item,index) in question" :key="index"
                :class="{'item_on':item.choice != ''}" class="item" @click="itemClick(index)">
                    {{index+1}}
                </div>
            </div>
            <div class="ft">
                <button @click="submit()">提交</button>
            </div>
          </swiper-item>
          </div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { getclasslist,getscore } from '../../api/api';
export default {
  data() {
    return {
      duration: 900,
      circular: false,
      current:0,
      //存储题目
      question: []
    }
  },
  methods: {
    animationfinish(e) {
      console.log('第' + e.mp.detail.current + '张轮播图滑动结束');
      this.current=e.mp.detail.current;
    },
    radioChange(e) {
        //也可以通过e.target.id获取，但要给每个group都绑定:id="index"属性
      var index=this.current;
      var value=e.mp.detail.value;
      this.question[index].choice=value;   
      //console.log(this.question[index].choice);                
    },
    getquestion(){
          var testid={id:this.$store.getters.test_id,type:3};
          getclasslist(testid).then(data =>{
              for(let i=0;i<data.length;i++){
                  this.question.push({
                    test_id:data[i].test_id,
                    question:data[i].question,
                    type:data[i].type,
                    optionA:data[i].optionA,
                    optionB:data[i].optionB,
                    optionC:data[i].optionC,
                    optionD:data[i].optionD,
                    correct_option:data[i].correct_option,
                    choice:"",
                    que_score:data[i].que_score
                  });
              }
              //this.question=data;
          });
      },
    pre(){
        this.current=this.current-1;
    },
    next(){
        this.current=this.current+1;
    },
    itemClick(index){
        this.current=index;
    },
    submit(){
        var _this=this;
        wx.showModal({
        content: '确定要提交吗？',
        confirmText: "确定",
        cancelText: "检查一下",
        success: function (res) {
          if (res.confirm) {
              let testdata=[];
              for(let i=0;i<_this.question.length;i++){
                  testdata.push({
                      choice:_this.question[i].choice,
                      correct_option:_this.question[i].correct_option,
                      que_score:_this.question[i].que_score
                  });
              }
              var que={
                  useid:_this.$store.getters.getid,
                  test_id:_this.question[0].test_id,
                  class_id:_this.$store.getters.class_id,
                  data:testdata
              }
             getscore(que).then(data =>{
                  var url="/pages/message/main";
                  wx.redirectTo({url});
              
          });
          } 
        }
      });
    }
  },
  mounted(){
      this.question=[];
      this.getquestion();

  }
}
</script>

<style scoped>
.page__hd{
    position:absolute;
    top: 0;
    height: 45px;
    line-height: 45px;
    margin: 0 20px;
    width: 100%;
}
.page__bd{
    width:100%;
    height: 100%;
    background-color: rgb(247, 231, 231);
}
.swiper{
    height: 100%;
    padding: 0 15px;
}
.card{
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    height:80%;
    overflow: auto;
}
.item{
    margin: 25px;
    width: 25px;
    height: 25px;
    border:1px solid blueviolet;
    color: blueviolet;
    border-radius: 50%;
    text-align: center;
    line-height:25px;
    font-size: 12px;
}
.item_on{
    border:1px solid green;
    background-color: green;
    color:white;
}
.ft{
    position:absolute;
    bottom: 0;
    height: 55px;
    width: 100%;
}
.page__ft button{
    width: 100%;
}
</style>
