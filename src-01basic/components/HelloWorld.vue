<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
  export default {  // 书写内容与 Vue 一致，但是 data 里面只能写函数，不能写对象
    // put your code
    data () {
      return {
        msg: 'hello vue'
      }
    }
  }
</script>

<style>

</style>
