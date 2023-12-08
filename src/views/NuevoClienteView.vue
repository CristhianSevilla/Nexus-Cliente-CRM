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
    <FormKit type="form">
      <FormKit
        type="text"
        label="Nombre(s)"
        placeholder="Nombre(s) del cliente"
        prefix-icon="people"
        validation="required"
        :validation-messages="{
          required: 'El nombre del cliente es obligatorio',
        }"
      />
      <FormKit
        type="text"
        label="Apellido Paterno"
        placeholder="Apellido paterno del cliente"
        prefix-icon="people"
        validation="required"
        :validation-messages="{
          required: 'El apellido paterno del cliente es obligatorio',
        }"
      />
      <FormKit
        type="text"
        label="Apellido Materno"
        placeholder="Apellido materno del cliente"
        prefix-icon="people"
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
    </FormKit>
  </div>
</template>

<style>
.formkit-wrapper {
  max-width: 100%;
}
</style>
