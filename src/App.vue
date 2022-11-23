<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
  </section>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    // const uName = ref("Daria");
    // const uAge = ref(28);
    const user = reactive({
      name: "Daria",
      age: 28,
    });

    setTimeout(() => {
      user.name = "Dasha";
      user.age = 29;
    }, 2000);

    return { user };
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
