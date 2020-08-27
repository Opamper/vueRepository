/*
包含多个直接更新 state 的方法(回调函数)的对象
谁来触发: action 中的 commit('mutation 名称')
只能包含同步的代码, 不能写异步代码
 */
import {ADD_ITEM, DELETE_SELECT,SELECT_ALL, DELETE_COMPLETED, REQUEST_DATA} from './mutation-types'

export default {
  [ADD_ITEM] (state, {itemObj}) {
    state.listData.unshift(itemObj)
  },

  [DELETE_SELECT] (state, {index}) {
    state.listData.splice(index, 1)
  },

  [SELECT_ALL] (state, {value}) {
    state.listData.forEach(list => list.select = value)
  },

  [DELETE_COMPLETED] (state) {
    state.listData = state.listData.filter(list => !list.select)
  },

  [REQUEST_DATA] (state, listData) {
    state.listData = listData
  }
}
