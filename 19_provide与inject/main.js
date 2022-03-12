// 引入的不再是vue的构造函数、引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// vue2
// const vm = new Vue({
//   render: h => h(App)
// })
// vm.$mount('#app')

// vue3
//? 创建应用实例对象-app(类似于之前的vue2中的vm，但是更“轻” -》app挂载的方法更少)
// const app = createApp(APP)
// app.mount('#app')
