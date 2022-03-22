<template>
  <el-form label-position="top" size="mini" :model="elementProps">
    <el-form-item label="图片地址">
      <el-input :value="elementProps.imageUrl" @input="updateImageUrl" />
    </el-form-item>

    <el-form-item label="图片宽度">
      <el-slider
        :value="getStyle('width')"
        :formatTooltip="formatTooltip"
        :max="100"
        @input="setStyle('width', $event)"
      ></el-slider>
    </el-form-item>
  </el-form>
</template>

<script>
// import { settingMixin } from "@";
import mixin from './styleSettings/mixin';

export default {
  mixins: [mixin],
  methods: {
    updateImageUrl(imageUrl) {
      this.elementPropsSetter({ imageUrl });
    },
  },
};
</script>
