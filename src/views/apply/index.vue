<template>
  <div v-for="subject in subjects" :key="subject" class="my-2">
    <DisClosure>
      <template #head>
        <div class="flex flex-row">
          <div class="basis-3/4 text-left h-12 overflow-hidden">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              {{ subject.name }}
            </h3>
            <p class="my-1 text-sm text-gray-500">{{ subject.describ }}</p>
          </div>
          <div class="basis-1/4 h-12">
            <span
              @click.stop="applySubject(subject)"
              type="button"
              class="h-full border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline"
            >
              报名
            </span>
          </div>
        </div>
      </template>
      <template #content>
        <dl>
          <div class="bg-gray-50 px-4 py-2 grid grid-cols-3 gap-4 text-left">
            <dt class="text-sm font-medium text-gray-500 col-auto">课程价格</dt>
            <dd class="text-sm text-gray-900 col-span-2">
              {{ subject.price }}
            </dd>
          </div>
          <div class="bg-white px-4 py-2 grid grid-cols-3 gap-4">
            <dt class="text-sm font-medium text-gray-500 col-auto">团购价格</dt>
            <dd class="text-sm text-gray-900 col-span-2">
              {{ subject.discount_price }}
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-2 grid grid-cols-3 gap-4">
            <dt class="text-sm font-medium text-gray-500 col-auto">课时</dt>
            <dd class="text-sm text-gray-900 col-span-2">
              {{ subject.school_hour }}
            </dd>
          </div>
          <div class="bg-white px-4 py-2 grid grid-cols-3 gap-4">
            <dt class="text-sm font-medium text-gray-500 col-auto">课程简介</dt>
            <dd class="text-sm text-gray-900 col-span-2">
              {{ subject.describ }}
            </dd>
          </div>
        </dl>
      </template>
    </DisClosure>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DisClosure from "@/components/DisClosure.vue";
import { fetchSubjectList, orderSubject } from "@/composables/subject";
import { Dialog, Toast } from "vant";

let subjects = ref(null);
fetchSubjectList()
  .then((resp) => {
    subjects.value = resp.subjects;
  })
  .catch((err) => {
    console.log(err);
  });

const applySubject = (subject) => {
  Dialog.confirm({
    title: "报名",
    message: "确认报名" + subject.name,
  }).then(() => {
    orderSubject(subject).then((response) => {
      const { success } = response;
      if (success === true) {
        Toast({
          message: "报名信息已提交",
          type: "info",
          duration: 2 * 1000,
        });
      }
    });
  });
};
</script>

<script>
export default {
  name: "SubjectItems",
};
</script>
