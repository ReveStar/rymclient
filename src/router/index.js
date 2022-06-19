import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/default.vue";
import Apply from "../views/apply/index.vue";
import CourseItems from "../views/Index.vue";
import My from "../views/my/index.vue";
import Setting from "../views/setting/index.vue";
import Index from "../views/wx.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: CourseItems,
          meta: { title: "课表" },
        },
        {
          path: "/apply",
          name: "apply",
          component: Apply,
          meta: { title: "报名" },
        },
        {
          path: "/my",
          name: "my",
          component: My,
          meta: { title: "我的" },
        },
        {
          path: "/setting",
          name: "setting",
          component: Setting,
          meta: { title: "设置" },
        },
      ],
    },
    {
      path: "/index",
      name: "index",
      component: Index,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login/index.vue"),
    },
  ],
});

export default router;
