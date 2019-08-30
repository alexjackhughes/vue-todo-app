
<template>
  <div id="app">
    <h1>HELLO</h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- Remember that todos is the name of our array -->
    <ul>
      <li v-for="todo in todos" v-bind:key="todo.id" class="flex">
        <!-- and now, we can access to an item using todo-->
        {{todo.title}}
        <font-awesome-icon icon="star" />
        <font-awesome-icon icon="plus-circle" />
      </li>
    </ul>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "app",
  data: function() {
    return {
      newTodoText: "",
      todos: [
        {
          id: 0,
          title: "I am a todo",
          priority: true,
          category: "LIFE_CHANGING"
        },
        {
          id: 1,
          title: "I am a second todo",
          priority: false,
          category: "LIFE_CHANGING"
        },
        {
          id: 2,
          title: "I am a nice todo",
          priority: true,
          category: "IMPORTANT"
        },
        {
          id: 3,
          title: "I am a cross todo",
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
