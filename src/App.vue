
<template>
  <div id="app" class="container">
    <h1 class="title is-1 header has-text-white has-text-weight-bold">Super Fun Times</h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="columns">
      <div v-for="category in categoryTypes" :key="category.id" class="column">
        <div class="todo-list">
          <h3 class="title is-3">{{category.title}}</h3>
          <p class="subtitle">{{category.description}}</p>

          <ul>
            <li v-for="todo in todos" :key="todo.id">
              <!-- and now, we can access to an item using todo-->
              <div v-if="category.id === todo.category" class="todo">
                <div class="columns">
                  <div class="column is-four-fifths todo-main">
                    <p>{{todo.title}}</p>
                    <div class="select is-small is-fullwidth">
                      <select>
                        <option
                          v-for="selectCategory in categoryTypes"
                          :selected="selectCategory.id === category.id? true: false"
                          :key="selectCategory.id"
                        >{{selectCategory.title}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="column">
                    <font-awesome-icon
                      :class="todo.priority? 'priority': 'not-priority'"
                      icon="star"
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <a class="button add-todo-button is-fullwidth is-danger">
          <span class="has-text-weight-bold">ADD TODO</span>
          <span class="icon is-small">
            <font-awesome-icon class="add-todo" icon="plus-circle" />
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "app",
  data: function() {
    return {
      newTodoText: "",
      categoryTypes: [
        { id: "MEH", title: "Meh", description: "Just ignore this stuff" },
        {
          id: "IMPORTANT",
          title: "Important",
          description: "Like, kinda important stuff"
        },
        {
          id: "LIFE_CHANGING",
          title: "Life Changing",
          description: "Dude, you have to do this stuff"
        }
      ],
      todos: [
        {
          id: 0,
          title: "I am also life changing todo",
          priority: true,
          category: "LIFE_CHANGING"
        },
        {
          id: 1,
          title: "I am a life changing todo",
          priority: false,
          category: "LIFE_CHANGING"
        },
        {
          id: 2,
          title: "I am an important todo",
          priority: false,
          category: "IMPORTANT"
        },
        {
          id: 3,
          title: "I am a meh todo",
          priority: true,
          category: "MEH"
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

.add-todo-button {
  margin-top: 0.5rem;
}
.button {
  border-radius: 0.5rem;
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
  padding-top: 2rem;
  font-weight: 800;
}

.add-todo {
  color: white;
}

select {
  border: none !important;
}

.priority {
  text-align: center;
  color: #ffe20a;
}

.not-priority {
  color: #c7c7c7;
}
</style>
