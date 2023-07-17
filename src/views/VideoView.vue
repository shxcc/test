<template>
    <div id="video">

    <h1>一级组件：视频信息</h1>
    <h1>视频id 为：{{id}} </h1>
    <nav>
    <router-link :to="{name:'video-info',params:{id:28}}">点赞信息(3秒自动跳转Home)</router-link>|
    <router-link :to="{name:'video-info2',params:{id:28}}">弹幕信息</router-link>

    <router-view></router-view>
    </nav>
    </div>
</template>

<script>
export default {
    name:'VideoView',
    props:['id']
}
</script>

<style>

</style>