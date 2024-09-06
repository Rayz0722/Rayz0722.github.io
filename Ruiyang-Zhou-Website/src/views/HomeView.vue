<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png"> -->
    <MyProfile msg="Welcome to Ruiyang Zhou's website"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MyProfile from '@/components/Profile.vue'

export default {
  name: 'HomeView',
  components: {
    MyProfile
  }
}
</script>
