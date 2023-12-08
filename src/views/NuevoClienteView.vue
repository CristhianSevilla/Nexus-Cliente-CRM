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
  <div class="px-5 flex gap-5 justify-between items-center">
    <heading>Nuevo Cliente</heading>
    <div>
      <RouterLink to="inicio"> {{ titulo }} </RouterLink>
    </div>
  </div>
</template>
