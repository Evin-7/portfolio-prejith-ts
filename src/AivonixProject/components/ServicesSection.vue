<template>
  <section id="services" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          We offer comprehensive AI solutions tailored to your business needs, from strategy to implementation.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          v-for="(service, index) in services"
          :key="index"
          :icon="service.icon"
          :title="service.title"
          :description="service.description"
          :features="service.features"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ServiceCard from './ServiceCard.vue';
import { Brain, BarChart3, MessageSquare, Eye, Cog, Database } from 'lucide-vue-next';

const services = [
  {
    icon: Brain,
    title: 'Machine Learning Solutions',
    description: 'Custom ML models designed to solve your specific business challenges and unlock insights from your data.',
    features: [
      'Predictive Analytics',
      'Custom Model Development',
      'Model Training & Optimization',
      'Deployment & Monitoring'
    ]
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & Insights',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
    features: [
      'Business Intelligence',
      'Real-time Analytics',
      'Custom Dashboards',
      'Data Visualization'
    ]
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Processing',
    description: 'Enable machines to understand and process human language for better customer interactions.',
    features: [
      'Chatbots & Virtual Assistants',
      'Sentiment Analysis',
      'Text Classification',
      'Language Translation'
    ]
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Extract meaningful information from images and videos to automate visual tasks.',
    features: [
      'Image Recognition',
      'Object Detection',
      'Facial Recognition',
      'Quality Inspection'
    ]
  },
  {
    icon: Cog,
    title: 'Process Automation',
    description: 'Streamline operations and reduce costs with intelligent automation solutions.',
    features: [
      'RPA Integration',
      'Workflow Optimization',
      'Document Processing',
      'Intelligent Routing'
    ]
  },
  {
    icon: Database,
    title: 'AI Strategy & Consulting',
    description: 'Expert guidance to develop and implement your AI transformation roadmap.',
    features: [
      'AI Readiness Assessment',
      'Strategy Development',
      'Technology Selection',
      'Implementation Planning'
    ]
  }
];
</script>
