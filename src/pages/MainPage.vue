<template>
  <div class="MainPage">
    <!-- TitleBar Component -->
    <title-bar />

    <!-- Filter Section -->
    <div class="FilterSection">
      <p>You may add more or edit your existing resources</p>
      <div class="chip-grid">
        <chip-button
          v-for="filter in filters"
          :key="filter"
          :filter="filter"
          :selectedFilter="selectedFilter"
          @filter-changed="handleFilterChange"
        />
        </div>
    </div>

    <!-- Resource Grid -->
    <div class="resource-grid" v-if="filteredResources.length > 0">
      <resource-card
        v-for="resource in resources"
        :key="resource.id" />
    </div>

    <!-- Show More Button -->
    <button @click="loadMore">Show More</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import '@/components/TitleBar.ts';
import '@/components/ChipButton.ts';
import '@/components/ResourceCard.ts';

// Resource data / Should be replaced with API call
const resources = ref([
  { id: 1, title: 'Ignition Podcast: Innovation, Agility, Talent, Workplace, Culture, and more', bookmarked: false, tags: ['Workplace', 'Resources'] },
  { id: 2, title: 'Threat Briefing', bookmarked: true, tags: ['Training', 'Education'] },
  { id: 3, title: 'SSC Telework Portal', bookmarked: false, tags: ['Productivity', 'Workplace'] },
  { id: 4, title: 'AIR FORCE Virtual Education', bookmarked: true, tags: ['Education'] },
  { id: 5, title: 'Guide to DigitalU', bookmarked: false, tags: ['Productivity'] },
  { id: 6, title: 'How Build a Collaborative Team Environment', bookmarked: true, tags: ['Training'] },
  { id: 7, title: 'Resource 7', bookmarked: false, tags: ['Engineering'] },
  // More resources...
]);

const filters = ref(['All', 'Acquisition', 'Communication', 'Engineering', 'Education', 'Productivity', 'Training', 'Workplace']);
const selectedFilter = ref('All');

const filteredResources = computed(() =>
  selectedFilter.value === 'All'
    ? resources.value
    : resources.value.filter((r) => r.tags.includes(selectedFilter.value))
);

// Handle filter change Switch out to apply multiple filters to search. 
function handleFilterChange(filter: string) {
  selectedFilter.value = filter;
}

function loadMore() {
  console.log('Load more resources...');
  // Implement logic to fetch or add more resources
}
</script>

<style scoped>
.MainPage {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* padding: 1rem; */
}
.FilterSection {
  text-align: center;
}

button { /* Show More Button */
  align-self: center;
  padding: 0.5rem 1rem;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s;
}
button:hover {
  background-color: #1976d2;
}

.resource-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  gap: 1rem;
  max-width: 100%;
}
</style>
