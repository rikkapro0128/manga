<template>
  <div class="wraper">
    <div class="clone" @click="$router.push('/admin/upload/clone')">
      <span>clone</span>
    </div>
    <div class="manual" @click="$router.push('/admin/upload/manual')">
      <span>thủ công</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wraper {
  display: flex;
  .clone {
    margin-right: 15px;
  }
  .manual {
    margin-left: 15px;
  }
  & > div {
    cursor: pointer;
    height: 100px;
    width: 150px;
    background: $color-blue;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 14px 30px rgba($color-shadow-blue, 0.1),
      0 4px 4px rgba($color-shadow-blue, 0.04);
    transition: box-shadow 0.2s linear;
    span {
      color: $color-white;
      text-transform: capitalize;
      font-size: 1.2rem;
    }
    &:hover {
      box-shadow: none;
    }
  }
}
</style>
