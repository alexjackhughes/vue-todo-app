<template>
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
</template>

<script>
export default {
  name: "Header",
  props: {
    deleteAllTodos: { type: Function },
    prioritiseTodos: { type: Function }
  }
};
</script>

<style scoped>
.header {
  margin-bottom: 1rem;
  font-weight: 800;
}

.header-section {
  padding-top: 2rem;
  padding-bottom: 1rem;
}

.header-buttons {
  align-items: center !important;
  justify-content: center !important;
}
</style>