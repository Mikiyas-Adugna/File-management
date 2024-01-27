<template>
  <input
    type="text"
    class="inline-block outline-orange-200 focus:border focus:border-orange-200 border px-3 py-1 rounded-md"
    v-model="documentName"
    @keyup.enter="createNewDocument(documentName)"
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

    async function createNewDocument(documentName) {
      dataStore.visibility;
      let updatedFileManger = {};
      const { fileManager } = await addToExplorer(0);
      if (dataStore.category !== "file")
        updatedFileManger = createNewFolder(
          fileManager,
          dataStore.documentName,
          documentName
        );
      else
        updatedFileManger = createNewFile(
          fileManager,
          dataStore.documentName,
          documentName
        );
      updateUserFile(0, updatedFileManger);
    }

    // these function are identical will work on that latter

    function createNewFolder(fileManager, parentFolderName, newFolderName) {
      if (fileManager.folder) {
        for (const folder of fileManager.folder) {
          if (folder.name === parentFolderName) {
            if (!folder.folder) {
              folder.folder = [];
            }
            folder.folder.push({ name: newFolderName, file: [], folder: [] });
            return fileManager;
          }

          const result = createNewFolder(
            folder,
            parentFolderName,
            newFolderName
          );
          if (result) {
            return fileManager;
          }
        }
      }
    }

    function createNewFile(fileManager, parentFolderName, newFileName) {
      if (fileManager.folder) {
        for (const folder of fileManager.folder) {
          if (folder.name === parentFolderName) {
            console.log("success");
            if (!folder.file) {
              folder.file = [];
            }
            folder.file.push({ name: newFileName });
            return fileManager;
          }

          const result = createNewFile(folder, parentFolderName, newFileName);
          if (result) {
            return fileManager;
          }
        }
      }
    }

    return { documentName, dataStore, createNewDocument };
  },
};
</script>
