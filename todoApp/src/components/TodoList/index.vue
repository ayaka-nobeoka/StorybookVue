<script setup lang="ts">
import Input from '../Input/index.vue'
import TodoItem from '../TodoItem/index.vue'
import { useTodo } from '../../composables/useTodo'

const { titleInputValue, changeTitleInputValue, todoList, addTodo, completeTodo, deleteTodo } =
  useTodo()
</script>

<template>
  <h1>TODOアプリ</h1>
  <Input
    :titleInputValue="titleInputValue"
    @submitEvent="addTodo"
    @changeEvent="changeTitleInputValue"
  />
  <p v-if="todoList.length === 0">新しいTodoを追加しましょう！</p>
  <ul v-else class="todo-list">
    <TodoItem
      v-for="todo in todoList"
      :key="todo.id"
      :id="todo.id"
      :title="todo.title"
      :completed="todo.completed"
      @completeEvent="completeTodo"
      @deleteEvent="deleteTodo"
    />
  </ul>
</template>

<style scoped></style>
