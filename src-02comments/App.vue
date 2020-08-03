<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment"/>
      <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script>
  import Add from './compoments/Add'
  import List from './compoments/List'

  export default {
    // put your code
    data () {
      return {
        comments: [ // 数据在那个组件，更新数据的行为（方法）就该在哪
          {
            'username': '张三',
            'content': '这东西还不错'
          }, {
            'username': '李四',
            'content': '我同意你的观点！'
          }, {
            'username': '王五',
            'content': '还行吧 ~_~'
          }
        ]
      }
    },
    methods: {
      addComment (comment) {
        this.comments.unshift(comment)
      },
      deleteComment (index) {
        this.comments.splice(index, 1);
      }
    },
    components: {
      Add,
      List
    }
  }
</script>

<style>

</style>
