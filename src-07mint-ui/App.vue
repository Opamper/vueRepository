<template>
  <mt-button type="primary" @click.native="handleClick">按钮</mt-button>
</template>

<script>
  import {Toast} from 'mint-ui'

  export default {
    methods: {
      handleClick () {
        Toast({
          message: '提示信息',
          position: 'bottom'
        })
      }
    }
  }
</script>

<style>

</style>
