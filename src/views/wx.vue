<template>
  <div></div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { getWxCode } from "@/composables/auth";
import { useMainStore } from "@/stores/main";

const mainStore = useMainStore();
const router = useRouter();
const query = router.currentRoute.value.query;
let code = query.code === undefined ? null : query.code;
let redirect = query.redirect;
if (code == null || code === "") {
  getWxCode();
} else {
  mainStore
    .getInfoByCode({ code: code })
    .then((response) => {
      const needBind = response.need_bind;
      if (needBind) {
        const uri = "/login?name=" + response.open_id;
        router.push({ path: uri });
      } else {
        router.push({ path: redirect || "/" });
      }
    })
    .catch((err) => {
      console.log(err);
      router.push({ path: "/login" });
    });
}
</script>
<script>
export default {
  name: "WxItems",
};
</script>
