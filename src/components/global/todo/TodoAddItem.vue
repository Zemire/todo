<template>
  <div class="todo-control-wrapper">
    <p class="todo-title">Add todo</p>
    <div class="todo-control-inner-wrapper">
      <div class="flex-row">
        <div
          class="flex-column flex-column-large-4 flex-column-medium-4 flex-column-small-12"
        >
          <div class="todo-add-item">
            <TextInput
              :maskRule="/[^\d]+/g"
              :label="'User Id'"
              :field-name="'userId'"
              :placeholder="'Input User ID'"
              v-on:field-value-changed="changeTodoValue"
            ></TextInput>
          </div>
        </div>
        <div
          class="flex-column flex-column-large-4 flex-column-medium-4 flex-column-small-12"
        >
          <div class="todo-add-item">
            <TextInput
              :label="'Title'"
              :field-name="'title'"
              :placeholder="'Input title'"
              v-on:field-value-changed="changeTodoValue"
            ></TextInput>
          </div>
        </div>
        <div
          class="flex-column flex-column-large-4 flex-column-medium-4 flex-column-small-12"
        >
          <div class="todo-add-item">
            <ActionButton
              :disabled="!todo.title || !todo.userId"
              :button-action="addTodo"
              :placeholder="'Add todo'"
            >
            </ActionButton>
          </div>
        </div>
      </div>
      <p v-if="addTodoError" class="error">Failed to add todo.</p>
    </div>
  </div>
</template>

<script>
import TextInput from "../form-control/TextInput.vue";
import ActionButton from "../form-control/ActionButton.vue";
import { mapActions, mapState } from "pinia";
import { useTodoStore } from "../../../stores/todo";

export default {
  name: "TodoAddItem",
  components: { TextInput, ActionButton },
  data() {
    return {
      todo: {
        userId: null,
        title: null,
      },
    };
  },
  computed: {
    ...mapState(useTodoStore, ["addTodoError"]),
  },
  methods: {
    ...mapActions(useTodoStore, ["postTodo"]),

    changeTodoValue(fieldObject) {
      this.todo[fieldObject.name] = fieldObject.value;
    },
    addTodo() {
      this.postTodo(this.todo);
    },
  },
};
</script>

<style lang="scss">
.todo-add-item {
  display: flex;
  height: 100%;
  align-items: flex-end;
  .button {
    margin: 0 0 10px;
    height: fit-content;
    padding: 11px 30px;
  }
  .form-control {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    flex-basis: 100%;

    span {
      width: 100%;
      margin-bottom: 5px;
    }

    input,
    select {
      border: 1px solid $text-color-main;
      margin: 0 0 10px;
    }
  }
}
</style>
