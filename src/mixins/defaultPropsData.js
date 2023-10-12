export default {
  data() {
    return {
      fieldValue: null,
    };
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    fieldName: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    maskRule: {
      type: RegExp,
      default: null,
    },
    buttonAction: {
      type: Function,
      default: null,
    },
    additionalCssClass: {
      type: String,
      default: "",
    },
  },
  methods: {
    filterValue() {
      if (this.maskRule) {
        this.fieldValue = this.fieldValue.replaceAll(this.maskRule, "");
      }
      this.$emit("field-value-changed", {
        name: this.fieldName,
        value: this.fieldValue,
      });
    },
  },
};
