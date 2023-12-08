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
  <div class="px-5 flex gap-5 justify-between items-center">
    <heading>Nuevo Cliente</heading>
    <div>
      <RouterLink to="inicio"> {{ titulo }} </RouterLink>
    </div>
  </div>
  <div class="px-5 mx-auto mt-10 bg-gray-200 shadow">
    <FormKit type="form">
      <FormKit
        type="text"
        label="Nombre"
        placeholder="Nombre del cliente"
        prefix-icon="avatarMan"
        help="Coloca el nombre del cliente que desas registrar"
        validation="required"
        :validation-messages="{
          required: 'El nombre del cliente es obligatorio',
        }"
      />
    </FormKit>
  </div>
</template>
