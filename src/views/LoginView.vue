<script>
import LoginForm from "../components/login-view/LoginForm.vue";

export default {
  components: { LoginForm },
};
</script>

<template>
  <div class="login-page">
    <LoginForm></LoginForm>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  display: flex;
}
</style>
