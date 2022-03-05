<template>
  <Demo @hello="showHello" msg="你好啊" school="school">
    <span>wwj</span>
    <template v-slot:wwj>
      <div>
        有名字
      </div>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo.vue'
import {h, ref, reactive} from 'vue'

export default {
  name: 'App',
  components: {Demo},
  setup() {
    function showHello(params) {
      alert(`你好，我收到了hello事件，参数为${params}`)
    }

    return {
      showHello
    }
  }
}
</script>
