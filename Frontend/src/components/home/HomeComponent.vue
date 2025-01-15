<!-------------------------------------------------------------------------
  Autor: Samyra Fernandes da Silva
  Data: 15/12/2024
  Descrição: Estilização da página de home.
  Tecnologias: Vue.Js e Bootstrap.
  Instruções: Nenhuma
------------------------------------------------------------------------>

<template>
  <div class="container w-100 d-flex justify-content-center align-items-center"
    style="padding: 50px 0px; height: 700px;">
    <div class="row w-50 h-70 shadow rounded p-5 d-flex flex-column align-items-center">
      <div class="d-flex flex-column aling-items-center justify-content-center m-3">
        <div class="d-flex justify-content-center">
          <h1>Home Page <i class="fi fi-rr-home"></i></h1>
        </div>
      </div>

      <div v-if="this.tokenExists">
        <div class="d-flex justify-content-center flex-column">
          <table class="table">
            <tbody>
              <tr>
                <th scope="row">
                  Nome:
                </th>
                <td>
                  {{ this.name }}
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Email:
                </th>
                <td>
                  {{ this.email }}
                </td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-center">
            <h4>Send a request of your issue for us!</h4>
          </div>
          <form class="m-3">
            <div class="form-group mb-3">
              <label for="exampleFormControlInput1">Issue Title</label>
              <input autocomplete="off" type="text" class="form-control" v-model="dataCall.title"
                :class="{ 'form control is-invalid': this.v$.dataCall.title.$error }" id="exampleFormControlInput1"
                placeholder="Inform us your problem">
              <span v-if="this.v$.dataCall.title.$error" class="invalid-feedback">
                {{ this.v$.dataCall.title.$errors[0].$message }}
              </span>
            </div>
            <div class="form-group mb-3">
              <label for="exampleFormControlTextarea1">Explain for us your problem.</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                :class="{ 'form control is-invalid': this.v$.dataCall.description.$error }"
                v-model="dataCall.description"></textarea>
              <span v-if="this.v$.dataCall.description.$error" class="invalid-feedback">
                {{ this.v$.dataCall.description.$errors[0].$message }}
              </span>
            </div>
          </form>
          <button class="btn btn-primary mb-3" v-on:click="sendCall()">Send request</button>
          <button class="btn btn-outline-danger" v-on:click="exitAccount()">Exit Account</button>
        </div>
      </div>
      <div v-else>
        <div class="d-flex flex-direction-row justify-content-between my-5">
          <div class="card" style="width: 15rem;">
            <div class="card-body">
              <h5 class="card-title">Login</h5>
              <p class="card-text">Already have a account? Login!</p>
              <button class="btn btn-primary">
                <RouterLink to="/login">Login</RouterLink>
              </button>
            </div>
          </div>

          <div class="card" style="width: 15rem;">
            <div class="card-body">
              <h5 class="card-title">Register</h5>
              <p class="card-text">Doesn't have a account? Register!</p>
              <button class="btn btn-secondary">
                <RouterLink to="/register">Register</RouterLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Home.js"></script>

<style src="" scoped>
button a {
  text-decoration: none;
  color: white;
}
</style>
