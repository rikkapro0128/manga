<template>
  <div class="card-wrap">
    <div class="card-wrap__cover"></div>
    <div class="card-wrap__content">
      <div class='card-wrap__content--title'></div>
      <div class='card-wrap__content--details'></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-wrap {
  animation: start 0.3s linear;
  display: grid;
  grid-template-columns: 48px auto;
  position: relative;
  min-height: 80px;
  background: $color-background-100;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 14px 30px rgba($color-shadow-blue, .15),0 4px 4px rgba($color-shadow-blue, .05);
  box-sizing: border-box;
  @keyframes start {
    0% {
      opacity: 0;
      transform:scale(.96);
    }60% {
       opacity: 1;
     }to {
        transform: none;
      }
  }
  &__cover {
    overflow: hidden;
    background: $color-background-300;
    @include gardientLoading;
  }
  &__content {
    display: grid;
    grid-template-columns: auto 130px 130px 150px;
    &--title {
      width: 30%;
      height: 20px;
      background: $color-background-300;
      border-radius: 4px;
      margin-top: 14px;
      margin-left: 14px;
      overflow: hidden;
      @include gardientLoading;
    }
    &--details {
      width: 50%;
      height: 15px;
      background: $color-background-300;
      border-radius: 4px;
      margin-top: 14px;
      overflow: hidden;
      @include gardientLoading;
    }
  }
}
</style>
