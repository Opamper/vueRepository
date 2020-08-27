/*
包含多个计算属性(get)的对象
谁来读取: 组件中: $store.getters.xxx
 */
export default {
  completeSize (state) {
    return state.listData.reduce((preTotal, list) => preTotal + (list.select ? 1 : 0), 0)
  },
  completeCount (state) {
    return state.listData.length
  },
  isAllCheck(state, getters){
    return getters.completeCount === getters.completeSize && getters.completeSize > 0
  }
}
