<template>
    <div>
        <div id="slider" class="mui-slider" data-slider="4">
            <div id="sliderSegmentedControl"
                 class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted mui-scroll-wrapper">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', cate.id===0?'mui-active':'']" @click="getPhotoList(cate.id)" v-for="cate in cates" :key="cate.id">
                        {{cate.title}}
                    </a>
                </div>
            </div>
    
            <div class="photos">
                <router-link :to="'/home/photoInfo/'+item.id" v-for="item in list" :key="item.id">
                    <img v-lazy="item.img_url" alt="" />
                    <div class="mui-slider-title mui-ellipsis-5">
                        <h3>{{item.title}}</h3>
                        <p>{{item.zhaiyao}}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'

    export default {
        name: "photoList",
        mounted() {
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005
            })
        },
        created() {
            this.getAllCategory();
            this.getPhotoList(0);
        },
        data() {
            return {
                cates: [],
                list: [], //图文列表
            }
        },
        methods: {
            //获取图片的分类
            getAllCategory() {
                this.$http.get("api/getimgcategory").then(res => {
                    if (res.body.status === 0) {
                        // 手动拼接一个完整的分类列表
                        res.body.message.unshift({title: "全部", id: 0});
                        this.cates = res.body.message;
                    }
                })
            },
            //获取图片信息
            getPhotoList(id) {
                this.$http.get("api/getimages/"+id).then(res => {
                    if (res.body.status === 0) {
                        this.list = res.body.message;
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    * {
        touch-action: auto;
    }
    .photos {
        a {
            display: block;
            width: 100%;
            position: relative;
            margin: 5px 0;
            img {
                width: 100%;
            }
            img[lazy=loading] {
                width: 100%;
                height: 150px;
            }
        
        }
    }
    .mui-slider-title {
        height: auto;
        min-height: 100px;
        bottom: 5px;
        h3 {
            font-size: 16px;
        }
        p {
            font-size: 14px;
            line-height: 18px;
        }
    }
</style>