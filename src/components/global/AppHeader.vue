<template>
  <header>
    <div v-if="userData" class="header-wrapper">
      <div class="header-information-wrapper">
        <p>Hello {{ userData.name }}</p>
      </div>
      <div class="header-logout-wrapper">
        <ActionButton
          :button-action="logout"
          :additional-css-class="'base-width'"
          :placeholder="'Logout'"
        >
        </ActionButton>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useLoginStore } from "../../stores/login";
import ActionButton from "./form-control/ActionButton.vue";

export default {
  name: "AppHeader",
  components: { ActionButton },
  computed: {
    ...mapState(useLoginStore, ["userData"]),
  },
  methods: {
    ...mapActions(useLoginStore, ["logoutUser"]),
    logout() {
      this.logoutUser();
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: $background-sub;
  height: $header-height;
  display: flex;
  align-items: center;
}
.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 25px;
}
.header-information-wrapper {
  display: flex;
  align-items: center;
  p {
    color: $text-color-fourth;
    font-size: 16px;
    margin: 0;
  }
}
</style>
