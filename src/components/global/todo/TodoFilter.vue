<template>
  <div class="todo-control-wrapper">
    <p class="todo-title">Filters</p>
    <div class="todo-control-inner-wrapper">
      <div class="flex-row">
        <div
          class="flex-column flex-column-large-4 flex-column-medium-4 flex-column-small-12"
        >
          <div class="todo-filter-item">
            <SelectInput
              :label="'By status:'"
              :fieldName="'status'"
              :fieldItems="selectStatusItems"
              v-on:field-value-changed="searchTodos"
            ></SelectInput>
          </div>
        </div>
        <div
          class="flex-column flex-column-large-4 flex-column-medium-4 flex-column-small-12"
        >
          <div class="todo-filter-item">
            <SelectInput
              :label="'By user ID:'"
              :fieldName="'userId'"
              :defaultItem="selectUserDefault"
              :fieldItems="userIdsForFilter"
              v-on:field-value-changed="searchTodos"
            ></SelectInput>
          </div>
        </div>
        <div
          class="flex-column flex-column-large-4 flex-column-medium-4 flex-column-small-12"
        >
          <div class="todo-filter-item">
            <TextInput
              :label="'By title:'"
              :field-name="'title'"
              :placeholder="'Start typing title'"
              v-on:field-value-changed="searchTodos"
            ></TextInput>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "../form-control/TextInput.vue";
import SelectInput from "../form-control/SelectInput.vue";
import { mapState, mapWritableState } from "pinia";
import { useTodoStore } from "../../../stores/todo";

export default {
  name: "TodoFilter",
  components: { TextInput, SelectInput },
  data() {
    return {
      selectStatusItems: [
        {
          label: "All",
          value: null,
        },
        {
          label: "Completed",
          value: "completed",
        },
        {
          label: "Uncompleted",
          value: "uncompleted",
        },
        {
          label: "Favorites",
          value: "favorite",
        },
      ],
      selectUserDefault: {
        label: "All Users",
        value: null,
      },
    };
  },
  computed: {
    ...mapWritableState(useTodoStore, ["filterObj"]),
    ...mapState(useTodoStore, ["userIdsForFilter"]),
  },
  methods: {
    searchTodos(fieldObject) {
      this.filterObj[fieldObject.name] = fieldObject.value;
    },
  },
};
</script>

<style lang="scss">
.todo-filter-item {
  display: flex;
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
