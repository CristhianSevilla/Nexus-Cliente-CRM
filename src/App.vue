<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <header>
    <RouterLink
      :to="{ name: 'inicio' }"
      class="mx-auto px-5 xl:max-w-7xl py-7 flex items-center border-b border-gray-400"
    >
      <img class="w-20 mr-5" src="/icon.svg" alt="Logo" />
      <div>
        <h1 class="text-4xl font-extrabold text-lime-400">
          <span>Next</span>Client
        </h1>
        <p class="text-blue-100 capitalize">Donde cada interacción cuenta</p>
      </div>
    </RouterLink>
  </header>

  <main class="max-w-7xl mx-auto mt-10 px-5">
    <RouterView />
  </main>
</template>
