<!-------------------------------------------------------------------------
  Autor: Samyra Fernandes da Silva
  Data: 15/12/2024
  Descrição: Estilização da página de informações das chamadas.
  Tecnologias: Vue.Js e Bootstrap.
  Instruções: Nenhuma
------------------------------------------------------------------------>

<template>
  <div class="container p-5 w-100 d-flex justify-content-center align-items-center"
    style="padding: 30% 10% ; height: 700px;">
    <div class="row shadow rounded p-5 d-flex align-items-center justify-content-center">
      <div v-if="isAdmin">
        <div v-if="!doesCallsExist">
          <h4>Theres no calls to show!</h4>
          <RouterLink to="/home"> <button class="btn btn-primary"> Return to home page </button></RouterLink>
        </div>
        <div v-else>
          <table class="table table-striped">
            <thead>
              <tr class="fw-bold">
                <th scope="col">
                  Title
                </th>
                <th scope="col">
                  Description
                </th>
                <th scope="col">
                  NameCall
                </th>
                <th scope="col">
                  IdCallUser
                </th>
                <th scope="col">
                  Status
                </th>
                <th scope="col">
                  Remove/Modify
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="( call, index ) in calls">
                <td>
                  {{ call.title }}
                </td>
                <td>
                  {{ call.description }}
                </td>
                <td>
                  {{ call.nameCall }}
                </td>
                <td>
                  {{ call.idCallUser }}
                </td>
                <td>
                  {{ call.stateCall }}
                </td>
                <td>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" :id="'flexCheckDefault' + index"> {{ index
                    }}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ExemploModalCentralizado">Modify
            Call</button>
          <button class="btn btn-outline-danger" v-on:click="removeCall()">Remove Call</button>
          <div class="modal fade" id="ExemploModalCentralizado" tabindex="-1" role="dialog"
            aria-labelledby="TituloModalCentralizado" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="TituloModalCentralizado">To what state it will be changed to?</h5>
                </div>
                <div class="modal-body">
                  <select name="states" id="state" class="form-select">
                    <option selected="true" disabled="disabled">Select the state</option>
                    <option value=" Working On">🛠 Working On</option>
                    <option value="Pendent">⏳ Pendent</option>
                    <option value="Canceled">❌ Canceled</option>
                    <option value="Concluid">✅ Concluid</option>
                  </select>
                </div>
                <div class="modal-footer">
                  <div class="w-100 d-flex">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary space" v-on:click="modifyCall()">Save
                      modification</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h4>You don't have permissions to be here!</h4>
        <RouterLink to="/home"> <button class="btn btn-primary"> Return to home page </button></RouterLink>
      </div>
    </div>
  </div>
</template>
<script src="../info/Info.js"></script>
<style scoped>
button a {
  color: white !important;
  text-decoration: none;
}

button {
  margin: 10px 0px !important;
  width: 100%;
}

.space {
  margin-left: 2% !important;
}

th {
  font-weight: 600 !important;
}
</style>
