<template>
  <router-view v-slot="slotProps">
    <transition name="fade-button" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
// import UsersList from "./components/ListData.vue";
export default {
  // components: { UsersList },
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      pIsVisible: false,
      userIsVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 10);
    },
    beforeLeave(el) {
      el.style.opacity = 1;
    },
    afterEnter() {},
    leave(el, done) {
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 10);
    },
    afterLeave() {},
    enterCancelled() {
      clearInterval(this.enterInterval);
    },
    leaveCancelled() {
      clearInterval(this.leaveInterval);
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.pIsVisible = !this.pIsVisible;
    },

    showUser() {
      this.userIsVisible = true;
    },
    hideUser() {
      this.userIsVisible = false;
    },
  },
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  transition: 1s;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.route-enter-from {
}
.route-enter-active {
  animation: slide-scale 0.4s;
}
.route-leave-active {
  animation: slide-scale 0.3s;
}
.route-enter-to {
}

.animate {
  /* transform: translateX(-150px); */
  animation: slide-scale 1s forwards;
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
.fade-button-enter-active,
.fade-button-leave-active {
  transition: 0.3s;
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
