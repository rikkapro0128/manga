<template>
  <div class="card-wrap">
    <div class="card-wrap__cover"></div>
    <div class="card-wrap__title"></div>
  </div>
</template>

<style lang="scss" scoped>
.card-wrap {
  animation: start 0.3s linear;
  display: grid;
  grid-template-rows: min-content auto;
  position: relative;
  width: 185px;
  @keyframes start {
    0% {
      opacity:0;
      transform:scale(.96)
    }60% {
       opacity:1;
     }to {
        transform:none;
      }
  }
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
    @include gardientLoading($load: true);
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
    @include gardientLoading($load: true);
  }
}
</style>
