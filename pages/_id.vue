<template>
  <h1>User route {{ userId }}</h1>
</template>

<script>
export default {
  middleware: 'auth',
  asyncData({ params }) {
    const userId = params.id
    return {
      userId,
    }
  },
}
</script>

<style></style>
