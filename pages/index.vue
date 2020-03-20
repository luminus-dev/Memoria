<template>
  <div class="b-container">
    <h1 class="b-head-1">memoria</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
</script>

<style lang="scss">
.b-container {
  background-color: $white;
  .b-head-1 {
    font-size: 40px;
    font-weight: 700;
    margin: 0 48px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
    font-family: "Avenir Next", Helvetica, Arial, sans-serif;
    @include tablet {
      font-size: 96px;
      margin: 0 64px;
    }
  }
}
</style>
