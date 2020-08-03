<template>
  <ul class="todo-main">
    <p v-show="listData.length===0">暂无任务需要处理</p>
    <list-item v-for="(item, index) of listData"
               :key="index"
               :item="item"
               :index="index"
               :deleteSelect="deleteSelect"/>
  </ul>
</template>

<script>
  import ListItem from './ListItem'
  export default {
    // put your code
    props: {  // 指定传过来的数据类型，如果不确定可以使用数组的形式： ['变量名','']
      listData: Array,
      deleteSelect: Function
    },
    components: {
      ListItem
    }
  }
</script>

<style>
  /*main*/
  .todo-main {
    margin-left: 0;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
