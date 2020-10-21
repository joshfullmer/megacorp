<template>
  <Button
    class="add-worker-button"
    :enabled="enabled"
    @click="addWorker"
  >
    Add worker (cost: {{ workerCost }} resources | efficiency: {{ workerEfficiency }})
  </Button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import { useResources } from '@/state/resources.state'
import { useWorkers } from '@/state/workers.state'
import Button from './Button.vue'

export default defineComponent({
  components: { Button },
  setup () {
    const { incrementResources, resources } = useResources()
    const { incrementWorkers, workerCost } = useWorkers()

    const addWorker = () => {
      if (resources.value >= workerCost.value) {
        incrementResources(-workerCost.value)
        incrementWorkers(1)
      }
    }

    const enabled = computed(() => resources.value >= workerCost.value)

    const workerEfficiency = computed(() => (1 / workerCost.value * 1000).toFixed(1))

    return { addWorker, enabled, workerCost, workerEfficiency }
  }
})
</script>

<style lang="scss" scoped>
  .add-worker-button {
    @apply self-start;
  }
</style>
