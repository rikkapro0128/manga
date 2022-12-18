<template>
  <div class="grid grid-cols-6">
    <div class="bg-red-300"></div>
    <div class="col-span-5">
      <slot></slot>
    </div>
  </div>
  <el-drawer v-model="drawer" title="I am the title" :with-header="false">
    <span>Hi there!</span>
  </el-drawer>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)

</script>

<style lang="scss" scoped>

</style>