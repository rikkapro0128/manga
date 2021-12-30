<template>
  <div class='home-page'>
<!--    Component Filter Manga, Anime, Light-Novel,...etc-->
    <div class='filter-wrap'>
      <div class='filter-wrap__mini'>
        <div class='filter-wrap__mini-item'>
          <span class='filter-wrap__mini-item--title'>tìm kiếm</span>
          <Input :options='{ placeholder: `Search` }' @change-data-input='getDataInput(`search`, ...arguments)'/>
        </div>
        <div class='filter-wrap__mini-item'>
          <span class='filter-wrap__mini-item--title'>thể loại</span>
          <Select />
        </div>
        <div class='filter-wrap__mini-item'>
          <span class='filter-wrap__mini-item--title'>format</span>
          <Select />
        </div>
        <div class='filter-wrap__mini-item'>
          <span class='filter-wrap__mini-item--title'>tình trạng</span>
          <Select />
        </div>
        <div class='filter-wrap__mini-item'>
          <span class='filter-wrap__mini-item--title'>đất nước</span>
          <Select />
        </div>
      </div>
      <div class='filter-wrap__extra'></div>
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input/DefaultInput'
import Select from '@/components/Select/DefaultSelect'

export default {
  name: 'Home',
  components: {
    Input,
    Select,
  },
  methods: {
    getDataInput(field, data) {

    }
  }
}
</script>

<style lang='scss' scoped>
.home-page {
  color: $color-gray-900;
  font-weight: 600;
  .filter-wrap {
    display: grid;
    grid-template-columns: 10fr 1fr;
    &__mini {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 2rem;
      &-item {
        &--title {
          display: block;
          text-transform: capitalize;
          margin-bottom: 0.5rem;
        }
      }
    }
    &__extra {

    }
  }
}
</style>
