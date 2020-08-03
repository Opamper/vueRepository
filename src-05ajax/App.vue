<template>
  <div>
    <div v-if="!repositoryUrl">加载中...</div>
    <div v-else>GitHub中最多star的仓库是【<a :href="repositoryUrl">{{repositoryName}}</a>】</div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        repositoryName: '',
        repositoryUrl: ''
      }
    },
    mounted () {
      const url = `https://api.github.com/search/repositories?q=v&sort=stars`

      /*this.$http.get(url)
        .then(response => {
          const resoult = response.data
          let mostRespo = resoult.items[0]
          this.repositoryUrl = mostRespo.html_url
          this.repositoryName = mostRespo.name

        }, resolve => console.log('请求失败'))*/

      axios.get(url)
        .then(response => {
          const resoult = response.data
          let mostRespo = resoult.items[0]
          this.repositoryUrl = mostRespo.html_url
          this.repositoryName = mostRespo.name

        }).catch(error => console.log('请求失败'))
    }
  }
</script>

<style>

</style>
