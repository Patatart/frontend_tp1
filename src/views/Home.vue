<template>
  <div class="home">
    <Exercices/>
  </div>
</template>

<script>
// @ is an alias to /src
import Exercices from '@/components/Exercices.vue'

export default {
  name: 'Home',
  components: {
    Exercices
  }
}
</script>
