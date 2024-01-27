<template>
  <ul v-if="items.length > 0" class="w-full mt-6">
    <li
      v-for="name in items"
      @click="dataStore.documentName = name"
      class="hover:bg-gray-300 px-3 py-2 flex flex-col"
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
          items.value.push(folder.name);

          if (folder.folder) {
            documentList(folder);
          }

          if (folder.file) {
            for (const file of folder.file) {
              items.value.push(file.name);
            }
          }
        }
      }
      if (fileManager.file) {
        for (const file of fileManager.file) {
          items.value.push(file.name);
        }
      }
    }
    return { dataStore, items };
  },
};
</script>
<!-- https://dev.carsonbain.com/blog/create-file-input-component-in-vue -->

<!-- https://www.google.com/search?q=how+to+allow+user+to+create+a+file+using++and+vue&sca_esv=602036652&ei=GmK1ZaytJ4Cui-gPvYin2AM&udm=&ved=0ahUKEwisosyBr_6DAxUA1wIHHT3ECTsQ4dUDCBA&oq=how+to+allow+user+to+create+a+file+using++and+vue&gs_lp=Egxnd3Mtd2l6LXNlcnAiMWhvdyB0byBhbGxvdyB1c2VyIHRvIGNyZWF0ZSBhIGZpbGUgdXNpbmcgIGFuZCB2dWUyBRAhGKABMgUQIRigAUjRVFD5BFj4EnABeAGQAQCYAZ0DoAG4CaoBBTMtMi4xuAEMyAEA-AEBwgIKEAAYRxjWBBiwA8ICCBAAGIAEGKIE4gMEGAAgQYgGAZAGCA&sclient=gws-wiz-serp -->
