<script setup>
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "@/components/UI/Heading.vue";
</script>

<template>
  <div class="px-5 flex gap-5 justify-between items-center">
    <heading>Clientes</heading>
    <div>
      <RouterLink to="agregar-cliente"> Nuevo Cliente </RouterLink>
    </div>
  </div>
</template>
