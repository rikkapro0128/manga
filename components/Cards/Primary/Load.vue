<template>
  <div class="card-wrap">
    <div class="card-wrap__cover"></div>
    <div class="card-wrap__title"></div>
  </div>
</template>

<style lang="scss" scoped>
.card-wrap {
  animation: in-data-v-758c163c 0.3s linear;
  display: grid;
  grid-template-rows: min-content auto;
  position: relative;
  width: 185px;
  &__cover {
    background: rgba($color-background-300, 0.8);
    box-shadow: none;
    opacity: 1;
    overflow: hidden;
    //background: rgba($color-background-300,.8);
    border-radius: 4px;
    //box-shadow: 0 14px 30px rgba($color-shadow-blue,.15),0 4px 4px rgba($color-shadow-blue,.05);
    cursor: pointer;
    display: inline-block;
    height: 265px;
    position: relative;
    width: 100%;
    z-index: 5;
    &:before {
      @keyframes card-load-primary {
        from {
          transform: translateX(-100%);
        }
        to {
          transform: translateX(50%);
        }
      }
      animation: card-load-primary 2s linear infinite;
      background: linear-gradient(
        90deg,
        rgba($color-gray-300, 0) 0,
        rgba($color-blue-700, 0.06) 40%,
        rgba($color-blue-700, 0.06) 60%,
        rgba($color-gray-300, 0)
      );
      content: "";
      display: block;
      height: 100%;
      transform: translateX(0);
      width: 200%;
    }
  }
  &__title {
    background: rgba($color-background-300, 0.8);
    box-shadow: none;
    opacity: 1;
    overflow: hidden;
    //background: rgba($color-background-300,.8);
    border-radius: 4px;
    //box-shadow: 0 14px 30px rgba($color-shadow-blue,.15),0 4px 4px rgba($color-shadow-blue,.05);
    cursor: pointer;
    display: inline-block;
    height: 17px;
    position: relative;
    width: 80%;
    margin-top: 12px;
    z-index: 5;
    &:before {
      @keyframes card-load-primary {
        from {
          transform: translateX(-100%);
        }
        to {
          transform: translateX(50%);
        }
      }
      animation: card-load-primary 2s linear infinite;
      background: linear-gradient(
        90deg,
        rgba($color-gray-300, 0) 0,
        rgba($color-blue-700, 0.06) 40%,
        rgba($color-blue-700, 0.06) 60%,
        rgba($color-gray-300, 0)
      );
      content: "";
      display: block;
      height: 100%;
      transform: translateX(0);
      width: 200%;
    }
  }
}
</style>
