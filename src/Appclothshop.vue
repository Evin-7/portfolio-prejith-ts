<template>
  <div class="bg-gray-50 text-gray-900 min-h-screen">
    <!-- Navbar -->
    <nav class="bg-white shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div class="flex items-center space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/2/2a/Pothys_Logo.png"
            alt="Pothys"
            class="h-10"
          />
          <h1 class="text-xl font-bold font-heading text-green-700">POTHYS</h1>
        </div>
        <ul class="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          <li><a href="#" class="hover:text-green-700">Home</a></li>
          <li><a href="#" class="hover:text-green-700">Sarees</a></li>
          <li><a href="#" class="hover:text-green-700">Menswear</a></li>
          <li><a href="#" class="hover:text-green-700">Kidswear</a></li>
          <li><a href="#" class="hover:text-green-700">Collections</a></li>
          <li><a href="#" class="hover:text-green-700">Contact</a></li>
        </ul>
        <button
          class="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      
      <div v-if="mobileMenuOpen" class="md:hidden bg-white shadow-md">
        <ul class="space-y-2 py-3 px-4 text-gray-700">
          <li><a href="#" class="block hover:text-green-700">Home</a></li>
          <li><a href="#" class="block hover:text-green-700">Sarees</a></li>
          <li><a href="#" class="block hover:text-green-700">Menswear</a></li>
          <li><a href="#" class="block hover:text-green-700">Kidswear</a></li>
          <li><a href="#" class="block hover:text-green-700">Collections</a></li>
          <li><a href="#" class="block hover:text-green-700">Contact</a></li>
        </ul>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative bg-green-100">
      <img
        src="https://images.unsplash.com/photo-1593032465177-d8a42c5a2cf5?auto=format&fit=crop&w=1200&q=80"
        class="w-full h-[400px] object-cover opacity-70"
        alt="Hero"
      />
      <div class="absolute inset-0 flex flex-col justify-center items-center text-center text-green-900">
        <h2 class="text-4xl md:text-5xl font-heading font-semibold mb-4">
          Celebrate Tradition with Pothys
        </h2>
        <p class="text-lg md:text-xl mb-6 max-w-2xl">
          Experience the timeless beauty of Indian ethnic wear, crafted with passion and heritage.
        </p>
        <button class="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800">
          Explore Collection
        </button>
      </div>
    </section>

    <!-- Product Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h3 class="text-3xl font-heading font-semibold text-center text-green-800 mb-10">
        Featured Collections
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="bg-white rounded-lg shadow hover:shadow-lg transition p-4"
        >
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-64 object-cover rounded-md mb-4"
          />
          <h4 class="text-lg font-semibold text-gray-800">{{ product.name }}</h4>
          <p class="text-green-700 font-medium">{{ product.price }}</p>
          <button
            class="mt-3 w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-green-900 text-white py-10 mt-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h5 class="text-xl font-heading mb-3">POTHYS</h5>
          <p class="text-sm text-green-100">
            Draping you in elegance since 1923. Explore a world of silk, cotton, and handcrafted tradition.
          </p>
        </div>

        <div>
          <h5 class="font-semibold mb-3">Quick Links</h5>
          <ul class="space-y-2 text-green-100">
            <li><a href="#" class="hover:text-white">About Us</a></li>
            <li><a href="#" class="hover:text-white">Stores</a></li>
            <li><a href="#" class="hover:text-white">Careers</a></li>
            <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h5 class="font-semibold mb-3">Follow Us</h5>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-yellow-300">🌐</a>
            <a href="#" class="hover:text-yellow-300">📘</a>
            <a href="#" class="hover:text-yellow-300">📸</a>
          </div>
        </div>
      </div>

      <div class="mt-10 text-center text-green-200 text-sm">
        © 2025 Pothys. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const products = ref([
  {
    name: 'Kanchipuram Silk Saree',
    price: '₹9,999',
    image: './assets/images/dietimage.jpg'
  },
  {
    name: 'Cotton Kurta Set',
    price: '₹2,499',
    image: 'https://images.unsplash.com/photo-1624376963077-8f6939e1a2e4?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Kids Pattu Pavadai',
    price: '₹1,899',
    image: 'https://images.unsplash.com/photo-1622445208186-fd7ad5689b3a?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Men’s Sherwani',
    price: '₹7,999',
    image: 'https://images.unsplash.com/photo-1612002373164-9a67e7f9d4a2?auto=format&fit=crop&w=800&q=80'
  }
])
</script>

<style>
body {
  font-family: 'Inter', sans-serif;
}
.font-heading {
  font-family: 'Playfair Display', serif;
}
</style>
