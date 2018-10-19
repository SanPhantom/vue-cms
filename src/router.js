//一安二导三用四创五导
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/home.vue'
import Cart from './components/cart.vue'
import User from './components/children/user.vue'
import Register from './components/children/register.vue'

Vue.use(VueRouter);
let router= new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: Home},
        {path: '/cart', component: Cart, children: [
                {path: '', redirect: "register"},
                {path: 'register', component: Register},
                {path: 'user', component: User},
            ]},
    ]
});

//把路由对象暴露出去
export default router
