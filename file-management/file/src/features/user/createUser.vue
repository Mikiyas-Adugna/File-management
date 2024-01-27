<template>
  <div class="flex items-center justify-center w-screen h-screen">
    <form
      class="flex flex-col items-start space-y-3"
      @submit.prevent="entries ? signUp() : login()"
    >
      <input
        class="inline-block outline-orange-200 focus:border focus:border-orange-200 px-4 py-2 rounded-md"
        type="text"
        placeholder="UserName"
        required
        v-model.lazy="userName"
      />
      <input
        v-if="entries"
        class="inline-block outline-orange-200 focus:border focus:border-orange-200 border px-4 py-2 rounded-md"
        type="email"
        required
        placeholder="email"
        v-model.lazy="email"
      />
      <input
        class="inline-block outline-orange-200 focus:border focus:border-orange-200 border px-4 py-2 rounded-md"
        type="password"
        required
        placeholder="password"
        v-model.lazy="password"
      />
      <p
        v-if="entries"
        class="text-blue-500 cursor-pointer"
        @click="toggleEntries"
      >
        already have account
      </p>
      <p
        v-if="!entries"
        class="text-blue-500 cursor-pointer"
        @click="toggleEntries"
      >
        &larr; back to signup
      </p>
      <button type="submit">
        <btn v-if="entries" :btnName="'Sign Up'"></btn>
        <btn v-else :btnName="'Login'"></btn>
      </button>

      <p class="text-red-500">{{ warning }}</p>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { createUser, authentication } from "../../service/allInOne";
import btn from "../../ui/button.vue";
import { useDataStore } from "../../service/store";

export default {
  components: {
    btn,
  },
  name: "User",
  setup() {
    const router = useRouter();
    const dataStore = useDataStore();

    const userName = ref("");
    const password = ref("");
    const email = ref("");
    const warning = ref("");
    const entries = ref(true);

    const toggleEntries = () => {
      entries.value = !entries.value;
    };

    async function signUp() {
      if (!validateForm()) return;

      const isSignedUp = authentication({ name: userName.value }, "signUp");
      if (!isSignedUp) {
        createUser({
          name: userName.value,
          password: password.value,
          email: email.value,
          fileManger: {
            folder: [],
            file: [],
          },
        });
        router.push({
          name: "dashboard",
          params: { userName: userName.value },
        });
      } else {
        router.push("/");
        setWarning("sorry the userName is taken please try other username");
      }
    }

    async function login() {
      if (!validateForm()) return;

      const isLoggedIn = await authentication(
        {
          name: userName.value,
          password: password.value,
        },
        "login"
      );

      if (isLoggedIn)
        router.push({
          name: "dashboard",
          params: { userName: userName.value },
        });
      else {
        router.push("/");
        setWarning("please first signup to login");
      }
    }

    const validateForm = () => {
      return (
        userName.value.trim() !== "" &&
        password.value.trim() !== "" &&
        (entries.value ? email.value.trim() !== "" : true)
      );
    };

    function setWarning(value) {
      warning.value = value;
    }

    return {
      userName,
      password,
      email,
      entries,
      toggleEntries,
      signUp,
      login,
      warning,
    };
  },
};
</script>
