<template>
  <section
    id="bottom-navigation"
    class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
  >
    <div id="tabs" class="flex justify-between">
      <a
        href="/"
        class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
      >
        <HomeIcon class="h-6 w-6 inline-block mb-1"></HomeIcon>
        <span class="tab tab-home block text-xs">课程</span>
      </a>
      <a
        href="/apply"
        class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
      >
        <ShoppingCartIcon class="h-6 w-6 inline-block mb-1"></ShoppingCartIcon>
        <span class="tab tab-kategori block text-xs">报名</span>
      </a>
      <a
        href="/my"
        class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
      >
        <UserIcon class="h-6 w-6 inline-block mb-1"></UserIcon>
        <span class="tab tab-whishlist block text-xs">我的</span>
      </a>
      <a
        href="/setting"
        class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
      >
        <CogIcon class="h-6 w-6 inline-block mb-1"></CogIcon>
        <span class="tab tab-account block text-xs">设置</span>
      </a>
    </div>
  </section>
</template>

<script setup>
import {
  HomeIcon,
  ShoppingCartIcon,
  UserIcon,
  CogIcon,
} from "@heroicons/vue/solid";
</script>
