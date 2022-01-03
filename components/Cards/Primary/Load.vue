<template>
  <div class="card-wrap" :class="{ loaded: showImage, loading: !showImage }">
    <div class="card-wrap__cover">
      <img v-if="showImage" :src="$props.data.thumnail" />
    </div>
    <div class="card-wrap__title">
      <span v-if="showImage">{{ $props.data.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: function () {
        return {
          name: "",
          thumnail: "",
          desc: "",
        }
      },
    },
  },
  data() {
    return {
      showImage: false,
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      const imgURL = this.$props.data.thumnail
      if (imgURL) {
        const img = new Image()
        img.onload = function () {
          this.showImage = true
        }.bind(this)
        img.src = imgURL
      }
    })
  },
}
</script>

<style lang="scss" scoped>
.card-wrap {
  animation: start 0.3s linear;
  display: grid;
  grid-template-rows: min-content auto;
  position: relative;
  width: 185px;
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
  &.loading &__cover {
    @include gardientLoading($load: true);
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
    & > img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      opacity: 0;
      transition: opacity 0.3s ease;
      animation: fadein 0.3s linear forwards;
    }
  }
  &.loading &__title {
    width: 80%;
    background: rgba($color-background-300, 0.8);
    @include gardientLoading($load: true);
  }
  &__title {
    box-shadow: none;
    opacity: 1;
    //background: rgba($color-background-300,.8);
    border-radius: 4px;
    //box-shadow: 0 14px 30px rgba($color-shadow-blue,.15),0 4px 4px rgba($color-shadow-blue,.05);
    cursor: pointer;
    display: inline-block;
    height: 17px;
    position: relative;
    width: 100%;
    margin-top: 12px;
    z-index: 5;
    span {
      display: block;
      //@include textInner;
    }
  }
}
</style>
