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
      <div v-if="typeCard.primary" class="wrap-meadia meadia-primary">
        <CardLoadPrimary
          v-for="(dataCard, index) in cardDemo"
          :key="index"
          :data="dataCard"
        />
      </div>
      <div v-if="typeCard.chart" class="wrap-meadia meadia-chart">
        <CardLoadChart v-for="n in 20" :key="n" />
      </div>
      <div v-if="typeCard.table" class="wrap-meadia meadia-table">
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
        primary: true,
        chart: false,
        table: false,
      },
      cardDemo: [
        {
          name: "Na Honjaman Level Up",
          thumnail:
            "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105398-b673Vt5ZSuz3.jpg",
        },
        {
          name: "Sinui Tap",
          thumnail:
            "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx85143-lW27BYY5zMqC.jpg",
        },
        {
          name: "HUNTER×HUNTER",
          thumnail:
            "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30026-uCvXMudMzmwI.jpg",
        },
        {
          name: "Jujutsu Kaisen",
          thumnail:
            "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx101517-H3TdM3g5ZUe9.jpg",
        },
        {
          name: "Jigokuraku",
          thumnail:
            "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx101517-H3TdM3g5ZUe9.jpg",
        },
        {
          name: "Dandadan",
          thumnail:
            "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx132029-jIm1KsPcIwIl.jpg",
        },
        {
          name: "Dorohedoro",
          thumnail:
            "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx31133-xhUafoJkW2AZ.png",
          desc:
            'The story revolves around Kaiman, who does not remember who he was before he was transfigured by a Magic user. This transformation left him with a reptile\'s head, and a desire to find out the truth about who he really is. Accompanied by Nikaido, his female companion, he tracks down Magic Users in "The Hole" and unceremoniously chomps down on their head, hoping to find out who it was that put him in this state. One by one, they witness this "second man" inside the head of Kaiman, and after pulling them back out of his mouth he asks them all a question... "What did the guy inside my head say?"' +
            "",
        },
        {
          name: "Berserk",
          thumnail:
            "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30002-7EzO7o21jzeF.jpg",
          desc: 'Spurred by the flame raging in his heart, the Black Swordsman Guts continues his seemingly endless quest for revenge. Standing in his path are heinous outlaws, delusional evil spirits, and a devout child of god. Even as it chips away at his life, Guts continues to fight his enemies, who wield repulsive and inhumane power, with nary but his body and sword—his strength as a human. What lies at the end of his travels? The answer is shrouded in the "night." Strain your eyes and stare into the dark!',
        },
        {
          name: "Vinland Saga",
          thumnail:
            "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30642-x6RpmbP5mU7q.jpg",
          desc: "As a child, Thorfinn sat at the feet of the great Leif Ericson and thrilled to wild tales of a land far to the west. But his youthful fantasies were shattered by a mercenary raid. Raised by the Vikings who murdered his father, Thorfinn became a terrifying warrior, forever seeking to kill the band's leader, Askeladd, and avenge his father. Sustaining Thorfinn through his ordeal are his pride in his family and his dreams of a fertile westward land, a land without war or slavery … the land Leif called Vinland.",
        },
        {
          name: "Komi-san wa, Komyushou desu.",
          thumnail:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx133965-9TZBS4m4yvED.png",
          desc: "Timid Tadano is a total wallflower, and that’s just the way he likes it. But all that changes when he finds himself alone in a classroom on the first day of high school with the legendary Komi. He quickly realizes she isn’t aloof—she’s just super awkward. Now he’s made it his mission to help her on her quest to make 100 friends!",
        },
        {
          name: "Kaguya-sama wa Kokurasetai?: Tensaitachi no Renai Zunousen",
          thumnail:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112641-zoGC8d6FaPXU.jpg",
          desc: "After a slow but eventful summer vacation, Shuchiin Academy's second term is now starting in full force. As August transitions into September, Miyuki Shirogane's birthday looms ever closer, leaving Kaguya Shinomiya in a serious predicament as to how to celebrate it. Furthermore, the tenure of the school's 67th student council is coming to an end. Due to the council members being in different classes, the only time Kaguya and Miyuki have to be together will soon disappear, putting all of their cunning plans at risk.",
        },
        {
          name: "Karakai Jouzu no Takagi-san",
          thumnail:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx99468-9Ij1UpsehSVx.jpg",
          desc:
            "His classmate Takagi loves to tease him on a daily basis, and she uses her extensive knowledge of his behavior to predict exactly how he will react to her teasing, making it nearly impossible for Nishikata to ever make a successful comeback. Despite this, Nishikata vows to someday give Takagi a taste of her own medicine by making her blush out of embarrassment from his teasing." +
            "",
        },
        {
          name: "Ijiranaide, Nagatoro-san",
          thumnail:
            "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx120697-72Sf22C9PTQn.jpg",
          desc: "One day, Senpai visits the library after school and becomes the target of a super sadistic junior! The name of the girl who teases, torments, and tantalizes Senpai is \"Nagatoro!\" She's annoying yet adorable. It's painful, but you still want to be by her side. This is a story about an extremely sadistic and temperamental girl and you'll feel something awaken inside of you.",
        },
      ],
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
