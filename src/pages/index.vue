<template>
  <div>
    <Logo />
    <h1 class="title">amplify-nuxt</h1>

    <!-- case: Unathenticated -->
    <div v-if="!$store.state.auth.isAuthenticated">
      <nuxt-link to="/login"><v-btn>Login</v-btn></nuxt-link>
    </div>

    <!-- case: Authenticated -->
    <div v-else>
      <p>You're logged in as {{ $auth.email }}</p>
      <v-btn @click="$store.dispatch('auth/logout')">Logout</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Logo from "@/components/Logo.vue";
import Home from "@/components/home/Home.vue";

export default Vue.extend({
  components: {
    Logo,
    Home
  }
});
</script>

<style lang="scss" scoped></style>
