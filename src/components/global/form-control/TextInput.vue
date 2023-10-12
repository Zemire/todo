<template>
  <div class="form-control">
    <span v-if="label">{{ label }}</span>
    <input
      v-model="fieldValue"
      @input="filterValue()"
      :name="fieldName"
      :placeholder="placeholder"
      type="text"
    />
  </div>
</template>

<script>
import defaultPropsData from "../../../mixins/defaultPropsData.js";
export default {
  name: "TextInput",
  mixins: [defaultPropsData],
};
</script>

<style lang="scss" scoped>
input {
  margin: 0 0 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: $background-fifth;
  color: $text-color-main;
  font-size: 17px;
  line-height: 21px;
  letter-spacing: -2.5%;
  box-shadow: none;
  border: none;
  outline: none;
  width: 100%;
}
</style>
