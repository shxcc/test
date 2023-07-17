<template>
    <h2 class="red"> test.. {{msg}}</h2>
</template>

<script>
export default {
  
  props: {
    msg: {
     type : String,
     default : "test 默认"
  }
  },
  methods:{

  },
  data(){
      return{}
  },
}
</script>

<style>
.red{color:blue}
</style>
