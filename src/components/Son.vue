<template lang="">
  <div class="son">
    
    <Dialog/>
  </div>
</template>
<script>

import Dialog from './Dialog.vue'
 export default {
   name: 'Son',
   components: {Dialog},
   setup(){
   }
 }
</script>
<style>
 .son{
   background-color: #d97c32;
   padding: 10px;
 }
</style>