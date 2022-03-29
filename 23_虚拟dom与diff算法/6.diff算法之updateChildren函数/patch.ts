
// 老children


function updateChildren( parentElm: Vnode,
  oldCh: VNode[],
  newCh: VNode[],
  insertedVnodeQueue: VNodeQueue) {
    let oldStartIdx = 0
    let newStartIdx = 0
    let oldEndIdx = oldCh.length - 1
    let oldStartVnode = oldCh[0]
    let oldEndVnode = oldCh[oldEndIdx]
    let newEndIdx = newCh.length - 1
    let newStartVnode = newCh[0]
    let newEndVnode = newCh[newEndIdx]
    let oldKeyToIdx: KeyToIndexMap | undefined
    let idxInOld: number
    let elmToMove: VNode
    let before: any
  }
















// function patchVnode(oldVnode: VNode, vnode: VNode, insertedVnodeQueue: VNodeQueue) {
//   const hook = vnode.data?.hook
//   hook?.prepatch?.(oldVnode, vnode)

//   // 设置新的vnode关联的DOM元素
//   // patch需要知道新的vnode要更新到哪个dom元素上
//   const elm = vnode.elm = oldVnode.elm!

//   // 老children
//   const oldCh = oldVnode.children as VNode[]

//   // 新children
//   const ch = vnode.children as VNode[]

//   if(oldVnode === vnode) return

//   // 新vnode 无text 有children
//   if(isUndef(vnode.text)) {

//     // 1.新老children都有定义
//     if(isDef(oldCh) && isDef(ch)){
//       if(oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue)
//     }

//     // 2.新vnode有children 旧vnode有text
//     else if(isDef(ch)){
//       // 清空text
//       // 使用insertbefore 添加children
//       addVnode()
//     }

//     // 3.新vnode有text 旧vnode有children
//     else if (isDef(oldCh)){
//       // 移除chilren
//       removeVodes()
//     }
    
//     // 4.oldVnode存在text 新vnode没有text
//     else if (isDef(oldVnode.text)) {
//       // 移除text
//     }
//   } 


//   // 新vnode 存在text(text与children互斥)
//   // 同时老的vnode text不等于新vnode text
//   else if (oldVnode.text !== vnode.text) {
//     // oldVnode存在children
//     if(isDef(oldCh)) {
//       // 移除oldvnode的children
//       removeVnodes(elm, oldCh, 0 , oldCh.length -1)
//     }

//     // 设置新vnode Text
//     api.setTextContent(elm, vnode.text!)

//   }


// }