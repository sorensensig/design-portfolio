<template>
  <header id="work" class="work">
    <section>
      <h3>Some of my Work</h3>
      <transition name="toggle-project">
        <!-- add transition classes -->
        <Card elevation="elevate-100" @click.native="toggleProject">
          <div class="expand-button elevate-200">
            <i class="material-icons">chevron_right</i>
            <p>Show more</p>
          </div>
          <div class="image-wrapper">
            <img src="@/assets/emories-project-image.jpg" />
          </div>
          <div class="overlay">
            <div class="body-wrapper">
              <h4>E-mories</h4>
              <p>
                Meaningful conversations between friends and family remotely
              </p>
            </div>
          </div>
        </Card>
      </transition>
    </section>
  </header>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "work",
  components: {
    Card
  },
  data() {
    return {
      isExpanded: false
    };
  },
  methods: {
    toggleProject() {
      this.isExpanded = !this.isExpanded;
      if (this.isExpanded) {
        this.animateExpand();
      } else {
        this.animateCollapse();
      }
      // apply class that initialises the animation
      // remove card content when animating
      // color entire background the correct color
    },
    animateExpand() {

    },
    animateCollapse() {

    },
    afterEnter() {
      // When finished set animate to false?
      // then, push route
    }
  }
};
</script>

<style lang="scss">
@use "@/styles/components/mixins.scss";

.work {
  height: 100vh;
  width: calc(100% - 4rem);
  margin: -156px 2rem 0 2rem;

  h3 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 3rem;
  }

  .card {
    width: 100%;
    position: relative;
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out;

    .expand-button {
      @include mixins.icon-background;
      z-index: 11;
      position: absolute;
      display: flex;
      width: 2rem;
      height: 2rem;
      top: calc(50% - 1rem);
      transform: translateX(-1rem);
      background: hsl(4, 30%, 70%);
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      overflow: hidden;

      i,
      p {
        position: absolute;
        left: 0;
      }

      i {
        padding-left: 4px;
        font-size: var(--size-icon-24);
        color: hsl(4, 13%, 23%);
      }

      p {
        padding-left: 32px;
        white-space: nowrap;
        display: inline-block;
        font-size: 0.625rem;
        font-weight: 700;
        color: hsl(4, 13%, 23%);
      }
    }

    &:hover {
      box-shadow: 0px 2px 4px #0000001f, 0px 3px 6px #00000026;

      .expand-button {
        width: 6.3rem;
        border-radius: 100px;
        box-shadow: 0px 3px 6px #0000001a, 0px 10px 20px #00000026;
      }
    }

    .image-wrapper {
      overflow: hidden;
      height: 150px;
      width: 160px;
      border-radius: 5px 0 0 5px;

      img {
        height: 180%;
        width: auto;
        transform: translate(-15%, -25%);
      }
    }

    .overlay {
      position: absolute;
      width: inherit;
      height: inherit;
      top: 0;
      bottom: 0;
      border-radius: 5px;
      background-image: linear-gradient(
        to left,
        hsla(4, 13%, 23%, 100%),
        hsla(4, 13%, 23%, 100%) 50%,
        hsla(4, 13%, 23%, 0%) 70%
      );

      .body-wrapper {
        width: 46%;
        position: absolute;
        top: 0;
        right: 1rem;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h4 {
          color: hsl(4, 30%, 70%);
        }

        p {
          font-size: 0.625rem;
          margin: 0;
          color: hsl(4, 30%, 70%);
          line-height: 0.9375rem;
        }
      }
    }
  }
}
</style>
