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
      <p class="font-medium text-blue-100">{{ nombreCliente }}</p>
      <p class="text-gray-400">{{ cliente.email }}</p>
      <p class="text-gray-400 text-xs">{{ cliente.telefono }}</p>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-400">
      <p class="text-blue-100 font-bold">{{ cliente.empresa }}</p>
      <p class="text-gray-400">{{ cliente.puesto }}</p>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm"></td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-400">
      <RouterLink to="/" class="text-lime-400 hover:text-lime-500 mr-5">
        Editar
      </RouterLink>
      <button class="text-red-600 hover:text-red-700">Eliminar</button>
    </td>
  </tr>
</template>
