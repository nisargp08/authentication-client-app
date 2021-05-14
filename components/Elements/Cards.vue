<template>
  <li
    class="col-span-1 flex flex-col text-center bg-gray-700 rounded-lg shadow divide-y divide-gray-600 text-white"
  >
    <div class="flex-1 flex flex-col p-8">
      <img
        class="w-32 h-32 flex-shrink-0 mx-auto bg-gray-700 rounded-full object-cover"
        :src="getUserPhoto"
        :alt="user.name"
      />
      <h3 class="mt-6 text-white text-sm font-medium">@{{ user.username }}</h3>
      <dl class="mt-1 flex-grow flex flex-col justify-between">
        <dt class="sr-only">Title</dt>
        <dd class="text-gray-300 text-sm">{{ user.email }}</dd>
      </dl>
    </div>
    <div>
      <div class="-mt-px flex">
        <div class="-ml-px w-0 flex-1 flex">
          <nuxt-link
            :to="{ name: 'id', params: { id: user.username } }"
            class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-300 font-medium border border-transparent rounded-br-lg hover:text-gray-400"
          >
            <!-- Heroicon name: solid/phone -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span class="ml-2">View Profile</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getUserPhoto() {
      // If photo is provied then return the url
      if (this.user.profilePhoto) {
        return this.user.profilePhoto
      } else {
        // Else return the default image
        return '/images/smiling.svg'
      }
    },
  },
}
</script>
