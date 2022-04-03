
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

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if(oldStartVnode == null) {
        oldStartVnode = oldCh[++oldStartIdx]
      } else if (oldEndVnode == null){
        oldEndVnode = oldCh[--oldEndIdx]
      }else if(newStartVnode == null) {
        newStartVnode = newCh[++newStartIdx]
      }else if (newEndVnode == null) {
        newEndVnode = newCh[--newEndIdx]
      }
      // 老开始和新开始对比
      else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue)
        oldStartVnode = oldCh[++oldStartIdx]
        newStartVnode = newCh[++newStartIdx]
      }
      // 老结尾和新结尾对比
      else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue)
        oldEndVnode = oldCh[--oldEndIdx]
        newEndVnode = newCh[--newEndIdx]
      }
      // 老开始和新结尾对比
      else if (sameVnode(oldStartVnode, newEndVnode)) {
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue)
        api.insertBefore(parentElm, oldStartVnode.elm!, api.nextSibling(oldEndVnode.elm!))
        oldStartVnode = oldCh[++oldStartIdx]
        newEndVnode = newCh[--newEndIdx]
      }
      // 老结尾和新开始对比
      else if (sameVnode(oldEndVnode, newStartVnode)) {
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue)
        api.insertBefore(parentElm, oldEndVnode.elm!, oldStartVnode.elm!)
        oldEndVnode = oldCh[--oldEndIdx]
        newStartVnode = newCh[++newStartIdx]
      }

      else {
        if (oldKeyToIdx === undefined){
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)
        }

        // 拿到新开始的key， 在老children里去找有没有某个节点有对应这个key
        idxInOld = oldKeyToIdx[newStartVnode.key as string]
        // 么有在老children里找到对应的key
        if(idUndef(idxInOld)){
          api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm!)
        }

        // 在老children找到对应的
        else {
          elmToMove = oldCh[idxInOld]

          // 判断tag是否相等
          if(elmToMove.sel !== newStartVnode.sel) {
            // tag不相等
            api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm!)
          }

          else{
            // tag相等
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue)
            oldCh[idxInOld] = undefined as any
            api.insertBefore(parentElm, elmToMove.elm!, oldStartVnode.elm!)
          }
        }

        newStartVnode = newCh[++newStartIdx]
      }
    }
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