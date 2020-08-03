<template>
  <div>
    <h2 v-if="firstView">请输入内容进行搜索</h2>
    <h2 v-if="loadingView">加载中...</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>
    <div class="row">
      <div class="card" v-for="(user, index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatarUrl" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Pubsub from 'pubsub-js'
  import axios from 'axios'

  export default {
    // put your code
    data () {
      return {
        firstView: true,
        loadingView: false,
        users: null,
        errorMsg: ''
      }
    },
    mounted () {
      // 订阅消息
      Pubsub.subscribe('search', (msg, searchName) => {
        const url = `https://gitee.com/api/v5/search/users?q=${searchName}`

        // 发送请求前更新显示
        this.firstView = false
        this.loadingView = true
        this.errorMsg = ''
        this.users = null

        axios.get(url).then(resolve => {
          // 此处，users虽然和result.items一一对应，但是key并不相同，要使用 map
          const users = resolve.data.map(items => ({
            url: items.html_url,
            name: items.login,
            avatarUrl: items.avatar_url
          }));

          this.loadingView = false
          this.users = users
        }).catch(error => {
          this.loadingView = false
          this.errorMsg = `搜索请求失败，${error}`
        })
      })
    }
  }
</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
