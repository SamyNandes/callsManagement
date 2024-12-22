/* ------------------------------------------------------------------------
  Autor: Samyra Fernandes da Silva
  Data: 12/12/2024
  Descrição: Criação da instãncia de app, definição de rotas e importação do bootstrap para estilização.
  Tecnologias: Node.js.
  Blibliotecas e suas funções:
    createApp - Um componente do Vue para criação da instância do app.
    App - Componente do Vue principal.
    router - Rotas com seus determinados componentes
    bootstrap - Para estilização dos componentes
  Instruções: Nenhuma
-----------------------------------------------------------------------*/

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

const app = createApp(App)

app.use(router)

app.mount('#app')
