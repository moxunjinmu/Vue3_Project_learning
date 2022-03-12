<template>
<div class="App">
  <h3>
  我是app, {{name}}:{{price}}
  </h3>
<Child/>
</div>
</template>

<script>
import Child from './components/Child.vue'
import { reactive, toRefs, provide } from 'vue'

export default {
  name: 'App',
  components: {Child},
  setup(){
    let car = reactive({
      name: "奔驰",
      price: '40w'
    })

    provide('car', car)  // 给自己的后代组件传递数据
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