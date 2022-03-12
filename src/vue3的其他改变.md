# 全局api改变

|               Vue2               |            Vue3             |
| :------------------------------: | :-------------------------: |
|          Vue.config.xxx          |       app.config.xxx        |
| Vue.config.productionTip = false |            移除             |
|          Vue.component           |        app.component        |
|          Vue.directive           |        app.directive        |
|            Vue.mixin             |          app.mixin          |
|          Vue.prototype           | app.config.globalProperties |

# 其他改变

## data始终是函数返回

## 过度类名的更改

|       Vue2        |        Vue3         |
| :---------------: | :-----------------: |
|  ```.v-enter```   |    .v-enter-from    |
| ```.v-leave-to``` |  ```.v-leave-to```  |
|  ```.v-leave```   | ```.v-leave-from``` |
| ```.v-enter-to``` |  ```.v-enter-to```  |
|      ``````       |       ``````        |



### 移除keyCode作为v-on的修饰符，同时不再支持config.keyCodes

### 移除v-on.native修饰符

vue3中通过 emits声明自定义事件 没有声明click表示使用自定事件

 ```<script>
  export default {
    emits: ['close']
  }
</script> 
 ```
### 移除filter过滤器

> 过滤器虽然这看起来很方便，但它需要一个自定义语法，打破大括号内表达式是“只是JavaScript”的假设，这不仅有学习成本，而且有实现成本！建议用方法调用或计算属性去替换过滤器。