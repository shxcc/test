<template>
<div id="result">

<button>GET</button>
<button>POST</button>
<button>通用型方法ajax</button>

</div>

</template>

<script>
const btnS = document.getElementsByTagName("button");
btnS[0].addEventListener("click", function() {
  //get请求
  axios
    .get(
      //url路径
      "http://localhost:8080/axios",
      {
        //url参数（get方法时使用）
        params: {
          id: 100,
          vip: 7
        },
        //请求头信息
        headers: {
          name: "lyj"
        }
      }
    )
    .then(value => {
      //设置响应
      console.log(value);
      document.getElementById("result").innerHTML = value.data.message;
    });
});
btnS[1].addEventListener("click", function() {
  //post请求
  axios
    .post(
      //url路径
      "http://localhost:8080/axios",
      {
        //请求体参数post方法携带参数
        data: {
          id: "hello",
          name: "张三"
        },
        //请求头信息
        headers: {
          name: "lyj"
        },
        //设置返回类型
        responseType: "json"
      }
    )
    .then(value => {
      //设置响应
      document.getElementById("result").innerHTML = value.data.message;
    });
});
btnS[2].addEventListener("click", function() {
  //通用型方法
  axios({
    method: "get",
    url: "http://localhost:8080/axios",
    params: {
      id: 1,
      name: "hello"
    },
    headers: {
      username: "saner",
      password: "12323"
    }
  }).then(value => {
    document.getElementById("result").innerHTML = value.data.message;
  });
});

export default {
  name: 'result',

 mounted() {
      /**
       * 等到整个视图都渲染完毕
       */
      this.$nextTick(function () {
        window.addEventListener('result', this.needToTop);
      });
    }
}
</script>

<style>
.aaa {
      width: 100px;
      height: 100px;
      background-color: blue;
}
</style>

