<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    <div class="p-8">
      <div class="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
        <component :is="icon" class="w-8 h-8 text-blue-600" />
      </div>
      <h3 class="text-2xl font-semibold text-gray-900 mb-4">{{ title }}</h3>
      <p class="text-gray-600 mb-6">{{ description }}</p>
      <ul class="space-y-2">
        <li v-for="(feature, index) in features" :key="index" class="flex items-start">
          <svg class="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span class="text-gray-600">{{ feature }}</span>
        </li>
      </ul>
    </div>
    <div class="bg-gray-50 px-8 py-4">
      <button class="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
        Learn More →
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue';

interface Props {
  icon: Component;
  title: string;
  description: string;
  features: string[];
}

defineProps<Props>();
</script>
