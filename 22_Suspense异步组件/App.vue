<template>
<div class="App">
  <h3>
  我是app
  </h3>
  <Suspense>
    <template v-slot:default>
      <Child/>
    </template>
    <template v-slot:fallback>
      <div>
        稍等加载中
      </div>
    </template>
  </Suspense>
</div>
</template>

<script>
// import Child from './components/Child.vue' 静态引入
import { reactive, toRefs, provide, defineAsyncComponent } from 'vue'
const Child = defineAsyncComponent(() => import('./components/Child.vue')) // 异步引入
export default {
  name: 'App',
  components: {Child}
}
</script>
<style>
.App{
  background-color: #9d3942;
}
</style>