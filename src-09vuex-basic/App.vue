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
  import {mapState,mapActions,mapGetters} from 'vuex'
  
  export default {
    data () {
      return {}
    },
    methods: {
      ...mapActions(['addCount','cutCount','oddAddCount','evenAddCount','asyncAddCount'])
      /*addCount () {
        this.$store.dispatch('addCount')
      },
      cutCount () {
        this.$store.dispatch('cutCount')
      },
      oddAddCount () {
        this.$store.dispatch('oddAddCount')
      },
      evenAddCount() {
        this.$store.dispatch('evenAddCount')
      },
      // 过一秒加一
      asyncAddCount () {
        this.$store.dispatch('asyncAddCount')
      }*/
    },
    computed: {
      ...mapState(['count']), // mapState()返回值 {count(){return this.$store.getters.count}}
      ...mapGetters(['oddOrEven']) // mapGetters()返回值 {oddOrEven(){return this.$store.getters.oddOrEven}}
      /*oddOrEven () {
        return this.$store.getters.oddOrEven
      }*/
    }
  }
</script>

<style>

</style>
