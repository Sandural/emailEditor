<template>
  <el-form label-position="top" size="mini" :model="elementProps">
    <el-form-item label="图片地址">
      <el-input :value="elementProps.imageUrl" @input="updateImageUrl" />
    </el-form-item>

    <el-form-item label="图片宽度">
      <el-input :value="getStyle('width')" @input="setStyle('width', $event)"></el-input>
    </el-form-item>

    <el-form-item label="图片 href">
      <el-input :value="elementProps.imgHref" @input="updateImgHref"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import mixin from './styleSettings/mixin';

export default {
  mixins: [mixin],
  data() {
    return {
      imgHref: ""
    }
  },
  methods: {
    updateImageUrl(imageUrl) {
      this.elementPropsSetter({ imageUrl });
    },
    updateImgHref(imgHref) {
      this.elementPropsSetter({ imgHref });
    }
  },
};
</script>
