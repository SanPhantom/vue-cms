<template>
    <div>
        
        <swiper :bannerList="bannerList" :isFull="true"></swiper>
    
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4"><router-link to="/home/newsList">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4"><router-link to="/home/photoList">
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4"><router-link to="/home/goodsList">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4"><a href="#">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4"><a href="#">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4"><a href="#">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
        </ul>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import swiper from '../subcomponents/swiper.vue'
    export default {
        name: "home",
        components: {
            swiper,
        },
        data() {
            return {
                bannerList: {},
            }
        },
        created() {
            this.getBanner();
        },
        methods: {
            getBanner() {
                this.$http.get('api/getlunbo').then(res => {
                    console.log(res);
                    if (res.body.status === 0) {
                        this.bannerList =  res.body.message;
                    } else {
                        Toast('加载轮播图失败')
                    }
                });
            }
        }
    }
</script>

<style scoped lang="less">
    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        .mui-table-view-cell {
            border: none;
        }
        img {
            width: 70%;
        }
    }
</style>