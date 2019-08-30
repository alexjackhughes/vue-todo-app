<template>
  <div class="todo-list">
    <h3 class="title is-3">{{category.title}}</h3>
    <p class="subtitle">{{category.description}}</p>

    <ul>
      <li v-for="todo in todos" :key="todo.id" OrderBy="todo.priority">
        <Todo
          :editTodo="editTodo"
          :deleteTodo="deleteTodo"
          :categoryTypes="categoryTypes"
          :category="category"
          :todo="todo"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Todo from "./Todo";

export default {
  name: "TodoList",
  props: {
    editTodo: { type: Function },
    deleteTodo: { type: Function },
    category: Object,
    categoryTypes: Array,
    todos: Array
  },
  components: {
    Todo
  }
};
</script>

<style scoped>
.todo-list {
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #ededed;
}
</style>