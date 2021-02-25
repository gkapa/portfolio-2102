<template>
  <nav>
    <Hide when="dd">
      <div class="logo">
        <h1>Navigation bar here</h1>
      </div>
      {{
        Hellow.map(x => {
          return x;
        })
      }}
      <h1 v-for="(x, idx) in Hellow" :key="idx">{{ x }}</h1>
    </Hide>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import Hide from "@/atoms/Hide.vue";
import Home from "@/components/home/Home.vue";

const Hellow = [1, 2, 3, 4, 5];

export default Vue.extend({
  components: {
    Hide
  },

  data() {
    return { Hellow };
  },

  mounted() {
    console.log({ Hellow: Hellow });
  }
});
</script>

<style lang="scss" scoped></style>
