<template>
    <div class="goods-info">
        <transition @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter">
            <div class="ball" v-show="flag"></div>
        </transition>
        <!-- 轮播区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :bannerList="bannerList" :isFull="false"></swiper>
                </div>
            </div>
        </div>
        <!-- 商品信息 -->
        <div class="mui-card">
            <div class="mui-card-header">
                {{goodsInfo.title}}
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<s>{{goodsInfo.market_price}}</s>&nbsp;&nbsp;
                        销售价：<span>{{goodsInfo.sell_price}}</span>
                    </p>
                    <p>
                        购买数量:
                        <number @getCount="getNumber" :maxNum="goodsInfo.stock_quantity"></number>
                    </p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addShopCar">加入购物车</mt-button>
                    </p>
                </div>
            </div>
            <!--
                1、按钮属于当前组件，数量属于子组件
                2、传值，子传父
                3、父向子传递一个方法，自调用这个方法，同时把数据当做参数传递过来
                4、
            -->
        </div>
        <!-- 商品参数 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{goodsInfo.goods_no}}</p>
                    <p>库存情况：{{goodsInfo.stock_quantity}}</p>
                    <p>上架时间：{{goodsInfo.add_item | dateFormat}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" plain size="large" @click="goDesc">图文介绍</mt-button>
                <mt-button type="danger" plain size="large" @click="goComment">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    import swiper from '../subcomponents/swiper.vue'
    import number from '../subcomponents/goodsInfo-number-box.vue'
    export default {
        name: "goodsInfo",
        components: {
            swiper,
            number
        },
        data() {
            return {
                id: this.$route.params.id,
                bannerList: [],
                goodsInfo: {},
                flag: false,
                selectedCount: 3,
            }
        },
        created() {
            this.getBanner();
            this.getGoodsInfo();
        },
        methods: {
            getBanner() {
                this.$http.get('api/getthumimages/'+this.id).then(res => {
                    if (res.body.status === 0) {
                        res.body.message.forEach(item => {
                            item.img = item.src;
                        });
                        this.bannerList = res.body.message;
                        //封装的图片是item.img,所以要遍历的src换成img
                    }
                })
            },
            getGoodsInfo() {
                this.$http.get('api/goods/getinfo/'+this.id).then(res => {
                    if (res.body.status === 0) {
                        this.goodsInfo = res.body.message[0];
                    }
                })
            },
            goDesc() {
                this.$router.push({name: 'goodsDesc', params: {id:this.id}});
            },
            goComment() {
                this.$router.push({name: 'goodsComment', params: {id:this.id}});
            },
            addShopCar() {
                this.flag = !this.flag;
            },
            beforeEnter(el) {
                el.style.transform = 'translate(0, 0)';
            },
            enter(el, done) {
                el.offsetWidth;
                /**
                 * 小球优化：
                 * 1、问题：每个屏幕分辨率不同
                 * 2、思路：动态计算坐标值，求差
                 * 3、domObj.getBoundingClientRect()
                 */
                const ball = document.querySelector('.ball').getBoundingClientRect();
                console.log(ball);
                const badge = document.querySelector('.mui-badge').getBoundingClientRect();
                const x = badge.left - ball.left;
                const y = badge.top - ball.top;
                // el.style.transform = 'translate(130px, 315px)';
                el.style.transform = `translate(${x}px, ${y}px)`;
                el.style.transition = 'all .9s cubic-bezier(.16,-0.44,.71,.13)  ';
                done();
            },
            afterEnter() {
                this.flag = !this.flag;
            },
            getNumber(count) {
                console.log(count);
                this.selectedCount = count;
            }
        }
    }
</script>

<style scoped lang="scss">
    .goods-info {
        background-color: #eeeeee;
        overflow: hidden;
        .price {
            span {
                color: red;
                font-size: 16px;
                font-weight: bolder;
            }
        }
        .mui-card-footer {
            display: block;
            margin: 6px 0;
            button {
                margin: 5px 0;
            }
        }
        .ball {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: red;
            position: absolute;
            left: 76px;
            top: 430px;
            z-index: 999;
        }
    }
</style>