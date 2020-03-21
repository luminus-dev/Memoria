<template>
  <header class="c-header">
    <h1 class="c-main-title">Memoria</h1>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss">
.c-header {
  display: flex;
  width: 100%;
  margin: 0 auto 64px;
  padding: 12px 16px;
  align-items: center;
  @include tablet {
    padding: 12px 64px;
  }
  .c-main-title {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
}
</style>
