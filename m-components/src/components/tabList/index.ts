import TabList from "./src/index.vue";
import { App } from "vue";
export default {
  install(app: App) {
    app.component("TabList", TabList);
  }
};
export { TabList };
