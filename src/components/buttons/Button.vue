<template>
  <button :class="{ enabled }">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    enabled: Boolean
  }
})
</script>

<style lang="scss" scoped>
  button {
    @apply px-4 py-2 rounded bg-gray-200 transition-colors duration-200;

    &:hover {
      @apply bg-gray-300;
    }
  }

  button.enabled {
    @apply bg-green-400;

    &:hover {
      @apply bg-green-500;
    }
  }
</style>
