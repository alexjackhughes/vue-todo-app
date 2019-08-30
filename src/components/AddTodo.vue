<template>
  <div class="add-todo-section">
    <div class="field">
      <div class="control">
        <input
          class="input is-info"
          type="text"
          placeholder="Add a new todo"
          v-on:keyup.enter="() => addTodo(category.title)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  props: {
    addTodo: { type: Function },
    category: Object
  }
};
</script>

<style scoped>
.add-todo-section {
  margin-top: 0.5rem;
}

.add-todo-icon {
  color: white;
}
</style>