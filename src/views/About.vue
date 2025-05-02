<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-base text-primary-600 font-semibold tracking-wide uppercase">{{ t('about.title') }}</h2>
        <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          {{ t('about.subtitle') }}
        </p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          {{ t('about.description') }}
        </p>
      </div>

      <div class="mt-12">
        <div class="max-w-3xl mx-auto">
          <div class="prose prose-lg text-gray-500">
            <p>
              {{ t('about.story.p1') }}
            </p>
            <p>
              {{ t('about.story.p2') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Values Section -->
      <div class="mt-16">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-extrabold text-gray-900 text-center">{{ t('about.values.title') }}</h2>
          <div class="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="value in values" :key="value.name" class="relative group">
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white transform transition-transform duration-300 group-hover:scale-110">
                <component :is="value.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <div class="ml-16">
                <p class="text-lg leading-6 font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-200">{{ t(`about.values.${value.key}.name`) }}</p>
                <p class="mt-2 text-base text-gray-500">{{ t(`about.values.${value.key}.description`) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Team Section -->
      <div class="mt-16">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-3xl font-extrabold text-gray-900 text-center">{{ t('about.team.title') }}</h2>
          <div class="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="member in team" :key="member.name" class="text-center group">
              <div class="relative w-40 h-40 mx-auto">
                <div class="absolute inset-0 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 transform transition-transform duration-300 group-hover:scale-110"></div>
                <div class="absolute inset-0 rounded-full bg-primary-200 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                  <span class="text-4xl font-bold text-primary-600">{{ member.initials }}</span>
                </div>
              </div>
              <h3 class="mt-6 text-lg font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-200">{{ member.name }}</h3>
              <p class="mt-1 text-sm text-gray-500">{{ member.role }}</p>
              <p class="mt-2 text-sm text-gray-500">{{ member.bio }}</p>
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
                <span class="block">{{ t('about.cta.title1') }}</span>
                <span class="block text-primary-100">{{ t('about.cta.title2') }}</span>
              </h2>
              <p class="mt-4 text-lg leading-6 text-primary-100">
                {{ t('about.cta.description') }}
              </p>
              <div class="mt-8 flex">
                <router-link to="/contact" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-primary-600 bg-white shadow-sm hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600 focus:ring-white transition-all duration-200">
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