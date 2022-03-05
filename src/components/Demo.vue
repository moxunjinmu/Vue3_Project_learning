<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我加1</button>
  <hr>
  <h2>当前点击时鼠标的坐标为</h2>
  
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted
} from "vue";

export default {
  name: "Demo",
  setup() {
    console.log("setup");
    let sum = ref(0);

    onBeforeMount(() => {
      console.log("---onBeforeMount---");
    })
    onMounted(() => {
      console.log("---onMounted---");
    })
    onBeforeUpdate(() => {
      console.log("---onBeforeUpdate---");
    })
    onUpdated(() => {
      console.log("---onUpdated---");
    })
    onBeforeUnmount(() => {
      console.log("---onBeforeUnmount---");
    })
    onUnmounted(() => {
      console.log("---onUnmounted---");
    })
    return {
      sum
    };
  }
};
</script>
