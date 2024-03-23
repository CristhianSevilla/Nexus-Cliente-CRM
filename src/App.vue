<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <div
      class="mx-auto px-5 xl:max-w-7xl py-7 flex items-center border-b border-blue-100"
    >
      <img class="w-20 mr-5" src="/icon.svg" alt="Logo" />
      <div>
        <h1 class="text-4xl font-extrabold text-lime-400">
          <span>Next</span>Client
        </h1>
        <p class="text-blue-100 capitalize">Donde cada interacción cuenta</p>
      </div>
    </div>
  </header>

  <main class="max-w-7xl mx-auto mt-10 px-5">
    <RouterView />
  </main>
</template>
