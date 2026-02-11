  <template>
  <div id="app" class="min-h-screen flex flex-col">
    <!-- Header Section -->
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
    <!-- Main Content -->
    <!-- Footer Section -->
  </div>
</template>
<script>    
</script>