<script>
import UserInfo from "../components/global/user/UserInfo.vue";
import Todo from "../components/home-view/Todo.vue";

export default {
  components: { Todo, UserInfo },
};
</script>

<template>
  <div class="home-page">
    <div class="flex-row">
      <div
        class="flex-column flex-column-large-3 flex-column-medium-3 flex-column-small-12"
      >
        <UserInfo></UserInfo>
      </div>
      <div
        class="flex-column flex-column-large-9 flex-column-medium-9 flex-column-small-12"
      >
        <Todo></Todo>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-grow: 1;
  .flex-row {
    @media only screen and (max-width: 640px) {
      margin: 0;
    }
  }
}
</style>
