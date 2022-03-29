
//  function patch (oldVnode: VNode | Element, vnode: VNode): VNode {
//   let i: Number, elm: Node, Parent: Node

//   const insertedVnodeQueue:VNodeQueue = []
//   for (let i = 0; i < cbs.pre.length; i++) cbs.pre[i]()

//   if(!isVnode(oldVnode)) {
//     // 创建一个空的vnode,并关联DOM元素
//     oldVnode = emptyNodeAt(oldVnode)
//   }

//   if(sameVnode(oldVnode, vnode)) {
//     // sameVnode函数比较key和选择器(sel)是否相同
//     patchVnode(oldVnode, vnode, insertedVnodeQueue)
//   } else {
//     // Key tag不相同说明不是相同的vnode
//     elm = oldVnode.elm!
//     // 获取父节点
//     parent = api.parentNode(elm) as Node

//     createElm(vnode, insertedVnodeQueue)

//     if(parent !== null) {
//       // 插入新的DOM元素
//       api.insertBefore(parent, vnode.elm!, api.nextSibling(elm))
//       // 移除老的DOM元素
//       removeVnodes(parent, [oldVnode], 0, 0)
//     }
//   }
//  }

function patchVnode(oldVnode: VNode, vnode: VNode, insertedVnodeQueue: VNodeQueue) {
  const hook = vnode.data?.hook
  hook?.prepatch?.(oldVnode, vnode)

  // 设置新的vnode关联的DOM元素
  // patch需要知道新的vnode要更新到哪个dom元素上
  const elm = vnode.elm = oldVnode.elm!

  // 老children
  const oldCh = oldVnode.children as VNode[]

  // 新children
  const ch = vnode.children as VNode[]

  if(oldVnode === vnode) return

  // 新vnode 无text 有children
  if(isUndef(vnode.text)) {

    // 1.新老children都有定义
    if(isDef(oldCh) && isDef(ch)){
      if(oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue)
    }

    // 2.新vnode有children 旧vnode有text
    else if(isDef(ch)){
      // 清空text
      // 使用insertbefore 添加children
      addVnode()
    }

    // 3.新vnode有text 旧vnode有children
    else if (isDef(oldCh)){
      // 移除chilren
      removeVodes()
    }
    
    // 4.oldVnode存在text 新vnode没有text
    else if (isDef(oldVnode.text)) {
      // 移除text
    }
  } 


  // 新vnode 存在text(text与children互斥)
  // 同时老的vnode text不等于新vnode text
  else if (oldVnode.text !== vnode.text) {
    // oldVnode存在children
    if(isDef(oldCh)) {
      // 移除oldvnode的children
      removeVnodes(elm, oldCh, 0 , oldCh.length -1)
    }

    // 设置新vnode Text
    api.setTextContent(elm, vnode.text!)

  }


}