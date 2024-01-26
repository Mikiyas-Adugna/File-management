<template>
  <div class="flex items-center justify-center w-screen h-screen">
    <div class="flex flex-col items-start space-y-3">
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
      <router-link to="/dashboard">
        <btn v-if="entries" :btnName="'sign up'" @click="signUp()"></btn>
      </router-link>
      <router-link to="/dashboard">
        <btn v-if="!entries" :btnName="'Login'" @click="login()"></btn>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import btn from "../../ui/button.vue";
import { createUser, isSignUpBefore } from "../../service/allInOne";
export default {
  name: "user",
  components: {
    btn,
  },
  setup() {
    let userLogin = ref({});
    let userSign_up = ref({});
    let entries = ref(true);
    const userName = ref("");
    const password = ref("");
    const email = ref("");

    const toggleEntries = () => {
      entries.value = !entries.value;
    };
    userSign_up.value = {
      name: userName.value,
      password: password.value,
      email: email.value,
      folder: {},
      file: {},
    };
    userLogin.value = {
      name: userName.value,
      password: password.value,
    };

    function signUp() {
      // createUser(userSign_up.value);
    }

    function login() {
      // isSignUpBefore(userLogin.value);
    }

    watch([userName, password, email], () => {
      userLogin.value.name = userName.value;
      userLogin.value.password = password.value;
      userSign_up.value.name = email.value;
      userSign_up.value.password = email.value;
      userSign_up.value.email = email.value;
    });

    return { entries, toggleEntries, signUp, login, userName, password, email };
  },
};
</script>
