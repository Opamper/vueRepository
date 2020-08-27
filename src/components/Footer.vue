<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllCheck"/>
    </label>
    <span>
          <span>已完成{{completeSize}}</span> / 全部{{completeCount}}
        </span>
    <button class="btn btn-danger" v-show="completeSize" @click="deleteCompleted">清除已完成任务</button>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    // put your code
    computed: {
      ...mapGetters(['completeCount', 'completeSize']),
      isAllCheck: {
        // 获取计算属性，获取每一项是否都被勾选，get 必须有返回值
        get () {
          return this.$store.getters.isAllCheck
        },
        // 设置计算属性，设置所有项为勾选状态，value 就是当前的值，具体是谁的值，要看计算的是哪个属性，当前计算的是 isAllCheck
        // 也就是说，当点击勾选，isAllCheck 当前值为 true，value 也为 true
        set (value) {
          //this.selectAll(value)
          this.$store.dispatch('selectAll', value)
        }
      }
    },
    methods: {
      ...mapActions(['deleteCompleted'])
    }
  }
</script>

<style>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
