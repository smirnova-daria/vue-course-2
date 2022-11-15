<template>
  <li>
    <h2>{{ name }} {{ isFriendFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleDetails">Show details</button>
    <button @click="toggleFavorite">
      {{ isFriendFavorite ? "Remove from " : "Add to " }} favorite
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong> {{ phoneNumber }}</li>
      <li><strong>Email: </strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function (value) {
      //   return value === "1" || value === "0";
      // },
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      isFriendFavorite: this.isFavorite,
      friend: {
        id: "liza",
        name: "Liza Mironova",
        phone: "0123 4567 890",
        email: "liza@hello.js",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // if (this.isFriendFavorite === "1") {
      //   this.isFriendFavorite = "0";
      // } else {
      //   this.isFriendFavorite = "1";
      // }

      this.isFriendFavorite = !this.isFriendFavorite;
    },
  },
};
</script>

<style></style>
