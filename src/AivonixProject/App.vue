<template>
  <div id="app" class="font-sans antialiased">
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <WhyChooseSection />
    <CareersSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from './components/HeroSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import AboutSection from './components/AboutSection.vue';
import WhyChooseSection from './components/WhyChooseSection.vue';
import CareersSection from './components/CareersSection.vue';
import ContactSection from './components/ContactSection.vue';
</script>

<style>
/* You can add global styles here if needed */
</style>
