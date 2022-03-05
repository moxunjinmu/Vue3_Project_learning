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
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        job1: {
          salary: 20,
        },
      },
    });

    //? 情况一： 监视ref定义的一个响应式数据
    // watch(sum, (newValue, oldValue) =>{
    //   console.log("sum", newValue, oldValue);
    // });

    //? 情况二：监听ref所定义的多个响应式数据
    // 可以多个watch
    // watch(sum, (newValue, oldValue) =>{
    //   console.log("sum", newValue, oldValue);
    // });
    // watch(msg, (newValue, oldValue) =>{
    //   console.log("msg", newValue, oldValue);
    // });
    // 合并
    // watch(
    //   [sum, msg],
    //   (newValue, oldValue) => {
    //     console.log("sum msg", newValue, oldValue);
    //   },
    //   { immediate: true }
    // );

    /**
     * ?情况三：监视reactive所定义的一个响应式数据
     * 注意一，此处无法正确的获取oldvalue！！！
     * 注意二：强制开始深度监视（deep配置无效）
     */
    // watch(person, (newvalue, oldvalue) => {
    //   console.log("person", newvalue, oldvalue);
    // }, {deep: false}) 此处无效

    //? 情况四：监听reactive所定义的一个响应式数据中的某个属性
    // watch(() => person.age, (newValue, oldValue) => {
    //   console.log("person.age", newValue, oldValue);
    // })

    //? 情况五： 监听reactive所定义的一个响应式数据中的某(些)属性
    // watch([() => person.age, () => person.name], (newValue, oldValue) => {
    //   console.log("person.age", newValue, oldValue);
    // });

    //! 特殊情况：监听reactive里的某个对象类型的属性，需要开起deep为true
    watch(
      () => person.job,
      (newValue, oldValue) => {
        console.log("person.job", newValue, oldValue);
      },
      { deep: true }
    );

    return {
      sum,
      msg,
      person,
    };
  },
};
</script>
