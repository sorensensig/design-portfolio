<template>
  <div id="app">
    <Navigation />
    <div id="nav">
      <!-- <router-link to="/e-mories">E-mories</router-link> |
      <router-link to="/ve-spand">VE-SpaND</router-link> |
      <router-link to="/hidden-gems">Hidden Gems</router-link> -->
    </div>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Navigation from "@/components/sections/navigation/Navigation.vue";

export default {
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
:root {
  // Primary Colors
  --color-primary-100: black;
  --color-primary-200: black;
  --color-primary-300: black;
  --color-primary-400: black;
  --color-primary-500: black;
  --color-primary-600: black;
  --color-primary-700: black;
  --color-primary-800: black;
  --color-primary-900: black;

  // Neutral Colors
  --color-neutral-100: #ebebeb;
  --color-neutral-200: black;
  --color-neutral-300: black;
  --color-neutral-400: black;
  --color-neutral-500: #e6e6e6;
  --color-neutral-600: #d9d9d9;
  --color-neutral-700: #707070;
  --color-neutral-800: #666a73;
  --color-neutral-900: #1e1b1b;

  // Accent Colors
  --color-success-100: black;

  // Icon size
  --size-icon-12: 0.75rem;
  --size-icon-14: 0.875rem;
  --size-icon-16: 1rem;
  --size-icon-18: 1.125rem;
  --size-icon-24: 1.5rem;
  --size-icon-36: 2.25rem;
  --size-icon-48: 3rem;

  // Font Sizes
  --size-h1: 2.25rem;
  --size-h2: 1rem;
  --size-h3: 0.875rem;
  --size-h4: 1rem;
}

h1,
h3,
h4 {
  font-family: "Nunito", sans-serif;
}

h2,
p,
button {
  font-family: "Open Sans", sans-serif;
}

h1,
h2,
h4,
p {
  font-weight: 400;
}

h1 {
  font-size: var(--size-h1);
}

h2 {
  font-size: var(--size-h2);
  margin: 0;
}

h3 {
  font-size: var(--size-h3);
  font-weight: 700;
}

h4 {
  font-size: var(--size-h4);
  font-weight: 700;
  margin: 0 0 0.25rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.elevate-100 {
  box-shadow: 0px 1px 2px #0000003d, 0px 1px 3px #0000001f;
  z-index: 10;
}

.elevate-200 {
  box-shadow: 0px 2px 4px #0000001f, 0px 3px 6px #00000026;
  z-index: 20;
}

.elevate-300 {
  box-shadow: 0px 3px 6px #0000001a, 0px 10px 20px #00000026;
  z-index: 30;
}

.elevate-400 {
  box-shadow: 0px 5px 10px #0000000d, 0px 15px 25px #00000026;
  z-index: 40;
}

.elevate-500 {
  box-shadow: 0px 20px 40px #00000033;
  z-index: 50;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
}
</style>
