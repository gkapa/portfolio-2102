<template>
  <nav>
    <Hide when="dd">
      <div class="logo">
        <h1>Navigation bar here</h1>
      </div>
    </Hide>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import Hide from "@/atoms/Hide.vue";
import Home from "@/components/home/Home.vue";

export default Vue.extend({
  components: {
    Hide
  },

  data() {
    return {};
  },

  mounted() {}
});
</script>

<style lang="scss" scoped></style>
