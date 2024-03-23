<script setup>
import { onMounted, ref, computed } from "vue";
import axios from "axios";
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "@/components/UI/Heading.vue";
import Cliente from "@/components/UI/Cliente.vue";

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

const existenClientes = computed(() => {
  return clientes.value.length > 0;
});
</script>

<template>
  <div class="flex gap-5 justify-between items-center">
    <heading>Clientes</heading>
    <div>
      <RouterLink to="agregar-cliente"> {{ titulo }} </RouterLink>
    </div>
  </div>

  <div v-if="existenClientes" class="flow-root mx-auto mt-10 p-5 shadow">
    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div
        class="min-w-full py-2 align-middle sm:px-6 lg:px-8 border border-spacing-0 border-gray-700 bg-gray-900 rounded"
      >
        <table class="min-w-full divide-y divide-gray-600">
          <thead>
            <tr>
              <th
                scope="col"
                class="p-2 text-left text-sm font-extrabold text-blue-100"
              >
                Nombre
              </th>
              <th
                scope="col"
                class="p-2 text-left text-sm font-extrabold text-blue-100"
              >
                Empresa
              </th>
              <th
                scope="col"
                class="p-2 text-left text-sm font-extrabold text-blue-100"
              >
                Estado
              </th>
              <th
                scope="col"
                class="p-2 text-left text-sm font-extrabold text-blue-100"
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-600">
            <Cliente
              v-for="cliente in clientes"
              :key="cliente.id"
              :cliente="cliente"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div v-else>
    <p class="text-blue-200 mt-10 text-center">No existen clientes</p>
  </div>
</template>
