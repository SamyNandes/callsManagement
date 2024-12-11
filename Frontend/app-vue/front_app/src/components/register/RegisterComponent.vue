<template>
  <div>
    <h1>Register Page</h1>
  </div>
  <div class="container w-100 d-flex justify-content-center align-items-center"
    style="padding: 50px 0px; height: 700px;">
    <div class="row w-50 h-70 shadow rounded p-5">
      <form style="display: flex; align-items: center; flex-direction: column">
        <label for="name" class="w-50">Insira seu nome:</label>
        <input class="mb-3 w-50" id="name" type="text" placeholder="Name" v-model="dataUserRegister.name">
        <label for="email" class="w-50">Insira seu email:</label>
        <input class="mb-3 w-50" id="email" type="email" placeholder="Email" v-model="dataUserRegister.email">
        <label for="email" class="w-50">Insira sua senha:</label>
        <input class="mb-3 w-50" id="password" type="password" placeholder="Password"
          v-model="dataUserRegister.password">
        <p>Já tem uma conta? <RouterLink to="/login">Entre aqui!</RouterLink>
        </p>
        <button class="btn btn-primary w-25" onclick="">Login</button>
      </form>
    </div>
  </div>
</template>

<script src="./Register.js"></script>

<style scoped>
p {
  margin-top: 15px !important;
}

input {
  padding: 3px !important;
}
</style>
