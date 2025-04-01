<template>
  <div class="min-h-screen bg-gray-50 font-['Inter']">
    <header class="sticky top-0 bg-white shadow-sm z-50">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <router-link to="/" class="flex items-center space-x-2">
            <GamepadIcon class="text-blue-600" />
            <span class="text-2xl font-semibold text-gray-900">GamePortal</span>
          </router-link>
          
          <div class="hidden md:flex space-x-8">
            <router-link 
              v-for="category in categories" 
              :key="category.id"
              :to="{ name: 'home', query: { category: category.id }}"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              {{ category.name }}
            </router-link>
          </div>

          <button 
            @click="isSidebarOpen = !isSidebarOpen"
            class="md:hidden text-gray-600 hover:text-gray-900"
          >
            <MenuIcon v-if="!isSidebarOpen" />
            <XIcon v-else />
          </button>
        </div>
      </nav>
    </header>

    <!-- Mobile Sidebar -->
    <div 
      v-if="isSidebarOpen" 
      class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
      @click="isSidebarOpen = false"
    ></div>
    
    <div 
      :class="[
        'fixed top-0 left-0 bottom-0 w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      ]"
    >
      <div class="p-4">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
        <div class="space-y-2">
          <router-link
            v-for="category in categories"
            :key="category.id"
            :to="{ name: 'home', query: { category: category.id }}"
            class="block px-3 py-2 text-base text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
            @click="isSidebarOpen = false"
          >
            {{ category.name }}
          </router-link>
        </div>
      </div>
    </div>

    <router-view></router-view>

    <footer class="bg-white border-t mt-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">About</h3>
            <p class="text-gray-600">GamePortal brings you the best free online games that you can play directly in your browser.</p>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Categories</h3>
            <ul class="space-y-2">
              <li v-for="category in categories" :key="category.id">
                <router-link 
                  :to="{ name: 'home', query: { category: category.id }}"
                  class="text-gray-600 hover:text-gray-900"
                >
                  {{ category.name }}
                </router-link>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Legal</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-200 pt-8">
          <p class="text-center text-gray-500 text-sm">
            © {{ new Date().getFullYear() }} GamePortal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { GamepadIcon, MenuIcon, XIcon } from 'lucide-vue-next'
import { categories } from './data'

const isSidebarOpen = ref(false)
</script>