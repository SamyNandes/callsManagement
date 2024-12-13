<script setup>

import { RouterLink, RouterView } from 'vue-router'

</script>
<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">API Internship</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/home" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/login" class="nav-link">Login</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/register" class="nav-link">Register</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <RouterView />
</template>
<script>
export default {
  components: {
  }
}
</script>
<style>
@import url('https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-rounded/css/uicons-regular-rounded.css');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  font-family: "Poppins", serif;
  font-weight: 400;
  font-style: normal;
}
</style>
