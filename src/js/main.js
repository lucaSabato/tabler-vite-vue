import { createApp } from "vue";
import App from "./App.vue";
import Tabler from "../../dist/core.js";

createApp(App)
    .use(Tabler)
    .mount("#app");
