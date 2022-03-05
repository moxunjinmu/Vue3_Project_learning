<template>
  <div>{{person}}</div>
  <h2>姓名:{{ person.name }}</h2>
  <h2>姓名2:{{ name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2>薪资:{{ salary }}</h2>
  <button @click="person.name += '$'">修改姓名</button>
  <button @click="person.age += 1">修改年龄</button>
  <button @click="person.job.job1.salary += 1">涨薪</button>
  <button @click="salary += 1">涨薪++</button>
</template>

<script>
import { reactive, toRef } from "vue";

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

    const name1 = person.name;
    console.log("name1", name1);
    const name2 = toRef(person, 'name');
    console.log("name2", name2);

    // 返回一个对象
    return {
      person,
      // name: person.name 相当于 name: '张三'丢失响应式
      // name: ref(person.age) 这样仅相当于初始化时候使用了person的数据，并不是指向person
      name: toRef(person, 'name'),
      salary: toRef(person.job.job1, 'salary')
    };
  }
};
</script>
