<template>
  <div>
    <icons-loading-spinner v-if="isLoading" />
    <form
      class="divide-y divide-gray-200"
      action="#"
      method="PATCH"
      @submit.prevent="updateUser()"
    >
      <!-- Profile section -->
      <div class="py-6 px-4 sm:p-6 lg:pb-8">
        <div>
          <h2 class="text-lg leading-6 font-medium text-gray-900">Profile</h2>
          <p class="mt-1 text-sm text-gray-500">
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>

        <div class="mt-6 flex flex-col lg:flex-row">
          <div class="flex-grow space-y-6">
            <div>
              <label
                for="username"
                class="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div class="mt-1 rounded-md shadow-sm flex">
                <span
                  class="bg-gray-50 border border-r-0 border-gray-300 rounded-l-md px-3 inline-flex items-center text-gray-500 sm:text-sm"
                >
                  np-auth.vercel.app/
                </span>
                <input
                  id="username"
                  v-model="user.username"
                  type="text"
                  name="username"
                  required
                  autocomplete="username"
                  class="focus:ring-yellow-500 focus:border-yellow-500 flex-grow block min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                />
              </div>
            </div>
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700"
                >Full name</label
              >
              <input
                id="name"
                v-model="user.name"
                type="text"
                name="name"
                autocomplete="given-name"
                class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
              />
            </div>
            <div>
              <label for="bio" class="block text-sm font-medium text-gray-700">
                Bio
              </label>
              <div class="mt-1">
                <textarea
                  id="bio"
                  v-model="user.bio"
                  name="bio"
                  rows="3"
                  class="shadow-sm focus:ring-yellow-500 focus:border-yellow-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                ></textarea>
              </div>
              <p class="mt-2 text-sm text-gray-500">
                Brief description for your profile.
              </p>
            </div>
          </div>

          <div
            class="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0"
          >
            <p class="text-sm font-medium text-gray-700" aria-hidden="true">
              Photo
            </p>
            <div class="mt-1 lg:hidden">
              <div class="flex items-center">
                <div
                  class="flex-shrink-0 inline-block rounded-full overflow-hidden h-12 w-12"
                  aria-hidden="true"
                >
                  <img
                    class="rounded-full h-full w-full object-cover"
                    :src="previewUrl"
                    :alt="user.name"
                  />
                </div>
                <div class="ml-5 rounded-md shadow-sm">
                  <div
                    class="group relative border border-gray-300 rounded-md py-2 px-3 flex items-center justify-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-light-blue-500"
                  >
                    <label
                      for="user_photo"
                      class="relative text-sm leading-4 font-medium text-gray-700 pointer-events-none"
                    >
                      <span>Change</span>
                      <span class="sr-only"> user photo</span>
                    </label>
                    <input
                      id="user_photo"
                      name="user_photo"
                      type="file"
                      class="absolute w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                      accept="image/*"
                      @change="inputFile"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="hidden relative rounded-full overflow-hidden lg:block">
              <img
                class="relative rounded-full w-40 h-40 object-cover"
                :src="previewUrl"
                :alt="user.name"
              />
              <label
                for="user-photo"
                class="absolute inset-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center text-sm font-medium text-white opacity-0 hover:opacity-100 focus-within:opacity-100"
              >
                <span>Change</span>
                <span class="sr-only"> user photo</span>
                <input
                  id="user-photo"
                  type="file"
                  name="user-photo"
                  class="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                  accept="image/*"
                  @change="inputFile"
                />
              </label>
            </div>
          </div>
        </div>

        <div class="mt-6 grid grid-cols-12 gap-6">
          <div class="col-span-12 sm:col-span-6">
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email address</label
            >
            <input
              id="email"
              v-model="user.email"
              type="email"
              name="email"
              autocomplete="email"
              required
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            />
          </div>

          <div class="col-span-12 sm:col-span-6">
            <label for="phone" class="block text-sm font-medium text-gray-700"
              >Phone</label
            >
            <input
              id="phone"
              v-model="user.phone"
              type="text"
              name="phone"
              autocomplete="phone"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      <!-- Submission and error handling -->
      <div class="py-4 px-4 mt-4">
        <template v-if="errMessages.length > 0">
          <alert class="mb-2" type="error" :messages="errMessages"></alert>
        </template>
        <div class="flex justify-end sm:px-6">
          <button
            type="submit"
            class="ml-4 theme-button inline-flex items-center mt-0 w-auto"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import apiState from '~/mixins/apiState'
export default {
  mixins: [apiState],
  layout: 'settings',
  data() {
    return {
      isLoading: false,
      selectedPhoto: null,
      previewUrl: null,
      user: {
        username: this.$auth.user.username,
        name: this.$auth.user.name,
        email: this.$auth.user.email,
        bio: this.$auth.user.bio,
        phone: this.$auth.user.phone,
      },
    }
  },
  mounted() {
    this.getUserPhoto()
  },
  methods: {
    async updateUser() {
      this.isLoading = true
      try {
        const formData = new FormData()
        this.resetState()
        // Attach photo field is uploaded/changed
        if (this.selectedPhoto) {
          formData.append('profilePhoto', this.selectedPhoto)
        }
        // Append other fields to formData object
        Object.keys(this.user).forEach((key) => {
          formData.append(key, this.user[key])
        })
        // Send request to server to update the user profile
        const { data } = await this.$userApi.updateUser(formData)

        if (data) {
          // Update logged in user info
          this.$auth.setUser(data)
          // Give feedback to user on successfull profile update
          this.$notification.generate({
            title: 'Profile has been successfully updated',
          })
        }
      } catch (err) {
        this.setErrorMessage(err)
      }
      this.isLoading = false
    },
    getUserPhoto() {
      if (this.$auth.user.profilePhoto) {
        this.previewUrl = this.$auth.user.profilePhoto
      } else {
        this.previewUrl = '/images/smiling.svg'
      }
    },
    inputFile($event) {
      this.resetState()
      const file = $event.target.files[0]
      if (file) {
        if (this.validateImage(file)) {
          this.selectedPhoto = file
          this.getDataUrl(file)
        }
      }
    },
    // Validate image
    validateImage(file) {
      let isValid = true
      // Validate file input type
      if (!file.type.match('image.*')) {
        this.errMessages.push(`${file.name} is not a valid image type`)
        isValid = false
      }
      // Validate file size
      const maxSize = 10240 // (1024 * 10 = 10MB)
      const fileSize = Math.round(file.size / 1024)
      if (fileSize > maxSize) {
        this.errMessages.push(
          `${file.name} is greater than ${Math.round(maxSize / 1024)} MB`
        )
        isValid = false
      }
      // Return file status
      return isValid
    },
    // Create file url for display
    getDataUrl(file) {
      const reader = new FileReader()
      // Push the file base64 string to the array
      reader.onload = (e) => (this.previewUrl = e.target.result)
      // Call the onload function by calling 'readAsDataURL'
      reader.readAsDataURL(file)
    },
  },
}
</script>
