<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-base font-semibold text-green-700 tracking-wide uppercase">{{ t('services.title') }}</h2>
        <p class="mt-1 text-4xl font-extrabold text-green-700 sm:text-5xl sm:tracking-tight lg:text-6xl">
          {{ t('services.heading') }}
        </p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          {{ t('services.subtitle') }}
        </p>
      </div>

      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="service in services" :key="service.name" class="group">
            <div class="flow-root bg-green-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span class="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-700 to-green-400 rounded-xl shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                    <component :is="service.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <h3 class="mt-8 text-lg font-medium text-green-700 tracking-tight group-hover:text-green-600 transition-colors duration-200">{{ service.name }}</h3>
                <p class="mt-5 text-base text-gray-500">
                  <span v-html="service.summary"></span>
                </p>
                <div class="mt-6">
                  <a v-if="!showEconomiaDetails && service.name === t('services.economia.name')" href="#" class="text-base font-medium text-green-700 hover:text-green-500" @click.prevent="showEconomiaDetails = true">
                    {{ t('services.learnMore') }} <span aria-hidden="true">&rarr;</span>
                  </a>
                  <a v-else-if="!showFinanzasDetails && service.name === t('services.finanzas.name')" href="#" class="text-base font-medium text-green-700 hover:text-green-500" @click.prevent="showFinanzasDetails = true">
                    {{ t('services.learnMore') }} <span aria-hidden="true">&rarr;</span>
                  </a>
                  <a v-else-if="!showTecnologiaDetails && service.name === t('services.tecnologia.name')" href="#" class="text-base font-medium text-green-700 hover:text-green-500" @click.prevent="showTecnologiaDetails = true">
                    {{ t('services.learnMore') }} <span aria-hidden="true">&rarr;</span>
                  </a>
                  <div v-else-if="showEconomiaDetails && service.name === t('services.economia.name')">
                    <div class="text-base text-gray-500 mt-2" v-html="service.details"></div>
                    <a href="#" class="text-base font-medium text-green-700 hover:text-green-500 mt-2 inline-block" @click.prevent="showEconomiaDetails = false">
                      {{ t('services.showLess') }} <span aria-hidden="true">&uarr;</span>
                    </a>
                  </div>
                  <div v-else-if="showFinanzasDetails && service.name === t('services.finanzas.name')">
                    <div class="text-base text-gray-500 mt-2" v-html="service.details"></div>
                    <a href="#" class="text-base font-medium text-green-700 hover:text-green-500 mt-2 inline-block" @click.prevent="showFinanzasDetails = false">
                      {{ t('services.showLess') }} <span aria-hidden="true">&uarr;</span>
                    </a>
                  </div>
                  <div v-else-if="showTecnologiaDetails && service.name === t('services.tecnologia.name')">
                    <div class="text-base text-gray-500 mt-2" v-html="service.details"></div>
                    <a href="#" class="text-base font-medium text-green-700 hover:text-green-500 mt-2 inline-block" @click.prevent="showTecnologiaDetails = false">
                      {{ t('services.showLess') }} <span aria-hidden="true">&uarr;</span>
                    </a>
                  </div>
                  <div v-else class="mt-6">
                    <a href="#" class="text-base font-medium text-green-700 hover:text-green-500">
                      {{ t('services.learnMore') }} <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-16 bg-gradient-to-r from-green-700 to-green-400 rounded-2xl shadow-xl overflow-hidden">
        <div class="pt-16 pb-12 px-6 sm:px-16 sm:pt-20 sm:pb-16 lg:py-16 lg:pr-0 lg:pl-12">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            <div class="max-w-lg mx-auto lg:max-w-none">
              <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                <span class="block">{{ t('services.cta.title1') }}</span>
                <span class="block text-green-100">{{ t('services.cta.title2') }}</span>
              </h2>
              <p class="mt-4 text-lg leading-6 text-green-100">
                {{ t('services.cta.description') }}
              </p>
              <div class="mt-8 flex">
                <router-link to="/contact" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-green-700 bg-white shadow-sm hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white transition-all duration-200">
                  {{ t('services.cta.button') }}
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
  CurrencyDollarIcon,
  ChartBarIcon,
  CursorClickIcon,
} from '@heroicons/vue/solid'
import { ref, computed } from 'vue'
import { useI18n } from '../i18n'

const { t, currentLanguage } = useI18n()
const showEconomiaDetails = ref(false)
const showFinanzasDetails = ref(false)
const showTecnologiaDetails = ref(false)

const services = computed(() => [
  {
    name: t('services.economia.name'),
    summary: t('services.economia.summary'),
    details: t('services.economia.details'),
    icon: CurrencyDollarIcon,
  },
  {
    name: t('services.finanzas.name'),
    summary: t('services.finanzas.summary'),
    details: t('services.finanzas.details'),
    icon: ChartBarIcon,
  },
  {
    name: t('services.tecnologia.name'),
    summary: t('services.tecnologia.summary'),
    details: t('services.tecnologia.details'),
    icon: CursorClickIcon,
  },
])
</script> 