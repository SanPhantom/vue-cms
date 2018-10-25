<template>
    <div class="goods-list">
        <div class="goods-item" v-for="item in goodsList" :key="item.id" @click="goToInfo(item.id)">
            <img :src="item.img_url" alt="">
            <h1>{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="new">{{item.sell_price}}</span>
                    <span class="old">{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余{{item.stock_quantity}}件</span>
                </p>
            </div>
        </div>
        <!--
        网页两种跳转方式：
            ① a标签跳转
            ② window.location.href
        -->
    </div>
</template>

<script>
    export default {
        name: "goodsList",
        data() {
            return {
                pageIndex: 1,
                goodsList: [],
            }
        },
        created() {
            this.getGoodsList();
        },
        methods: {
            getGoodsList() {
                this.$http.get('api/getgoods?pageindex='+this.pageIndex).then(res => {
                    if (res.body.status === 0) {
                        this.goodsList = this.goodsList.concat(res.body.message);
                    }
                })
            },
            goToInfo(id) {
                /**
                 * this.$route 路由的参数对象，所有路由的参数params, query都属于他
                 * this.$router 路由的导航对象，可以方便的使用js的代码，实现路由的前进，后退，跳转
                 */
                // this.$router.push('/home/goodsInfo/'+id);
                // this.$router.push({path: '/home/goodsInfo/'+id});
                this.$router.push({name: 'goodsInfo', params: {id: id}})
            }
        }
    }
</script>

<style scoped lang="scss">
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 7px;
        .goods-item {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border: 1px solid #ccc;
            width: 49%;
            box-shadow: 0 0 7px #ccc;
            margin: 3px 0;
            img {
                width: 100%;
            }
            h1 {
                font-size: 14px;
                word-wrap: break-word;
                padding: 3px;
            }
            .info {
                background-color: #ccc;
                p {
                    padding: 5px;
                    margin: 0;
                    &.price {
                        .new {
                            color: red;
                            font-weight: bold;
                            font-size: 16px;
                        }
                        .old {
                            text-decoration: line-through;
                            font-size: 12px;
                            margin-left: 10px;
                        }
                    }
                    &.sell {
                        display: flex;
                        justify-content: space-between;
                        font-size: 13px;
                    }
                }
            }
        }
    }
</style>