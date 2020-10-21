<template>
  <Button
    class="add-office-button"
    :enabled="enabled"
    @click="addOffice"
  >
    Add office (cost: {{ officeCost }} resources | efficiency: {{ officeEfficiency }})
  </Button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import Button from './Button.vue'

import { useOffices } from '@/state/offices.state'
import { useResources } from '@/state/resources.state'

export default defineComponent({
  components: { Button },
  setup () {
    const { incrementOffices, officeCost } = useOffices()
    const { incrementResources, resources } = useResources()

    const addOffice = () => {
      if (resources.value >= officeCost.value) {
        incrementResources(-officeCost.value)
        incrementOffices(1)
      }
    }

    const enabled = computed(() => resources.value >= officeCost.value)

    const officeEfficiency = computed(() => (0.01 / officeCost.value * 1000).toFixed(1))

    return {
      addOffice,
      enabled,
      officeCost,
      officeEfficiency
    }
  }
})
</script>

<style lang="scss" scoped>
  .add-office-button {
    @apply self-start;
  }
</style>
