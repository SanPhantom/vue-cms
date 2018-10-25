//一安二导三用四创五导
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/tabBar/home.vue'
import Member from './components/tabBar/member.vue'
import Cart from './components/tabBar/cart.vue'
import Search from './components/tabBar/search.vue'
import NewsList from './components/news/newsList.vue'
import NewsInfo from './components/news/newsInfo.vue'
import PhotoList from './components/photos/photoList.vue'
import PhotoInfo from './components/photos/photoInfo.vue'
import GoodsList from './components/goods/goodsList.vue'
import GoodsInfo from './components/goods/goodsInfo.vue'
import GoodsDesc from './components/goods/goodsDesc.vue'
import GoodsComment from './components/goods/goodsComment.vue'

Vue.use(VueRouter);

let router= new VueRouter({
    linkActiveClass: 'mui-active',
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: Home},
        {path: '/member', component: Member},
        {path: '/cart', component: Cart},
        {path: '/search', component: Search},
        {path: '/home/newsList', component: NewsList},
        {path: '/home/newsInfo/:id', component: NewsInfo},
        {path: '/home/photoList', component: PhotoList},
        {path: '/home/photoInfo/:id', component: PhotoInfo},
        {path: '/home/goodsList', component: GoodsList},
        {path: '/home/goodsInfo/:id', component: GoodsInfo, name: 'goodsInfo'},
        {path: '/home/goodsDesc/:id', component: GoodsDesc, name: 'goodsDesc'},
        {path: '/home/goodsComment/:id', component: GoodsComment, name: 'goodsComment'},
    ],
});

//把路由对象暴露出去
export default router
