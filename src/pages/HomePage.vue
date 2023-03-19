<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const USERS = gql`
  query Users {
    users {
      data {
        id
        name
        username
        phone
        website
      }
    }
  }
`;
const { result, loading, error } = useQuery(USERS);
</script>

<template>
  <h1>List of users</h1>
  <h1 v-if="loading">loading...</h1>
  <ul v-else v-for="user in result.users.data" :key="user.id">
    <li>
      <RouterLink class="user" :to="'/user/' + user.id">#{{ user.id }} {{ user.name }}</RouterLink>
    </li>
  </ul>
</template>

<style scoped>
.user {
  padding: 16px 5px;
  color: white;
  font-size: 20px;
}
.user:hover {
  text-decoration: underline;
}
</style>
