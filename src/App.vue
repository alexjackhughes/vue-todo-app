
<template>
  <div id="app">
    <h1 class="title is-1">Super Fun Times</h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div v-for="category in categoryTypes" :key="category.id" class="flex">
      <h3 class="title is-3">{{category.title}}</h3>
      <p class="subtitle">{{category.description}}</p>
      <font-awesome-icon class="addTodo" icon="plus-circle" />

      <ul>
        <li v-for="todo in todos" :key="todo.id" class="flex">
          <!-- and now, we can access to an item using todo-->
          <div v-if="category.id === todo.category">
            {{todo.title}}
            <font-awesome-icon :class="todo.priority? 'priority': 'not-priority'" icon="star" />
          </div>
          <!-- <div v-else></div> -->
        </li>
      </ul>
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
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.addTodo {
  color: #ff271c;
}

.priority {
  color: #ffe20a;
}

.not-priority {
  color: #c7c7c7;
}
</style>
