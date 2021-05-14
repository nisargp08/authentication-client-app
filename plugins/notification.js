import Vue from 'vue'
import Notification from '~/components/Notification.vue'

export default function (context, inject) {
  inject('notification', {
    generate,
  })

  function generate(message) {
    const NotificationClass = Vue.extend(Notification)
    const notification = new NotificationClass()
    // Populate slots
    notification.$slots.title = message.title
    notification.$slots.subtitle = message.subtitle
    // Mount element to DOM
    notification.$mount()
    // Attach the element to DOM
    document.getElementById('__nuxt').appendChild(notification.$el)
  }
}
