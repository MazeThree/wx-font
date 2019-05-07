<template>
  <div class="page">
    <div class="weui-msg">
        <div class="weui-msg__icon-area">
          <icon type="success" class="weui-flex__item" size="130" />
        </div>
        <div class="weui-msg__text-area">
            <h2 class="weui-msg__title">测评完成</h2>
            <p class="weui-msg__desc">此次成绩：85分</p>
        </div>
        <div class="weui-msg__opr-area">
            <p class="weui-btn-area">
                <button type="primary" @click="back()">返回首页</button>
            </p>
        </div>
        <div class="weui-msg__extra-area">
            <div class="weui-footer">
                <p class="weui-footer__links">
                    <a href="javascript:void(0);" class="weui-footer__link">计科四班&nbsp&nbsp吴鹏</a>
                </p>
                <p class="weui-footer__text">Copyright &copy; 2019毕业设计</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    back() {
      var url = "/pages/home/main"
      wx.navigateTo({url})
    }
  }
}
</script>

<style>
page {
  box-sizing: border-box;
}
</style>