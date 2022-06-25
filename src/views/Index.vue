<template>
  <div v-for="course in courses" :key="course" class="my-2">
    <DisClosure>
      <template #head>
        <div class="flex flex-row">
          <div class="basis-3/4 text-left overflow-hidden">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              {{ course.subject }}
            </h3>
          </div>
          <div class="basis-1/4">
            <p class="my-1 text-sm text-gray-500">{{ course.status }}</p>
          </div>
        </div>
      </template>
      <template #content>
        <dl>
          <div class="bg-gray-50 px-4 py-2 grid grid-cols-3 gap-2">
            <dt class="text-sm font-medium text-gray-500 col-auto">开始时间</dt>
            <dd class="text-sm text-gray-900 col-span-2">
              {{ parseTime(course.start_time, "{y}-{m}-{d} {h}:{i}") }}
            </dd>
          </div>
          <div class="bg-white px-4 py-2 grid grid-cols-3 gap-2">
            <dt class="text-sm font-medium text-gray-500 col-auto">结束时间</dt>
            <dd class="text-sm text-gray-900 col-span-2">
              {{ parseTime(course.end_time, "{y}-{m}-{d} {h}:{i}") }}
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-2 grid grid-cols-3 gap-4">
            <dt class="text-sm font-medium text-gray-500 col-auto">地点</dt>
            <dd class="text-sm text-gray-900 col-span-2">
              {{ course.location }}
            </dd>
          </div>
          <div class="bg-white px-4 py-2 grid grid-cols-3 gap-4">
            <dt class="text-sm font-medium text-gray-500 col-auto">课程状态</dt>
            <dd class="text-sm text-gray-900 col-span-2">
              {{ course.status }}
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-2 grid grid-cols-3 gap-4">
            <dt class="text-sm font-medium text-gray-500 col-auto">教练</dt>
            <dd class="text-sm text-gray-900 col-span-2">
              {{ course.teacher }}
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-2 grid grid-cols-3 gap-4">
            <dt class="text-sm font-medium text-gray-500 col-auto">学生</dt>
            <dd class="text-sm text-gray-900 col-span-2">
              {{ course.student }}
            </dd>
          </div>
        </dl>
      </template>
    </DisClosure>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import DisClosure from "@/components/DisClosure.vue";
import { fetchCourseList } from "@/composables/course";
import { parseTime } from "@/util";

const courses = ref(null);
onMounted(
  fetchCourseList()
    .then((result) => {
      courses.value = result.courses;
    })
    .catch((err) => {
      console.log(err);
    })
);
</script>

<script>
export default {
  name: "CourseItems",
};
</script>
