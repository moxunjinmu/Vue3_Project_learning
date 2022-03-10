<template>
  <!-- <h4>当前求和为：{{sum}}</h4>
  <button @click="sum++">点我x++</button>
  <div>{{person}}</div>
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2>薪资:{{ job.job1.salary }}</h2>
  <button @click="person.name += '$'">修改姓名</button>
  <button @click="person.age += 1">修改年龄</button>
  <button @click="person.job.job1.salary += 1">涨薪</button>
  <button @click="job.job1.salary += 1">涨薪++</button> -->
</template>

<script>
import {  toRefs, readonly, reactive, shallowReadonly } from "vue";

export default {
  name: "Demo",
  setup() {
    let sum = ref(0)
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        job1: {
          salary: 20
        }
      }
    });

    // person内的所有属性数据不允许修改
    // person = readonly(person)
    // person = shallowReadonly(person)

    // 返回一个对象
    return {
      // sum,
      // ...toRefs(person)
    };
  }
};
</script>
