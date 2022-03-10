<template>
  <h4>当前求和为：{{sum}}</h4>
  <button @click="sum++">点我x++</button>

  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.job1.salary }}</h2>
  <h2 v-show="person.car">car:{{ person.car }}</h2>
  <button @click="name += '$'">修改姓名</button>
  <button @click="age += 1">修改年龄</button>
  <button @click="job.job1.salary += 1">涨薪++</button>
  <button @click="showRawPerson">输出原始person对象</button>
  <button @click="addCar">给人添加一台车</button>
  <button @click="person.car.name += '!'">换车名</button>
  <button @click="person.car.price += '@'">换价格</button>
</template>

<script>
import { ref, toRefs, readonly, reactive, toRaw, markRaw } from "vue";

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
      },
      // 方法一：先定义car
      // car: null
    });

    function showRawPerson() {
      // 将reactive定义的响应式数据转为普通对象
      // 对转换的普通对象操作将不会引起页面更新
      const p = toRaw(person)
      console.log("p", p);

      // 报错 Assignment to constant variable.
      // const s = toRaw(sum)
      // console.log("s", s);
      // s += 1
    }

    function addCar(){
      let car = {name: '奔驰', price: '40w'}
      // person.car = car
      // markRaw标记为永远不是响应式数据， 数据变了，但是不做响应式
      // 1. 有些值不应被勺I□响应式的，例如复杂三方类库等。
      // 2. 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。
      person.car = markRaw(car)
    }
    
    // 返回一个对象
    return {
      sum,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar
    };
  }
};
</script>
