<template>
  <div class="text-sm font-medium rounded-md py-2 px-4" :class="getTypeClass">
    <p v-for="(message, index) in messages" :key="index">
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    // Set the component color based on the recieved type
    getTypeClass() {
      switch (this.type) {
        case 'error':
          return 'bg-red-100 text-red-700'
        case 'success':
          return 'bg-green-100 text-green-700'
        default:
          return 'bg-gray-100 text-gray-700'
      }
    },
  },
}
</script>

<style></style>
