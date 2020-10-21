import { computed, ref } from 'vue'

const resources = ref(0)

export const useResources = () => {
  const incrementResources = (amount: number) => {
    resources.value += amount
  }

  return {
    incrementResources,
    resources: computed(() => resources.value)
  }
}
