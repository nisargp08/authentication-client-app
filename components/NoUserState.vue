<template>
  <section
    class="no-image-state-container flex flex-col items-center justify-center flex-1 px-4"
  >
    <div class="w-56 sm:w-72">
      <img src="/images/no-user-state.svg" alt="No users found" />
    </div>
    <div class="mt-4 text-center">
      <template v-if="isErrorState">
        <slot></slot>
      </template>
      <template v-else>
        <slot></slot>
        <div class="mt-4">
          <nuxt-link :to="{ name: 'signup' }" class="theme-button"
            >Register now!</nuxt-link
          >
        </div>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    isErrorState: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
