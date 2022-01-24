<template>
  <div class="my-container" id="app">
    <div class="header"><Header /></div>
    <div class="main-container">
      <router-view></router-view>
    </div>    
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: { Header }
}
</script>
