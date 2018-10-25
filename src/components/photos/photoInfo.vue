<template>
    <div class="photos-info-container">
        <h3 class="mui-popup-title">{{photosInfo.title}}</h3>
        <p class="mui-subtitle mui-clearfix">
            <span class="mui-pull-left">发表时间：{{photosInfo.add_time | dateFormat}}</span>
            <span class="mui-pull-right">点击：{{photosInfo.click}}次</span>
        </p>
        <hr/>
    
        <vue-preview :slides="photos" @close="handleClose"></vue-preview>
        
        <div class="content" v-html="photosInfo.content">
        
        </div>
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
    import comment from '../subcomponents/comment.vue'
    export default {
        name: "photoInfo",
        components: {
            commentBox: comment,
        },
        data() {
            return {
                //从路由中获取的图片id
                id: this.$route.params.id,
                photosInfo: {},
                photos:[],
            }
        },
        created() {
            this.getPhotosInfo();
            this.getThumImages();
        },
        methods: {
            getPhotosInfo() {
                this.$http.get('api/getimageInfo/'+this.id).then(res => {
                    console.log(res.body.message[0]);
                    if (res.body.status === 0) {
                        this.photosInfo = res.body.message[0];
                    }
                });
            },
            getThumImages() {
                this.$http.get('api/getthumimages/'+this.id).then(res => {
                    console.log(res.body.message);
                    if (res.body.status === 0) {
                        //遍历每个图片的数据，补全图片的宽和高和小图片
                        res.body.message.forEach(item => {
                            item.msrc = item.src;
                            item.w = 600;
                            item.h = 400;
                        });
                        this.photos = res.body.message;
                    }
                });
            }
        }
    }
</script>

<style lang="scss">
    .mui-popup-title {
        color: #226aff;
        margin: 15px 0;
        font-weight: bold;
        font-size: 16px;
    }
    .content {
        font-size: 14px;
        p {
            text-indent: 2em;
            font-size: 14px;
            line-height: 18px;
            
        }
    }
    figure {
        display: inline-block;
        margin: 1em 25px;
        img {
            width: 99px;
            height: 66px;
        }
    }
</style>