<template>
  <div class="todo-wrapper">
    <div class="todo-inner-wrapper">
      <div class="todo-controls-wrapper">
        <TodoFilter></TodoFilter>
        <TodoAddItem></TodoAddItem>
      </div>
      <div
        v-if="activeTodoList && activeTodoList.length > 0"
        class="todo-table"
      >
        <div class="todo-table-title-line">
          <div class="todo-table-title-item todo-id-item">
            <span>User ID</span>
          </div>
          <div class="todo-table-title-item todo-id-item"><span>ID</span></div>
          <div class="todo-table-title-item todo-title-item">
            <span>Title</span>
          </div>
          <div class="todo-table-title-item"><span>Status</span></div>
          <div class="todo-table-title-item"><span>Favorite Status</span></div>
        </div>
        <TodoItem
          v-for="todo in activeTodoList"
          :key="todo.id + '-userId-' + todo.userId"
          :todo="todo"
        ></TodoItem>
      </div>
      <div v-else>
        <p>No items found</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useTodoStore } from "../../stores/todo";
import TodoItem from "../global/todo/TodoItem.vue";
import TodoFilter from "../global/todo/TodoFilter.vue";
import TodoAddItem from "../global/todo/TodoAddItem.vue";

export default {
  name: "Todo",
  components: { TodoAddItem, TodoFilter, TodoItem },
  computed: {
    ...mapState(useTodoStore, ["activeTodoList"]),
  },
  methods: {
    ...mapActions(useTodoStore, ["getTodoList"]),
  },
  mounted() {
    this.getTodoList();
  },
};
</script>

<style lang="scss">
.todo-wrapper {
  display: flex;
  width: 100%;
  padding: 15px;
  background: $background-fifth;
  box-shadow: 0 0 3px 3px rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  margin: 15px 0;
  flex-direction: column;
}

.todo-table {
  display: flex;
  border-radius: 5px;
  flex-wrap: wrap;
  border: 2px solid $background-main;

  .todo-table-title-line {
    display: flex;
    flex-basis: 100%;
    border-bottom: 1px solid $background-main;

    .todo-table-title-item {
      align-items: center;
      box-sizing: border-box;
      display: flex;
      flex-basis: 25%;
      padding: 10px;
      border-right: 1px solid $background-main;

      &.todo-id-item {
        flex-basis: 10%;
      }

      &.todo-title-item {
        flex-basis: 30%;
      }

      @media only screen and (max-width: 580px) {
        padding: 3px;
      }

      span {
        font-size: 16px;
        font-weight: 600;
        @media only screen and (max-width: 860px) {
          font-size: 14px;
        }
        @media only screen and (max-width: 580px) {
          font-size: 10px;
        }
      }

      &:last-child {
        border-right: none;
      }
    }
  }

  .todo-table-line {
    display: flex;
    flex-basis: 100%;
    border-bottom: 1px solid $background-main;

    &.favorite-added {
      background-color: rgba(0, 0, 0, 0.1);
    }

    &:last-child {
      border-bottom: none;
    }
  }
}

.todo-title {
  font-size: 16px;
  font-weight: 600;
}

.todo-control-wrapper {
  display: flex;
  border-radius: 5px;
  flex-wrap: wrap;
  flex-direction: column;
  border: 2px solid $background-main;
  padding: 10px;
  margin-bottom: 15px;

  .todo-control-inner-wrapper {
    box-sizing: border-box;
    flex-direction: row;
  }
}
</style>
