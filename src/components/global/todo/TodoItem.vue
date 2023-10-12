<template>
  <div class="todo-table-line" :class="todo.favorite ? 'favorite-added' : ''">
    <div class="todo-table-item todo-id-item">
      <span>{{ todo.userId }}</span>
    </div>
    <div class="todo-table-item todo-id-item">
      <span>{{ todo.id }}</span>
    </div>
    <div class="todo-table-item todo-title-item">
      <span>{{ todo.title }}</span>
    </div>
    <div class="todo-table-item">
      <span>{{ todo.status }}</span>
    </div>
    <div class="todo-table-item">
      <ActionButton
        :button-action="toggleFavorite"
        :placeholder="todo.favorite ? 'Remove' : 'Add'"
      >
      </ActionButton>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useTodoStore } from "../../../stores/todo";
import ActionButton from "../form-control/ActionButton.vue";

export default {
  name: "TodoItem",
  components: { ActionButton },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(useTodoStore, ["toggleFavoriteTodo"]),

    toggleFavorite() {
      this.toggleFavoriteTodo(this.todo.id);
    },
  },
};
</script>

<style lang="scss">
.todo-table-item {
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

  .button {
    font-size: 14px;
    padding: 10px 5px;
    @media only screen and (max-width: 580px) {
      font-size: 10px;
      padding: 3px;
    }
  }

  span {
    font-size: 16px;
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
</style>
