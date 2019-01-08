<template>
    <div class="weui-tabbar">
        <router-link to="/home" class="weui-tabbar__item weui-bar__item_on">
            <span style="display: inline-block;position: relative;">
                <img src="../images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
            </span>
            <p class="weui-tabbar__label">事务管理</p>
        </router-link>
        <a href="javascript:;" class="weui-tabbar__item">
            <img src="../images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">班级管理</p>
        </a>
        <a href="javascript:;" class="weui-tabbar__item">
            <span style="display: inline-block;position: relative;">
                <img src="../images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
                <span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span>
            </span>
            <p class="weui-tabbar__label">题库管理</p>
        </a>
        <a href="/pages/mine/main" class="weui-tabbar__item">
            <img src="../images/icon_tabbar.png" alt="" class="weui-tabbar__icon">
            <p class="weui-tabbar__label">我的</p>
        </a>
    </div>
</template>