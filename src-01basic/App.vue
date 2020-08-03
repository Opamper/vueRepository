<template>
  <div>
    <img src="./assets/logo.png" alt="">
    <!--3、使用组件标签-->
    <HelloWorld/>
  </div>
</template>

<script>
  // 1、引入组件
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    // put your code
    // 2、映射组件标签
    components: {
      HelloWorld
    }
  }
</script>

<style>

</style>
