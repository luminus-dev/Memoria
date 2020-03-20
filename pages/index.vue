<template>
  <div>
    <section class="b-container">
      <h2 class="b-page-title">Under Design</h2>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
</script>

<style lang="scss">
.b-container {
  background-color: $white;
  .b-page-title {
    font-size: 40px;
    font-weight: 700;
    margin: 0 28px;
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
