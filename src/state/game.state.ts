import { useManagers } from './manager.state'
import { usePerSecond } from './perSecond.state'
import { useResources } from './resources.state'
import { useWorkers } from './workers.state'

export const useGameState = () => {
  const {
    managersPerSecond,
    resourcesPerSecond,
    workersPerSecond
  } = usePerSecond()
  const { incrementManagers } = useManagers()
  const { incrementResources } = useResources()
  const { incrementWorkers } = useWorkers()

  const gameTick = (secondsSinceLast: number) => {
    incrementManagers(managersPerSecond.value * secondsSinceLast)
    incrementResources(resourcesPerSecond.value * secondsSinceLast)
    incrementWorkers(workersPerSecond.value * secondsSinceLast)
  }

  return { gameTick }
}
