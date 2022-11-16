<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-image: linear-gradient(
    to right bottom,
    rgb(255, 153, 212),
    rgb(255, 229, 115)
  );
  display: flex;
  justify-content: center;
  align-items: center;
}

header h1 {
  color: rgb(44, 0, 0);
  margin: 0;
}
</style>
