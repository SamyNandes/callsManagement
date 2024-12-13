<template>
  <div class="container w-100 d-flex justify-content-center align-items-center"
    style="padding: 50px 0px; height: 700px;">
    <div class="row w-50 h-70 shadow rounded p-5 d-flex flex-column align-items-center">
      <div class="d-flex flex-row justify-content-center m-3">
        <h1>Login page <i class="fi fi-rr-user"></i></h1>
      </div>
      <form class="d-flex flex-column align-items-center">
        <div class="inputs">
          <label for="email" class="w-50">Insert your email: </label>
          <input class="mb-3 w-50" :class="{ 'form-control is-invalid': this.v$.dataUserLogin.email.$error }" id="email"
            type="email" placeholder="Email" v-model="dataUserLogin.email">
          <span v-if="this.v$.dataUserLogin.email.$error" class="w-50 invalid-feedback">
            {{ this.v$.dataUserLogin.email.$errors[0].$message }}
          </span>
        </div>
        <div class="inputs">
          <label for="email" class="w-50">Insert your password: </label>
          <input class="mb-3 w-50" id="password" type="password" placeholder="Password" v-model="dataUserLogin.password"
            :class="{ 'form-control is-invalid': this.v$.dataUserLogin.password.$error }">
          <span v-if="this.v$.dataUserLogin.password.$error" class="w-50 invalid-feedback">
            {{ this.v$.dataUserLogin.password.$errors[0].$message }}
          </span>
        </div>
        <p>Not registered yet? <RouterLink to="/register">Register here</RouterLink>
        </p>
      </form>
      <button class="btn btn-primary w-25" v-on:click="submitLoginInfos()">Login</button>
    </div>
  </div>
</template>

<script src="./Login.js"></script>

<style scoped>
p {
  margin-top: 15px !important;
}

.inputs {
  margin-bottom: 15px !important;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

input {
  padding: 5px !important;
  margin: 0px !important;
}
</style>
