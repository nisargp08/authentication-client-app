<template>
  <div class="flex flex-col min-h-screen h-full bg-gray-800">
    <navbar></navbar>
    <div
      class="flex flex-col flex-1 items-center max-w-screen-2xl w-full mx-auto text-white"
    >
      <slot>
        <Nuxt />
      </slot>
    </div>
  </div>
</template>

<style>
html {
  font-family: 'Inter', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
::-webkit-scrollbar {
  width: 20px;
}
::-webkit-scrollbar-track {
  @apply bg-gray-800;
}
::-webkit-scrollbar-thumb {
  @apply bg-gray-700;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}
::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-600;
}
</style>
