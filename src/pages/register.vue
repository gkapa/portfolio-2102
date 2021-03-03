<template>
  <div :style="{ margin: 'auto', padding: '2.5rem' }">
    <h1>Register</h1>

    <!-- case: Unauthenticated -->
    <div v-if="!$store.state.auth.isAuthenticated">
      <!-- form: Register -->
      <form v-if="step === steps.register" @submit.prevent="register">
        <v-text-field
          class="form-input"
          v-model="registerForm.email"
          type="email"
          label="Email"
          placeholder="Email"
          outlined
          append-icon="mdi-check-bold"
        />
        <v-text-field
          class="form-input"
          v-model="registerForm.password"
          type="password"
          label="Password"
          placeholder="Password"
          outlined
          append-icon="mdi-check-bold"
        />
        <v-btn type="submit">Register</v-btn>
      </form>

      <!-- form: Confirm Registration -->
      <form v-else @submit.prevent="confirm">
        <v-text-field
          class="form-input"
          v-model="confirmForm.email"
          type="email"
          label="Email"
          placeholder="Email"
          outlined
          append-icon="mdi-check-bold"
        />
        <v-text-field
          class="form-input"
          v-model="confirmForm.code"
          type="text"
          label="Code"
          placeholder="Code"
          outlined
          append-icon="mdi-check-bold"
        />
        <v-btn type="submit">Confirm</v-btn>
      </form>

      <nuxt-link to="/login">Have an account? Login</nuxt-link>
    </div>

    <!-- case: Authenticated -->
    <div v-else>
      You're logged in as {{ $auth.email }}.
      <button class="button--green" @click="$store.disatpch(auth / logout)">
        Logout
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

const steps = {
  register: "REGISTER",
  confirm: "CONFIRM"
};

export default Vue.extend({
  data: () => ({
    steps: { ...steps },
    step: steps.register,
    registerForm: {
      email: "",
      password: ""
    },
    confirmForm: {
      email: "",
      code: ""
    }
  }),

  methods: {
    async register() {
      try {
        await this.$store.dispatch("auth/register", this.registerForm);
        this.confirmForm.email = this.registerForm.email;
        this.step = this.steps.confirm;
      } catch (error) {
        console.log({ error });
      }
    },
    async confirm() {
      try {
        await this.$store.dispatch(
          "auth/confirmRegistration",
          this.confirmForm
        );
        await this.$store.dispatch("auth/login", this.registerForm);
        this.$router.push("/");
      } catch (error) {
        console.log({ error });
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.form-input {
  max-width: 24rem;
}
</style>
