<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
  <div>
    <componenteTeste />
    <h1>app teste</h1>
    <header>
      <nav>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
      </nav>
    </header>

    <RouterView />

  </div>
</template>
<script>
import componenteTeste from "./components/teste/componenteTeste.vue"

export default {
  components: {
    componenteTeste
  }
}
</script>
<style></style>
