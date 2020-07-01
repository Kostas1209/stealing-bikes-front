<template>
  <div class="home">
    <h1>This is an user page</h1>
    <router-link to="/">Yours reports</router-link> | 
    <router-link to="user/form">Create new report</router-link>
    <router-view></router-view>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'User',
  components: {
    
  }
}
</script>
