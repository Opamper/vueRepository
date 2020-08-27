<template>
  <div>
    <h3 v-show="isShow">数据加载中...</h3>
    <p v-show="!isShow">ID: {{$route.params.id}}</p>
    <ul v-show="!isShow">
      <li>id: {{messageDetail.id}}</li>
      <li>title: {{messageDetail.title}}</li>
      <li>content: {{messageDetail.content}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isShow: true,
        messageDetail: {}
      }
    },
    mounted(){ // 初始化显示，mounted 只执行一次！！！
      setTimeout(() => {
        const messageDetails = [
          {
            id: 1,
            title: 'messageDetail 001',
            content: 'content 内容填充内容填充 1'
          }, {
            id: 2,
            title: 'messageDetail 002',
            content: 'content 内容填充内容填充 2'
          }, {
            id: 3,
            title: 'messageDetail 003',
            content: 'content 内容填充内容填充 3'
          }
        ]

        this.isShow = false

        this.messageDetails = messageDetails
        const id = this.$route.params.id*1
        this.messageDetail = messageDetails.find(detail => detail.id === id)

      },1000)
    },
    watch:{
      $route: function (value) {
        const id = value.params.id*1
        this.messageDetail = this.messageDetails.find(detail => detail.id === id)
      }
    }
  }
</script>

<style>

</style>
