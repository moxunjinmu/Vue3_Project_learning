
 function patch (oldVnode: VNode | Element, vnode: VNode): VNode {
  let i: Number, elm: Node, Parent: Node

  const insertedVnodeQueue:VNodeQueue = []
  for (let i = 0; i < cbs.pre.length; i++) cbs.pre[i]()

  if(!isVnode(oldVnode)) {
    // 创建一个空的vnode,并关联DOM元素
    oldVnode = emptyNodeAt(oldVnode)
  }

  if(sameVnode(oldVnode, vnode)) {
    // sameVnode函数比较key和选择器(sel)是否相同
    patchVnode(oldVnode, vnode, insertedVnodeQueue)
  } else {
    // Key tag不相同说明不是相同的vnode
    elm = oldVnode.elm!
    // 获取父节点
    parent = api.parentNode(elm) as Node

    createElm(vnode, insertedVnodeQueue)

    if(parent !== null) {
      // 插入新的DOM元素
      api.insertBefore(parent, vnode.elm!, api.nextSibling(elm))
      // 移除老的DOM元素
      removeVnodes(parent, [oldVnode], 0, 0)
    }
  }
 }