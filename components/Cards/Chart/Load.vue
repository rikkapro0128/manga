<template>
  <div class="card-wrap">
    <div class="card-wrap__cover"></div>
    <div class="card-wrap__description">
      <div class="card-wrap__description--title"></div>
      <div class="card-wrap__description--text"></div>
      <div class="card-wrap__description--text"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-wrap {
  animation: start 0.3s linear;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: $color-background-100;
  border-radius: 4px;
  box-shadow: 0 14px 30px rgba($color-shadow-blue, 0.15),
    0 4px 4px rgba($color-shadow-blue, 0.05);
  display: inline-grid;
  grid-template-columns: 185px auto;
  height: 265px;
  min-width: 370px;
  overflow: hidden;
  position: relative;
  text-align: left;
  @keyframes start {
    0% {
      opacity: 0;
      transform: scale(0.96);
    }
    60% {
      opacity: 1;
    }
    to {
      transform: none;
    }
  }
  &__cover {
    background: rgba($color-background-300, 0.8);
    box-shadow: none;
    opacity: 1;
    overflow: hidden;
    //background: rgba($color-background-300,.8);
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    //box-shadow: 0 14px 30px rgba($color-shadow-blue,.15),0 4px 4px rgba($color-shadow-blue,.05);
    cursor: pointer;
    display: inline-block;
    height: 265px;
    position: relative;
    width: 100%;
    z-index: 5;
    @include gardientLoading($load: true);
  }
  &__description {
    color: $color-gray-600;
    display: -webkit-box;
    font-size: 1.1rem;
    line-height: 1.6;
    overflow: hidden;
    padding-right: 17px;
    transition: color 0.2s;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
    &--title {
      width: 80%;
      height: 22px;
      margin-top: 14px;
      margin-left: 14px;
      border-radius: 4px;
      background-color: $color-background-300;
    }
    &--text {
      width: 60%;
      height: 12px;
      margin-top: 14px;
      margin-left: 14px;
      border-radius: 4px;
      background-color: $color-background-300;
    }
  }
}
</style>
