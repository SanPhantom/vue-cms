<template>
    <div>
        
        <div id="slider" class="mui-slider" data-slider="4">
            <div id="sliderSegmentedControl"
                 class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted mui-scroll-wrapper">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', cate.id===0?'mui-active':'']" href="/item1mobile" v-for="cate in cates" :key="cate.id">
                        {{cate.title}}
                    </a>
                </div>
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
        },
        data() {
            return {
                cates: [],
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
            }
        }
    }
</script>

<style scoped>
    * {
        touch-action: auto;
    }
</style>