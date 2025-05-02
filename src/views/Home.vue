<template>
  <div>
    <!-- Hero section -->
    <div class="relative bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left">
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl animate-fade-in-up">
                <span class="block">{{ t('home.hero.title1') }}</span>
                <span class="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400 animate-gradient">{{ t('home.hero.title2') }}</span>
              </h1>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-fade-in-up delay-200">
                {{ t('home.hero.description') }}
              </p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start animate-fade-in-up delay-400">
                <div class="rounded-full shadow-lg hover-lift">
                  <router-link to="/contact" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300 ease-out">
                    {{ t('home.hero.getStarted') }}
                  </router-link>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3 hover-lift">
                  <router-link to="/services" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-primary-700 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300 ease-out">
                    {{ t('home.hero.ourServices') }}
                  </router-link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 animate-fade-in-left">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Business consulting">
      </div>
    </div>

    <!-- Feature section -->
    <div class="py-16 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-primary-600 font-semibold tracking-wide uppercase animate-fade-in-up">{{ t('home.features.title') }}</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl animate-fade-in-up delay-200">
            {{ t('home.features.subtitle') }}
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto animate-fade-in-up delay-400">
            {{ t('home.features.description') }}
          </p>
        </div>

        <div class="mt-10">
          <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div v-for="(feature, index) in features" 
                 :key="feature.name" 
                 class="relative group hover-lift"
                 :class="{'animate-fade-in-up': true}"
                 :style="{ animationDelay: `${index * 200}ms` }">
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white transform transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-6">
                <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <div class="ml-16">
                <p class="text-lg leading-6 font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-300">{{ feature.name }}</p>
                <p class="mt-2 text-base text-gray-500">{{ feature.description }}</p>
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
            <p class="text-4xl font-extrabold text-primary-600 animate-count">{{ stat.value }}</p>
            <p class="mt-2 text-base font-medium text-gray-500">{{ t(`home.stats.${stat.key}`) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChartBarIcon, CursorClickIcon, ShieldCheckIcon, ViewGridIcon } from '@heroicons/vue/solid'
import { useI18n } from '../i18n'

const { t } = useI18n()

const features = [
  {
    name: 'Strategic Planning',
    description: 'Comprehensive business strategy development to achieve your long-term goals.',
    icon: ChartBarIcon,
  },
  {
    name: 'Digital Transformation',
    description: 'Modernize your business processes and technology infrastructure.',
    icon: CursorClickIcon,
  },
  {
    name: 'Risk Management',
    description: 'Identify and mitigate potential risks to your business operations.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Process Optimization',
    description: 'Streamline your operations for maximum efficiency and productivity.',
    icon: ViewGridIcon,
  },
]

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
</style> 