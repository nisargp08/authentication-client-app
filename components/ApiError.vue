<template>
  <div class="flex flex-col items-center justify-center m-8">
    <h1 class="text-center text-2xl font-semibold text-red-500">
      Oops ! Error Occured 💥
    </h1>
    <div class="w-56 sm:w-80 mt-8">
      <img src="/images/error.svg" alt="Error" />
    </div>
    <alert class="mt-4" type="error" :messages="messages"></alert>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
}
</script>
