<template>
  <section class="card" :class="elevation">
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    elevation: String
  }
};
</script>

<style lang="scss">
.card {
  width: fit-content;
  border-radius: 0.315rem;
  background: white;
}
</style>
