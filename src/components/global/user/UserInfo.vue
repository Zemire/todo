<template>
  <div class="user-info-wrapper">
    <p class="user-info-title">Main user info</p>
    <p><span>Username:</span> {{ userData.username }}</p>
    <p><span>User name:</span> {{ userData.name }}</p>
    <p><span>User ID:</span> {{ userData.id }}</p>
    <p><span>User email:</span> {{ userData.email }}</p>
    <p><span>User phone:</span> {{ userData.phone }}</p>
    <p><span>User website:</span> {{ userData.website }}</p>
    <p><span>Username:</span> {{ userData.username }}</p>
    <p class="user-info-title">User address</p>
    <p>
      <span>City:</span> {{ userData.address.city }}, <span>lat/lng:</span>
      {{ userData.address.geo.lat }}/{{ userData.address.geo.lng }}
    </p>
    <p>
      <span>Street, suite, zip:</span> {{ userData.address.street }},
      {{ userData.address.suite }}, {{ userData.address.zipcode }}
    </p>
    <p class="user-info-title">Company info</p>
    <p><span>BS:</span> {{ userData.company.bs }}</p>
    <p>
      <span>Name, slogan</span> {{ userData.company.name }},
      {{ userData.company.catchPhrase }}
    </p>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useLoginStore } from "../../../stores/login";

export default {
  name: "UserInfo",
  computed: {
    ...mapState(useLoginStore, ["userData"]),
  },
};
</script>

<style lang="scss" scoped>
.user-info-wrapper {
  display: flex;
  width: 100%;
  padding: 15px;
  background: $background-fifth;
  box-shadow: 0 0 3px 3px rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  margin: 15px 0;
  flex-direction: column;
  p {
    color: $text-color-main;
    font-size: 14px;
    margin: 0 0 10px;
    span {
      font-weight: 600;
    }
    &.user-info-title {
      font-weight: 600;
      font-size: 16px;
      text-align: center;
    }
    &:last-child {
      margin: 0;
    }
  }

  @media only screen and (min-width: 768px) {
    top: 30px;
    position: sticky;
  }
}
</style>
