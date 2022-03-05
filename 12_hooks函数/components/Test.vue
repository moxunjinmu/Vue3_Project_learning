<template>
  <h2>
    我是test组件
  </h2>
  <p>当前点击时鼠标的坐标为：x:{{point.x}} y:{{point.y}}</p>
</template>
<script>
import usePoint from "../hooks/usePoint"
export default {
  name: "Test",
  setup() {
    const point = usePoint();
    return {point}
  }
}
</script>