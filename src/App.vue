<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <!-- Navigation -->
    <nav class="bg-white/80 backdrop-blur-md fixed w-full z-50 border-b border-gray-100 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-20">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <span class="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent hover-lift">EFT Octaris</span>
            </div>
            <div class="hidden sm:ml-10 sm:flex sm:space-x-8">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium transition-all duration-300 ease-out hover-lift"
                :class="[
                  $route.path === item.href
                    ? 'text-primary-600 border-b-2 border-primary-500'
                    : 'text-gray-500 hover:text-gray-900 hover:border-gray-300'
                ]"
              >
                {{ t(`nav.${item.key}`) }}
              </router-link>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <!-- Language Switcher -->
            <div class="relative">
              <button
                @click="isLanguageOpen = !isLanguageOpen"
                class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 focus:outline-none transition-all duration-300 ease-out rounded-md px-2 py-1 hover:bg-gray-50"
              >
                <flag :iso="currentLanguage === 'en' ? 'us' : 'es'" class="mr-2 rounded-sm h-4" />
                <span class="mr-1">{{ currentLanguage === 'en' ? 'English' : 'Español' }}</span>
                <ChevronDownIcon
                  class="h-4 w-4 transition-transform duration-300 ease-out"
                  :class="{ 'rotate-180': isLanguageOpen }"
                  aria-hidden="true"
                />
              </button>

              <!-- Dropdown -->
              <Transition
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <div
                  v-if="isLanguageOpen"
                  class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                >
                  <div class="py-1">
                    <button
                      v-for="lang in languages"
                      :key="lang.code"
                      @click="setLanguage(lang.code); isLanguageOpen = false"
                      class="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
                      :class="{ 'bg-gray-100': currentLanguage === lang.code }"
                    >
                      <flag :iso="lang.flag" class="mr-2 rounded-sm h-4" />
                      <span>{{ lang.name }}</span>
                      <CheckIcon
                        v-if="currentLanguage === lang.code"
                        class="h-4 w-4 ml-auto text-primary-600"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </Transition>
            </div>
            <router-link
              to="/contact"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300 ease-out hover-lift"
            >
              {{ t('nav.getStarted') }}
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-20">
      <router-view v-slot="{ Component }">
        <Transition
          name="page"
          mode="out-in"
          @before-leave="beforeLeave"
          @enter="enter"
          @after-enter="afterEnter"
        >
          <component :is="Component" />
        </Transition>
      </router-view>
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-100">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-2">
            <h3 class="text-lg font-semibold text-gray-900 mb-4 hover-lift">EFT Octaris</h3>
            <p class="text-gray-500 max-w-md">
              {{ t('home.hero.description') }}
            </p>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">{{ t('nav.quickLinks') }}</h4>
            <ul class="space-y-3">
              <li v-for="item in navigation" :key="item.name">
                <router-link :to="item.href" class="text-gray-500 hover:text-primary-600 transition-all duration-300 ease-out hover-lift inline-block">
                  {{ t(`nav.${item.key}`) }}
                </router-link>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">{{ t('nav.connect') }}</h4>
            <div class="flex space-x-6">
              <a href="#" class="text-gray-400 hover:text-primary-600 transition-all duration-300 ease-out hover-lift">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-primary-600 transition-all duration-300 ease-out hover-lift">
                <span class="sr-only">Twitter</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-100 pt-8 md:flex md:items-center md:justify-between">
          <p class="text-base text-gray-400">
            &copy; 2024 EFT Octaris. {{ t('nav.allRightsReserved') }}
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from './i18n'
import { ChevronDownIcon, CheckIcon } from '@heroicons/vue/solid'
import './assets/transitions.css'

const { t, setLanguage, currentLanguage } = useI18n()
const isLanguageOpen = ref(false)

const languages = [
  { code: 'en', name: 'English', flag: 'us' },
  { code: 'es', name: 'Español', flag: 'es' }
]

const navigation = [
  { name: 'Home', href: '/', key: 'home' },
  { name: 'Services', href: '/services', key: 'services' },
  { name: 'About Us', href: '/about', key: 'about' },
  { name: 'Contact', href: '/contact', key: 'contact' },
]

// Page transition handlers
const beforeLeave = (el) => {
  el.style.height = el.offsetHeight + 'px'
  el.style.overflow = 'hidden'
}

const enter = (el) => {
  el.style.height = 'auto'
  const height = el.offsetHeight
  el.style.height = '0'
  setTimeout(() => {
    el.style.height = height + 'px'
  }, 0)
}

const afterEnter = (el) => {
  el.style.height = 'auto'
  el.style.overflow = 'visible'
}

// Close language dropdown when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.relative')) {
    isLanguageOpen.value = false
  }
}

// Add click outside listener
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

// Remove click outside listener
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style>
@import './assets/transitions.css';
</style> 