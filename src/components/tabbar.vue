<template>
<div class="foot-box">
    <div class="flex-items">
        <a href="" class="active">
            <span style="display:inline-block;position:relative;">
                <img class="weui-tabbar__icon" src="../images/icon_tabbar.png" alt="">
            </span>
            <br>
            <span>首页</span>
        </a>
    </div>
    <div class="flex-items">
        <a href="" class="active">
            <span style="display:inline-block;position:relative;">
                <img class="weui-tabbar__icon" src="../images/icon_tabbar.png" alt="">
            </span>
            <br>
            <span>首页</span>
        </a>
    </div>
    <div class="flex-items">
        <a href="" class="active">
            <span style="display:inline-block;position:relative;">
                <img class="weui-tabbar__icon" src="../images/icon_tabbar.png" alt="">
            </span>
            <br>
            <span>首页</span>
        </a>
    </div>
</div>
</template>
<style scoped>
/*底部选项卡*/
.foot-box{
	display: flex;
	display: -webkit-flex; /* Safari */
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 50px;
	padding-top: 4px;
	font-size: 10px;
	text-align: center;
	box-shadow: 0 -2px 5px #888888;
	background-color: #fff;
}
.weui-tabbar__icon {
    display: inline-block;
    width: 27px;
    height: 27px;
}
.foot-box .flex-items{
	flex-grow: 1;
}
.foot-box .flex-items a{
	text-decoration: none;
}
.foot-box .flex-items a:hover{
	color: #8c27ff;
}
.foot-box .flex-items .active{
	color: #8c27ff;
}
.foot-box .flex-items a{
	color: gray;
}
.foot-box .flex-items a>span:first-child{
	font-size: 16px;
}
</style>
