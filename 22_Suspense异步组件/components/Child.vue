<template lang="">
  <div class="Child">
    <h3>Child</h3>
    {{sum}}
  </div>
</template>
<script>
import { ref } from 'vue'

 export default {
   name: 'Child',
   setup(){
     let sum = ref(0)
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         resolve({sum})
       }, 2000);
     })

   }
 }
</script>
<style>
  .Child{
    background-color: #8ae234;
    padding: 10px;
  }
</style>