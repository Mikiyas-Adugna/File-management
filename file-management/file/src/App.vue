<template id="app">
  <div class="w-screen h-screen bg-gray-200">
    <router-view></router-view>
  </div>
</template>
<script>
import user from "./features/user/createUser.vue";
import dashboard from "./features/dashBoard/userDashboard.vue";

export default {
  setup() {},
};
</script>
