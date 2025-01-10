<template>
  <div class="MainPage">
    <!-- TitleBar Section -->
    <div class="TitleBar">
      <div class="title">Your Resources</div>
      <div class="tools">
        <!-- Example: Replace with actual buttons or functionality -->
        <i class="bi bi-pencil"></i>
        <i class="bi bi-plus-lg"></i>
        <i class="bi bi-list-task"></i>
        <i class="bi bi-sort-down-alt"></i>
      </div>
    </div>

    <!-- Filter Section -->
    <div class="filter-chip-section">
      <p>You may add more or edit your existing resources</p>
      <div class="chip-grid">
        <chip-button
          v-for="filter in filters"
          :key="filter"
          :label="filter"
          :active="filter === selectedFilter"
          @chip-toggle="handleFilterChange"
        />
      </div>
    </div>

    <!-- Resource Grid -->
    <transition-group name="list" tag="div" class="resource-grid" v-if="filteredResources.length > 0">
      <resource-card
        v-for="resource in filteredResources"
        :key="resource.id"
        :id="resource.id"
        :title="resource.title"
        :tags="resource.tags"
        :img="resource.img"
        :bookmarked="resource.bookmarked"
      />
    </transition-group>
    <div class="ShowMore" @click="loadMore"><i class="bi bi-arrow-down-circle"></i> Show More</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import resourceData from '@/data/resources.json';
import '@/components/ChipButton.ts';
import '@/components/ResourceCard.ts';

// Resource data | Should be replaced with Database call
const resources = ref(resourceData);

const filters = ref([
  'All',
  'Acquisition',
  'Communication',
  'Engineering',
  'Education',
  'Productivity',
  'Training',
  'Workplace',
]);
const selectedFilter = ref('All');
const loadAmount = ref(6);

const filteredResources = computed(() => {
  if(selectedFilter.value == '')
  {
    selectedFilter.value = 'All';
  }
  if (selectedFilter.value === 'All') {
    if (resources.value.length > loadAmount.value) {
      return resources.value.slice(0, loadAmount.value);
    }
    return resources.value;
  } else {
    const filtered = resources.value.filter((r: any) => r.tags.includes(selectedFilter.value));
    if (filtered.length > loadAmount.value) {
      //this is probably done in the Backend API
      return filtered.slice(0, loadAmount.value);
    }
    return filtered;
  }
});

// Handle filter change Switch out to apply multiple filters to search.
function handleFilterChange(event: CustomEvent) {
  const { label, active } = event.detail;
  if(selectedFilter.value == label)
  { 
    selectedFilter.value  = 'All'
  }
  else {
    selectedFilter.value = label;
  }
  
}

function loadMore() {
  loadAmount.value += 6;
  //Call getResources database Query Function.
}
</script>

<style scoped>
.MainPage {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* padding: 1rem; */
}
.filter-chip-section {
  text-align: left;
}

.ShowMore {
  /* Show More Button */
  display: flex;
  align-items: center;
  gap: 1rem;
  align-self: center;
  font-weight: 700;
  padding: 0.5rem 1rem;
  color: #0e4c87;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.3s;
}
.ShowMore:hover {
  position: relative;
  top: 1px;
}
.bi-arrow-down-circle {
  font-size: 1rem;
}

.resource-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: 100%;
}

@media (min-width: 1000px) { /*64*2 + 425x2 +20px */
  .resource-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1400px) {
  .resource-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}


.list-enter-active, .list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from, 
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.chip-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0rem 0.8rem;
  margin-top: 0.5rem;
}
.TitleBar {
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* padding: 1rem; */
}
.tools {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  color: var(--main-color, rgb(59, 59, 59));
  font-size: 1.8rem;
  cursor: pointer;
}
.tools i:hover {
  position: relative;
  top: -1px;
}

.title {
  font-size: 2.4em;
  line-height: 1.1;
  font-weight: 600;
  color: #0e4c87;
  margin: 0;
  text-align: left;
}
</style>
