<template>
    <div class="news-info-container">
        <h3 class=" mui-h3 mui-popup-title">{{newsInfo.title}}</h3>
        <p class="mui-subtitle mui-clearfix">
            <span class="mui-pull-left">发表时间：{{newsInfo.add_time | dateFormat}}</span>
            <span class="mui-pull-right">点击：{{newsInfo.click}}</span>
        </p>
        <hr/>
        <div class="content" v-html="newsInfo.content">
        
        </div>
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
    import comment from '../subcomponents/comment.vue'
    export default {
        name: "newsInfo",
        components: {
            commentBox: comment,
        },
        data() {
           return {
               id: this.$route.params.id,
               newsInfo: {},
           }
        },
        created() {
            this.getNewsInfo();
        },
        methods: {
            getNewsInfo() {
                this.$http.get('api/getnew/'+this.id).then(res => {
                    console.log(res.body.message[0]);
                    if (res.body.status === 0) {
                        this.newsInfo = res.body.message[0];
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
    .mui-popup-title {
        color: red;
        margin: 15px 0;
        font-weight: bold;
    }
    .content p {
        text-indent: 2em;
    }
    .news-info-container {
        img {
            width: 100% !important;
        }
    }
</style>