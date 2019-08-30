
<template>
  <div id="app" class="container">
    <Header :prioritiseTodos="prioritiseTodos" :deleteAllTodos="deleteAllTodos" />

    <div class="columns">
      <div v-for="category in categoryTypes" :key="category.title" class="column">
        <TodoList
          :editTodo="editTodo"
          :deleteTodo="deleteTodo"
          :category="category"
          :categoryTypes="categoryTypes"
          :todos="todos"
        />

        <AddTodo :addTodo="addTodo" :category="category" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

export default {
  name: "app",
  methods: {
    prioritiseTodos: function() {
      this.todos = this._.sortBy(this.todos, ["priority"]).reverse();
    },
    addTodo: function(category) {
      this.todos.push({
        id: this.todos.length + 1,
        title: event.target.value,
        priority: false,
        category: category
      });
    },
    deleteTodo: function(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    deleteAllTodos: function() {
      this.todos = [];
    },
    editTodo: function(id) {
      this.todos[id] = {
        id: id,
        title: event.target.value,
        priority: this.todos[id].priority,
        category: this.todos[id].category
      };
    }
  },
  data: function() {
    return {
      categoryTypes: [
        { title: "Meh", description: "Just ignore this stuff" },
        {
          title: "Important",
          description: "Probably should be doing this"
        },
        {
          title: "Life Changing",
          description: "Dude, you have to do this stuff"
        }
      ],
      todos: [
        {
          id: 0,
          title: "Make sure to feed the dog",
          priority: true,
          category: "Life Changing"
        },
        {
          id: 1,
          title: "Buy slippers",
          priority: false,
          category: "Life Changing"
        },
        {
          id: 2,
          title: "Book tickets to Disney",
          priority: false,
          category: "Important"
        },
        {
          id: 3,
          title: "Feed parrot",
          priority: true,
          category: "Meh"
        }
      ]
    };
  },
  components: {
    Header,
    TodoList,
    AddTodo
  }
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}

html {
  height: 100%;
}

body {
  min-height: 100%;
  padding: 0.5rem;
  text-align: center;
  background-color: #34b1eb;
}

.columns {
  padding: 10px;
  position: relative;
}

.column {
  padding: 0.5rem;
}
</style>
