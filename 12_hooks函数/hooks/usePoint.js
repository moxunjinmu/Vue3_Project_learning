import {reactive, onMounted, onBeforeUnmount} from 'vue'
// hooks本质就是一个函数，把setup函数中使用的Compostion API 进行了封装
// 类似于vue2的mixin
// 优势：复用代码，让setup中的逻辑更清楚易懂
export default function() {
  // 实现鼠标"打点"相关的数据
  let point = reactive({
    x: 0,
    y: 0
  })

  // 实现鼠标打点相关的方法
  function savePoint(e) {
      point.x = e.pageX
      point.y = e.pageY

  }

  // 实现鼠标打点相关的生命周期钩子
  onMounted(() => {
    window.addEventListener('click', savePoint)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('click', savePoint)
  })

  return point
}
