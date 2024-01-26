<template>
  <input
    type="text"
    class="inline-block outline-orange-200 focus:border focus:border-orange-200 border px-3 py-1 rounded-md"
    v-model="documentName"
    @keyup.enter="
      dataStore.category === 'file'
        ? NewFolder(documentName)
        : createNewFile(documentName)
    "
  />
</template>

<script>
import { ref } from "vue";
import { useDataStore } from "@/service/store";
import { addToExplorer, updateUserFile } from "../service/allInOne";
export default {
  setup() {
    const documentName = ref("");
    const dataStore = useDataStore();
    NewFolder();
    async function NewFolder(documentName) {
      // const updatedFileManger = await createNewFolder("folder-4", "folder-1");
      // updateUserFile(0, updatedFileManger);
    }
    // async function createNewFolder(documentName, parent) {
    //   const data = await addToExplorer(0);
    //   const wantedFolder = data.fileManager.folder.find(
    //     (folder) => folder.name === parent
    //   );

    //   if (wantedFolder && wantedFolder.folder) {
    //     const existingDocument = wantedFolder.folder.find(
    //       (folder) => folder.name === documentName
    //     );
    //     if (existingDocument) {
    //       console.log("the folder already exist"  );
    //       return;
    //     } else wantedFolder.folder.push({ name: documentName });
    //   } else wantedFolder.folder = [{ name: documentName }];

    //   return data.fileManager;
    // }

    function createNewFile() {}

    return { documentName, dataStore, NewFolder, createNewFile };
  },
};
</script>
