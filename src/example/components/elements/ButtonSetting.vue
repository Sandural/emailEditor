<template>
  <el-form label-position="top" size="mini" :model="elementProps">
    <el-form-item label="宽度">
      <el-input :value="getStyle('width')" @input="setStyle('width', $event)"></el-input>
    </el-form-item>
    <el-form-item label="跳转地址">
      <el-input :value="elementProps.btnUrl" @input="updateButtonUrl" />
    </el-form-item>
  </el-form>
</template>

<script>
import mixin from "./styleSettings/mixin";

export default {
  mixins: [mixin],
  methods: {
    updateButtonUrl(btnUrl) {
      this.elementPropsSetter({ btnUrl });
    },
  },
};
</script>
