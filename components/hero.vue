<script setup lang="ts">
console.log(
  "Hero Image by Olia Danilevich https://www.pexels.com/photo/back-to-school-flatlay-5088007/"
);

</script>
<template>
  <header class="hero-header">
    <img src="../assets/imgs/hero.jpg" alt="" class="hero-img" />
    <h1>
      <span class="brand">Xpnses</span>, the only way to track your spending
    </h1>
  </header>
</template>
<style lang="scss">
@use "../assets/scss/utils/mixins/breakpoints" as b;
header.hero-header {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100vw;
    height: 35vh;
    background-color: hsl(202, 98%, 36%);
    opacity: 0.3;
    left: 0;
  }
  .hero-img {
    width: 100vw;
    height: 35vh;
    object-fit: cover;
    filter: blur(2px);
    opacity: 0.6;
  }
  h1 {
    position: absolute;
    top: 25%;
    color: hsl(0, 0%, 0%);
    padding: 0.25rem 0rem 0.25rem 0.5rem;
    @include b.breakpoint(small) {
      padding: 2rem 3rem;
    }
    @include b.breakpoint(medium) {
      padding: 0 1.25rem;
      max-width: 45vw;
    }
  }
}
</style>
