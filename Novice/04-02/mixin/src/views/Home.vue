<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <alert/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import alert from '@/components/alert.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    alert

  }
}
</script>
