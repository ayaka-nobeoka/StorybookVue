<script setup lang="ts">
import Button from '../Button/index.vue'

type Props = {
  titleInputValue: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  submitEvent: [title: Event]
  changeEvent: [event: Event]
}>()
</script>

<template>
  <form class="todo-form" @submit.prevent="emit('submitEvent', $event)">
    <input type="text" :value="props.titleInputValue" @input="emit('changeEvent', $event)" />
    <Button type="submit" :disabled="props.titleInputValue.trim() === ''">追加</Button>
  </form>
</template>

<style scoped>
.todo-form {
  width: 327px;
  display: grid;
  grid-template-columns: 1fr 57px;
  gap: 20px;
  margin: 20px 0 32px;
}

.input {
  padding: 8px;
  border: 1px solid #cdcdcd;
  border-radius: 4px;
}
</style>
