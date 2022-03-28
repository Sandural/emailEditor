import { settingMixin } from "@";

export default {
  mixins: [settingMixin],
  methods: {
    styleExist(name) {
      return this.elementProps.elementStyle[name] !== undefined;
    },
    getStyle(name) {
      return this.elementProps.elementStyle[name];
    },
    setStyle(name, value) {
      console.log(name, value);
      this.elementPropsSetter({
        elementStyle: {
          ...this.elementProps.elementStyle,
          [name]: value,
        },
      });
    },

    pStyleExist(name) {
      return this.elementProps.parentStyle[name] !== undefined;
    },

    getPStyle(name) {
      return this.elementProps.parentStyle[name];
    },
    setPStyle(name, value) {
      console.log(name, value);
      this.elementPropsSetter({
        parentStyle: {
          ...this.elementProps.parentStyle,
          [name]: value,
        },
      });
    },
  },
};
