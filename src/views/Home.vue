<template>
  <div>
    <!-- Hero section -->
    <div class="relative bg-white overflow-hidden" style="background: url('/images/Image 1.png') right center/cover no-repeat;">
      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-green-100"></div>
      <div class="max-w-7xl mx-auto">
        <div class="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 lg:ml-auto lg:mr-0">
          <!-- Mobile image (shows on small screens) -->
          <div class="block lg:hidden">
            <img class="w-full h-64 object-cover sm:h-80 md:h-96" src="/images/Image 1.png" alt="Business consulting">
          </div>
          <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-right">
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block animate-fade-in-up-stagger-1">{{ t('home.hero.title1') }}</span>
                <span class="block text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-400 animate-gradient animate-fade-in-up-stagger-2">{{ t('home.hero.title2') }}</span>
              </h1>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-fade-in-up-stagger-3">
                {{ t('home.hero.description') }}
              </p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
                <div class="rounded-full shadow-lg hover-lift animate-scale-fade-in-stagger-4">
                  <router-link to="/contact" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-green-700 to-green-500 hover:from-green-800 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 ease-out">
                    {{ t('home.hero.getStarted') }}
                  </router-link>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3 hover-lift animate-scale-fade-in-stagger-5">
                  <router-link to="/services" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 ease-out">
                    {{ t('home.hero.ourServices') }}
                  </router-link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>

    <!-- Feature section -->
    <div class="py-16 bg-gradient-to-b from-white to-green-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-green-700 font-semibold tracking-wide uppercase animate-fade-in-up">{{ t('home.features.title') }}</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl animate-fade-in-up delay-200">
            {{ t('home.features.subtitle') }}
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto animate-fade-in-up delay-400">
            {{ t('home.features.description') }}
          </p>
        </div>

        <div class="mt-10">
          <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div v-for="(feature, index) in features" 
                 :key="feature.name" 
                 class="relative group hover-lift"
                 :class="{'animate-fade-in-up': true}"
                 :style="{ animationDelay: `${index * 200}ms` }">
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-r from-green-700 to-green-500 text-white transform transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-6">
                <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <div class="ml-16">
                <p class="text-lg leading-6 font-medium text-gray-900 group-hover:text-green-700 transition-colors duration-300">{{ feature.name }}</p>
                <p class="mt-2 text-base text-gray-500" v-html="feature.description"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats section -->
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="(stat, index) in stats" 
               :key="stat.name" 
               class="text-center hover-lift"
               :class="{'animate-fade-in-up': true}"
               :style="{ animationDelay: `${index * 200}ms` }">
            <p class="text-4xl font-extrabold text-green-700 animate-count">{{ stat.value }}</p>
            <p class="mt-2 text-base font-medium text-gray-500">{{ t(`home.stats.${stat.key}`) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CurrencyDollarIcon, ChartBarIcon, CursorClickIcon } from '@heroicons/vue/solid'
import { useI18n } from '../i18n'
import { computed } from 'vue'

const { t } = useI18n()

const features = computed(() => [
  {
    name: t('services.economia.name'),
    description: t('services.economia.summary'),
    icon: CurrencyDollarIcon,
  },
  {
    name: t('services.finanzas.name'),
    description: t('services.finanzas.summary'),
    icon: ChartBarIcon,
  },
  {
    name: t('services.tecnologia.name'),
    description: t('services.tecnologia.summary'),
    icon: CursorClickIcon,
  },
])

const stats = [
  { name: 'Years of Experience', value: '15+', key: 'years' },
  { name: 'Happy Clients', value: '500+', key: 'clients' },
  { name: 'Projects Completed', value: '1000+', key: 'projects' },
  { name: 'Expert Consultants', value: '50+', key: 'consultants' },
]
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.animate-fade-in-left {
  animation: fadeInLeft 0.8s ease-out forwards;
  opacity: 0;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradientFlow 6s ease infinite;
}

.delay-200 {
  animation-delay: 200ms;
}

.delay-400 {
  animation-delay: 400ms;
}

.animate-count {
  animation: countUp 2s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes countUp {
  from {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.hero-bg-zoom {
  animation: heroZoom 18s ease-in-out forwards;
}
@keyframes heroZoom {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.08);
  }
}
.animate-fade-in-up-stagger-1 {
  animation: fadeInUp 0.7s 0.1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  opacity: 0;
}
.animate-fade-in-up-stagger-2 {
  animation: fadeInUp 0.7s 0.4s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  opacity: 0;
}
.animate-fade-in-up-stagger-3 {
  animation: fadeInUp 0.7s 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  opacity: 0;
}
.animate-scale-fade-in-stagger-4 {
  animation: scaleFadeIn 0.7s 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  opacity: 0;
  transform: scale(0.95);
}
.animate-scale-fade-in-stagger-5 {
  animation: scaleFadeIn 0.7s 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
  opacity: 0;
  transform: scale(0.95);
}
@keyframes scaleFadeIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style> 