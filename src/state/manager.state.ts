import { computed, ref } from 'vue'

const managers = ref(0)

export const useManagers = () => {
  const managerCost = computed(() => Math.round(10 * (1.06 ** Math.round(managers.value))))

  const incrementManagers = (amount: number) => {
    managers.value += amount
  }

  return {
    incrementManagers,
    managerCost,
    managers: computed(() => managers.value)
  }
}
