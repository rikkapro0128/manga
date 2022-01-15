<template>
  <div class="upload">
    <div class="title--choose-mode">
      <h1 class="fs-1-4">đăng truyện</h1>
    </div>
    <div class="mode">
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>

<style scoped lang="scss">
.upload {
  color: $color-text;
  .title--choose-mode {
    text-transform: capitalize;
  }
  .mode {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
}
</style>
