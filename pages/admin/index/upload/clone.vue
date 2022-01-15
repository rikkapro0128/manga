<template>
  <div class="clone">
    <div class="context" @click="$refs.inputFile.click()">
      <span class="fs-1-4">tải thư mục lên</span>
      <input
        v-show="false"
        ref="inputFile"
        type="file"
        webkitdirectory
        directory
        multiple
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.clone {
  width: 70%;
  max-height: 100px;
  height: 100px;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  border: 2px dashed $color-text;
  border-radius: 6px;
  cursor: pointer;
  background: #ccc;
  .context {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      text-transform: capitalize;
    }
  }
}
</style>
