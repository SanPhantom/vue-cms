<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in bannerList" :key="item.id">
                <img :src="item.img" alt="" :class="{'full':isFull}" />
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        name: "swiper",
        props: ['bannerList', 'isFull']
    }
</script>

<style scoped lang="less">
    .mint-swipe {
        height: 200px;
        text-align: center;
        img {
            &.full {
                width: 100%;
            }
            height: 100%;
        }
    }
</style>