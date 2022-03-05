<template>
  <h1>
    app
  </h1>
  <h2>
    name: {{name}}
    age: {{age}}
  </h2>
  <h3>{{job.type}}</h3>
  <h3>{{job.salary}}</h3>
  <button @click="changeinfo">修改</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {h, ref} from 'vue'

export default {
  name: 'App',
  setup() {
    // 基本数据类型通过ref转换为引用实现的实例对象 => 引用对象 Reflmpl{}
    let name = ref('张三')
    let age = ref(18)

    // 对象属性响应式使用proxy
    let job = ref({
      salary: "30k",
      type: "qianduan"
    })

    function sayhello(params) {
      alert("name:", name, "age", age)
    }

    function changeinfo(params) {
      name.value = "lisi"
      age.value = 48
      job.value.type = "houduan"
      job.value.salary = "35k"
    }
    return {
      name, 
      age,
      job,
      changeinfo
    }
    // 可以返回渲染函数
    // return () => h('h1', 'shangguigu')
  }
}
</script>
