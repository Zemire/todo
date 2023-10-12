<template>
  <button class="button" :class="additionalCssClass" @click="buttonAction">
    {{ placeholder }}
  </button>
</template>

<script>
import defaultPropsData from "../../../mixins/defaultPropsData";

export default {
  name: "ActionButton",
  mixins: [defaultPropsData],
};
</script>

<style lang="scss" scoped>
.button {
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $text-color-fourth;
  background-color: $btn-background;
  outline: none;
  box-shadow: none;
  border: none;
  border-radius: 5px;
  font-size: 17px;
  line-height: 21px;
  letter-spacing: -2.5%;
  font-weight: 600;
}
</style>
