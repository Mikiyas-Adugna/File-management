<template>
  <ul v-if="items.length > 0" class="w-full px-8 mt-6 space-y-1">
    <li
      v-for="name in items"
      class="bg-gray-300 px-3 py-1 rounded-lg w-full flex flex-col"
    >
      {{ name }}
    </li>
  </ul>
</template>

<script>
import { useDataStore } from "@/service/store";
import { addToExplorer } from "@/service/allInOne";
import { ref } from "vue";

export default {
  setup() {
    const dataStore = useDataStore();
    const items = ref([]);

    userData();
    async function userData() {
      const data = await addToExplorer(0);
      documentList(data.fileManager);
    }

    function documentList(fileManager) {
      if (fileManager.folder) {
        for (const folder of fileManager.folder) {
          console.log("Folder:", folder.name);

          if (folder.file) {
            for (const file of folder.file) {
              console.log("File:", file.name);
            }
          }

          documentList(folder);
        }
      }
    }
    return { dataStore, items };
  },
};
</script>
