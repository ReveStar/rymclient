<template>
  <nav
    class="fixed bg-white h-14 border-b-2 max-w-screen-md mx-auto inset-x-0 top-0 flex justify-center items-center"
  >
    <span>
      {{ title }}
    </span>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const title = ref("");
title.value = route.meta.title;
</script>
