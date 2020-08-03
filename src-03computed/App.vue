<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Input :addItem="addItem"/>
        <List
          :listData="listData"
          :deleteSelect="deleteSelect"/>
        <Footer
          :listData="listData"
          :deleteCompleted="deleteCompleted"
          :selectAll="selectAll"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Input from './compoments/Input'
  import List from './compoments/List'
  import Footer from './compoments/Footer'

  export default {
    data () {
      return {
        // 从 localStorage 读取数据 listData
        listData: JSON.parse(window.localStorage.getItem("listdata_key") || "[]")
        /*listData: [
          {'title': '打扫卫生', 'select': true},
          {'title': '买菜', 'select': false},
          {'title': '学习', 'select': false}
        ]*/
      }
    },
    methods: {
      addItem (itemObj) {
        this.listData.unshift(itemObj);
      },
      deleteSelect (index) {
        this.listData.splice(index, 1);
      },
      deleteCompleted () {
        this.listData = this.listData.filter(list => !list.select);
      },
      selectAll (isCheck) {
        this.listData.forEach(list => list.select = isCheck);
      }
    },
    watch: {  // 深度监视
      listData: {
        deep: true,  // deep 深度监视
        handler: function (newValue, oldValue) {
          window.localStorage.setItem("listdata_key", JSON.stringify(newValue))
        }
      }
    },
    components: {
      Input, List, Footer
    }
  }
</script>

<style>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
