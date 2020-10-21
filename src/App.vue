<template>
  <div class="flex flex-col">
    <Stats />
    <AddResourceButton class="action-button" />
    <AddWorkerButton class="action-button" />
    <AddManagerButton class="action-button" />
    <AddOfficeButton class="action-button" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onMounted
} from 'vue'

import AddResourceButton from './components/buttons/AddResourceButton.vue'
import AddManagerButton from './components/buttons/AddManagerButton.vue'
import AddOfficeButton from './components/buttons/AddOfficeButton.vue'
import AddWorkerButton from './components/buttons/AddWorkerButton.vue'
import Stats from './components/Stats.vue'

import { useGameState } from './state/game.state'

export default defineComponent({
  name: 'App',
  components: {
    AddManagerButton,
    AddOfficeButton,
    AddResourceButton,
    AddWorkerButton,
    Stats
  },
  setup () {
    const { gameTick } = useGameState()

    let last = 0
    const loop = (timestamp: number) => {
      const secondsSinceLast = (timestamp - last) / 1000

      last = timestamp

      gameTick(secondsSinceLast)

      requestAnimationFrame(loop)
    }

    onMounted(() => loop(last))
  }
})
</script>

<style lang="scss" scoped>
  .action-button {
    @apply my-2;
  }
</style>
