<template>
<input type="text" v-model="keyword">
<h3>{{keyword}}</h3>
</template>

<script>
import Demo from './components/Demo.vue'
import {h, customRef} from 'vue'

export default {
  name: 'App',
  components: {Demo},
  setup(){
    //自定义ref
    function wwjRef(value, delay) {
      let timer
      // track 追踪
      return customRef((track, trigger) => {
        
        return {
          get(){
            console.log("有人从wwjRef读取数据：" + value);
            track()
            return value
          },
          set(newValue){
            console.log("有人修改了数据为:", newValue);
            // trigger() // 通知vue重新解析模板
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              trigger()
            }, delay);
          }
        }
      })
    }
    // let keyword = ref('hello') // 原生ref
    let keyword = wwjRef('hello', 500) // 原生ref

    return {
      keyword
    }
  }
}
</script>
