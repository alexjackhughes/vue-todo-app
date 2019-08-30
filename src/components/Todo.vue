<template>
  <div v-if="category.title === todo.category" class="todo">
    <div class="columns">
      <div class="column is-four-fifths todo-main">
        <input
          class="input is-info todo-title"
          type="text"
          :placeholder="todo.title"
          :value="todo.title"
          v-on:keyup.enter="() => editTodo(todo.id)"
        />
        <div class="select is-small is-fullwidth">
          <select v-model="todo.category">
            <option
              v-for="selectCategory in categoryTypes"
              :selected="selectCategory.title === todo.category? true: false"
              :key="selectCategory.title"
            >{{selectCategory.title}}</option>
          </select>
        </div>
      </div>
      <div class="column">
        <font-awesome-icon
          :class="todo.priority? 'priority': 'not-priority'"
          v-on:click="todo.priority = !todo.priority"
          icon="star"
        />
        <font-awesome-icon
          class="trash-icon"
          v-on:click="()=> deleteTodo(todo.id)"
          icon="trash-alt"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    editTodo: { type: Function },
    deleteTodo: { type: Function },
    category: Object,
    categoryTypes: Array,
    todo: Object
  }
};
</script>

<style scoped>
.todo {
  margin: 0.2rem;
  border-radius: 0.5rem;
  margin-bottom: 0.3rem;
  padding: 0.5rem;
  background-color: white;
}

.todo-main {
  text-align: left;
  padding: 0.2rem;
}

.todo-title {
  border: none !important;
  border-color: transparent !important;
  box-shadow: none !important;
}

select {
  border: none !important;
}

.trash-icon {
  color: #c7c7c7;
}

.trash-icon:hover {
  color: #ed0e30;
}

.priority {
  color: #ffe20a;
}

.priority:hover {
  opacity: 0.5;
  color: #ffe20a;
}

.not-priority {
  color: #c7c7c7;
}
</style>