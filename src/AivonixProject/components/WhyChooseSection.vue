<template>
  <section id="why-choose" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Why Choose Aivonix?</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          We combine cutting-edge AI technology with deep industry expertise to deliver solutions that drive real business value.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(reason, index) in reasons" :key="index" class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div class="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <component :is="reason.icon" class="w-8 h-8 text-blue-600" />
          </div>
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">{{ reason.title }}</h3>
          <p class="text-gray-600">{{ reason.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Zap, Users, Award, Shield, TrendingUp, Lightbulb } from 'lucide-vue-next';

const reasons = [
  {
    icon: Zap,
    title: 'Cutting-Edge Technology',
    description: 'We leverage the latest AI and machine learning technologies to deliver innovative solutions that keep you ahead of the competition.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our team of AI specialists, data scientists, and industry experts bring decades of combined experience to every project.'
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'We have successfully delivered AI solutions across multiple industries, with measurable results and satisfied clients.'
  },
  {
    icon: Shield,
    title: 'Data Security',
    description: 'Your data security is our priority. We implement industry-leading security practices and comply with all relevant regulations.'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Our solutions are designed to grow with your business, ensuring long-term value and adaptability to changing needs.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We stay at the forefront of AI innovation, continuously exploring new technologies and methodologies to benefit our clients.'
  }
];
</script>
