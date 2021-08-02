const direc1 = (el, binding, vnode) => {
  console.log(el, binding)
}
export default {
  bind (el, binding, vnode) {
    direc1(el, binding, vnode)
  }
}
