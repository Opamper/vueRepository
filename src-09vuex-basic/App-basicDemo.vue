<template>
  <div>
    <p>点击了 {{count}} 少次，计数器 count 是：{{oddOrEven}}</p>
    <input type="button" value="+" @click="addCount">
    <input type="button" value="-" @click="cutCount">
    <input type="button" value="奇数 +" @click="oddAddCount">
    <input type="button" value="偶数 +" @click="evenAddCount">
    <input type="button" value="按秒 +" @click="asyncAddCount">
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 0
      }
    },
    methods: {
      addCount () {
        this.count++
      },
      cutCount () {
        if (this.count !== 0) {
          this.count--
        }
      },
      oddAddCount () {
        if (this.count % 2 !== 0) {
          this.count++
        }
      },
      evenAddCount() {
        if (this.count % 2 === 0) {
          this.count++
        }
      },
      // 过一秒加一
      asyncAddCount () {
        setInterval(() => {
          this.count++
        }, 1000)
      }
    },
    computed: {
      oddOrEven () {
        return this.count % 2 === 0 ? '偶数' : '奇数'
      }
    }
  }
</script>

<style>

</style>
