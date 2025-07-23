import { ref } from 'vue'
import type { TodoListType } from '../types'

export function useTodo() {
  const titleInputValue = ref<string>('')
  const todoList = ref<TodoListType[]>([])

  function changeTitleInputValue(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      titleInputValue.value = event.target.value
    }
  }

  function addTodo(): void {
    const newTodo: TodoListType = {
      id: crypto.randomUUID(),
      title: titleInputValue.value,
      completed: false,
    }

    const newTodoList = [...todoList.value, newTodo]
    todoList.value = newTodoList

    titleInputValue.value = ''
  }

  function completeTodo(id: string): void {
    const newTodoList = todoList.value.map((todo) => {
      if (id === todo.id) {
        return {
          ...todo,
          completed: true,
        }
      }

      return todo
    })

    todoList.value = newTodoList
  }

  function deleteTodo(id: string): void {
    const newTodoList = todoList.value.filter((todo) => todo.id !== id)
    todoList.value = newTodoList
  }

  return {
    titleInputValue,
    changeTitleInputValue,
    todoList,
    addTodo,
    completeTodo,
    deleteTodo,
  }
}
