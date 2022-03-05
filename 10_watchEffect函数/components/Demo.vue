<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我加1</button>
  <br />
  <h2>当前的信息为：{{ msg }}</h2>
  <button @click="msg += '!!!!'">点我加！！！</button>
  <br />
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2>薪资:{{ person.job.job1.salary }}</h2>
  <button @click="person.name += '$'">修改姓名</button>
  <button @click="person.age += 1">修改年龄</button>
  <button @click="person.job.job1.salary += 1">涨薪</button>
</template>

<script>
import { ref, reactive, watch, watchEffect, computed } from "vue";

export default {
  name: "Demo",
  setup() {
    // 数据
    let sum = ref(0);
    let msg = ref("你好啊");
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        job1: {
          salary: 20,
        },
      },
    });

    console.log("sum", sum);

    // watch监听
    // 既要指明监视的属性，也要指明回调函数
    // watch(sum, (newValue, oldValue) => {
    //   console.log("sum", newValue, oldValue);
    // }, {immediate: true})

    // watchEffect
    // 自动监听回调函数里**使用**到的 RemImpl对象
    // 不用指明监听的对象，回调使用到哪个就监听哪个
    watchEffect(() => {
      const x1 = sum.value;
      const x2 = person.job.job1.salary;
      console.log("watchEffect的回调执行了");
    })

    // 与computed函数对比
    // computed注重结果，也就是返回值
    // watchEffect注重逻辑，也就是回调执行的过程（报销流程，axios请求等）

    // 返回一个对象
    return {
      sum,
      msg,
      person,
    };
  },
};
</script>
