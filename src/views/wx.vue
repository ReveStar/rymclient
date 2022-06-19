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
console.log(code);
code = "011tUe000Bjs2O14ek100zEN300tUe07";
if (code == null || code === "") {
  getWxCode();
} else {
  console.log("finish get wx code");
  mainStore
    .getInfoByCode({ code: code })
    .then((response) => {
      const needBind = response.need_bind;
      if (needBind) {
        const uri = "/login?name=" + response.open_id;
        router.push({ path: uri });
      } else {
        router.push({ path: "/" });
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
