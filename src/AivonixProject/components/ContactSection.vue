<template>
  <section id="contact" class="py-20 bg-gray-900 text-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">Get In Touch</h2>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto">
          Ready to transform your business with AI? Let's start a conversation about your needs and how we can help.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <h3 class="text-2xl font-semibold mb-6">Contact Information</h3>
          <div class="space-y-6">
            <div class="flex items-start">
              <Mail class="w-6 h-6 text-blue-400 mr-4 mt-1" />
              <div>
                <h4 class="font-semibold mb-1">Email</h4>
                <a href="mailto:info@aivonix.com" class="text-gray-400 hover:text-blue-400 transition-colors">
                  info@aivonix.com
                </a>
              </div>
            </div>
            <div class="flex items-start">
              <Phone class="w-6 h-6 text-blue-400 mr-4 mt-1" />
              <div>
                <h4 class="font-semibold mb-1">Phone</h4>
                <a href="tel:+1234567890" class="text-gray-400 hover:text-blue-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div class="flex items-start">
              <MapPin class="w-6 h-6 text-blue-400 mr-4 mt-1" />
              <div>
                <h4 class="font-semibold mb-1">Office</h4>
                <p class="text-gray-400">
                  123 AI Street, Tech Valley<br />
                  San Francisco, CA 94102
                </p>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <h4 class="font-semibold mb-4">Follow Us</h4>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin class="w-5 h-5" />
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter class="w-5 h-5" />
              </a>
              <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Github class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                required
                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                required
                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label for="company" class="block text-sm font-medium mb-2">Company</label>
              <input
                type="text"
                id="company"
                v-model="formData.company"
                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                placeholder="Your company (optional)"
              />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                rows="4"
                class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 mt-20 pt-8 border-t border-gray-800 text-center text-gray-400">
      <p>&copy; 2024 Aivonix. All rights reserved.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-vue-next';

const formData = ref({
  name: '',
  email: '',
  company: '',
  message: ''
});

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', formData.value);
  alert('Thank you for your message! We\'ll get back to you soon.');
  // Reset form
  formData.value = {
    name: '',
    email: '',
    company: '',
    message: ''
  };
};
</script>
