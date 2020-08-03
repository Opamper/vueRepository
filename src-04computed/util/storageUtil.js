/*
* 使用 localStorage 存储/读取数据的工具 js
*
* 使用工具应向外暴露的内容：
*   1、函数
*     一个函数就是一个功能
*   2、对象
*     一个对象可能包含多个功能
*   暴露的是一个功能的就使用 函数，暴露多个功能的使用 对象
*
* 该工具是 存储/读取数据，所以选择向外暴露 对象
* */
export default {
  saveDate (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  },
  readData (key) {
    return JSON.parse(window.localStorage.getItem(key) || '[]')
  }
}
