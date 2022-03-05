<template>
  <h1>一个人的信息</h1>
  工资: <input type="text" v-model="job.salary" >
  职位: <input type="text" v-model="job.type" >
  <br>
  <span>统计:{{job.total}}</span>
  <input type="text" v-model="job.total" >
</template>

<script>
import {reactive, computed} from 'vue'

export default {
  name: 'Demo',
  beforeCreate() {
    console.log("beforeCreate-start");
  },
  setup() {
    let job = reactive({
      salary: "30k",
      type: "qianduan"
    })

    // 计算属性-简写（没有考虑计算属性被修改的情况）
    // job.total = computed(() => {
    //   return job.salary +  '-' + job.type;
    // })

    job.total = computed({
      get(){
      return job.salary +  '-' + job.type;
      },
      set(value){
        const nameArr = value.split('-');
        job.salary = nameArr[0];
        job.type = nameArr[1];
      }
    })

    return {
      job
    }
  }
}
</script>
