<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  cliente: {
    type: Object,
  },
});

const nombreCliente = computed(() => {
  return (
    props.cliente.nombre +
    " " +
    props.cliente.apellidoP +
    " " +
    props.cliente.apellidoM
  );
});
</script>

<template>
  <tr>
    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
      <p class="font-medium text-gray-400">{{ nombreCliente }}</p>
      <p class="text-gray-500">{{ cliente.email }}</p>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-400">
      <p class="text-gray-400 font-bold">{{ cliente.empresa }}</p>
      <p class="text-gray-500">{{ cliente.puesto }}</p>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm"></td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-400">
      <RouterLink to="/" class="text-lime-400 hover:text-lime-500 mr-5">
        Editar
      </RouterLink>
      <button class="text-red-500 hover:text-red-600">Eliminar</button>
    </td>
  </tr>
</template>
