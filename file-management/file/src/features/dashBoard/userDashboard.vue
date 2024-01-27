<template>
  <div class="grid grid-cols-columns grid-rows-[auto_1fr] h-screen w-screen">
    <div class="flex flex-col space-x-3 items-center row-span-2 mt-4">
      <div v-if="dataStore.avail">
        <btn
          :btnName="'New file'"
          :add="true"
          @click="dataStore.fileOrFolder('file')"
        />
        <btn
          :btnName="'New folder'"
          :add="true"
          @click="dataStore.fileOrFolder('folder')"
        />
      </div>
      <inputs v-if="!dataStore.avail" />
      <lists />
    </div>
    <div
      class="space-x-2 px-12 py-1 bg-gray-300 flex items-center justify-between"
    >
      <p class="text-xl font-semibold">
        {{ dataStore.userName.toUpperCase() }}
      </p>
      <btn :btnName="'Logout'" @click="toLoginPage()"></btn>
    </div>
    <div class="bg-white pl-24 pt-24 text-5xl font-semibold">Display</div>
  </div>
</template>

<script>
import btn from "../../ui/button.vue";
import inputs from "../../ui/inputs.vue";
import { useDataStore } from "@/service/store";
import lists from "../../ui/lists.vue";
import { useRouter } from "vue-router";

export default {
  name: "userDashboard",
  components: {
    btn,
    inputs,
    lists,
  },
  setup() {
    const dataStore = useDataStore();
    const router = useRouter();
    dataStore.setUserName(router.currentRoute.value.params.userName);
    function toLoginPage() {
      router.replace("/");
    }
    return { dataStore, toLoginPage };
  },
};
</script>
