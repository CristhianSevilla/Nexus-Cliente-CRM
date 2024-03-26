<script setup>
import { onMounted, reactive, computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import Heading from "@/components/UI/Heading.vue";
import ClienteService from "../services/ClienteService";
import ImagenUsuario from "../img/user.png";

const route = useRoute();

const { id } = route.params;

const dataCliente = reactive({});

onMounted(() => {
  ClienteService.obtenerCliente(id)
    .then(({ data }) => {
      Object.assign(dataCliente, data);
    })
    .catch((error) => console.log(error));
});

defineProps({
  titulo: {
    type: String,
  },
});

const nombreCliente = computed(() => {
  return (
    dataCliente.nombre +
    " " +
    dataCliente.apellidoP +
    " " +
    dataCliente.apellidoM
  );
});

const estadoCliente = computed(() => {
  return dataCliente.estado;
});
</script>

<template>
  <div class="flex gap-5 justify-between items-center">
    <heading>{{ titulo }}</heading>
    <div>
      <RouterLink
        :to="{ name: 'inicio' }"
        class="inline-block rounded bg-lime-400 py-1 px-3 text-black uppercase font-bold text-sm shadow transition duration-500 ease-in-out hover:bg-lime-500"
      >
        volver
      </RouterLink>
    </div>
  </div>
  <div
    class="px-10 mx-auto mt-12 text-blue-100 shadow py-10 rounded bg-gray-900 grid grid-cols-2 gap-4 md:gap-8"
  >
    <div>
      <div
        class="flex flex-col items-center md:items-start md:ml-16 p-4 md:p-2"
      >
        <img
          class="bg-gray-800 rounded-full border-2 border-gray-500 mb-4"
          :src="ImagenUsuario"
          alt="Imagen usuario"
          width="130"
        />
      </div>

      <div>
        <p
          class="inline-flex rounded-full text-xs font-semibold leading-5 border"
          :class="[
            estadoCliente
              ? 'bg-green-200 text-green-800 border-green-700 px-3'
              : 'bg-red-200 text-red-800 border-red-800 px-2',
          ]"
        >
          {{ estadoCliente ? "Activo" : "Inactivo" }}
        </p>
        <p class="text-gray-300 font-bold flex flex-col text-lg mb-4">
          {{ nombreCliente }}
        </p>
      </div>
    </div>
    <div class="md:grid md:grid-cols-2 md:gap-10">
      <div>
        <p class="text-gray-300 font-bold flex flex-col mb-2">
          Empresa:
          <span class="text-gray-400 text-sm">{{ dataCliente.empresa }}</span>
        </p>
        <p class="text-gray-300 font-bold flex flex-col mb-2">
          Puesto:
          <span class="text-gray-400 text-sm">{{ dataCliente.puesto }}</span>
        </p>
        <p class="text-gray-300 font-bold flex flex-col mb-2">
          Email:
          <span class="text-gray-400 text-sm">{{ dataCliente.email }}</span>
        </p>
      </div>
      <div>
        <p class="text-gray-300 font-bold flex flex-col mb-2">
          Teléfono:
          <span class="text-gray-400 text-sm">{{ dataCliente.telefono }}</span>
        </p>
        <div class="flex mt-4">
          <RouterLink
            :to="{ name: 'editar-cliente', params: { id: dataCliente.id } }"
            class="text-lime-400 hover:text-lime-500 mr-5"
          >
            Editar
          </RouterLink>
          <button
            class="text-red-500 hover:text-red-600"
            @click="$emit('eliminar-cliente')"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
