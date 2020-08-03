<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!--<Input @addItem="addItem"/>父组件绑定监听，子组件触发，仅适用于父子组件，三级组件及以上不能使用-->
        <Input ref="Input"/>
        <List
          :listData="listData"/>
        <!--<Footer
          :listData="listData"
          :deleteCompleted="deleteCompleted"
          :selectAll="selectAll"/>-->

        <!--插槽slot（组件复用时使用），相关标签将在父组件编译，因此定义的函数等也应在父组件定义-->
        <Footer>
          <input type="checkbox" v-model="isAllCheck" slot="checkbox"/>

          <span slot="complete">
            <span>已完成{{completeSize}}</span> / 全部{{listData.length}}
          </span>

          <button class="btn btn-danger" v-show="completeSize" @click="deleteCompleted" slot="delete">清除已完成任务</button>
        </Footer>
      </div>
    </div>
  </div>
</template>

<script>
  import Pubsub from 'pubsub-js'
  import Input from './compoments/Input'
  import List from './compoments/List'
  import Footer from './compoments/Footer'
  import storageUtil from './util/storageUtil'

  export default {
    data () {
      return {
        // 从 localStorage 读取数据 listData
        listData: storageUtil.readData("listdata_key")
      }
    },
    computed: {
      completeSize () {
        return this.listData.reduce((preTotal, list) => preTotal + (list.select ? 1 : 0), 0)
      },
      isAllCheck: {
        // 获取计算属性，获取每一项是否都被勾选，get 必须有返回值
        get () {
          return this.completeSize === this.listData.length && this.completeSize > 0
        },
        // 设置计算属性，设置所有项为勾选状态，value 就是当前的值，具体是谁的值，要看计算的是哪个属性，当前计算的是 isAllCheck
        // 也就是说，当点击勾选，isAllCheck 当前值为 true，value 也为 true
        set (value) {
          this.selectAll(value)
        }
      }
    },
    methods: {
      addItem (itemObj) {
        this.listData.unshift(itemObj)
      },
      deleteSelect (index) {
        this.listData.splice(index, 1)
      },
      deleteCompleted () {
        this.listData = this.listData.filter(list => !list.select)
      },
      selectAll (isCheck) {
        this.listData.forEach(list => list.select = isCheck)
      }
    },
    mounted () {  // 执行异步代码
      // 给 <Input/> 绑定 addItem 事件监听
      // this.$on('addItem',this.addItem) 由于 this 指定的是 App，并没有给 Input 绑定
      this.$refs.Input.$on('addItem', this.addItem)

      // 订阅消息
      Pubsub.subscribe('deleteSelect', (msg, index) => this.deleteSelect(index))
    },
    watch: {  // 深度监视
      listData: {
        deep: true,  // deep 深度监视
        handler: function (newValue, oldValue) {
          storageUtil.saveDate("listdata_key",newValue)
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
