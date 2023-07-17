<template>
  <div id="app">
    <el-button
      @click="openFullScreen1"
      v-loading.fullscreen.lock="fullscreenLoading"
      type="primary"
      plain
      >延迟加载按钮</el-button
    >
    <!-- 按钮分组： -->
    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
      <el-button type="primary"
        >下一页<i class="el-icon-arrow-right el-icon--right"></i
      ></el-button>
    </el-button-group>
    <el-button @click="numbers.a++">message增加</el-button>
    <h3>message-a的值是{{ numbers.a }}</h3>
    <!-- <p v-for="item in ">这是内容</p> -->

    <el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog title="提示" :visible.sync="centerDialogVisible" :modal-append-to-body=false  width="30%" :close-on-click-modal=false :close-on-press-escape=false :show-close=false>
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <p v-for="item in array" :key="item">这是{{item}}</p>
    <p>--------------------</p>
    <p v-for="(item,key,index) in array" :key="item">这是{{item}}{{key}}{{index}}</p>
    <p>--------------------</p>
    <p v-for="(item,key,index) in obj" :key="item">这是{{item}}{{key}}{{index}}</p>
    
    <h1>这是子组件:{{message}}</h1>
    <p>子组件{{count}}</p>

    <button @click="handler">点击子组件增加父组件的值</button>
     
  </div>

  
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      fullscreenLoading: false,
      numbers: {
        a: 1,
        b: 1,
      },
       dialogVisible: false,
       centerDialogVisible: false,
       array:['a','b','c','d'],
       obj:{a:10,b:20,c:30},
       childCount:0
    };
  },
  
       //组件通信 子组件通过 props 接收父组件数据
      props:{
        message: String,
        count:{
          type:[String,Number],
          default:100
        }
      //子传父 ：通过自定义事件处理 
      },
  methods: {
    handler(){
      this.childCount++
      this.$emit('child-count-change',this.childCount)
    },
    openFullScreen1() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 2000);
    },
    openFullScreen2() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    },
     handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  },
  //  监视器
  watch: {
    numbers: {
      //深度监视器
      deep: true,
      handler() {
        console.log("number发生改变");
      },
    },
    fullscreenLoading: {
      handler() {
        console.log("number发生改变");
      },
    },
  },
};
</script>
