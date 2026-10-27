import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import ElementPlus from "element-plus";

import "./assets/vendor/normalize.css";
import "element-plus/dist/index.css";
import "./assets/scss/main.scss";

const app = createApp(App);

app.use(router);
app.use(ElementPlus);

app.mount("#app");
