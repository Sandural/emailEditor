<template>
  <el-form label-position="top" size="mini" :model="elementProps">
  {{elementProps}}
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
        this.elementPropsSetter({ btnUrl })
    }
  }
};
</script>
