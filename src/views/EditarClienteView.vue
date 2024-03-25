<script setup>
import { onMounted, reactive, ref } from "vue";
import { FormKit } from "@formkit/vue";
import { useRoute, useRouter } from "vue-router";
import ClienteService from "@/services/ClienteService";
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "@/components/UI/Heading.vue";

const router = useRouter();
const route = useRoute();
const { id } = route.params;

const formData = reactive({});
//tambien se puede usar ref
// const formData = ref({});

onMounted(() => {
  ClienteService.obtenerCliente(id)
    .then(({ data }) => {
      //Escribir en formData los datos que tenemos en data ejem.
      // formData.nombre = data.nombre;
      // formData.apellidoP = data.apellidoP;
      Object.assign(formData, data);
      //para ref
      // formData.value = data;
    })
    .catch((error) => console.log(error));
});

defineProps({
  titulo: {
    type: String,
  },
});

const handleSubmit = (data) => {
  ClienteService.actualizarCliente(id, data)
    .then(() => router.push({ name: "inicio" }))
    .catch((error) => console.log(error));
};
</script>

<template>
  <div class="flex gap-5 justify-between items-center">
    <heading>{{ titulo }}</heading>
    <div>
      <RouterLink to="inicio"> cancelar </RouterLink>
    </div>
  </div>
  <div
    class="px-10 mx-auto mt-12 text-blue-100 shadow md:w-2/3 xl:w-3/5 py-10 rounded bg-gray-900"
  >
    <FormKit
      type="form"
      submit-label="Editar Cliente"
      incomplete-message="No se pudo agregar"
      @submit="handleSubmit"
      :value="formData"
    >
      <FormKit
        type="text"
        label="Nombre(s)"
        placeholder="Nombre(s) del cliente"
        name="nombre"
        prefix-icon="avatarMan"
        validation="required"
        :validation-messages="{
          required: 'El campo nombre es obligatorio',
        }"
        v-model="formData.nombre"
      />
      <FormKit
        type="text"
        label="Apellido Paterno"
        placeholder="Apellido paterno del cliente"
        name="apellidoP"
        prefix-icon="avatarMan"
        validation="required"
        v-model="formData.apellidoP"
        :validation-messages="{
          required: 'El campo apellido paterno es obligatorio',
        }"
      />
      <FormKit
        type="text"
        label="Apellido Materno"
        placeholder="Apellido materno del cliente"
        name="apellidoM"
        prefix-icon="avatarMan"
        validation="required"
        v-model="formData.apellidoM"
        :validation-messages="{
          required: 'El campo apellido materno es obligatorio',
        }"
      />
      <FormKit
        type="email"
        label="Email"
        placeholder="Email del cliente"
        name="email"
        prefix-icon="email"
        validation="required|email"
        v-model="formData.email"
        :validation-messages="{
          required: 'El campo email es obligatorio',
          email: 'Ingresa un email válido',
        }"
      />
      <FormKit
        type="text"
        label="Teléfono: XXX-XXX-XXXX"
        placeholder="Teléfono del cliente"
        name="telefono"
        prefix-icon="telephone"
        validation="required|*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}/"
        v-model="formData.telefono"
        :validation-messages="{
          required: 'El campo teléfono es obligatorio',
          matches: 'El formato no es válido',
        }"
      />
      <FormKit
        type="text"
        label="Empresa"
        placeholder="Empresa del cliente"
        name="empresa"
        prefix-icon="folder"
        v-model="formData.empresa"
      />
      <FormKit
        type="text"
        label="Puesto"
        placeholder="Puesto del cliente"
        name="puesto"
        prefix-icon="people"
        v-model="formData.puesto"
      />
    </FormKit>
  </div>
</template>

<style>
.formkit-wrapper {
  max-width: 100%;
}
.formkit-wrapper .formkit-input {
  background: transparent;
  color: #d0d0d0;
}
.formkit-wrapper .formkit-input[type="submit"] {
  background: #a3e635;
  font-weight: 700;
  color: #000;
  transition: all 0.5s ease;
}
.formkit-wrapper .formkit-input[type="submit"]:hover {
  background: #87c229;
}
</style>
