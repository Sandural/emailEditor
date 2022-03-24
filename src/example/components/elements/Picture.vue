<template>
    <img  class="image" :src="imageUrl" :style="elementCSS" />
</template>

<script>
import PictureSetting from "./PictureSetting.vue";
import Margin from "./styleSettings/Margin.vue";
import Decoration from "./styleSettings/Decoration.vue";
import elementStyleMixin from "./elementStyleMixin";

export default {
  mixins: [elementStyleMixin],
  props: {
    imageUrl: String,
    imgHref: String
  },

  craft: {
    defaultProps: {
      imageUrl: "https://test-1303099125.cos.ap-guangzhou.myqcloud.com/default_picture_image.jpg",
      imgHref: "https://www.baidu.com",
      elementStyle: {
        "width": "100px",
        "margin-top": 0,
        "margin-left": 0,
        "margin-bottom": 0,
        "margin-right": 0,
        "border-radius": 0,
        "box-shadow": {
          x: 0,
          y: 0,
          blur: 0,
          spread: 0,
          color: "rgba(0,0,0,0)",
        },
      },
    },
    settings: {
      Properties: PictureSetting,
      Margin,
      Decoration,
    },
  },
};
</script>

<style lang="scss" scoped></style>
