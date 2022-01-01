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
            :options="{
              placeholder: `từ khoá`,
              list: typeManga,
              muti: true,
              disableInput: false,
            }"
          />
        </div>
        <div class="filter-wrap__mini-item">
          <span class="filter-wrap__mini-item--title">format</span>
          <Select
            :options="{
              list: [`anime`, `manga`, `light novel`],
              muti: true,
              disableInput: true,
              defaultSelect: [1, 2],
              disableSelect: true,
            }"
          />
        </div>
        <div class="filter-wrap__mini-item">
          <span class="filter-wrap__mini-item--title">tình trạng</span>
          <Select
            :options="{
              list: [`đang cập nhật`, `bị hoãn`],
              muti: true,
              disableInput: true,
              defaultSelect: [0],
            }"
          />
        </div>
        <div class="filter-wrap__mini-item">
          <span class="filter-wrap__mini-item--title">đất nước</span>
          <Select
            :options="{
              list: [`trung quốc`, `việt nam`, `nhật bản`, `hàn quốc`],
              muti: true,
              disableInput: true,
              defaultSelect: [2, 3],
            }"
          />
        </div>
      </div>
      <div class="filter-wrap__extra"></div>
    </div>
    <div class="tool-sort-cards">
      <div class="oder-function"></div>
      <div class="choose-style-card">
        <div
          class="manager__cards manager__cards--primary"
          :class="{ active: typeCard.primary }"
          @click="chooseStyleCard(`primary`)"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="th"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="icon svg-inline--fa fa-th fa-w-16"
          >
            <path
              data-v-f1f4dbb6=""
              fill="currentColor"
              d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"
              class=""
            ></path>
          </svg>
        </div>
        <div
          class="manager__cards manager__cards--chart"
          :class="{ active: typeCard.chart }"
          @click="chooseStyleCard(`chart`)"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="th-large"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="icon svg-inline--fa fa-th-large fa-w-16"
          >
            <path
              data-v-f1f4dbb6=""
              fill="currentColor"
              d="M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"
              class=""
            ></path>
          </svg>
        </div>
        <div
          class="manager__cards manager__cards--table"
          :class="{ active: typeCard.table }"
          @click="chooseStyleCard(`table`)"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="th-list"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="icon svg-inline--fa fa-th-list fa-w-16"
          >
            <path
              data-v-f1f4dbb6=""
              fill="currentColor"
              d="M149.333 216v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-80c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zM125.333 32H24C10.745 32 0 42.745 0 56v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zm80 448H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm-24-424v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24zm24 264H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24z"
              class=""
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="results">
      <div v-if='typeCard.primary' class="wrap-meadia meadia-primary">
        <CardLoadPrimary v-for="n in 20" :key="n" />
      </div>
      <div v-if='typeCard.chart' class="wrap-meadia meadia-chart">
        <CardLoadChart v-for="n in 20" :key="n" />
      </div>
      <div v-if='typeCard.table' class="wrap-meadia meadia-table">
        <CardLoadTable v-for="n in 20" :key="n" />
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input/DefaultInput"
import Select from "@/components/Select/DefaultSelect"
import CardLoadPrimary from "@/components/Cards/Primary/Load.vue"
import CardLoadChart from "@/components/Cards/Chart/Load.vue"
import CardLoadTable from "@/components/Cards/Table/Load.vue"

export default {
  name: "Home",
  components: {
    Input,
    Select,
    CardLoadChart,
    CardLoadTable,
    CardLoadPrimary,
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
      typeCard: {
        primary: false,
        chart: false,
        table: true,
      },
    }
  },
  methods: {
    chooseStyleCard(style) {
      for (const item in this.typeCard) {
        if (style === item) {
          if (this.typeCard[item] === false) {
            this.typeCard[item] = true
          } else {
            continue
          }
        } else {
          this.typeCard[item] = false
        }
      }
    },
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
    margin: 2rem 0;
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
  .tool-sort-cards {
    display: grid;
    grid-template-columns: auto min-content;
    margin-bottom: 2rem;
    .choose-style-card {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 8px;
      .manager__cards {
        color: $color-gray-500;
        transition: color 0.3s ease-in-out;
        cursor: pointer;
        &.active {
          color: $color-gray-700;
        }
        &:hover {
          color: $color-gray-700;
        }
        svg {
          height: 16px;
          color: inherit;
        }
      }
    }
  }
  .results {
    .wrap-meadia {
      display: grid;
      &.meadia-primary {
        grid-template-columns: repeat(auto-fill, 185px);
        justify-content: space-between;
        grid-gap: 28px 30px;
      }
      &.meadia-chart {
        grid-template-columns: repeat(3, minmax(390px, 460px));
        grid-gap: 28px 30px;
        justify-content: space-between;
      }
      &.meadia-table {
        grid-template-columns: 1fr;
        grid-gap: 24px;
      }
    }
  }
}
</style>
