<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 sm:py-4 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <nuxt-link :to="{ name: 'index' }">
              <logo class="block lg:hidden h-8 w-auto" />
              <logo class="hidden lg:block h-10 w-auto" />
            </nuxt-link>
          </div>
        </div>
        <!-- If user is logged in -->
        <template v-if="$auth.loggedIn">
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex items-center">
              <!-- Profile dropdown -->
              <div class="ml-3 relative">
                <div class="flex items-center space-x-3">
                  <span class="font-medium text-white"
                    >Hi, {{ $auth.user.name }}</span
                  >
                  <button
                    id="user-menu-button"
                    type="button"
                    class="bg-gray-600 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-600 focus:ring-white"
                    aria-expanded="false"
                    aria-haspopup="true"
                    @click="toggleMenu()"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="h-8 w-8 rounded-full object-cover"
                      :src="getProfilePhoto($auth.user.profilePhoto)"
                      :alt="$auth.user.name"
                    />
                  </button>
                </div>
                <div
                  v-show="isOpen"
                  class="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  <!-- Active: "bg-gray-100", Not Active: "" -->
                  <nuxt-link
                    id="user-menu-item-0"
                    :to="{ name: 'id', params: { id: $auth.user.username } }"
                    class="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    tabindex="-1"
                  >
                    <icons-user></icons-user>
                    <span class="ml-2">Your Profile</span>
                  </nuxt-link>
                  <nuxt-link
                    id="user-menu-item-0"
                    :to="{ name: 'settings-profile' }"
                    class="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    tabindex="-1"
                  >
                    <icons-settings></icons-settings>
                    <span class="ml-2">Settings</span>
                  </nuxt-link>
                  <a
                    id="user-menu-item-2"
                    href="#"
                    class="flex items-center px-4 py-2 text-sm font-medium text-red-500 hover:bg-gray-100"
                    role="menuitem"
                    tabindex="-1"
                    @click="$auth.logout()"
                  >
                    <icons-logout></icons-logout>
                    <span class="ml-2">Logout</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex sm:hidden">
            <!-- Mobile menu button -->
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              @click="toggleMenu()"
            >
              <span class="sr-only">Open main menu</span>
              <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
              <svg
                v-show="!isOpen"
                class="block h-6 w-6"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
              <svg
                v-show="isOpen"
                class="h-6 w-6"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </template>
        <template v-else>
          <div class="flex items-center gap-x-2">
            <nuxt-link class="white-button" :to="{ name: 'login' }"
              >Login</nuxt-link
            >
            <nuxt-link class="theme-button mt-0" :to="{ name: 'signup' }"
              >Signup</nuxt-link
            >
          </div>
        </template>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="isOpen && $auth.loggedIn" id="mobile-menu" class="sm:hidden">
      <div class="pt-4 pb-3 border-t border-gray-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              :src="getProfilePhoto($auth.user.profilePhoto)"
              :alt="$auth.user.name"
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-white">
              Hi, {{ $auth.user.name }}
            </div>
          </div>
        </div>
        <div class="mt-4 px-2 space-y-1">
          <nuxt-link
            id="user-menu-item-0"
            :to="{ name: 'id', params: { id: $auth.user.username } }"
            class="flex items-center px-4 py-2 text-sm font-medium text-white"
            role="menuitem"
            tabindex="-1"
          >
            <icons-user></icons-user>
            <span class="ml-2">Your Profile</span>
          </nuxt-link>
          <nuxt-link
            id="user-menu-item-0"
            :to="{ name: 'settings-profile' }"
            class="flex items-center px-4 py-2 text-sm font-medium text-white"
            role="menuitem"
            tabindex="-1"
          >
            <icons-settings></icons-settings>
            <span class="ml-2">Settings</span>
          </nuxt-link>
          <a
            id="user-menu-item-1"
            href="#"
            class="flex items-center px-4 py-2 text-sm font-medium text-red-500"
            role="menuitem"
            tabindex="-1"
            @click="$auth.logout()"
          >
            <icons-logout></icons-logout>
            <span class="ml-2">Logout</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  mounted() {
    window.addEventListener('keyup', (e) => {
      if (e.code === 'Escape') {
        this.isOpen = false
      }
    })
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
    getProfilePhoto(url) {
      if (url) {
        return url
      } else {
        return '/images/smiling.svg'
      }
    },
  },
}
</script>

<style></style>
