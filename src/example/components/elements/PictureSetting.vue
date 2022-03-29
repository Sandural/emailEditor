<template>
  <el-form label-position="top" size="mini" :model="elementProps">
    <el-form-item label="字段名">
      <el-input v-model="fieldName"></el-input>
    </el-form-item>
    <el-form-item label="图片地址">
      <el-input v-model="imgURL" @change="updateImageUrl" />
    </el-form-item>

    <el-form-item label="图片宽度">
      <el-input :value="getStyle('width')" @input="setStyle('width', $event)"></el-input>
    </el-form-item>

    <el-form-item label="图片 href">
      <el-input v-model="imgHREF" @change="updateImgHref"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import mixin from "./styleSettings/mixin";

export default {
  mixins: [mixin],
  data() {
    return {
      fieldName: "",
      imgURL: "",
      imgHREF: "",
    };
  },

  watch: {
    fieldName(v, oldv) {
      console.log("oldv", oldv);
      if (oldv) {
        let oldData = this.elementProps.content[oldv];
        console.log("oldData", oldData);
        this.elementProps.content = {
          tField: v,
          [v]: {
            imageUrl: oldData.imageUrl,
            imgHref: oldData.imgHref,
          },
        };
        console.log("this.elementProps.content", this.elementProps.content);
        // this.updateImageDataByProps();
      }
    },
  },

  methods: {
    updateImageUrl(imageUrl) {
      this.elementProps.content[this.fieldName].imageUrl = imageUrl;
    },
    updateImgHref(imgHref) {
      this.elementProps.content[this.fieldName].imgHref = imgHref;
    },
  },

  created() {
    this.fieldName = this.elementProps.content.tField;
    this.imgURL = this.elementProps.content[this.fieldName].imageUrl;
    this.imgHREF = this.elementProps.content[this.fieldName].imgHref;
  },
};
</script>
