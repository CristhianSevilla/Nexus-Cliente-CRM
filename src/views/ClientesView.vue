<script setup>
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "@/components/UI/Heading.vue";

defineProps({
  titulo: {
    type: String,
  },
});
</script>

<template>
  <div class="flex gap-5 justify-between items-center">
    <heading>Clientes</heading>
    <div>
      <RouterLink to="agregar-cliente"> {{ titulo }} </RouterLink>
    </div>
  </div>
</template>
