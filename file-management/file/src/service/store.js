import { defineStore } from "pinia";

export const useDataStore = defineStore("counter", {
  state: () => {
    return {
      avail: true,
      category: "",
      data: "",
      userName: "",
      loggedIn: false,
    };
  },
  actions: {
    fileOrFolder(type) {
      this.category = type === "file" ? "file" : "folder";
      this.visibility;
    },
    setUserName(name) {
      this.userName = name;
    },
  },
  getters: {
    visibility() {
      return (this.avail = !this.avail);
    },
    isValid() {
      return (this.valid = !this.valid);
    },
    isLoggedIn() {
      return (this.loggedIn = !this.loggedIn);
    },
  },
});
