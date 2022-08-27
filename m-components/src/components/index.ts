import { App } from "vue";
import ChooseIcon from "./chooseIcon"; //选择图标
import ChooseArea from "./chooseArea"; //省市区选择
import Trend from "./trend"; //趋势标记
import NotificationMenu from "./notificationMenu"; //通知菜单
import TabList from "./tabList";
const components = [ChooseIcon, ChooseArea, Trend, NotificationMenu, TabList];
export default {
  install(app: App) {
    components.map(item => {
      app.use(item);
    });
  }
};
