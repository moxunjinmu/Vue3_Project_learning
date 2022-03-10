<template>
  <h4>当前求和为：{{sum}}</h4>
  <button @click="sum++">点我x++</button>

  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.job1.salary }}</h2>
  <button @click="name += '$'">修改姓名</button>
  <button @click="age += 1">修改年龄</button>
  <button @click="job.job1.salary += 1">涨薪++</button>
</template>

<script>
import { ref, toRefs, readonly, reactive, shallowReadonly } from "vue";

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

    //  将reactive定义的响应式数据变为只读
    // person内的所有属性数据不允许修改
    // person = readonly(person)
    // person内的浅层数据不允许修改, 深层数据允许修改
    // person = shallowReadonly(person)

    // 将ref定义的响应式数据变为只读
    sum = readonly(sum);
    sum = shallowReadonly(sum)

    // 应用场景
    // 从其他地方传入的数据不允许修改
    
    // 返回一个对象
    return {
      sum,
      ...toRefs(person)
    };
  }
};
</script>
