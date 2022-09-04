<template>
  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          登陆
        </h2>
      </div>
      <form
        class="mt-8 space-y-6"
        ref="bindForm"
        :rule="loginRules"
        action="#"
        method="POST"
      >
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div class="py-2">
            <label for="name" class="sr-only">姓名</label>
            <input
              v-model="loginForm.username"
              id="name"
              name="username"
              type="text"
              autocomplete="username"
              required
              class="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="姓名"
            />
          </div>
          <div class="">
            <label for="phone" class="sr-only">手机号</label>
            <input
              v-model="loginForm.phone"
              id="tel"
              name="phone"
              type="tel"
              autocomplete="phone"
              required
              class="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="手机号"
            />
          </div>
          <div class="flex py-2">
            <label for="code" class="sr-only">验证码</label>
            <input
              v-model="loginForm.code"
              id="number"
              name="code"
              type="input"
              autocomplete="code"
              required="true"
              class="appearance-none rounded-l-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:z-10 sm:text-sm"
              placeholder="验证码"
            />
            <div>
              <button
                class="h-full w-20 text-white rounded-r-lg bg-red-500 hover:bg-red-600"
                @click.prevent="getCode"
              >
                获取验证码
              </button>
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            @click.prevent="handleLogin"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            登陆
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { LockClosedIcon } from "@heroicons/vue/solid";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { Toast } from "vant";
import { getValidCode } from "@/composables/auth";

import { useMainStore } from "@/stores/main";

const mainStore = useMainStore();
const loginForm = reactive({
  username: "",
  phone: "",
  code: "",
  type: 2,
  open_id: "",
});
const router = useRouter();
// const validateUsername = (rule, value, callback) => {
//   if (value.length <= 0) {
//     callback(new Error("请输入姓名"));
//   } else {
//     callback();
//   }
// };

// const validatePhone = (rule, value, callback) => {
//   if (value.length !== 11) {
//     callback(new Error("请输入正确格式的手机号"));
//   } else {
//     callback();
//   }
// };
// const loginRules = {
//   username: [{ required: true, trigger: "blur", validator: validateUsername }],
//   phone: [{ required: true, trigger: "blur", validator: validatePhone }],
// };
const handleLogin = () => {
  loginForm.open_id = router.currentRoute.value.query.name;
  // loginForm.code = loginForm.code === null ? "" : loginForm.code.toString();
  mainStore.login(loginForm).then(() => {
    router.push({ path: "/" });
  });
};
const getCode = () => {
  getValidCode(loginForm).then((response) => {
    const { success } = response;
    if (success === true) {
      Toast({
        message: "验证码已发送",
        type: "info",
        duration: 2 * 1000,
      });
    }
  });
};
</script>

<script>
export default {
  name: "LoginView",
};
</script>

<style></style>
