<template>
  <section>
    <div class="max-w-2xl w-full mx-auto">
      <div class="h-full flex flex-col bg-transparent">
        <!-- Main -->
        <div class="divide-y divide-gray-700">
          <div class="pb-6">
            <div class="bg-transparent h-24 sm:h-20 lg:h-28"></div>
            <div
              class="relative -mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6 lg:-mt-15"
            >
              <div>
                <div class="-m-1 flex">
                  <div
                    class="inline-flex rounded-lg overflow-hidden border-4 border-white"
                  >
                    <img
                      class="flex-shrink-0 h-24 w-24 sm:h-40 sm:w-40 lg:w-48 lg:h-48 object-cover"
                      :src="getUserPhoto"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="mt-6 sm:ml-6 sm:flex-1">
                <div>
                  <div class="flex items-center">
                    <h3 class="font-bold text-xl sm:text-2xl">
                      {{ user.name }}
                    </h3>
                  </div>
                  <p class="text-sm">@{{ user.username }}</p>
                </div>
                <div
                  class="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3"
                >
                  <a
                    :href="getUserEmailUrl"
                    type="button"
                    class="flex-shrink-0 theme-button inline-flex items-center mt-0 sm:flex-1"
                  >
                    Email
                  </a>
                  <template v-if="user.phone">
                    <a
                      :href="getUserPhoneUrl"
                      type="button"
                      class="flex-1 white-button inline-flex items-center mt-0 sm:flex-1"
                    >
                      Call
                    </a>
                  </template>
                </div>
              </div>
              <!-- Edit button -->
              <template v-if="authorizedUser">
                <div class="absolute top-0 right-0 px-4 bg-transparent">
                  <nuxt-link
                    :to="{ name: 'settings-profile' }"
                    type="button"
                    class="white-button bg-green-600 border-green-600 hover:bg-green-700"
                  >
                    Edit
                  </nuxt-link>
                </div>
              </template>
            </div>
          </div>
          <div class="px-4 py-5 sm:px-0 sm:py-0">
            <dl class="space-y-8 sm:divide-y sm:divide-gray-700 sm:space-y-0">
              <div class="sm:flex sm:px-6 sm:py-5">
                <dt
                  class="text-sm font-medium sm:w-40 sm:flex-shrink-0 lg:w-48"
                >
                  Bio
                </dt>
                <dd class="mt-1 text-sm sm:mt-0 sm:ml-6 sm:col-span-2">
                  <p>
                    {{ getUserBio }}
                  </p>
                </dd>
              </div>
              <div class="sm:flex sm:px-6 sm:py-5">
                <dt
                  class="text-sm font-medium sm:w-40 sm:flex-shrink-0 lg:w-48"
                >
                  Email
                </dt>
                <dd class="mt-1 text-sm sm:mt-0 sm:ml-6 sm:col-span-2">
                  {{ user.email }}
                </dd>
              </div>
              <div class="sm:flex sm:px-6 sm:py-5">
                <dt
                  class="text-sm font-medium sm:w-40 sm:flex-shrink-0 lg:w-48"
                >
                  Phone
                </dt>
                <dd class="mt-1 text-sm sm:mt-0 sm:ml-6 sm:col-span-2">
                  {{ getUserPhone }}
                </dd>
              </div>
              <div class="sm:flex sm:px-6 sm:py-5">
                <dt
                  class="text-sm font-medium sm:w-40 sm:flex-shrink-0 lg:w-48"
                >
                  Joined
                </dt>
                <dd class="mt-1 text-sm sm:mt-0 sm:ml-6 sm:col-span-2">
                  {{ getCreatedDateFromNow }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </section>
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
    authorizedUser() {
      if (this.$auth.user._id === this.user._id) {
        return true
      } else {
        return false
      }
    },
    getUserPhoto() {
      // If photo is provied then return the url
      if (this.user.profilePhoto) {
        return this.user.profilePhoto
      } else {
        // Else return the default image
        return '/images/smiling.svg'
      }
    },
    getUserEmailUrl() {
      return `mailto:${this.user.email}`
    },
    getUserPhoneUrl() {
      return `tel://${this.user.phone}`
    },
    getUserBio() {
      if (this.user.bio) {
        return this.user.bio
      } else {
        return 'User has not set a bio yet'
      }
    },
    getUserPhone() {
      if (this.user.phone) {
        return this.user.phone
      } else {
        return 'User has not provided a phone number yet'
      }
    },
    getCreatedDateFromNow() {
      return this.$dayjs(this.user.createdAt).fromNow()
    },
  },
}
</script>
