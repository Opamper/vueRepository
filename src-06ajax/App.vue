<template>
  <div class="container">
    <Search/>
    <UserMain/>
  </div>
</template>

<script>
  import Search from './compoments/Search'
  import Main from './compoments/Main'

  export default {
    components: {
      Search,
      UserMain: Main
    }
  }
</script>

<style>

</style>
