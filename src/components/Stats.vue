<template>
  <span>Resources: {{ Math.round(resources) }}</span>
  <span>Resources per second: {{ resourcesPerSecond.toFixed(1) }}</span>
  <span>Workers per second: {{ workersPerSecond.toFixed(1) }}</span>
  <span>Managers per second: {{ managersPerSecond.toFixed(2) }}</span>
  <span>Workers: {{ workers.toFixed() }}</span>
  <span>Managers: {{ managers.toFixed() }}</span>
  <span>Offices: {{ offices }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useManagers } from '@/state/manager.state'
import { useOffices } from '@/state/offices.state'
import { usePerSecond } from '@/state/perSecond.state'
import { useResources } from '@/state/resources.state'
import { useWorkers } from '@/state/workers.state'

export default defineComponent({
  setup () {
    const { managers } = useManagers()
    const { offices } = useOffices()
    const {
      managersPerSecond,
      resourcesPerSecond,
      workersPerSecond
    } = usePerSecond()
    const { resources } = useResources()
    const { workers } = useWorkers()

    return {
      managers,
      managersPerSecond,
      offices,
      resources,
      resourcesPerSecond,
      workers,
      workersPerSecond
    }
  }
})
</script>
