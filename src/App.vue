<template>
    <div class="app-container">
        <!-- header Start -->
        <mt-header fixed title="vue项目"></mt-header>
        <!-- router Start -->
        <transition>
            <router-view></router-view>
        </transition>
        <!-- tabBar Start -->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="my-mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="my-mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="my-mui-tab-item" to="/cart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="my-mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style scoped>
    .app-container {
        padding-top: 40px;
        padding-bottom: 55px;
        overflow-x: hidden;
    }
    .mint-header.is-fixed {
        top: 0;
        right: 0;
        left: 0;
        position: fixed;
        z-index: 999;
    }
    .v-enter {
        opacity: 0;
        transform: translateX(100%);
    }
    
    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }
    
    .v-enter-active, .v-leave-active {
        transition: all .5s;
    }
    
    .mui-bar-tab .my-mui-tab-item.mui-active {
        color: #007aff;
    }
    
    .mui-bar-tab .my-mui-tab-item {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    .mui-bar-tab .my-mui-tab-item .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .mui-bar-tab .my-mui-tab-item .mui-icon ~ .mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>