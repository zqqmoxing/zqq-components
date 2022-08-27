import { createApp } from "vue";
import App from "./App.vue"; //跟组件
import router from "./router"; //路由
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import mUI from "./components";
const app = createApp(App);
//---------------start全局注册发布到npm的组件-------------------
// import mUI from "zqq-components";
// import "zqq-components/style.css";
//---------------end-------------------

//---------------start单独引入发布到npm的组件-------------------
// import ChooseIcon from "zqq-components/chooseIcon";
// import "zqq-components/chooseIcon/style.css";
// app.use(ChooseIcon);
//---------------end-------------------

//---------------start引入全量打包后的组件-------------------
// import mUI from "../lib/zqq-components.mjs";
// import "../lib/style.css";
//---------------end-------------------

//---------------start单独引入打包后的组件-------------------
// import ChooseIcon from "../lib/chooseIcon/index.mjs";
// import "../lib/chooseIcon/style.css";
// app.use(ChooseIcon)
//---------------end-------------------

//全局注册图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router).use(mUI).mount("#app");
