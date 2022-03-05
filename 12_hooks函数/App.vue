<template>
  <Demo v-if="isShowDemo"/>
  <br/>
  <button @click="isShowDemo = !isShowDemo">切换隐藏demo组件</button>
  <hr>
  <Test/>
</template>

<script>
import Demo from './components/Demo.vue'
import Test from './components/Test.vue'
import {h, ref, reactive} from 'vue'

export default {
  name: 'App',
  components: {Demo, Test},
  setup(){
    let isShowDemo = ref(false);

    return {
      isShowDemo
    }
  }
}
</script>
