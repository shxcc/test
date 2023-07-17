import Vue from 'vue'
import VueRouter from 'vue-router'
import VideoView from '../views/VideoView.vue'
import HelloView from "../components/HelloWorld.vue"
import VideoInfo from "../views/video/VideoInfo.vue"
import About from "../views/About.vue"
import VideoInfo2 from "../views/video/VideoInfo2.vue"




Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HelloView
    },
    {
        //动态路由
        path: '/video/:id',
        name: 'video',
        component: VideoView,
        children:[
            {path: 'info1',name:'video-info',component:VideoInfo},
            {path: 'info2',name:'video-info2',component:VideoInfo2}
        ],
        props: true
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
