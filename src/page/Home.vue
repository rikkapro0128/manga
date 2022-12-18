<template>
  <div>
    <div>
      <TrendingDefault />
    </div>
    <div class="grid gap-4 lg:grid-cols-3 xl:grid-cols-6">
      <CardDefault :key="temp" v-for="temp in 7" />
    </div>
  </div>
</template>

<script setup>
import CardDefault from '@/components/Card/CardDefault.vue';
import TrendingDefault from '@/components/Trending/TrendingDefault.vue';
</script>