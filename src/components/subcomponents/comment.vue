<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请说出你的声音(最多吐槽120字)" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,index) in comments" :key="index">
                <div class="cmt-title">
                    第{{index+1}}楼&nbsp;{{item.user_name}}&nbsp; 发表时间：{{item.add_time | dateFormat}}
                </div>
                <div class="cmt-body">
                    {{item.content}}
                </div>
            </div>
        </div>
        
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    export default {
        name: "comment",
        props: ['id'],
        data() {
            return {
                pageIndex: 1,
                comments: [],
                msg: '',
            }
        },
        created() {
            this.getComments();
        },
        methods: {
            getComments() {
                this.$http.get('api/getcomments/'+this.id+'?pageindex='+this.pageIndex).then(res => {
                    if (res.body.status === 0) {
                        console.log(res.body.message);
                        this.comments = this.comments.concat(res.body.message);
                        console.log(this.comments);
                    }
                });
            },
            getMore() {
                this.pageIndex++;
                this.getComments();
            },
            postComment() {
                if (!this.msg.trim()) {
                    Toast({
                        message: '评论不能为空',
                        position: 'bottom',
                        duration: 2000,
                    });
                    return false;
                }
                this.$http.post('api/postcomment/'+this.id, {content:this.msg}).then(res => {
                    if (res.body.status === 0) {
                        Toast(res.body.message);
                        let cmt = {
                            add_time: Date.now(),
                            user_name: '匿名用户',
                            content: this.msg.trim()
                        };
                        this.comments.unshift(cmt);
                        this.msg = '';
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .cmt-container {
        h3 {
            font-size: 18px;
        }
        textarea {
            font-size: 14px;
        }
        .cmt-list {
            margin: 5px 1px;
            .cmt-item {
                font-size: 13px;
                .cmt-title {
                    background-color: #ccc;
                    line-height: 30px;
                }
                .cmt-body {
                    font-size: 14px;
                    text-indent: 2em;
                    word-wrap:break-word
                }
            }
        }
    }
</style>