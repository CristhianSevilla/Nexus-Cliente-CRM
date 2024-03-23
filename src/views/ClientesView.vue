<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "@/components/UI/Heading.vue";

const clientes = ref([]);

onMounted(() => {
  axios("http://localhost:4000/clientes")
    .then(({ data }) => (clientes.value = data))
    .catch((error) => console.log("Ocurrio un error"));
});

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
