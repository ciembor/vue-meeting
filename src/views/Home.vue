<template>
  <div class="home">
  <ButtonWithLoader>
    <template #message>
      Click me in a custom way
    </template>
    <template #loadingMessage>
      Wait for me
    </template>
  </ButtonWithLoader>
  </div>
</template>

<script>
import ButtonWithLoader from '@/components/BaseButton.vue';

export default {
  name: 'home',
  components: {
    ButtonWithLoader
  }
}
</script>

