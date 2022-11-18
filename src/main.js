import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import TeamsList from "./components/teams/TeamsList.vue";
import UsersList from "./components/users/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import NotFound from "./components/nav/NotFound.vue";
import TeamsFooter from "./components/teams/TeamsFooter.vue";
import UsersFooter from "./components/users/UsersFooter.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/teams" },
    {
      path: "/teams",
      name: "teams",
      components: { default: TeamsList, footer: TeamsFooter },
      // alias: "/",
      children: [
        {
          path: ":teamId",
          name: "team-members",
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: "/users",
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log("before enter router");
        next();
      },
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {
      left: 0,
      top: 0,
    };
  },
});

// router.beforeEach((to, from, next) => {
//   next()
// })

const app = createApp(App);
app.use(router);
app.mount("#app");
