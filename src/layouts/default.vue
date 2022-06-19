<template>
  <div>
    <div class="h-14">
      <NavBar />
    </div>
    <div class="w-full px-1 py-2">
      <router-view />
    </div>
    <div class="h-14">
      <TabBar :active="active" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import NavBar from "@/components/NavBar.vue";
import TabBar from "@/components/TabBar.vue";

let active = ref("index");
</script>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "DefaultLayout",
});
</script>

<style>
body {
  background-color: #f7f8fa;
}
</style>
