<template>
  <div>
    <p class="text-sm font-medium text-gray-700">{{ mode }} with</p>

    <div class="mt-1 grid grid-cols-3 gap-3">
      <div>
        <a href="#" class="social-icons">
          <span class="sr-only">{{ mode }} in with Facebook</span>
          <icons-facebook></icons-facebook>
        </a>
      </div>

      <div>
        <a href="#" class="social-icons">
          <span class="sr-only">{{ mode }} in with Twitter</span>
          <icons-twitter></icons-twitter>
        </a>
      </div>

      <div>
        <a href="#" class="social-icons">
          <span class="sr-only">{{ mode }} in with GitHub</span>
          <icons-github></icons-github>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: 'Login',
    },
  },
}
</script>
