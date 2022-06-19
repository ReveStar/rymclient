import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";
import { Dialog, Toast } from "vant";
import "vant/lib/index.css";
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";

const store = createPinia();
store.use(piniaPluginPersist);
const app = createApp(App);
app.use(store);
app.use(router);
app.use(Dialog).use(Toast);

app.mount("#app");
