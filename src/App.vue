
<template>
  <div id="app" class="container">
    <div class="header-section">
      <h1 class="title is-1 header-text has-text-white has-text-weight-bold">Super Todo List</h1>
      <div class="field is-grouped header-buttons">
        <p class="control">
          <a class="button is-warning" v-on:click="prioritiseTodos">
            <span class="has-text-weight-bold">Prioritise</span>
          </a>
        </p>
        <p class="control">
          <a class="button is-danger" v-on:click="deleteAllTodos">
            <span class="has-text-weight-bold">Delete All Todos</span>
          </a>
        </p>
      </div>
    </div>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="columns">
      <div v-for="category in categoryTypes" :key="category.id" class="column">
        <div class="todo-list">
          <h3 class="title is-3">{{category.title}}</h3>
          <p class="subtitle">{{category.description}}</p>

          <ul>
            <li v-for="todo in todos" :key="todo.title" OrderBy="todo.priority">
              <div v-if="category.title === todo.category" class="todo">
                <div class="columns">
                  <div class="column is-four-fifths todo-main">
                    <p>{{todo.title}}</p>
                    <div class="select is-small is-fullwidth">
                      <!-- <select v-on:click="() => changeCategory('hell', 'lo')">
                        <option
                          v-for="selectCategory in categoryTypes"
                          :key="selectCategory.id"
                        >{{selectCategory.title}}</option>
                      </select>-->
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
            </li>
          </ul>
        </div>
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
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
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
          title: "I am also life changing todo",
          priority: true,
          category: "Life Changing"
        },
        {
          id: 1,
          title: "I am a life changing todo",
          priority: false,
          category: "Life Changing"
        },
        {
          id: 2,
          title: "I am an important todo",
          priority: false,
          category: "Important"
        },
        {
          id: 3,
          title: "I am a meh todo",
          priority: true,
          category: "Meh"
        }
      ]
    };
  },
  components: {
    // HelloWorld
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

.todo-list {
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #ededed;
}

.add-todo-section {
  margin-top: 0.5rem;
}

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

.header {
  margin-bottom: 1rem;
  font-weight: 800;
}

.header-section {
  padding-top: 2rem;
  padding-bottom: 1rem;
}

.add-todo-icon {
  color: white;
}

.header-buttons {
  align-items: center !important;
  justify-content: center !important;
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
