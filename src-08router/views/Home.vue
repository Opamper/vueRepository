<template>
  <div>
    <h2>Home</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link to="/home/news" class="list-group-item">News</router-link>
        </li>
        <li>
          <router-link to="message" class="list-group-item">Message</router-link>
        </li>
        <li>
          <input type="button" @click="$router.back()" value="后退" class="btn btn-default">
        </li>
      </ul>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>

</style>
