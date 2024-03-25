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

const estadoCliente = computed(() => {
  return props.cliente.estado;
});
</script>

<template>
  <tr>
    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
      <p class="font-medium text-gray-300">{{ nombreCliente }}</p>
      <p class="text-gray-500">{{ cliente.email }}</p>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-400">
      <p class="text-gray-300 font-bold">{{ cliente.empresa }}</p>
      <p class="text-gray-500">{{ cliente.puesto }}</p>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      <button
        class="inline-flex rounded-full text-xs font-semibold leading-5 border"
        :class="[
          estadoCliente
            ? 'bg-green-200 text-green-800 border-green-700 px-3'
            : 'bg-red-200 text-red-800 border-red-800 px-2',
        ]"
      >
        {{ estadoCliente ? "Activo" : "Inactivo" }}
      </button>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-400">
      <RouterLink
        :to="{ name: 'editar-cliente', params: { id: cliente.id } }"
        class="text-lime-400 hover:text-lime-500 mr-5"
      >
        Editar
      </RouterLink>
      <button class="text-red-500 hover:text-red-600">Eliminar</button>
    </td>
  </tr>
</template>
