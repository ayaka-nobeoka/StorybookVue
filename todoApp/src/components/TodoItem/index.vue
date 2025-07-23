<script setup lang="ts">
import Button from '../Button/index.vue'

const props = defineProps<{
  id: string
  title: string
  completed: boolean
}>()

const emit = defineEmits<{
  completeEvent: [id: string]
  deleteEvent: [id: string]
}>()
</script>

<template>
  <li class="todo-list__item">
    <p :class="['todo-list__text', { 'todo-list__text--completed': props.completed }]">
      {{ props.title }}
    </p>
    <Button bg-color="#ff3700" @clickEvent="emit('deleteEvent', props.id)">削除</Button>
    <Button :disabled="props.completed" @clickEvent="emit('completeEvent', props.id)">完了</Button>
  </li>
</template>

<style scoped>
.todo-list__item {
  width: 327px;
  display: grid;
  grid-template-columns: 1fr 57px 57px;
  gap: 20px;
  align-items: center;
  padding: 16px 0 8px;
  border-bottom: 1px solid #cdcdcd;
}

.todo-list__item:first-of-type {
  padding-top: 0;
}

.todo-list__text {
  font-size: 16px;
}

.todo-list__text--completed {
  text-decoration: line-through;
}
</style>
