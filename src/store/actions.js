/*
包含多个事件回调函数的对象
通过执行: commit()来触发 mutation 的调用, 间接更新 state
谁来触发: 组件中: $store.dispatch('action 名称', param1)
可以包含异步代码(定时器, ajax)
 */
import {ADD_ITEM, DELETE_SELECT, SELECT_ALL, DELETE_COMPLETED, REQUEST_DATA} from './mutation-types'
import storageUtil from '../utils/storageUtil'

export default {
  addItem ({commit}, itemObj) {
    // 提交mutation请求
    commit(ADD_ITEM, {itemObj})
  },

  deleteSelect ({commit}, index) {
    commit(DELETE_SELECT, {index})
  },

  selectAll ({commit}, value) {
    commit(SELECT_ALL, {value})
  },

  deleteCompleted ({commit}) {
    commit(DELETE_COMPLETED)
  },

  requestData ({commit}) {
    setTimeout(() => {
      let listData = storageUtil.readData("listdata_key")
      commit(REQUEST_DATA, listData)
    }, 2000)
  }
}
