import { computed, ref } from 'vue'

const offices = ref(0)

export const useOffices = () => {
  const officeCost = computed(() => Math.round(10000 * (1.07 ** Math.round(offices.value))))

  const incrementOffices = (amount: number) => {
    offices.value += amount
  }

  return {
    incrementOffices,
    officeCost,
    offices: computed(() => offices.value)
  }
}
