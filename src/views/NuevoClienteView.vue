<script setup>
import { FormKit } from "@formkit/vue";
import RouterLink from "../components/UI/RouterLink.vue";
import Heading from "@/components/UI/Heading.vue";

defineProps({
  titulo: {
    type: String,
  },
});
</script>

<template>
  <div class="flex gap-5 justify-between items-center">
    <heading>Nuevo Cliente</heading>
    <div>
      <RouterLink to="inicio"> {{ titulo }} </RouterLink>
    </div>
  </div>
  <div
    class="px-10 mx-auto mt-12 bg-gray-200 shadow md:w-2/3 xl:w-3/5 py-10 rounded-lg"
  >
    <FormKit
      type="form"
      submit-label="Agregar Cliente"
      incomplete-message="No se pudo enviar, revisa los mensajes"
    >
      <FormKit
        type="text"
        label="Nombre(s)"
        placeholder="Nombre(s) del cliente"
        prefix-icon="avatarMan"
        validation="required"
        :validation-messages="{
          required: 'El nombre del cliente es obligatorio',
        }"
      />
      <FormKit
        type="text"
        label="Apellido Paterno"
        placeholder="Apellido paterno del cliente"
        prefix-icon="avatarMan"
        validation="required"
        :validation-messages="{
          required: 'El apellido paterno del cliente es obligatorio',
        }"
      />
      <FormKit
        type="text"
        label="Apellido Materno"
        placeholder="Apellido materno del cliente"
        prefix-icon="avatarMan"
        validation="required"
        :validation-messages="{
          required: 'El apellido materno del cliente es obligatorio',
        }"
      />
      <FormKit
        type="email"
        label="Email"
        placeholder="Email del cliente"
        prefix-icon="email"
        validation="required|email"
        :validation-messages="{
          required: 'El email del cliente es obligatorio',
          email: 'Ingresa un email válido',
        }"
      />
      <FormKit
        type="text"
        label="Teléfono: XXX-XXX-XXXX"
        placeholder="Teléfono del cliente"
        prefix-icon="telephone"
        validation="required|*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}/"
        :validation-messages="{
          required: 'El teléfono del cliente es obligatorio',
          matches: 'El formato no es válido',
        }"
      />
      <FormKit
        type="text"
        label="Empresa"
        placeholder="Empresa del cliente"
        prefix-icon="folder"
      />
      <FormKit
        type="text"
        label="Puesto"
        placeholder="Puesto del cliente"
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
}
.formkit-wrapper .formkit-input[type="submit"] {
  background: #c2410c;
  font-weight: 700;
}
</style>
