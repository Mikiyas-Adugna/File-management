import { createRouter, createWebHashHistory } from "vue-router";
import userDashboard from "../features/dashBoard/userDashboard.vue";
import user from "../features/user/createUser.vue";
import { useDataStore } from "./store";
import { useRouter } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "user", component: user },
    {
      path: "/dashboard/:userName?",
      name: "dashboard",
      component: userDashboard,
    },
  ],
});

function routerGuard() {
  const dataStore = useDataStore();
  router.beforeEach((to, from, next) => {
    if (to.path === "/dashboard" && from.path !== "/dashboard") {
      next();
    } else if (to.path !== "/") {
      next("/");
    } else {
      next();
    }
  });
}

export default router;

// const routers = useRouter();

// router.beforeEach((to, next) => {
//   const dataStore = useDataStore();
//   if (to.path === "/dashboard" && dataStore.signUp) next();
//   else next({ path: "/" });
// });

// router.beforeEach((to, next) => {
//   const dataStore = useDataStore();
//   if (to.path === "/dashboard" && dataStore.valid) routers.push("/dashboard");
//   else routers.push("/dashboard");
// });
