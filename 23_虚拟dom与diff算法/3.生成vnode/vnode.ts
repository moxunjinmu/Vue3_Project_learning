


// h函数调用vnode函数返回一个vnode对象
export function vnode (sel: string | undefined,
  data: any | undefined,
  children: Array<VNode | string> | undefined,
  text: string | undefined,
  elm: Element | Text | undefined): VNode {
  const key = data === undefined ? undefined : data.key
  // return {选择器(div),样式, 子节点, 字符串, vnode对应的真实dom元素, key}
  return {sel, data children, text, elm, key}
}