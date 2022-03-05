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
import { ref, reactive, watch } from "vue";

export default {
  name: "Demo",
  setup() {
    // 数据
    let sum = ref(0);
    let msg = ref("你好啊");
    let person = ref({
      name: "张三",
      age: 18,
      job: {
        job1: {
          salary: 20,
        },
      },
    });

    console.log("sum", sum);
    console.log("msg", msg);
    console.log("person", person);

    // watch监听的是RefImpl,不能加.value, 添加value取出的就是真正的值数字0，无法监听!!
    watch(sum, (newValue, oldValue) => {
      console.log("sum", newValue, oldValue);
    })

    // 通过ref传对象，内部会调用reactive方法，将proxy代理对象赋值给 RefImpl.value所以需要监听value的值
    // watch(person.value, (newValue, oldValue) => {
    //   console.log("person.value", newValue, oldValue);
    // })

    // 也可以配置，deep为true解决问题
    watch(person, (newValue, oldValue) => {
      console.log("person.value", newValue, oldValue);
    }, {deep: true})

    return {
      sum,
      msg,
      person,
    };
  },
};
</script>
