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
    <div class="space-x-2 px-4 py-3"></div>
    <div>display</div>
  </div>
</template>

<script>
import btn from "../../ui/button.vue";
import inputs from "../../ui/inputs.vue";
import { useDataStore } from "@/service/store";
import lists from "../../ui/lists.vue";

export default {
  name: "userDashboard",
  components: {
    btn,
    inputs,
    lists,
  },
  setup() {
    const dataStore = useDataStore();

    return { dataStore };
  },
};
</script>
