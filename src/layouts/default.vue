<template>
  <div class="container">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import "@/styles/static/normalize.css";
import "@/styles/globalStyle.css";
import Navbar from "@/layouts/navigation/Navbar.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    Navbar
  }
});
</script>

<style lang="scss"></style>
