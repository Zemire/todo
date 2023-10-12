<template>
  <div class="login-form-wrapper">
    <div class="login-form-header">
      <p>Login form</p>
    </div>
    <div class="login-form-content">
      <p class="login-form-content-description">
        Enter your user name and phone number to proceed
      </p>
      <TextInput
        :mask-rule="/[^a-zA-Z]+/g"
        :field-name="'username'"
        :placeholder="'Username'"
        v-on:field-value-changed="changeFieldValue"
      >
      </TextInput>
      <TextInput
        :maskRule="/[^\W\d]+/g"
        :field-name="'phone'"
        :placeholder="'Phone number'"
        v-on:field-value-changed="changeFieldValue"
      >
      </TextInput>
      <ActionButton
        :button-action="submitForm"
        :additional-css-class="'login-button'"
        :placeholder="'Login'"
      >
      </ActionButton>
      <p v-if="showLoginError" class="error">
        Login error: no such user found.
      </p>
    </div>
  </div>
</template>

<script>
import TextInput from "../global/form-control/TextInput.vue";
import { mapActions, mapState } from "pinia";
import { useLoginStore } from "../../stores/login";
import ActionButton from "../global/form-control/ActionButton.vue";

export default {
  name: "LoginForm",
  components: { ActionButton, TextInput },
  data() {
    return {
      userLogin: {
        username: null,
        phone: null,
      },
    };
  },
  computed: {
    ...mapState(useLoginStore, ["showLoginError"]),
  },
  methods: {
    ...mapActions(useLoginStore, ["loginUser"]),

    changeFieldValue(fieldObject) {
      this.userLogin[fieldObject.name] = fieldObject.value;
    },
    submitForm() {
      this.loginUser(this.userLogin);
    },
  },
};
</script>

<style lang="scss" scoped>
.login-form-wrapper {
  border-radius: 5px;
  overflow: hidden;
  max-width: 445px;
  margin: 0 20px;
}
.login-form-header {
  padding: 15px;
  background-color: $background-third;
  p {
    margin: 0;
    text-align: center;
    color: $text-color-third;
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -2.5%;
  }
}

.login-form-content {
  background-color: $background-fourth;
  padding: 20px 30px 30px;
  .login-form-content-description {
    color: $text-color-third;
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -2.5%;
    margin: 0 0 20px;
  }
}
</style>
