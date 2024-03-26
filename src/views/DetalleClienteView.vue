<script setup>
import { RouterLink } from "vue-router";
import Heading from "@/components/UI/Heading.vue";
import ImagenUsuario from "../img/user.png";

defineProps({
  titulo: {
    type: String,
  },
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

      <p class="text-gray-300 font-bold flex flex-col text-lg mb-4">
        Cristhian Uriel Sevilla Ramirez
      </p>
    </div>
    <div class="md:grid md:grid-cols-2 md:gap-10">
      <div>
        <p class="text-gray-300 font-bold flex flex-col mb-2">
          Empresa:
          <span class="text-gray-400 text-sm">Exos Technology</span>
        </p>
        <p class="text-gray-300 font-bold flex flex-col mb-2">
          Puesto:
          <span class="text-gray-400 text-sm">JR Developer Frontend</span>
        </p>
        <p class="text-gray-300 font-bold flex flex-col mb-2">
          Email:
          <span class="text-gray-400 text-sm">crissev@gmail.com</span>
        </p>
      </div>
      <div>
        <p class="text-gray-300 font-bold flex flex-col mb-2">
          Teléfono:
          <span class="text-gray-400 text-sm">123-456-7890</span>
        </p>
        <p class="text-gray-300 font-bold flex flex-col mb-2">
          Estado:
          <span class="text-gray-400 text-sm">Activo</span>
        </p>
        <div class="flex mt-4">
          <RouterLink
            :to="{ name: 'editar-cliente' }"
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
