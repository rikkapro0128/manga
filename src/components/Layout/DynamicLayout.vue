<template>
  <component :is="$route.meta?.layout in layout ? layout[$route.meta?.layout] : layout['none']">
    <slot></slot>
  </component>
</template>

<script setup>
// import { useRoute } from 'vue-router';
import { useDark } from '@vueuse/core'

import Default from '@/components/Layout/Default.vue';
import Empty from '@/components/Layout/Empty.vue';

useDark();
// const route = useRoute();

const layout = {
  'default': Default,
  'none': Empty,
}

</script>

<style lang="scss" scoped>

</style>