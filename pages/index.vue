<template>
  <div class="c-container">
    <section class="c-catch">
      <h2 class="c-catch-title">Under Design</h2>
      <p class="c-description">
        目先のことばかりを気にして考える時間はここまで<br />
        これより先は視野を広め、壁を見上げながらよじ登ろうじゃないか<br />
        クリエイティブな思考や面白い概念を知識として積み上げる<br />
        さぁ、誇りある自分と共に前を向いて走れ！
      </p>
    </section>
    <main class="c-contents"></main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
</script>

<style lang="scss">
.c-container {
  background-color: $white;
  .c-catch {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 28px;
    @include tablet {
      margin: 0 64px;
    }
    .c-catch-title {
      width: 100%;
      margin-bottom: 48px;
      font-size: 64px;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      text-align: center;
      line-height: 1.15;
      font-family: "Avenir Next", Helvetica, Arial, sans-serif;
      @include tablet {
        font-size: 96px;
      }
      @include desktop {
        font-size: 11.24vw;
        max-width: 64%;
        text-align: left;
      }
    }
    .c-description {
      width: 100%;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.05em;
      @include tablet {
        font-size: 16px;
      }
      @include desktop {
        max-width: 32%;
        margin-top: 1.24vw;
        font-size: 1.64vw;
        line-height: 1.8;
      }
    }
  }
  .c-contents {
    padding: 0 64px;
  }
}
</style>
