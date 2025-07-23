<script setup lang="ts">
import TodoList from './components/TodoList/index.vue'
</script>

<template>
  <div class="container">
    <TodoList />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  margin-top: 80px;
  margin-inline: auto;
  padding: 40px 64px;
  border: solid 1px #ccc;
  border-radius: 25px;
}
</style>
