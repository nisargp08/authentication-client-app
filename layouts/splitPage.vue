<template>
  <div class="min-h-screen bg-white flex">
    <!-- Left side -->
    <div
      class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
    >
      <Nuxt />
    </div>
    <!-- Right side -->
    <div class="hidden lg:block relative w-0 flex-1">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        src="/images/login-bg.jpg"
        alt=""
      />
    </div>
  </div>
</template>
