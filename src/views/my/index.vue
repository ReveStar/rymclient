<template>
  <div>
    <div class="bg-white px-2 py-1 rounded font-mono font-light text-gray-600">
      <p>已购课程</p>
    </div>
    <div v-for="info in infos" :key="info" class="my-2">
      <DisClosure>
        <template #head>
          <div class="flex flex-row">
            <div class="basis-3/4 text-left h-12 overflow-hidden">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                {{ info.subject }}
              </h3>
              <p class="my-1 text-sm text-gray-500">{{ info.subject_id }}</p>
            </div>
          </div>
        </template>
        <template #content>
          <dl>
            <div class="bg-gray-50 px-4 py-2 grid grid-cols-3 gap-4 text-left">
              <dt class="text-sm font-medium text-gray-500 col-auto">总课时</dt>
              <dd class="text-sm text-gray-900 col-span-2">
                {{ info.course_all }}
              </dd>
            </div>
            <div class="bg-white px-4 py-2 grid grid-cols-3 gap-4">
              <dt class="text-sm font-medium text-gray-500 col-auto">
                剩余课时
              </dt>
              <dd class="text-sm text-gray-900 col-span-2">
                {{ info.course_left }}
              </dd>
            </div>
            <div class="bg-gray-50 px-4 py-2 grid grid-cols-3 gap-4">
              <dt class="text-sm font-medium text-gray-500 col-auto">
                已用课时
              </dt>
              <dd class="text-sm text-gray-900 col-span-2">
                {{ info.course_used }}
              </dd>
            </div>
            <div class="bg-white px-4 py-2 grid grid-cols-3 gap-4">
              <dt class="text-sm font-medium text-gray-500 col-auto">
                赠送课时
              </dt>
              <dd class="text-sm text-gray-900 col-span-2">
                {{ info.course_free }}
              </dd>
            </div>
            <div class="bg-white px-4 py-2 grid grid-cols-3 gap-4">
              <dt class="text-sm font-medium text-gray-500 col-auto">总费用</dt>
              <dd class="text-sm text-gray-900 col-span-2">
                {{ info.charge_all }}
              </dd>
            </div>
            <div class="bg-white px-4 py-2 grid grid-cols-3 gap-4">
              <dt class="text-sm font-medium text-gray-500 col-auto">
                已交费用
              </dt>
              <dd class="text-sm text-gray-900 col-span-2">
                {{ info.charge_deli }}
              </dd>
            </div>
            <div class="bg-white px-4 py-2 grid grid-cols-3 gap-4">
              <dt class="text-sm font-medium text-gray-500 col-auto">状态</dt>
              <dd class="text-sm text-gray-900 col-span-2">
                {{ info.status }}
              </dd>
            </div>
          </dl>
        </template>
      </DisClosure>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import DisClosure from "@/components/DisClosure.vue";
import { getStudentInfo } from "@/composables/student";

let listQuery = {
  page: 1,
  limit: 20,
  student: null,
  subject: "",
};
// let queryParam = reactive({
//   limit: 10,
//   page: 1,
// });
let infos = ref(null);

getStudentInfo(listQuery)
  .then((resp) => {
    infos.value = resp.students;
    console.log(infos);
  })
  .catch((err) => {
    console.log(err);
  });
</script>

<script>
export default {
  name: "PersonInfo",
};
</script>
