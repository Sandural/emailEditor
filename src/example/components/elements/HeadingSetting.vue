<template>
  <el-form label-position="top" size="mini" :model="elementProps">
    <el-form-item label="标题类型">
      <el-radio-group :value="elementProps.headingType" @input="updateHeadingType">
        <el-radio-button label="h1"></el-radio-button>
        <el-radio-button label="h2"></el-radio-button>
        <el-radio-button label="h3"></el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="href">
      <el-input type="text" v-model="elementProps.textHref" @input="updateTextHref" />
    </el-form-item>
  </el-form>
</template>

<script>
import { settingMixin } from "@";

export default {
  mixins: [settingMixin],
  methods: {
    updateContent(content) {
      this.elementPropsSetter({ content });
    },
    updateHeadingType(headingType) {
      this.elementPropsSetter({ headingType });
      // this.node.setProps.bind(this.node, { headingType });
    },
    updateTextHref(val) {
      console.log("href", val);
      this.elementProps.textHref = val;
    },
  },
};
</script>
