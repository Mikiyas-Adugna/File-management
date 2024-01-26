import { defineStore } from "pinia";
import { addToExplorer } from "./allInOne";

export const useDataStore = defineStore("counter", {
  state: () => {
    return {
      avail: true,
      category: "",
      data: "",
      signUp: false,
    };
  },
  actions: {
    fileOrFolder(type) {
      this.category = type === "file" ? "file" : "folder";
      this.visibility;
    },

    isSignUp(signUpBefore) {
      if (signUpBefore) {
        this.signUp = !this.signUp;
      }
    },
   
  },
  getters: {
    visibility() {
      return (this.avail = !this.avail);
    },
  },
});
