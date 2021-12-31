<template>
  <div
    v-click-outside="hide"
    class="select-wrap"
    :class="{ 'select-wrap--disabled': $props.options.disableSelect }"
    @click="toggle"
  >
    <input
      v-if="!optionsSelected.length"
      v-model="look"
      :placeholder="$props.options.placeholder"
      type="text"
      :disabled="$props.options.disableInput"
    />
    <div v-else class="select-wrap__tags">
      <span class="select-wrap__tags--name">{{ optionsSelected[0] }}</span>
      <span v-if="optionsSelected.length > 1" class="select-wrap__tags--plus"
        >+{{ optionsSelected.length - 1 }}</span
      >
    </div>
    <svg
      v-if="!look && !optionsSelected.length"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="chevron-down"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      class="icon svg-inline--fa fa-chevron-down fa-w-14 fa-fw"
    >
      <path
        data-v-e3e1e202=""
        fill="currentColor"
        d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
        class=""
      ></path>
    </svg>
    <svg
      v-else
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="times"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      class="icon right close svg-inline--fa fa-times fa-w-11"
      @click.stop="resetOption"
    >
      <path
        fill="currentColor"
        d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
        class=""
      ></path>
    </svg>
    <div
      v-if="opened && !$props.options.disableSelect"
      class="select-wrap__options"
    >
      <p
        v-for="(option, index) in optionsViewLoad"
        :key="index"
        class="select-wrap__options--item"
        @click="toggle($props.options.muti), storeSelect(option)"
      >
        <span>{{ option }}</span>
        <svg
          v-if="optionsSelected.includes(option)"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="check"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          class="svg-inline--fa fa-check fa-w-16"
        >
          <path
            data-v-e3e1e202=""
            fill="currentColor"
            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
            class=""
          ></path>
        </svg>
      </p>
      <span
        v-if="!optionsViewLoad.length"
        class="select-wrap__options--none"
        @click="toggle($props.options.muti)"
        >no options</span
      >
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside"

export default {
  directives: {
    ClickOutside,
  },
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          placeholder: "",
          defaultSelect: [],
          list: [],
          muti: false,
          disableInput: true,
          disableSelect: false,
        }
      },
    },
  },
  data() {
    return {
      optionsViewLoad: this.$props.options.list,
      optionsSelected: this.$props.options.defaultSelect
        ? this.$props.options.defaultSelect.map(
            (order) => this.$props.options.list[order]
          )
        : [],
      look: "",
      opened: false,
    }
  },
  watch: {
    look: function (newContent, oldContent) {
      this.parserLooking(newContent)
    },
  },
  mounted() {},
  methods: {
    toggle(muti = false) {
      if (muti) {
        this.opened = true
      } else {
        this.opened = false
      }
    },
    hide() {
      this.opened = false
    },
    storeSelect(option) {
      const check = this.$data.optionsSelected.find((value) => value === option)
      if (!check) {
        this.$data.optionsSelected.push(option)
      } else {
        this.$data.optionsSelected = this.$data.optionsSelected.filter(
          (value) => value !== option
        )
      }
    },
    parserLooking(key) {
      this.$data.optionsViewLoad = this.$props.options.list.filter((value) =>
        value.includes(String(key))
      )
    },
    resetOption() {
      if (!this.$props.options.disableSelect) {
        this.$data.optionsSelected = []
        this.$data.optionsViewLoad = this.$props.options.list
        this.$data.look = ""
        this.toggle()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.select-wrap {
  align-items: center;
  height: 37px;
  background: $color-background-100;
  border-radius: 6px;
  box-shadow: 0 14px 30px rgba($color-shadow-blue, 0.1),
    0 4px 4px rgba($color-shadow-blue, 0.04);
  display: grid;
  font-size: 1.3rem;
  grid-gap: 10px;
  grid-template-columns: auto 13px;
  padding: 11px 16px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  &--disabled {
    cursor: not-allowed;
  }
  svg.fa-search {
    color: $color-gray-400;
  }
  svg.fa-chevron-down {
    color: $color-gray-400;
    &:hover {
      color: $color-gray-600;
    }
  }
  svg.close {
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
  &__options {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    width: 100%;
    box-shadow: 0 14px 30px rgba($color-shadow-blue, 0.1),
      0 4px 4px rgba($color-shadow-blue, 0.04);
    background: $color-background-100;
    border-radius: 6px;
    box-sizing: border-box;
    max-height: 500px;
    padding: 10px;
    z-index: 50;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-track {
      background-color: #e4e4e4;
      border-radius: 100px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 100px;
      border: 2px solid transparent;
      background-clip: content-box;
      background-color: $color-blue-500;
    }
    &--item {
      display: flex;
      border-radius: 4px;
      color: $color-gray-700;
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 600;
      padding: 10px 12px;
      transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
      white-space: normal;
      text-transform: capitalize;
      align-items: center;
      justify-content: space-between;
      span {
        line-height: 1.46;
      }
      svg {
        height: 0.5rem;
        padding: 0.4rem;
        border-radius: 50%;
        background-color: $color-blue-500;
        color: $color-white;
      }
      &:hover {
        color: $color-blue-600;
        background: rgba($color-background-200, 0.6);
      }
    }
    &--none {
      display: block;
      border-radius: 4px;
      color: $color-gray-700;
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 600;
      padding: 10px 12px;
      transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
      white-space: normal;
      text-transform: capitalize;
    }
  }
  &__tags {
    font-size: 0.7rem;
    color: $color-gray-600;
    margin-left: -9px;
    font-weight: 500;
    margin-top: 2px;
    span {
      background-color: $color-background-300;
      padding: 5px 8px;
      border-radius: 6px;
    }
    &--name {
    }
    &--pluse {
    }
  }
}
</style>
