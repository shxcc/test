<template>
    <div class="video-info1">
        <h2>二级组件：点赞情况</h2>
        
    </div>
</template>

<script>
export default {
    name:'video-info',
    created(){
        setTimeout(()=>{
            this.$router.push({name:'home'})
        },3000

        )
    }
}
</script>

<style>

</style>