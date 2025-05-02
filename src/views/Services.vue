<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-base text-primary-600 font-semibold tracking-wide uppercase">Services</h2>
        <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Our Consulting Services
        </p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          Comprehensive solutions tailored to your business needs
        </p>
      </div>

      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="service in services" :key="service.name" class="group">
            <div class="flow-root bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                    <component :is="service.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight group-hover:text-primary-600 transition-colors duration-200">{{ service.name }}</h3>
                <p class="mt-5 text-base text-gray-500">
                  {{ service.description }}
                </p>
                <div class="mt-6">
                  <a href="#" class="text-base font-medium text-primary-600 hover:text-primary-500">
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-16 bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl shadow-xl overflow-hidden">
        <div class="pt-16 pb-12 px-6 sm:px-16 sm:pt-20 sm:pb-16 lg:py-16 lg:pr-0 lg:pl-12">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            <div class="max-w-lg mx-auto lg:max-w-none">
              <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                <span class="block">Ready to transform your business?</span>
                <span class="block text-primary-100">Let's get started.</span>
              </h2>
              <p class="mt-4 text-lg leading-6 text-primary-100">
                Contact us today to discuss how we can help your business achieve its goals.
              </p>
              <div class="mt-8 flex">
                <router-link to="/contact" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-primary-600 bg-white shadow-sm hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600 focus:ring-white transition-all duration-200">
                  Contact Us
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ChartBarIcon,
  CursorClickIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  BeakerIcon,
  UserGroupIcon,
} from '@heroicons/vue/solid'

const services = [
  {
    name: 'Strategic Planning',
    description: 'Develop comprehensive business strategies to achieve your long-term goals and maintain competitive advantage.',
    icon: ChartBarIcon,
  },
  {
    name: 'Digital Transformation',
    description: 'Modernize your business processes and technology infrastructure to improve efficiency and customer experience.',
    icon: CursorClickIcon,
  },
  {
    name: 'Risk Management',
    description: 'Identify, assess, and mitigate potential risks to ensure business continuity and protect your assets.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Process Optimization',
    description: 'Streamline operations and implement best practices to maximize efficiency and reduce costs.',
    icon: ViewGridIcon,
  },
  {
    name: 'Innovation Consulting',
    description: 'Foster innovation and implement new technologies to drive business growth and market leadership.',
    icon: BeakerIcon,
  },
  {
    name: 'Change Management',
    description: 'Guide your organization through transitions while maintaining productivity and employee engagement.',
    icon: UserGroupIcon,
  },
]
</script> 