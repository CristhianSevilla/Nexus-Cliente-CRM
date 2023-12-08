<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <header class="bg-gray-900">
    <div class="mx-auto px-5 xl:max-w-7xl py-7 flex items-center">
      <img class="w-20 mr-5" src="/logo1.svg" alt="Logo" />
      <div>
        <h1 class="text-4xl font-extrabold text-blue-200">
          <span class="text-orange-700">Nexus</span>Client
        </h1>
        <p class="text-blue-200 capitalize">Donde cada interacción cuenta</p>
      </div>
    </div>
  </header>

  <main class="max-w-7xl mx-auto mt-10">
    <RouterView />
  </main>
</template>
