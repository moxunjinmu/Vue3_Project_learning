<template lang="">
  <div class="Child">
    <h3>Child</h3>
    <Son/>
  </div>
</template>
<script>
import Son from "./Son.vue"
 export default {
   name: 'Child',
   components: {Son}
 }
</script>
<style>
  .Child{
    background-color: #8ae234;
    padding: 10px;
  }
</style>