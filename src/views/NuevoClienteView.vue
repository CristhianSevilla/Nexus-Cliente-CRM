<script setup>
import { FormKit } from "@formkit/vue";
import { useRouter } from "vue-router";
import ClienteService from "@/services/ClienteService";
import axios from "../api/axios";
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "@/components/UI/Heading.vue";
import router from "@/router";

defineProps({
  titulo: {
    type: String,
  },
});

const handleSubmit = (data) => {
  ClienteService.agregarCliente(data)
    .then((respuesta) => {
      //Redireccionar al usuario
      router.push({ name: "inicio" });
    })
    .catch((error) => console.log(error));
};
</script>

<template>
  <div class="flex gap-5 justify-between items-center">
    <heading>Nuevo Cliente</heading>
    <div>
      <RouterLink to="inicio"> {{ titulo }} </RouterLink>
    </div>
  </div>
  <div
    class="px-10 mx-auto mt-12 text-blue-100 shadow md:w-2/3 xl:w-3/5 py-10 rounded bg-gray-900"
  >
    <FormKit
      type="form"
      submit-label="Agregar Cliente"
      incomplete-message="No se pudo agregar"
      @submit="handleSubmit"
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
      />
      <FormKit
        type="text"
        label="Apellido Paterno"
        placeholder="Apellido paterno del cliente"
        name="apellidoP"
        prefix-icon="avatarMan"
        validation="required"
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
      />
      <FormKit
        type="text"
        label="Puesto"
        placeholder="Puesto del cliente"
        name="puesto"
        prefix-icon="people"
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
