<template>
  <div class="admin">
    <div class="wraper">
      <div class="wraper__avatar">
        <span class="wraper__avatar--name">admin miru</span>
        <img :src="avatarImage" alt="avatar admin" />
      </div>
      <div class="wraper__nav">
        <div class="wraper__nav--control">
          <nuxt-link class="title" to="/admin/information"
            >thông tin bản thân</nuxt-link
          >
        </div>
        <div class="wraper__nav--control">
          <nuxt-link class="title" to="/admin/report">báo cáo</nuxt-link>
        </div>
        <div class="wraper__nav--control">
          <nuxt-link class="title" to="/admin/message">tin nhắn</nuxt-link>
        </div>
        <div class="wraper__nav--control">
          <nuxt-link class="title" to="/admin/history">lịch sử</nuxt-link>
        </div>
        <div class="wraper__nav--control">
          <nuxt-link class="title" to="/admin/post">bài đăng</nuxt-link>
        </div>
        <div class="wraper__nav--control">
          <nuxt-link class="title" to="/admin/upload">đăng truyện</nuxt-link>
        </div>
      </div>
    </div>
    <div class="wraper__content">
      <div class="bread-crumb">
        <div
          v-for="(crumb, index) in breadCrumb"
          :key="index"
          class="bread-crumb__wrapper"
        >
          <!-- /admin/upload/clone -->
          <div v-if="index" class="arrow">></div>
          <nuxt-link class="title" :to="parseBreadCrumb(crumb)">{{
            crumb
          }}</nuxt-link>
        </div>
      </div>
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>

<script>
export default {
  asyncData() {
    // eslint-disable-next-line promise/param-names
    return new Promise((resovle, reject) => {
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
      setTimeout(() => {
        resovle(
          "https://i.pinimg.com/564x/cd/99/1d/cd991d7f7b616968b00d332644ef8ae3.jpg"
        )
      }, 500)
    }).then((data) => {
      return {
        avatarImage: data,
      }
    })
  },
  data() {
    return {
      breadCrumb: this.splitPath(this.$route.path),
    }
  },
  head: {
    title: "Admin | Miru Manga",
  },
  watch: {
    "$route.path": function (newPath) {
      this.$data.breadCrumb = this.splitPath(newPath)
    },
  },
  methods: {
    splitPath(path) {
      return path.split("/").filter((ele) => ele !== "")
    },
    parseBreadCrumb(crumb) {
      const path = []
      for (const ele of this.$data.breadCrumb) {
        path.push(ele)
        if (ele === crumb) {
          break
        }
      }
      // console.log(path);
      return `/${path.join("/")}`
    },
  },
}
</script>

<style scoped lang="scss">
.admin {
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 8fr;
  .wraper {
    color: $color-text;
    display: flex;
    flex-direction: column;
    &__avatar {
      display: flex;
      align-items: center;
      background: $color-white;
      padding: 10px;
      box-sizing: border-box;
      justify-content: space-between;
      border-radius: 4px;
      &--name {
        text-transform: capitalize;
        display: block;
      }
      img {
        width: 40px;
        max-height: 40px;
        object-fit: cover;
        border-radius: 50%;
      }
    }
    &__nav {
      margin-top: 10px;
      background-color: $color-white;
      padding: 10px;
      &--control {
        margin-top: 20px;
        .title {
          text-transform: capitalize;
          transition: color 0.2s linear;
          &:hover {
            color: $color-blue;
          }
        }
      }
    }
  }
  .wraper__content {
    margin-left: 10px;
    background: $color-white;
    border-radius: 4px;
    padding: 10px;
    .bread-crumb {
      display: flex;
      align-items: center;
      text-transform: capitalize;
      &__wrapper {
        display: flex;
        align-items: center;
        margin: 10px 0;
        .arrow {
          margin: 0 5px;
        }
        .title {
          transition: color 0.2s linear;
          &:hover {
            color: $color-blue;
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
