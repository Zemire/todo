import { defineStore } from "pinia";
import requestService from "../utils/request.js";
import { getFromStorage } from "../utils/localStorageHelperFunction";

const TODO_FAVORITES = "todo-favorites";

export const useTodoStore = defineStore({
  id: "todo",
  state: () => ({
    todoList: [],
    todoUserIds: [],
    favoritesArray: getFromStorage(TODO_FAVORITES)
      ? getFromStorage(TODO_FAVORITES)
      : [],
    nextId: 201,
    filterObj: {
      status: null,
      userId: null,
      title: "",
    },
    addTodoError: false,
  }),
  getters: {
    userIdsForFilter: (state) =>
      state.todoUserIds.map((todo) => {
        return {
          label: todo,
          value: todo,
        };
      }),
    activeTodoList: (state) => {
      let filteredArray = [...state.todoList];

      //No filter active
      if (
        !state.filterObj.status &&
        !state.filterObj.userId &&
        !state.filterObj.title
      ) {
        return filteredArray;
      }

      //Status filter (including favorites)
      if (state.filterObj.status) {
        if (state.filterObj.status !== "favorite") {
          filteredArray = filteredArray.filter(
            (todo) => todo.status.toLowerCase() === state.filterObj.status
          );
        } else {
          filteredArray = filteredArray.filter((todo) => todo.favorite);
        }
      }

      //User ID filter
      if (state.filterObj.userId) {
        filteredArray = filteredArray.filter(
          (todo) => todo.userId === state.filterObj.userId
        );
      }

      //Title filter
      if (state.filterObj.title) {
        filteredArray = filteredArray.filter((todo) =>
          todo.title.includes(state.filterObj.title)
        );
      }

      return filteredArray;
    },
  },
  actions: {
    async getTodoList() {
      try {
        const response = await requestService.get("/todos");
        this.todoList = response.data.map((todo) => {
          return {
            userId: todo.userId,
            id: todo.id,
            title: todo.title,
            status: todo.completed ? "Completed" : "Uncompleted",
            favorite: this.favoritesArray
              ? this.favoritesArray.find((todoId) => todoId === todo.id)
              : false,
          };
        });
        this.todoUserIds = [
          ...new Set(this.todoList.map((todo) => todo.userId)),
        ];
      } catch (error) {
        console.error(error);
      }
    },
    async postTodo(todo) {
      this.addTodoError = false;
      try {
        todo.userId = parseInt(todo.userId, 10);
        const response = await requestService.post("/todos", todo);
        console.log(response);
        this.todoList.push({
          ...todo,
          id: this.nextId,
          status: "Uncompleted",
          favorite: null,
        });
        this.nextId++;
        console.log(this.todoList);
      } catch (error) {
        console.error(error);
        this.addTodoError = true;
      }
    },
    toggleFavoriteTodo(todoId) {
      let foundTodo = this.todoList.find((todo) => todo.id === todoId);
      foundTodo.favorite = !foundTodo.favorite;
      foundTodo.favorite
        ? this.favoritesArray.push(todoId)
        : (this.favoritesArray = this.favoritesArray.filter(
            (todo) => todo !== todoId
          ));
      localStorage.setItem(TODO_FAVORITES, JSON.stringify(this.favoritesArray));
      console.log(this.favoritesArray);
    },
  },
});
