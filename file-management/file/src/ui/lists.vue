<template>
  <ul v-if="items.length > 0" class="w-full mt-6">
    <li v-for="name in items" class="hover:bg-gray-300 px-3 py-2 flex flex-col">
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
    let documents = ref({});

    userData();
    async function userData() {
      const data = await addToExplorer(0);
      documentList(data.fileManager);
    }

    function documentList(fileManager) {
      if (fileManager.folder) {
        for (const folder of fileManager.folder) {
          items.value.push(folder.name);

          if (folder.file) {
            for (const file of folder.file) {
              items.value.push(file.name);
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
