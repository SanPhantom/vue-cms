//一安二导三用四创五导
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/tabBar/home.vue'
import Member from './components/tabBar/member.vue'
import Cart from './components/tabBar/cart.vue'
import Search from './components/tabBar/search.vue'
import NewsList from './components/news/newsList.vue'
import NewsInfo from './components/news/newsInfo.vue'

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
    ],
});

//把路由对象暴露出去
export default router
