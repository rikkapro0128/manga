<template>
  <footer>
    <div class='wraper'>
      <div class='footer__homepage'>
        <nuxt-link class='footer__homepage--link' to='/'>
          <h1>manga</h1>
        </nuxt-link>
      </div>
      <div class='footer__description'>
        <span class='footer__description--content'>
          Đây là website cho mọi người đọc truyện, website chỉ mang tính chất demo cho quá trình dev, không liên quan đến vấn đề bản quyền hay thương mại hoá
        </span>
      </div>
      <div class='footer__index'>
        <nuxt-link to='/' class='footer__index--item'>
          <span class='footer__index--policy'>policy</span>
        </nuxt-link>
        <nuxt-link to='/' class='footer__index--item'>
          <span class='footer__index--team-develop'>team develop</span>
        </nuxt-link>
        <nuxt-link to='/' class='footer__index--item'>
          <span class='footer__index--fanpage'>fanpage</span>
        </nuxt-link>
        <nuxt-link to='/' class='footer__index--item'>
          <span class='footer__index--facebook-manager'>facebook manager</span>
        </nuxt-link>
        <nuxt-link to='/' class='footer__index--item'>
          <span class='footer__index--instagram'>instagram</span>
        </nuxt-link>
        <nuxt-link to='/' class='footer__index--item'>
          <span class='footer__index--discord'>discord</span>
        </nuxt-link>
        <nuxt-link to='/' class='footer__index--item'>
          <span class='footer__index--github'>github</span>
        </nuxt-link>
        <nuxt-link to='/' class='footer__index--item'>
          <span class='footer__index--youtube-channel'>youtube channel</span>
        </nuxt-link>
        <nuxt-link to='/' class='footer__index--item'>
          <span class='footer__index--api'>api</span>
        </nuxt-link>
        <nuxt-link to='/' class='footer__index--item'>
          <span class='footer__index--donate'>donate</span>
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
}
</script>

<style lang='scss'>
footer {
  width: 100%;
  background-color: $default-bg-color-header;
  color: $default-color-header;
  font-family: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  .wraper {
    width: 100%;
    max-width: 1050px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .footer__homepage {
      &--link {
        h1 {
          text-transform: capitalize;
          font-weight: 600;
          font-size: 2.2rem;
          &:first-letter {;
            transition: font-size 0.3s;
            color: $color-white;
            font-size: 3rem;
          }
        }
      }
    }
    .footer__description {
      max-width: 20rem;
      &--content {
        line-height: 1.2rem;
      }
    }
    .footer__index {
      display: grid;
      grid-template-rows: repeat(5, 1fr);
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1rem;
      &--item {
        span {
          text-transform: capitalize;
        }
      }
    }
  }
}
</style>
