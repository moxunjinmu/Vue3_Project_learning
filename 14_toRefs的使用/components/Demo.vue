<template>
  <div>{{person}}</div>
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2>薪资:{{ job.job1.salary }}</h2>
  <button @click="person.name += '$'">修改姓名</button>
  <button @click="person.age += 1">修改年龄</button>
  <button @click="person.job.job1.salary += 1">涨薪</button>
  <button @click="job.job1.salary += 1">涨薪++</button>
</template>

<script>
import { reactive, toRef, toRefs } from "vue";

export default {
  name: "Demo",
  setup() {
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        job1: {
          salary: 20,
        },
      },
    });

    const x = toRefs(person);
    console.log("*****", x, "******");

    // 返回一个对象
    return {
      person,
      // proxy解构会丢失响应式，toRefs是ObjectRefImpl对象，一个包含RefImpl的对象
      ...toRefs(person)
    };
  }
};
</script>
