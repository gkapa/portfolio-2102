<template>
  <div class="hide container" :style="style">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { media } from "@/styles/theme";

type IProps =
  | "lessThanMobile"
  | "lessThanTablet"
  | "lessThanLaptop"
  | "greaterThanMobile"
  | "greaterThanTablet"
  | "greaterThanLaptop";

export default Vue.extend({
  name: "hide",

  props: {
    when: {
      type: String,
      required: true
    }
  },

  mounted() {},

  computed: {
    style: function() {
      return {
        "--test": media["lessThanMobile"]
      };
    }
  }
});
</script>

<style lang="scss" scoped></style>
