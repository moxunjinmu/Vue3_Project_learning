<template>
  <h1>
    demo组件
  </h1>
  <h3>type:{{job.type}}</h3>
  <h3>sex:{{job.salary}}</h3>
  <button @click="test">触发demo的hello组件</button>
</template>

<script>
import {h, ref, reactive} from 'vue'

export default {
  name: 'Demo',
  beforeCreate() {
    console.log("beforeCreate-start");
  },
  props: ['msg', 'school', 'a'],
  emits: ['hello'],
  //setup里的props需要props接收
  setup(props, context) {
    // console.log("setup-start", props);
    console.log("context", context);
    console.log("context.attrs", context.attrs);// 相当于vue2的$attrs
    console.log("context.emit", context.emit);// 
    console.log("context.slots", context.slots); // 插槽
    function test(params) {
      context.emit("hello", 666)
    }
    let job = reactive({
      salary: "30k",
      type: "qianduan"
    })

    return {
      job,
      test
    }
  }
}
</script>
