<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="username">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-success pull-right" @click="addInfo">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    // put your code
    props: {
      addComment: {
        type: Function,
        required:true
      }
    },
    data () {
      return {
        username: '',
        content: ''
      }
    },
    methods: {
      addInfo () {
        // 1、检查数据的合法性
        const username = this.username.trim()
        const content = this.content.trim()
        if (!username || !content) {
          alert('请输入用户名与评论内容后再提交！');
          return;
        }
        // 2、数据封装提交
        const comment = {
          username,
          content
        }
        // 3、添加到 comments（组件）中
        this.addComment(comment);
        // 4、清除输入框
        this.username = '';
        this.content = '';
      }
    }
  }
</script>

<style>
  textarea{
    resize: none;
  }
</style>
