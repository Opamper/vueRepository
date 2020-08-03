<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">搜索 Gitee 中的用户</h3>
    <div class="">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="请输入你要搜索的名字" v-model="searchName">
        <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="searchF">搜索</button>
      </span>
      </div>
    </div>
  </section>
</template>

<script>
  import Pubsub from 'pubsub-js'

  export default {
    // put your code
    data () {
      return {
        searchName: ''
      }
    },
    methods: {
      searchF () {
        const searchName = this.searchName.trim()
        if (searchName) {
          // 发布消息
          Pubsub.publish('search', searchName)
        }
      }
    }
  }
</script>

<style>

</style>
