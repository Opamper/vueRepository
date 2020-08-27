<template>
  <ul class="todo-main">
    <p v-show="listData.length === 0">暂无任务需要处理</p>
    <list-item v-for="(item, index) of listData"
               :key="index"
               :item="item"
               :index="index"/>
  </ul>
</template>

<script>
  import ListItem from './ListItem'
  import {mapState} from 'vuex'
  import storageUtil from '../utils/storageUtil'

  export default {
    // put your code
    computed: {
      ...mapState(['listData'])
    },
    watch: {
      listData: {
        deep: true,
        handler: function (newValue) {
          storageUtil.saveDate("listdata_key", newValue)
        }
      }
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
