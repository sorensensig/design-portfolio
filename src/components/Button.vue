<template>
  <button class="button" :class="[type, size]">
    {{ buttonText }}
    <div v-if="iconName">
      <i class="material-icons">{{ iconName }}</i>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    type: String,
    size: String,
    buttonText: String,
    iconName: String
  }
};
</script>

<style lang="scss">
.button {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  overflow: hidden;
  border-radius: 5px;
  font-weight: 700;
  cursor: pointer;

  div {
    display: flex;
    transition: all 0.2s;

    &::after {
      content: "";
      position: absolute;
      background: var(--color-neutral-700);
      z-index: 0;
    }
  }

  &:hover {
    div {
      position: relative;

      i {
        position: relative;
        margin-left: 0.5rem;
        z-index: 1;
      }

      &::after {
        background: var(--color-neutral-500);
      }
    }
  }
}

.primary-btn {
  color: var(--color-neutral-700);
  background: var(--color-neutral-600);
}

.secondary-btn {
  color: var(--color-neutral-700);
  border: 2px solid var(--color-neutral-700);
}

.tertiary-btn {
  color: var(--color-neutral-700);
}

.xs-btn {
  font-size: 12px;
  padding: 0.375rem 0.5rem;

  div {
    margin-left: 0.5rem;

    i {
      font-size: var(--size-icon-14);
    }
  }
}

.primary-btn.xs-btn {
  &:hover {
    div {
      padding-left: 0.375rem;

      &::after {
        height: calc(100% + 1.5rem);
        width: calc(100% + 0.75rem);
        top: -0.75rem;
        right: -1rem;
      }
    }
  }
}

.sm-btn {
  font-size: 14px;
  padding: 0.5rem 0.625rem;

  div {
    margin-left: 0.625rem;

    i {
      font-size: var(--size-icon-16);
    }
  }
}

.primary-btn.sm-btn {
  &:hover {
    div {
      padding-left: 0.5rem;

      &::after {
        height: calc(100% + 1.75rem);
        width: calc(100% + 0.75rem);
        top: -0.875rem;
        right: -1rem;
      }
    }
  }
}

.md-btn {
  font-size: 16px;
  padding: 0.75rem 1rem;

  div {
    margin-left: 1rem;
    
    i {
      font-size: var(--size-icon-18);
    }
  }
}

.primary-btn.md-btn {
  &:hover {
    div {
      padding-left: 0.75rem;

      &::after {
        height: calc(100% + 2rem);
        width: calc(100% + 0.75rem);
        top: -1rem;
        right: -1rem;
      }
    }
  }
}

.lg-btn {
  font-size: 20px;
  padding: 0.9375rem 1.875rem;

  div {
    margin-left: 0.9375rem;

    i {
      font-size: var(--size-icon-24);
    }
  }
}

.primary-btn.lg-btn {
  &:hover {
    div {
      padding-left: 1.875rem;

      &::after {
        height: calc(100% + 3rem);
        width: calc(100% + 0.75rem);
        top: -1.5rem;
        right: -1.875rem;
      }
    }
  }
}
</style>
