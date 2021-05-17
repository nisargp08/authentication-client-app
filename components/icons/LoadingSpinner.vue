<template>
  <div
    class="fixed inset-0 flex items-center justify-center rounded-xl bg-gray-900 bg-opacity-50"
  >
    <div class="flex flex-col justify-center items-center">
      <svg
        class="animate-spin h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <!-- Loading message slot -->
      <div class="text-center">
        <p class="text-white font-medium mt-2">Loading...</p>
        <div
          class="py-2 px-4 text-sm font-medium bg-green-200 text-green-700 rounded-md mt-4"
        >
          <p>
            First initial page load might take 15-30 seconds<br />
            as heroku servers go to sleep when idle.😴
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
