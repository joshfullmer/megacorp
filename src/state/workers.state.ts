import { computed, ref } from 'vue'

const workers = ref(0)

export const useWorkers = () => {
  const workerCost = computed(() => Math.round(10 * (1.05 ** Math.round(workers.value))))

  const incrementWorkers = (amount: number) => {
    workers.value += amount
  }

  return {
    incrementWorkers,
    workerCost,
    workers: computed(() => workers.value)
  }
}
