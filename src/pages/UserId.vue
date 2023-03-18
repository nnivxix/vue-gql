<template>
  <h1 v-if="loading">loading...</h1>
  <div v-else>
    <h1>Name: {{ result?.user?.name }}</h1>
    <h2>email: {{ result?.user?.email }}</h2>
  </div>

  <form @submit.prevent="updateUser()" class="form">
    <input class="input" type="text" v-model="name" />
    <button>Update User</button>
  </form>

  <button @click="$router.push('/')">Back to list users</button>
</template>

<script setup lang="ts">
import { useQuery, useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const id = useRoute().params.id as string;
const name = ref("");
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
const UPDATEUSER = gql`
  mutation updateUser($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      name
      email
    }
  }
`;

const { mutate } = useMutation(UPDATEUSER);
function updateUser() {
  mutate({
    id,
    input: {
      name: name.value,
    },
  });
}
const { result, loading } = useQuery(USER, {
  id,
});

watch(result, () => {
  result;
});
</script>

<style scoped>
.input {
  padding: 10px;
}
.form {
  margin: 10px 2px;
}
</style>
