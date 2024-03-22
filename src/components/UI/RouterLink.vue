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
    class="inline-block rounded bg-lime-400 py-1 px-3 text-black uppercase font-bold text-sm shadow transition duration-500 ease-in-out hover:bg-lime-500"
  >
    <slot></slot>
  </RouterLink>
</template>
