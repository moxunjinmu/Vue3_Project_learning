<template>
<div class="App">
  <h3>
  我是app, {{name}}:{{price}}
  </h3>

</div>
</template>

<script>
import {ref, isRef, reactive, toRefs, readonly, isReactive, isReadonly, isProxy } from 'vue'

export default {
  name: 'App',
  setup(){
    let car = reactive({
      name: "奔驰",
      price: '40w'
    })
    let sum = ref(0)
    let _car = readonly(car)
    // 检查一个值是否为一个ref对象
    console.log("isRef sum", isRef(sum)); 
    // 检查一个对象是否由reactive创建的响应式代理对象
    console.log("isReactive car", isReactive(car));
    // 检查一个对象是否由readonly创建的只读代理对象
    console.log("isReadonly _car", isReadonly(_car));
    // 检查一个对象是否由reactive或者readonly创建的代理对象
    console.log("isProxy car", isProxy(car));
    console.log("isProxy _car", isProxy(_car));

    return {
      ...toRefs(car)
    }
  }
}
</script>
<style>
.App{
  background-color: #9d3942;
}
</style>