<template>
  <div>
    <h3 v-show="isShow">数据加载中...</h3>
    <ul>
      <li v-for="(message, index) in messages" :key="index">
        <!--<a :href="message.id">{{message.title}}</a>-->
        <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
        <button @click="pushShow(message.id)">push查看</button>
        <button @click="replaceShow(message.id)">replace查看</button>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isShow: true,
        messages: []
      }
    },
    mounted () {
      setTimeout(() => {
        const messages = [
          {
            id: 1,
            title: 'message001'
          }, {
            id: 2,
            title: 'message002'
          }, {
            id: 3,
            title: 'message003'
          }
        ]

        this.isShow = false
        this.messages = messages
      }, 1000)
    },
    methods: {
      pushShow (id) {
        this.$router.push(`/home/message/detail/${id}`)
      },
      replaceShow (id) {
        this.$router.replace(`/home/message/detail/${id}`)
      }
    }
  }
</script>

<style>

</style>
