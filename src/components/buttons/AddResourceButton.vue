<template>
  <Button
    class="resource-button"
    enabled
    @click="addResource"
  >
    Generate Resource
  </Button>
</template>

<script lang="ts">
import Button from './Button.vue'

import { useManagers } from '@/state/manager.state'
import { useResources } from '../../state/resources.state'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { Button },
  setup () {
    const { managers } = useManagers()
    const { incrementResources } = useResources()

    const addResource = () => { incrementResources(managers.value || 1) }

    return { addResource }
  }
})
</script>

<style lang="scss" scoped>
  .resource-button {
    @apply self-start;
  }
</style>
