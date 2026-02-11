<template>
  <section id="careers" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Be part of a dynamic team that's shaping the future of AI. We're always looking for talented individuals who are passionate about technology and innovation.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div v-for="(position, index) in openPositions" :key="index" class="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
          <h3 class="text-2xl font-semibold text-gray-900 mb-2">{{ position.title }}</h3>
          <div class="flex items-center text-gray-600 mb-4">
            <MapPin class="w-5 h-5 mr-2" />
            <span>{{ position.location }}</span>
            <span class="mx-2">•</span>
            <span>{{ position.type }}</span>
          </div>
          <p class="text-gray-600 mb-4">{{ position.description }}</p>
          <ul class="space-y-2 mb-6">
            <li v-for="(requirement, idx) in position.requirements" :key="idx" class="flex items-start">
              <svg class="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-gray-600">{{ requirement }}</span>
            </li>
          </ul>
          <button class="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Apply Now
          </button>
        </div>
      </div>

      <div class="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white text-center">
        <h3 class="text-3xl font-bold mb-4">Why Work With Us?</h3>
        <div class="grid md:grid-cols-4 gap-6 mt-8">
          <div>
            <Coffee class="w-12 h-12 mx-auto mb-3" />
            <h4 class="font-semibold mb-2">Great Culture</h4>
            <p class="text-sm text-blue-100">Collaborative and innovative work environment</p>
          </div>
          <div>
            <TrendingUp class="w-12 h-12 mx-auto mb-3" />
            <h4 class="font-semibold mb-2">Career Growth</h4>
            <p class="text-sm text-blue-100">Continuous learning and advancement opportunities</p>
          </div>
          <div>
            <Heart class="w-12 h-12 mx-auto mb-3" />
            <h4 class="font-semibold mb-2">Work-Life Balance</h4>
            <p class="text-sm text-blue-100">Flexible hours and remote work options</p>
          </div>
          <div>
            <Award class="w-12 h-12 mx-auto mb-3" />
            <h4 class="font-semibold mb-2">Competitive Benefits</h4>
            <p class="text-sm text-blue-100">Comprehensive compensation and benefits package</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MapPin, Coffee, TrendingUp, Heart, Award } from 'lucide-vue-next';

const openPositions = [
  {
    title: 'Senior Machine Learning Engineer',
    location: 'Remote / San Francisco',
    type: 'Full-time',
    description: 'Lead the development of cutting-edge ML models and mentor junior team members.',
    requirements: [
      '5+ years of ML engineering experience',
      'Strong Python and deep learning frameworks',
      'Experience with production ML systems',
      'PhD or Master\'s in relevant field preferred'
    ]
  },
  {
    title: 'AI Solutions Architect',
    location: 'Remote / New York',
    type: 'Full-time',
    description: 'Design and implement end-to-end AI solutions for enterprise clients.',
    requirements: [
      '7+ years in software architecture',
      'Deep understanding of AI/ML technologies',
      'Strong communication and consulting skills',
      'Experience with cloud platforms (AWS/Azure/GCP)'
    ]
  },
  {
    title: 'Data Scientist',
    location: 'Remote / London',
    type: 'Full-time',
    description: 'Extract insights from complex datasets and build predictive models.',
    requirements: [
      '3+ years of data science experience',
      'Proficiency in Python, R, and SQL',
      'Strong statistical and analytical skills',
      'Experience with big data technologies'
    ]
  },
  {
    title: 'AI Product Manager',
    location: 'Remote / Boston',
    type: 'Full-time',
    description: 'Drive product strategy and roadmap for AI-powered solutions.',
    requirements: [
      '4+ years of product management experience',
      'Understanding of AI/ML capabilities',
      'Strong stakeholder management skills',
      'Track record of successful product launches'
    ]
  }
];
</script>
