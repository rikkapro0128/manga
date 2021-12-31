<template>
  <div class="home-page">
    <!--    Component Filter Manga, Anime, Light-Novel,...etc-->
    <div class="filter-wrap">
      <div class="filter-wrap__mini">
        <div class="filter-wrap__mini-item">
          <span class="filter-wrap__mini-item--title">tìm kiếm</span>
          <Input
            :options="{ placeholder: `từ khoá` }"
            @change-data-input="getDataInput(`search`, ...arguments)"
          />
        </div>
        <div class="filter-wrap__mini-item">
          <span class="filter-wrap__mini-item--title">thể loại</span>
          <Select
            :options="{ placeholder: `từ khoá`, list: typeManga, muti: true, disableInput: false }"
          />
        </div>
        <div class="filter-wrap__mini-item">
          <span class="filter-wrap__mini-item--title">format</span>
          <Select
            :options="{ list: [`anime`, `manga`, `light novel`], muti: true, disableInput: true, defaultSelect: [1, 2], disableSelect: true }"
          />
        </div>
        <div class="filter-wrap__mini-item">
          <span class="filter-wrap__mini-item--title">tình trạng</span>
          <Select
            :options="{ list: [`đang cập nhật`, `bị hoãn`], muti: true, disableInput: true, defaultSelect: [0] }"
          />
        </div>
        <div class="filter-wrap__mini-item">
          <span class="filter-wrap__mini-item--title">đất nước</span>
          <Select
            :options="{ list: [`trung quốc`, `việt nam`, `nhật bản`, `hàn quốc`], muti: true, disableInput: true, defaultSelect: [2, 3] }"
          />
        </div>
      </div>
      <div class="filter-wrap__extra"></div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input/DefaultInput"
import Select from "@/components/Select/DefaultSelect"

export default {
  name: "Home",
  components: {
    Input,
    Select,
  },
  data() {
    return {
      typeManga: [
        "Action",
        "Adult",
        "Adventure",
        "Anime",
        "Chuyển Sinh",
        "Comedy",
        "Comic",
        "Cooking",
        "Cổ Đại",
        "Doujinshi",
        "Drama",
        "Đam Mỹ",
        "Ecchi",
        "Fantasy",
        "Gender Bender",
        "Harem",
        "Historical",
        "Horror",
        "Josei",
        "Live action",
        "Manga",
        "Manhua",
        "Manhwa",
        "Martial Arts",
        "Mature",
        "Mecha",
        "Mystery",
        "Ngôn Tình",
        "One shot",
        "Psychological",
        "Romance",
        "School Life",
        "Sci-fi",
        "Seinen",
        "Shoujo",
        "Shoujo Ai",
        "Shounen",
        "Shounen Ai",
        "Slice of Life",
        "Smut",
        "Soft Yaoi",
        "Soft Yuri",
        "Sports",
        "Supernatural",
        "Thiếu Nhi",
        "Tragedy",
        "Trinh Thám",
        "Truyện scan",
        "Truyện Màu",
        "Webtoon",
        "Xuyên Không",
      ],
    }
  },
  methods: {
    getDataInput(field, data) {},
  },
}
</script>

<style lang="scss" scoped>
.home-page {
  color: $color-gray-900;
  font-weight: 600;
  .filter-wrap {
    display: grid;
    grid-template-columns: 10fr 1fr;
    &__mini {
      display: grid;
      grid-template-columns: repeat(5, 180px);
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
