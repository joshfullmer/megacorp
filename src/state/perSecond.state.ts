import { computed } from 'vue'
import { useWorkers } from './workers.state'
import { MANAGERS_PER_SECOND_PER_OFFICE, RESOURCES_PER_SECOND_PER_WORKER, WORKERS_PER_SECOND_PER_MANAGER } from '@/constants/perSecond.constants'
import { useManagers } from './manager.state'
import { useOffices } from './offices.state'

export const usePerSecond = () => {
  const { managers } = useManagers()
  const { offices } = useOffices()
  const { workers } = useWorkers()

  const resourcesPerSecond = computed(() => workers.value * RESOURCES_PER_SECOND_PER_WORKER)
  const workersPerSecond = computed(() => managers.value * WORKERS_PER_SECOND_PER_MANAGER)
  const managersPerSecond = computed(() => offices.value * MANAGERS_PER_SECOND_PER_OFFICE)

  return {
    managersPerSecond,
    resourcesPerSecond,
    workersPerSecond
  }
}
