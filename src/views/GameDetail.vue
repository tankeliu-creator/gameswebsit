<template>
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div v-if="game" class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="aspect-w-16 aspect-h-9">
        <iframe
          :src="game.url"
          class="w-full h-full"
          frameborder="0"
          allow="fullscreen"
          allowfullscreen
        ></iframe>
      </div>
      
      <div class="p-6">
        <div class="flex items-center justify-between mb-4">
          <h1 class="text-3xl font-semibold text-gray-900">{{ game.title }}</h1>
          <div class="flex items-center space-x-2">
<!--            <ThumbsUpIcon class="text-green-500" />-->
<!--            <span class="text-gray-600">{{ game.likes }} likes</span>-->
          </div>
        </div>

        <div class="flex items-center space-x-4 mb-6">
          <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            {{ game.category }}
          </span>
<!--          <span class="text-gray-600">{{ game.plays }} plays</span>-->
        </div>

        <div class="prose max-w-none">
          <h2 class="text-xl font-semibold text-gray-900 mb-2">How to Play</h2>
          <p class="text-gray-600 mb-4">{{ game.instructions }}</p>

          <h2 class="text-xl font-semibold text-gray-900 mb-2">About This Game</h2>
          <p class="text-gray-600 mb-4">{{ game.description }}</p>

          <h2 class="text-xl font-semibold text-gray-900 mb-2">Controls</h2>
          <p class="text-gray-600 mb-4">{{ game.controls }}</p>
<!--          <ul class="list-disc list-inside text-gray-600">-->
<!--            <li v-for="(control, action) in game.controls" :key="action">-->
<!--              <span class="font-medium">{{ action }}:</span> {{ control }}-->
<!--            </li>-->
<!--          </ul>-->
        </div>
      </div>
    </div>

    <div v-else class="text-center py-12">
      <p class="text-gray-600">Game not found</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ThumbsUpIcon } from 'lucide-vue-next'
import { games } from '../data'

const route = useRoute()
const game = computed(() => games.find(g => g.id === route.params.id))
</script>