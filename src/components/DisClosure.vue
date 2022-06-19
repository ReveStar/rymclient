<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <Disclosure>
      <DisclosureButton class="w-full">
        <div class="px-4 py-2 sm:px-6">
          <slot name="head"></slot>
        </div>
      </DisclosureButton>
      <DisclosurePanel class="pb-2 text-sm text-gray-500">
        <div class="border-t border-gray-200">
          <slot name="content"></slot>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
</script>
