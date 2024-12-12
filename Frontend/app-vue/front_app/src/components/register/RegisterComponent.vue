<template>
  <div>
    <h1>Register Page</h1>
  </div>
  <div class="container w-100 d-flex justify-content-center align-items-center"
    style="padding: 50px 0px; height: 700px;">
    <div class="row w-50 h-70 shadow rounded p-5 d-flex align-items-center justify-content-center">
      <form class="d-flex flex-column align-items-center">
        <div class="inputs">
          <label for="name" class="w-50">Insert a name: </label>
          <input class="mb-3 w-50" id="name" type="text" placeholder="Name"
            :class="{ 'form-control is-invalid': this.v$.dataUserRegister.name.$error }"
            v-model="dataUserRegister.name">
          <span v-if="this.v$.dataUserRegister.name.$error" class="w-50 invalid-feedback">
            {{ this.v$.dataUserRegister.name.$errors[0].$message }}
          </span>
        </div>
        <div class="inputs"> <label for="email" class="w-50">Insert a email: </label>
          <input class="mb-3 w-50" id="email" type="email"
            :class="{ 'form-control is-invalid': this.v$.dataUserRegister.email.$error }" placeholder="Email"
            v-model="dataUserRegister.email">
          <span v-if="this.v$.dataUserRegister.email.$error" class="w-50 invalid-feedback">
            {{ this.v$.dataUserRegister.email.$errors[0].$message }}
          </span>
        </div>

        <div class="inputs">
          <label for="email" class="w-50">Insert a password: </label>
          <input class="mb-3 w-50" id="password" type="password" placeholder="Password"
            v-model="dataUserRegister.password"
            :class="{ 'form-control is-invalid': this.v$.dataUserRegister.password.$error }">
          <span v-if="this.v$.dataUserRegister.password.$error" class="w-50 invalid-feedback">
            {{ this.v$.dataUserRegister.password.$errors[0].$message }}
          </span>
        </div>

        <p>Already have an account? <RouterLink to="/login">Login here!</RouterLink>
        </p>
      </form>
      <button class="btn btn-primary w-25" v-on:click="buttonRegister()">Register</button>
    </div>
  </div>
</template>

<script src="./Register.js"></script>

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
