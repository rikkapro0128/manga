<template>
  <DynamicLayout>
    <router-view v-slot="{ Component }">
      <transition mode="out-in" name="fade">
        <component class="mt-6 mb-6 px-6" :is="Component" />
      </transition>
    </router-view>
  </DynamicLayout>
</template>

<script setup>
import DynamicLayout from '@/components/Layout/DynamicLayout.vue';
</script>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
