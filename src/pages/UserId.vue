<template>
  <h1 v-if="loading">loading...</h1>
  <div v-else>
    <h1>Name: {{ result?.user?.name }}</h1>
    <h2>email: {{ result?.user?.email }}</h2>
  </div>
  <button @click="$router.push('/')">Back to list users</button>
</template>

<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useRoute } from "vue-router";

const id = useRoute().params.id as string;

const USER = gql`
  query ($id: ID!) {
    user(id: $id) {
      id
      name
      username
      email
    }
  }
`;
const { result, loading } = useQuery(USER, {
  id,
});
</script>

<style scoped></style>
