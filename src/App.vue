<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Input/>
        <List/>
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
  import Input from './components/Input'
  import List from './components/List'
  import Footer from './components/Footer'

  export default {
    mounted(){
      this.$store.dispatch('requestData')
    },
    /*watch: {  // 深度监视
      listData: {
        deep: true,  // deep 深度监视
        handler: function (newValue, oldValue) {
          storageUtil.saveDate("listdata_key", newValue)
        }
      }
    },*/
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
