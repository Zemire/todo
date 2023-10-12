<template>
  <div class="form-control">
    <span v-if="label">{{ label }}</span>
    <select v-model="selectedValue" @change="filterValue" :name="fieldName">
      <option v-if="defaultItem" :value="defaultItem.value">
        {{ defaultItem.label }}
      </option>
      <option
        v-for="fieldItem in fieldItems"
        :key="fieldItem.value"
        :value="fieldItem.value"
      >
        {{ fieldItem.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectInput",
  props: {
    label: {
      type: String,
      default: "",
    },
    fieldName: {
      type: String,
      default: "",
    },
    fieldItems: {
      type: Array,
      required: true,
    },
    defaultItem: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      selectedValue: null,
    };
  },
  methods: {
    filterValue() {
      this.$emit("field-value-changed", {
        name: this.fieldName,
        value: this.selectedValue,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
select {
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
