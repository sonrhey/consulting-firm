<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-base font-semibold text-primary-600 tracking-wide uppercase">Contact Us</h2>
        <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Get in Touch
        </p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          We'd love to hear from you. Let's discuss how we can help your business grow.
        </p>
      </div>

      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <!-- Contact Information -->
          <div>
            <div class="max-w-lg mx-auto">
              <h3 class="text-lg font-medium text-gray-900">Contact Information</h3>
              <dl class="mt-8 space-y-6">
                <div v-for="item in contactInfo" :key="item.name" class="flex">
                  <dt class="flex-shrink-0">
                    <component :is="item.icon" class="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </dt>
                  <dd class="ml-3 text-base text-gray-500">
                    <p>{{ item.name }}</p>
                    <p class="mt-1">{{ item.value }}</p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <!-- Contact Form -->
          <div>
            <div class="max-w-lg mx-auto">
              <form @submit.prevent="handleSubmit" class="grid grid-cols-1 gap-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                  <div class="mt-1">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      v-model="form.name"
                      class="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                  <div class="mt-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      v-model="form.email"
                      class="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                  <div class="mt-1">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      v-model="form.phone"
                      class="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                  <div class="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      v-model="form.message"
                      class="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    class="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
  ClockIcon,
} from '@heroicons/vue/solid'

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const contactInfo = [
  {
    name: 'Phone',
    value: '+1 (555) 123-4567',
    icon: PhoneIcon,
  },
  {
    name: 'Email',
    value: 'info@EFT Octaris.com',
    icon: MailIcon,
  },
  {
    name: 'Address',
    value: '123 Business Avenue, Suite 100, New York, NY 10001',
    icon: LocationMarkerIcon,
  },
  {
    name: 'Business Hours',
    value: 'Monday - Friday: 9:00 AM - 5:00 PM',
    icon: ClockIcon,
  },
]

const handleSubmit = () => {
  // Here you would typically handle the form submission
  console.log('Form submitted:', form.value)
  // Reset form
  form.value = {
    name: '',
    email: '',
    phone: '',
    message: '',
  }
}
</script> 