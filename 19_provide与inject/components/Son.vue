<template lang="">
  <div class="son">
    <h3>Son=> name:{{name}}: {{price}}</h3>
  </div>
</template>
<script>
import { inject, toRefs } from 'vue'
 export default {
   name: 'Son',
   setup(){
    let car = inject('car') // 拿到app组件的数据

    return {
      ...toRefs(car)
    }
   }
 }
</script>
<style>
 .son{
   background-color: #d97c32;
   padding: 10px;
 }
</style>