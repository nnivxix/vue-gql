import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";

import "./style.css";
import router from "./router";
import App from "./App.vue";

const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
  cache,
  uri: "https://graphqlzero.almansi.me/api",
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});
app.use(router);
app.mount("#app");
