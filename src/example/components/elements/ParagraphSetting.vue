<template>
  <el-form label-position="top" size="mini" :model="elementProps">
    <el-form-item label="href">
      <el-input type="text" v-model="elementProps.pHref" @input="updatePHref" />
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
    updatePHref(val) {
      console.log("phref", val);
      this.elementProps.pHref = val;
    },
  },
};
</script>