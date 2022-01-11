<template>
  <div class="input-wrap">
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="search"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      class="icon left svg-inline--fa fa-search fa-w-16"
    >
      <path
        fill="currentColor"
        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
        class=""
      ></path>
    </svg>
    <input
      v-model="content"
      :placeholder="$props.options.placeholder"
      type="text"
    />
    <svg
      v-if="content ? true : false"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="times"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      class="icon right close svg-inline--fa fa-times fa-w-11"
      @click="content = ``"
    >
      <path
        fill="currentColor"
        d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
        class=""
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          placeholder: "",
          defaultValue: "",
        }
      },
    },
  },
  data() {
    return {
      content: this.$props.options.defaultValue,
    }
  },
  watch: {
    content: function (newContent, oldContent) {
      this.$emit("change-data-input", newContent)
    },
  },
}
</script>

<style lang="scss" scoped>
.input-wrap {
  align-items: center;
  height: 37px;
  background: $color-background-100;
  border-radius: 6px;
  box-shadow: 0 14px 30px rgba($color-shadow-blue, 0.1),
    0 4px 4px rgba($color-shadow-blue, 0.04);
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 13px auto 13px;
  padding: 11px 16px;
  box-sizing: border-box;
  svg.fa-search {
    height: 15px;
    color: $color-gray-400;
  }
  svg.close {
    height: 15px;
    cursor: pointer;
    color: $color-gray-400;
    transition: color 0.2s ease;
    &:hover {
      color: $color-gray-600;
    }
  }
  input {
    font-family: inherit;
    color: $color-gray-600;
    font-weight: 600;
    width: 100%;
    box-sizing: border-box;
    background-color: transparent;
    &::placeholder {
      color: inherit;
      text-transform: capitalize;
    }
  }
}
</style>
