<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setAge">Change Age</button>
    <input type="text" placeholder="First Name" v-model="firstName" />
    <input type="text" placeholder="Last Name" ref="lastNameInput" />
    <button @click="setLastNameInput">Set last name</button>
  </section>
</template>

<script>
import { reactive, ref, computed } from "vue";
export default {
  setup() {
    // const uName = ref("Daria");
    // const user = reactive({
    //   name: "Daria",
    //   age: 28,
    // });

    const uAge = ref(28);
    const firstName = ref("");
    const lastName = ref("");
    const lastNameInput = ref(null);

    function setNewAge() {
      uAge.value++;
    }

    function setLastNameInput() {
      lastName.value = lastNameInput.value.value;
    }

    const userName = computed(function () {
      return firstName.value + " " + lastName.value;
    });

    return {
      age: uAge,
      setAge: setNewAge,
      userName,
      firstName,
      lastName,
      lastNameInput,
      setLastNameInput,
    };
  },
  // data() {
  //   return {
  //     userName: "Daria",
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
