<template>
  <Button
    class="add-manager-button"
    :enabled="enabled"
    @click="addManager"
  >
    Add manager (cost: {{ managerCost }} workers | efficiency: {{ managerEfficiency }})
  </Button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import Button from './Button.vue'

import { useManagers } from '@/state/manager.state'
import { useWorkers } from '@/state/workers.state'

export default defineComponent({
  components: { Button },
  setup () {
    const { incrementManagers, managerCost } = useManagers()
    const { incrementWorkers, workers } = useWorkers()

    const addManager = () => {
      if (workers.value >= managerCost.value) {
        incrementWorkers(-managerCost.value)
        incrementManagers(1)
      }
    }

    const enabled = computed(() => workers.value >= managerCost.value)

    const managerEfficiency = computed(() => (0.1 / managerCost.value * 1000).toFixed(1))

    return { addManager, enabled, managerCost, managerEfficiency }
  }
})
</script>

<style lang="scss" scoped>
  .add-manager-button {
    @apply self-start;
  }
</style>
