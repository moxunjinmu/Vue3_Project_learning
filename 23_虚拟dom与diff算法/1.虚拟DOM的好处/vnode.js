

// 优点: snabbdom会比较变更的dom元素,只有发生改变的dom元素才会在视图上更新
const snabbdom = window.snabbdom

// 将vnode塞入空的容器当中
const patch = snabbdom.init([
  snabbdom_class,
  snabbdom_props,
  snabbdom_style,
  snabbdom_eventlisteners
])


// 创建vnode(虚拟节点)
const h = snabbdom.h


// 空的容器
const container = document.getElementById('container')

// 创建vnode
let vnode = h('ul#list', {}, [
  h('li.item', {}, '第一项'),
  h('li.item', {}, '第二项'),
])

// 获取按钮id
const btn = document.querySelector('#btn')

// 首次加载渲染dom节点
// vnode -> 空容器
patch(container, vnode)

btn.addEventListener('click', function() {
  const newVnode = h('ul#list', {}, [
    h('li.item', {}, '第一项'),
    h('li.item', {}, '第二项哈哈'),
    h('li.item', {}, '第三项'),
  ])

  patch(vnode, newVnode)

  vnode = newVnode
})



// {
//   tag: 'div',
//   props: {
//     id: 'app',
//     className: 'container'
//   },
//   children: [{
//     tag: 'h1',
//     children: '虚拟DOM'
//   },{
//     tag: 'ul',
//     props: {style: 'color: orange'},
//     children: [{
//       tag: 'li',
//       children: '第一项'
//     },{
//       tag: 'li',
//       children: '第二项'
//     },{
//       tag: 'li',
//       children: '第三项'
//     }]
//   }]
// }