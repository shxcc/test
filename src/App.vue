<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/video/30">Video</router-link>

    </nav>
    <router-view></router-view>
    <p>------------------</p>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App">这是默认内容1</HelloWorld>
    <HelloWorld msg="Welcome to Your Vue.js App">这是默认内容2</HelloWorld>
    <HelloWorld msg="Welcome to Your Vue.js App">这是默认内容3</HelloWorld>
    <HelloWorld msg="Welcome to Your Vue.js App"></HelloWorld>

    <test></test>
 <el-progress type="circle" :percentage="25"></el-progress>
    <Mesage
     message="父传子属性"
     :count="parentCount"
     @child-count-change="handler"
     ></Mesage>
     <p>-------------------</p>
    <Loading></Loading>
    <p>----------------------</p>
    <!-- <button v-on:click="show">点击</button> -->
    <button @click="show">点击（不传参）</button>
    <button @click="show1(33)">点击（传参）</button>

    <el-button type="primary" :disabled=true>主要按钮</el-button>
    <el-button @click="numbers.a++" >增加</el-button>
    <h3>a的值是{{numbers.a}}</h3>
    <!-- <HouDuan></HouDuan> -->
    <p>子传给父 childData：{{childData}}</p>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Test from "./components/Test.vue";
import Mesage from "./components/Mesage.vue";
import Loading from "./components/Loading.vue";
// import HouDuan from "./components/HouDuan.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Test,
    Mesage,
    Loading,
    // HouDuan
  
  },
  data() {
    return {
      name: "hhhh",
      numbers: {
        a: 1,
        b: 1
      },
      parentCount:1000,
      childData:0
    }
  },
  methods: {
    show() {
      console.log("提示信息");
      alert("你好");
    },
    show1(number) {
      console.log("number");
      alert(number);
    },
    handler(childCount){
      this.childData=childCount
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
