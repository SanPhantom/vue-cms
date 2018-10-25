<template>
    <div class="goods-desc">
        <h3>{{info.title}}</h3>
        <hr>
        <div v-html="info.content" class="content"></div>
    </div>
</template>

<script>
    export default {
        name: "goodsDesc",
        data() {
            return {
                info: {}
            }
        },
        created() {
            this.getGoodsDesc();
        },
        methods: {
            getGoodsDesc() {
                this.$http.get('api/goods/getdesc/'+this.$route.params.id).then(res => {
                    if (res.body.status === 0) {
                        this.info = res.body.message[0];
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
    .goods-desc {
        padding: 5px;
        h3 {
            color: #226aff;
            text-align: center;
            font-size: 16px;
            margin: 15px 0;
        }
        .content {
            width: 100%;
            img {
                width: 100%;
            }
        }
    }
</style>