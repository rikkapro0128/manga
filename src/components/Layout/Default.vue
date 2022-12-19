<template>
  <div class="mx-auto max-w-7xl mt-6 mb-6 px-6">
    <HeaderDefault />
    <slot></slot>
    <FooterDefault />
  </div>
</template>

<script setup>

import HeaderDefault from '@/components/Header/HeaderDefault.vue';
import FooterDefault from '@/components/Footer/FooterDefault.vue';

</script>

<style lang="scss" scoped>

</style>