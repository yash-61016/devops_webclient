<script setup lang="ts">
import Header from "./components/Header/Header.vue";
import { useAuth0 } from '@auth0/auth0-vue';

const { getAccessTokenSilently } = useAuth0();

const getAccessToken = async () => {
  const token = await getAccessTokenSilently();
  window.localStorage.setItem('token', token);
  console.log(token);
};

getAccessToken();
</script>

<template>
  <div class="flex justify-center">
    <div class="pr-5" style="max-width: 98rem !important;">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
