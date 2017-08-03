/**
 * Created by yaung on 2017/3/7.
 */
//main.js这是项目的核心文件。全局的配置都在这个文件里面配置
import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'

import './assets/styles/base.css'
//import './assets/sass/reset.scss'//报错暂时不用sass

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.debug = true;//开启错误提示

Vue.use(ElementUI)

new Vue({
        router,
        el: '#appIndex',
        render: h1 => h1(App)
});











