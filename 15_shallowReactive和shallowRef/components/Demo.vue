<template>
  <h4>当前的x的值是：{{x.y}}</h4>
  <button @click="x.y++">点我x++</button>
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
import {  toRefs, shallowReactive, shallowRef } from "vue";

export default {
  name: "Demo",
  setup() {
    //* shallowReactive: 只处理最外层属性的响应式 
    // 只需要监听浅层数据
    //* shallowRef: 只处理简单类型数据 不进行对象的响应式处理
    // 后续不会修改对象属性，使用新的对象替换

    let person = shallowReactive({
      name: "张三",
      age: 18,
      job: {
        job1: {
          salary: 20
        }
      }
    });
    

    // let x = shallowRef(0);
    let x = shallowRef({
      y: 0
    })

    // 返回一个对象
    return {
      x,
      person,
      ...toRefs(person)
    };
  }
};
</script>
