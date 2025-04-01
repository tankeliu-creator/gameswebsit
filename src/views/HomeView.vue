<template>
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-8">
      <div class="relative max-w-xl mx-auto">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search games..."
          class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <SearchIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <router-link
        v-for="game in filteredGames"
        :key="game.id"
        :to="{ name: 'game-detail', params: { id: game.id }}"
        class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
      >
        <img
          :src="game.thumbnail"
          :alt="game.title"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h2 class="text-lg font-semibold text-gray-900">{{ game.title }}</h2>
          <div class="mt-1 flex items-center space-x-2">
            <span class="text-sm font-medium text-blue-600">{{ game.category }}</span>
            <span class="text-gray-300">•</span>
<!--            <span class="text-sm text-gray-600">{{ game.plays }} plays</span>-->
          </div>
          <p class="mt-2 text-sm text-gray-600 line-clamp-2">{{ game.description }}</p>
        </div>
      </router-link>
    </div>

    <div class="mt-8 flex justify-center">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="currentPage = page"
        :class="[
          'mx-1 px-4 py-2 rounded-md',
          currentPage === page
            ? 'bg-blue-600 text-white'
            : 'bg-white text-gray-600 hover:bg-gray-50'
        ]"
      >
        {{ page }}
      </button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { SearchIcon } from 'lucide-vue-next'
import { games } from '../data'

const route = useRoute()
const searchQuery = ref('')
const currentPage = ref(1)
const gamesPerPage = 12

const filteredGames = computed(() => {
  let filtered = games

  // Filter by category if specified in route
  if (route.query.category) {
    filtered = filtered.filter(game => game.category === route.query.category)
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(game => 
      game.title.toLowerCase().includes(query) ||
      game.description.toLowerCase().includes(query)
    )
  }

  // Pagination
  const start = (currentPage.value - 1) * gamesPerPage
  const end = start + gamesPerPage
  return filtered.slice(start, end)
})

const totalPages = computed(() => Math.ceil(games.length / gamesPerPage))
</script>