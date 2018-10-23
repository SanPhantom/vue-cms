<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link :to="'/home/newsInfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h2>{{item.title}}</h2>
                        <p class="mui-ellipsis">
                            <span class="mui-pull-left">发表时间：{{item.add_time | dateFormat('YYYY-MM-DD')}}</span>
                            <span class="mui-pull-right">点击次数：{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "newsList",
        data() {
            return {
                newsList: {}
            }
        },
        created() {
            this.getNews();
        },
        methods: {
            getNews() {
                this.$http.get('api/getnewslist').then(res => {
                    if (res.body.status === 0) {
                        console.log(res.body);
                        this.newsList = res.body.message;
                    }
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    li {
        h2 {
            font-size: 14px;
        }
        p {
            font-weight: normal;
            color: #226aff;
            display: flex;
            justify-content: space-between;
            font-size: 10px;
        }
    }
</style>