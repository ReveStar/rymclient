<template>
  <div class="mt-2 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-base leading-4 text-gray-900">个人信息</h3>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form @submit.prevent>
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                    >姓名</label
                  >
                  <input
                    v-model="user.username"
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    :disabled="disable"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-gray-700"
                    >密码</label
                  >
                  <input
                    v-model="user.password"
                    type="text"
                    name="last-name"
                    id="last-name"
                    autocomplete="family-name"
                    :disabled="disable"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label
                    for="email-address"
                    class="block text-sm font-medium text-gray-700"
                    >手机号</label
                  >
                  <input
                    v-model="user.phone"
                    type="text"
                    name="email-address"
                    id="email-address"
                    autocomplete="email"
                    :disabled="disable"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                @click.stop="updateUserInfo()"
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                修改
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Toast } from "vant";
import { getUserInfo } from "@/composables/auth";
import { useMainStore } from "@/stores/main";
const mainStore = useMainStore();
// let user = ;
let user = ref({
  username: "",
  password: "*****",
  phone: "xx",
});
const disable = ref(true);
getUserInfo({ account_id: mainStore.getAccountId })
  .then((resp) => {
    const { username, phone } = resp.accounts[0];
    user.value.username = username;
    user.value.phone = phone;
  })
  .catch((err) => {
    console.log(err);
  });

const updateUserInfo = () => {
  console.log(user.value);
  Toast({
    message: "联系负责人修改个人信息",
    type: "error",
    duration: 2 * 1000,
  });
};
</script>

<script>
export default {
  name: "SettingInfo",
};
</script>
