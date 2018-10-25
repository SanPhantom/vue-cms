import Vue from 'vue'
import app from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import router from './router.js'
import VueResource from 'vue-resource'
import moment from 'moment'
import VuePreview from 'vue-preview'


Vue.use(VuePreview);
Vue.use(MintUI);
Vue.use(VueResource);

//全局配置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';
//设置全局过滤器
Vue.filter('dateFormat', function (dateStr, pattern='YYYY-MM-DD HH:mm:ss') {
    return moment(dateStr).format(pattern);
});
//全局配置post提交方式为表单
Vue.http.options.emulateJSON = true;

let vm = new Vue({
    el: '#app',
    router,
    render: c => c(app)
});