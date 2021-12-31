<template>
  <header>
    <div class="wraper">
      <div class="header__left header__logo">
        <nuxt-link class="header__logo--link" to="/">
          <h1>manga</h1>
        </nuxt-link>
      </div>
      <div class="header__right header__nav">
        <nuxt-link class="header__nav--item" to="/trending">trending</nuxt-link>
        <nuxt-link class="header__nav--item" to="/type">thể loại</nuxt-link>
        <nuxt-link class="header__nav--item" to="/follow">theo dõi</nuxt-link>
        <nuxt-link class="header__nav--item" to="/history">lịch sử</nuxt-link>
        <nuxt-link class="header__nav--item" to="/group">hội nhóm</nuxt-link>
        <nuxt-link class="header__nav--item" to="/post">bài đăng</nuxt-link>
        <nuxt-link class="header__nav--item" to="/about">about</nuxt-link>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
}
</script>

<style lang="scss">
header {
  width: 100%;
  height: 75px;
  background-color: $default-bg-color-header;
  color: $default-color-header;
  font-family: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  .wraper {
    width: 100%;
    max-width: 1050px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header__logo {
      &--link {
        h1 {
          text-transform: capitalize;
          font-weight: 600;
          &:first-letter {
            transition: font-size 0.3s;
            color: $color-white;
            font-size: 1.7rem;
          }
        }
      }
    }
    .header__nav {
      width: fit-content;
      display: flex;
      position: relative;
      top: 3px;
      &--item {
        text-decoration: none;
        color: inherit;
        padding: 1rem;
        text-transform: capitalize;
        font-weight: 600;
        transition: color 0.3s linear;
        &:hover {
          color: $default-hover-color-header;
        }
      }
    }
  }
}
</style>
