<template>
  <header id="hero" class="hero">
    <section>
      <h1><span role="img" aria-label="wave">👋</span>Hi there!</h1>
      <h2>
        I'm Sigurd, a <span>product designer</span> and web developer based in
        Norway
      </h2>
      <Button
        onclick="window.location.href='#work'"
        buttonText="Browse Work"
        type="primary-btn"
        size="md-btn"
        iconName="arrow_forward"
      />
    </section>
  </header>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Hero",
  components: {
    Button
  }
};
</script>

<style scoped lang="scss">
.hero {
  background-color: var(--color-neutral-100);
  height: calc(100vh + 156px);

  section {
    padding-top: 40vh;
    padding-left: 2rem;

    h1 {
      margin: 0 0 calc(var(--size-h1) * 0.3) -0.3rem;
    }

    h2 {
      margin: 0 0 calc(var(--size-h1) * 0.5) 0;
      width: 260px;
    }

    button {
      margin-left: -0.2rem;
    }

    h2 span {
      color: var(--color-neutral-800);
    }
  }
}
</style>
