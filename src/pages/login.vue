<template>
  <div>
    <h1>Login Page</h1>

    <!-- case: Unathenticated -->
    <div v-if="!$store.state.auth.isAuthenticated">
      <form @submit.prevent="login">
        <v-text-field
          class="form-input"
          v-model="loginForm.email"
          type="email"
          label="Email"
          placeholder="Email"
          outlined
          append-icon="mdi-check-bold"
        />
        <v-text-field
          class="form-input"
          v-model="loginForm.password"
          type="password"
          label="Password"
          placeholder="Password"
          outlined
          append-icon="mdi-check-bold"
        />
        <v-btn type="submit">Login</v-btn>
        <nuxt-link to="/register">Need an account? Register</nuxt-link>
      </form>
    </div>

    <!-- case: Authenticated -->
    <div v-else>
      You're logged in as {{ $auth.email }}
      <v-btn @click="$store.dispatch('auth/logout')">Logout</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    loginForm: {
      email: "",
      password: ""
    }
  }),
  methods: {
    async login() {
      try {
        await this.$store.dispatch("auth/login", this.loginForm);
        this.$router.push("/");
      } catch (error) {
        console.log({ error });
      }
    }
  }
});
</script>

<style lang="scss" scoped></style>
