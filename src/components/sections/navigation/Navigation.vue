<template>
  <section class="navigation">
    <section id="brand-logo">
      <a href="#hero">Logo</a>
    </section>
    <section id="nav-menu">
      <div class="menu-button" @click="toggleNavbar">
        <i class="material-icons">arrow_drop_down_circle</i>
      </div>
      <transition name="toggle-nav">
        <Card elevation="elevate-300" v-if="isNavExpanded">
          <nav>
            <CardList />
          </nav>
          <CardSocial />
        </Card>
      </transition>
    </section>
  </section>
</template>

<script>
import Card from "@/components/Card.vue";
import CardList from "@/components/sections/navigation/CardList.vue";
import CardSocial from "@/components/sections/navigation/CardSocial.vue";

export default {
  name: "navigation",
  components: {
    Card,
    CardList,
    CardSocial
  },
  data() {
    return {
      isNavExpanded: false
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavExpanded = !this.isNavExpanded;
    }
  }
};
</script>

<style lang="scss">
.navigation {
  position: fixed;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 4rem);
  margin: 2rem;

  #nav-menu {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .toggle-nav-enter-active {
      transform-origin: top right;
      animation: expand 0.2s ease-out forwards;
    }

    .toggle-nav-leave-active {
      transform-origin: top right;
      animation: collapse 0.2s ease-in forwards;
    }

    @keyframes expand {
      from {
        transform: translate(-25px, -25px) scale(0);
      }
      to {
        transform: translate(0, 0) scale(1);
      }
    }

    @keyframes collapse {
      from {
        transform: translate(0, 0) scale(1);
      }
      to {
        transform: translate(-25px, -25px) scale(0);
      }
    }

    > .card {
      margin-right: -8px;
      margin-top: 12px;
      position: relative;

      &::before {
        content: "";
        display: block;
        position: absolute;
        height: 20px;
        width: 20px;
        top: 0;
        right: 19px;
        transform: rotate(135deg) translate(-35%);
        background: white;
      }
    }
  }
}

.menu-button {
  width: fit-content;
  height: fit-content;
  cursor: pointer;

  i {
    color: var(--color-neutral-600);
    font-size: 32px;
    display: flex;

    &:before {
      content: "";
      display: inline-block;
      position: absolute;
      z-index: -1;
      margin: 6px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--color-neutral-800);
    }
  }
}
</style>
