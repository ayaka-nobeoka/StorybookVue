<script setup lang="ts">
type Props = {
  disabled?: boolean
  bgColor?: string
  type?: 'button' | 'submit'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  bgColor: '#008cff',
})

const emit = defineEmits<{
  (e: 'clickEvent', event: Event): void
}>()
</script>

<template>
  <button
    class="button"
    :type="props.type"
    :style="{ backgroundColor: props.disabled ? '#c1c1c1' : props.bgColor }"
    @click="props.type === 'button' && emit('clickEvent', $event)"
    :disabled="props.disabled"
  >
    <slot />
  </button>
</template>

<style scoped>
.button {
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0 4px;
  height: 32px;
  border-radius: 4px;
  color: #fff;
  appearance: none;
}

.button:disabled {
  cursor: not-allowed;
}
</style>
