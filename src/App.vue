<script>
import AppFooter from "./components/global/AppFooter.vue";
import AppHeader from "./components/global/AppHeader.vue";
export default {
  components: { AppHeader, AppFooter },
};
</script>

<template>
  <div id="app">
    <AppHeader></AppHeader>
    <main class="base-content-wrapper">
      <router-view />
    </main>
    <AppFooter></AppFooter>
  </div>
</template>

<style scoped></style>
