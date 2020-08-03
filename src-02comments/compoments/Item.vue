<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" class="btn btn-danger" @click="deleteItem">删除</a>
    </div>
    <p class="user">
      <span class="img-circle circle-span">{{comment.username.substr(0,1)}}</span>
      <span>{{comment.username}}</span>
      <span>:</span>
    </p>
    <p class="centence">{{comment.content}}</p>
  </li>
</template>

<script>
  export default {
    // props: ['comment'] 只指定属性名，props: {comment: Object}指定属性名和属性值
    props: {
      comment: Object,
      deleteComment: Function,
      index: Number
    },
    methods: {
      deleteItem () {
        const {comment, deleteComment, index} = this;
        if (confirm(`确定删除 ${comment.username} 的评论吗？`)) {
          deleteComment(index);
        }
      }
    }
  }
</script>

<style>
  li {
    transition: .5s;
    overflow: hidden;
  }

  .handle {
    background: #fff;
    position: absolute;
    right: 10px;
    top: 1px;
    text-align: center;
  }

  .handle a {
    display: block;
    text-decoration: none;
  }

  .list-group-item .centence {
    padding: 0 50px;
  }

  .user {
    font-size: 22px;
  }

  .user span {
    line-height: 38px;
    height: 38px;
    display: inline-block;
  }

  .user .circle-span {
    width: 38px;
    height: 38px;
    text-align: center;
    border: 2px solid #ccc;
    border-radius: 50px;
    margin-right: 10px;
  }
</style>
