/*
* vuex的核心管理对象模块: store
* 真正项目，此文件中 state、mutations、actions、getters
* 会被分别建立对应的 js 文件，防止此文件越来越大
* */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  addCount(state){
    state.count++
  },
  cutCount(state){
    if (state.count !== 0) {
      state.count--
    }
  },
  oddAddCount(state){
    if (state.count % 2 !== 0) {
      state.count++
    }
  },
  evenAddCount(state){
    if (state.count % 2 === 0) {
      state.count++
    }
  },
  asyncAddCount(state){
    setInterval(() => {
      state.count++
    }, 1000)
  }
}

const actions = {
  addCount({commit}){
    commit('addCount')
  },
  cutCount({commit}){
    commit('cutCount')
  },
  oddAddCount({commit}){
    commit('oddAddCount')
  },
  evenAddCount({commit}){
    commit('evenAddCount')
  },
  asyncAddCount({commit}){
    commit('asyncAddCount')
  }
}

const getters = {
  oddOrEven (state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
