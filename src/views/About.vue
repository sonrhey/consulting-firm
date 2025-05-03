<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-base text-green-700 font-semibold tracking-wide uppercase">{{ t('about.title') }}</h2>
      </div>
      <!-- Team Section (now after About Us) -->
      <div class="mb-16 mt-16">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-4xl font-extrabold text-green-700 sm:text-5xl sm:tracking-tight lg:text-6xl text-center">{{ t('about.team.title') }}</h2>
          <div class="mt-10">
            <div class="flex flex-col md:flex-row gap-8 items-center">
              <div class="w-full md:w-1/3">
                <img src="/images/Image%205.JPG?url" alt="Founder" class="rounded-full w-64 h-64 object-cover mx-auto shadow-lg" />
              </div>
              <div class="w-full md:w-2/3 space-y-6">
                <div class="prose prose-lg text-gray-500">
                  <p class="text-xl font-semibold text-green-700">{{ t('about.mission.p1') }}</p>
                  <p class="text-xl font-semibold text-green-700">{{ t('about.mission.p2') }}</p>
                  <p class="text-xl font-semibold text-green-700">{{ t('about.mission.p3') }}</p>
                </div>
                <div class="prose prose-lg text-gray-500">
                  <p>{{ t('about.bio.p1') }}</p>
                  <p>{{ t('about.bio.p2') }}</p>
                  <p>{{ t('about.bio.p3') }}</p>
                  <p>{{ t('about.bio.p4') }}</p>
                  <p>{{ t('about.bio.p5') }}</p>
                  <p>{{ t('about.bio.p6') }}</p>
                  <p>{{ t('about.bio.p7') }}</p>
                  <p>{{ t('about.bio.p8') }}</p>
                  <p>{{ t('about.bio.p9') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Team Section -->

      <div class="mt-12">
        <div class="max-w-3xl mx-auto">
          <div class="prose prose-lg text-gray-500">
            <!-- Company story section removed -->
          </div>
        </div>
      </div>

      <!-- Values Section -->
      <div class="mt-16">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-extrabold text-green-700 text-center">{{ t('about.values.title') }}</h2>
          <div class="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="value in values" :key="value.name" class="relative group">
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-r from-green-700 to-green-400 text-white transform transition-transform duration-300 group-hover:scale-110">
                <component :is="value.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <div class="ml-16">
                <p class="text-lg leading-6 font-medium text-green-700 group-hover:text-green-600 transition-colors duration-200">{{ t(`about.values.${value.key}.name`) }}</p>
                <p class="mt-2 text-base text-gray-500">{{ t(`about.values.${value.key}.description`) }}</p>
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
                <span class="block">{{ t('about.cta.title1') }}</span>
                <span class="block text-green-100">{{ t('about.cta.title2') }}</span>
              </h2>
              <p class="mt-4 text-lg leading-6 text-green-100">
                {{ t('about.cta.description') }}
              </p>
              <div class="mt-8 flex">
                <router-link to="/contact" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-green-600 bg-white shadow-sm hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white transition-all duration-200">
                  {{ t('about.cta.button') }}
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
  LightBulbIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ChartBarIcon,
} from '@heroicons/vue/solid'
import { useI18n } from '../i18n'

const { t } = useI18n()

const values = [
  {
    name: 'Excellence',
    key: 'excellence',
    icon: LightBulbIcon,
  },
  {
    name: 'Collaboration',
    key: 'collaboration',
    icon: UserGroupIcon,
  },
  {
    name: 'Integrity',
    key: 'integrity',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Innovation',
    key: 'innovation',
    icon: ChartBarIcon,
  },
]

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    initials: 'SJ',
    bio: '20+ years of experience in business consulting and strategy development.',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    initials: 'MC',
    bio: 'Expert in digital transformation and technology strategy.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Operations',
    initials: 'ER',
    bio: 'Specialized in process optimization and organizational development.',
  },
]
</script> 