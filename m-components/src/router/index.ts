import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Container from "../components/container/src/index.vue";
// RouteRecordRaw:路由的类型（ts）
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Container,
    children: [
      {
        path: "/",
        component: Home,
        name: "home"
      },
      {
        path: "/chooseIconMain",
        name: "chooseIconMain",
        component: () => import("../views/chooseIconMain.vue") //图标选择器
      },
      {
        path: "/chooseAreaMain",
        name: "chooseAreaMain",
        component: () => import("../views/chooseAreaMain.vue") //省市区选择
      },
      {
        path: "/trendMain",
        name: "trendMain",
        component: () => import("../views/trendMain.vue") //趋势标记
      },
      {
        path: "/notificationMain",
        name: "notificationMain",
        component: () => import("../views/notificationMain.vue") //通知菜单
      }
    ]
  }
];
const router = createRouter({
  //createWebHashHistory：hash模式；createWebHistory：history模式
  history: createWebHashHistory(),
  routes
});
export default router;
