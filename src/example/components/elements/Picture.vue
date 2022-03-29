<template>
  <img class="image" :src="elementProps.content[elementProps.content.tField].imageUrl" :style="elementCSS" />
</template>

<script>
import PictureSetting from "./PictureSetting.vue";
import Margin from "./styleSettings/Margin.vue";
import Decoration from "./styleSettings/Decoration.vue";
import elementStyleMixin from "./elementStyleMixin";
import mixin from "./styleSettings/mixin";

export default {
  mixins: [elementStyleMixin, mixin],
  inject: ["node"],
  craft: {
    defaultProps: {
      content: {
        tField: "imgData",
        imgData: {
          imageUrl:
            "https://test-1303099125.cos.ap-guangzhou.myqcloud.com/default_picture_image.jpg",
          imgHref: "https://www.baidu.com",
        },
      },
      elementStyle: {
        width: "300px",
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
      parentStyle: {},
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
