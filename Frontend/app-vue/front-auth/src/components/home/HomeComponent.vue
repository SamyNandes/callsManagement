<template>
  <div>
    <h1>Home Page</h1>
    <button type="button" class="btn btn-danger">Primary</button>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        Botão dropdown
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Alguma ação</a>
        <a class="dropdown-item" href="#">Outra ação</a>
        <a class="dropdown-item" href="#">Alguma coisa aqui</a>
      </div>
    </div>
  </div>
</template>

<script src="./Home.js"></script>

<style src="../../assets/bootstrap/main.css" scoped></style>
