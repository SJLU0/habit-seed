<script setup>
// 色票名稱供 Vue 渲染；實際顏色由 SCSS Map 產生。
const colorGroups = [
  {
    name: "background",
    colors: [
      { name: "base", variable: "--el-bg-color" },
      { name: "page", variable: "--el-bg-color-page" },
      { name: "overlay", variable: "--el-bg-color-overlay" },
    ],
  },
  {
    name: "fill",
    colors: [
      { name: "base", variable: "--el-fill-color" },
      { name: "light", variable: "--el-fill-color-light" },
      { name: "lighter", variable: "--el-fill-color-lighter" },
      { name: "extra-light", variable: "--el-fill-color-extra-light" },
      { name: "dark", variable: "--el-fill-color-dark" },
      { name: "darker", variable: "--el-fill-color-darker" },
      { name: "blank", variable: "--el-fill-color-blank" },
    ],
  },
  {
    name: "border",
    colors: [
      { name: "base", variable: "--el-border-color" },
      { name: "light", variable: "--el-border-color-light" },
      { name: "lighter", variable: "--el-border-color-lighter" },
      { name: "extra-light", variable: "--el-border-color-extra-light" },
      { name: "dark", variable: "--el-border-color-dark" },
      { name: "darker", variable: "--el-border-color-darker" },
      { name: "hover", variable: "--el-border-color-hover" },
    ],
  },
  {
    name: "text",
    colors: [
      { name: "primary", variable: "--el-text-color-primary" },
      { name: "regular", variable: "--el-text-color-regular" },
      { name: "secondary", variable: "--el-text-color-secondary" },
      { name: "placeholder", variable: "--el-text-color-placeholder" },
      { name: "disabled", variable: "--el-text-color-disabled" },
    ],
  },
  {
    name: "primary",
    colors: [
      { name: "base", variable: "--el-color-primary" },
      { name: "light-3", variable: "--el-color-primary-light-3" },
      { name: "light-5", variable: "--el-color-primary-light-5" },
      { name: "light-7", variable: "--el-color-primary-light-7" },
      { name: "light-8", variable: "--el-color-primary-light-8" },
      { name: "light-9", variable: "--el-color-primary-light-9" },
      { name: "dark-2", variable: "--el-color-primary-dark-2" },
    ],
  },
  {
    name: "success",
    colors: [
      { name: "base", variable: "--el-color-success" },
      { name: "light-3", variable: "--el-color-success-light-3" },
      { name: "light-5", variable: "--el-color-success-light-5" },
      { name: "light-7", variable: "--el-color-success-light-7" },
      { name: "light-8", variable: "--el-color-success-light-8" },
      { name: "light-9", variable: "--el-color-success-light-9" },
      { name: "dark-2", variable: "--el-color-success-dark-2" },
    ],
  },
  {
    name: "warning",
    colors: [
      { name: "base", variable: "--el-color-warning" },
      { name: "light-3", variable: "--el-color-warning-light-3" },
      { name: "light-5", variable: "--el-color-warning-light-5" },
      { name: "light-7", variable: "--el-color-warning-light-7" },
      { name: "light-8", variable: "--el-color-warning-light-8" },
      { name: "light-9", variable: "--el-color-warning-light-9" },
      { name: "dark-2", variable: "--el-color-warning-dark-2" },
    ],
  },
  {
    name: "danger",
    colors: [
      { name: "base", variable: "--el-color-danger" },
      { name: "light-3", variable: "--el-color-danger-light-3" },
      { name: "light-5", variable: "--el-color-danger-light-5" },
      { name: "light-7", variable: "--el-color-danger-light-7" },
      { name: "light-8", variable: "--el-color-danger-light-8" },
      { name: "light-9", variable: "--el-color-danger-light-9" },
      { name: "dark-2", variable: "--el-color-danger-dark-2" },
    ],
  },
  {
    name: "info",
    colors: [
      { name: "base", variable: "--el-color-info" },
      { name: "light-3", variable: "--el-color-info-light-3" },
      { name: "light-5", variable: "--el-color-info-light-5" },
      { name: "light-7", variable: "--el-color-info-light-7" },
      { name: "light-8", variable: "--el-color-info-light-8" },
      { name: "light-9", variable: "--el-color-info-light-9" },
      { name: "dark-2", variable: "--el-color-info-dark-2" },
    ],
  },
  {
    name: "neutral",
    colors: [
      { name: "white", variable: "--el-color-white" },
      { name: "black", variable: "--el-color-black" },
    ],
  },
];
</script>

<template>
  <main class="p-colorDemo">
    <h1>Element Plus 色票</h1>
    <section
      v-for="group in colorGroups"
      :key="group.name"
      class="p-colorDemo__group"
    >
      <h2>{{ group.name }}</h2>
      <ul class="p-colorDemo__list">
        <li
          v-for="color in group.colors"
          :key="color.variable"
          class="p-colorDemo__item"
        >
          <span
            :class="`p-colorDemo__swatch -${group.name}-${color.name}`"
            aria-hidden="true"
          ></span>
          <code>{{ color.variable }}</code>
        </li>
      </ul>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use "../assets/vendor/element-plus-colors" as palette;

.p-colorDemo {
  padding: 24px;
  &__group {
    margin-block: 24px;
  }
  &__list {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 10px;
  }
  &__item {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  &__swatch {
    display: inline-block;
    flex: 0 0 20px;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border: 1px solid var(--el-border-color-light);
  }
  @each $group, $colors in palette.$color-groups {
    @each $name, $variable in $colors {
      &__swatch.-#{$group}-#{$name} {
        background-color: var(#{$variable});
      }
    }
  }
}
</style>
