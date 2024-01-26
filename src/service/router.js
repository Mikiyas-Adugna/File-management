import { createRouter, createWebHashHistory } from "vue-router";
import userDashboard from "../features/dashBoard/userDashboard.vue";
import user from "../features/user/createUser.vue";
import { useDataStore } from "./store";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "user", component: user },
    { path: "/dashboard", name: "dashboard", component: userDashboard },
  ],
});

// router.beforeEach((to, next) => {
//   const dataStore = useDataStore();
//   if (to.path === "/dashboard" && dataStore.signUp) next();
//   else next({ path: "/" });
// });

export default router;

// {
//   "data": [
//     {
//       "id": "0",
//       "name": "miki",
//       "password": "00",
//       "email": "mikiyasadugna@gmail.com",
//       "fileManager": {
//         "folder": {
//           "name": "folder-1",
//           "file": {
//             "name": "file-1",
//             "type": "txt"
//           },
//           "folder": {
//             "name": "folder-2",
//             "file": {
//               "name": "file-2",
//               "type": "txt"
//             },
//             "folder": {
//               "name": "folder-3"
//             }
//           }
//         },
//         "file": {
//           "name": "file-3",
//           "type": "txt"
//         }
//       }
//     }
//   ]
// }
