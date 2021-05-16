<template>
  <default-layout>
    <div class="w-full">
      <div class="relative pb-32 overflow-hidden">
        <header class="relative py-10">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-white">Settings</h1>
          </div>
        </header>
      </div>

      <main class="relative -mt-32">
        <div class="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
          <div class="bg-white rounded-lg shadow overflow-hidden">
            <div
              class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x"
            >
              <aside class="py-6 lg:col-span-3">
                <nav class="space-y-1">
                  <a
                    href="#"
                    class="bg-yellow-50 border-yellow-500 text-yellow-700 hover:bg-yellow-50 hover:text-yellow-700 group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
                    aria-current="page"
                  >
                    <svg
                      class="text-yellow-500 group-hover:text-yellow-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span class="truncate"> Profile </span>
                  </a>

                  <a
                    href="#"
                    class="border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900 group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
                  >
                    <svg
                      class="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                      />
                    </svg>
                    <span class="truncate"> Password </span>
                  </a>
                </nav>
              </aside>
              <div class="lg:col-span-9 text-gray-900">
                <Nuxt />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </default-layout>
</template>

<script>
import defaultLayout from '~/layouts/default'
export default {
  components: {
    defaultLayout,
  },
}
</script>
