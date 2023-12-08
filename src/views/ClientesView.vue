<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="px-5">
    <div>
      <RouterLink :to="{ name: 'agregar-cliente' }">Nuevo Cliente</RouterLink>
    </div>
    <h1 class="text-4xl font-extrabold text-blue-200">Clientes</h1>
  </div>
</template>
