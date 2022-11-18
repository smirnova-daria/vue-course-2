<template>
  <ul>
    <transition-group tag="ul" name="user-list">
      <li v-for="user in users" :key="user" @click="removeUsesr(user)">
        {{ user }}
      </li>
    </transition-group>
  </ul>
  <div>
    <input type="text" v-model="enteredName" />
    <button @click="addUser">Add user</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ["dasha", "masha", "liza", "alena"],
      enteredName: "",
    };
  },
  methods: {
    removeUsesr(name) {
      this.users = this.users.filter((user) => user !== name);
    },
    addUser() {
      this.users.unshift(this.enteredName);
      this.enteredName = "";
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  border: 1px solid #ccc;
  padding: 1rem;
}

.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
.user-list-enter-active {
  transition: 0.3s;
}
.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-active {
  transition: 0.3s;
  position: absolute;
}

.user-list-move {
  transition: 0.3s;
}
</style>
