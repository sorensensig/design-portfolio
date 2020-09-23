<template>
  <section class="page-links">
    <ul>
      <li>
        <a href="#work">
          <h3>Work</h3>
          <p>Have a look at my previous work</p>
        </a>
      </li>
      <li>
        <a href="#skills">
          <h3>What I do</h3>
          <p>Check out where my skills lie</p>
        </a>
      </li>
      <li>
        <a href="#about">
          <h3>About Me</h3>
          <p>Just a bit about me and who I am</p>
        </a>
      </li>
      <li>
        <a href="#contact">
          <h3>Contact</h3>
          <p>Let's get in touch!</p>
        </a>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
@use "@/styles/components/mixins.scss";

.page-links {
  padding: 0 0.5rem;

  h3 {
    font-weight: 400;
    margin: 0;
    display: flex;
    align-items: center;
    color: var(--color-neutral-900);
  }

  p {
    font-size: 0.5rem;
    margin-top: -0.1rem;
    margin-left: 2rem;
    margin-bottom: 0;
    color: var(--color-neutral-700);
  }

  li {
    position: relative;
    padding: 0.3125rem 1rem;
    cursor: pointer;
    z-index: 1;
    transition: transform 0.5s;

    a {
      text-decoration: none;
    }

    h3::before {
      @include mixins.icon-background;
      margin-right: 0.5rem;
    }
    &:first-of-type {
      margin-top: 1.1875rem;

      h3::before {
        content: "work";
      }
    }
    &:nth-of-type(2) h3::before {
      content: "school";
    }
    &:nth-of-type(3) h3::before {
      content: "face";
    }
    &:last-of-type {
      margin-bottom: 0.6875rem;

      h3::before {
        content: "email";
      }
    }

    &::after {
      content: "";
      position: absolute;
      width: 186px;
      height: 43px;
      top: 0;
      left: 0;
      border-radius: 5px;
      z-index: -1;
    }

    &:hover {
      transform: translateX(2px);
    }

    &:hover::after {
      background: var(--color-neutral-100);
      animation: li-slide-in 0.2s ease-in forwards;
    }

    @keyframes li-slide-in {
      0% {
        width: 50px;
      }
      100% {
        width: 186px;
      }
    }
  }
}
</style>
