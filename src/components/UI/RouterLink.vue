<script setup>
import { RouterLink } from "vue-router";

defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <RouterLink
    :to="{ name: to }"
    class="inline-block rounded bg-blue-800 py-1 px-3 text-white uppercase font-bold text-sm shadow transition duration-500 ease-in-out hover:bg-blue-700"
  >
    <slot></slot>
  </RouterLink>
</template>
