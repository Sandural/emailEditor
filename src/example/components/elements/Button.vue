<template>
  <div :style="pElementCSS">
    <Editor
      tag="button"
      :style="elementCSS"
      @input="updateContent"
      :value="content"
      :btnUrl="btnUrl"
    ></Editor>
  </div>
</template>

<script>
import Editor from "./utils/Editor.vue";
import elementStyleMixin from "./elementStyleMixin";
import Margin from "./styleSettings/Margin.vue";
import Padding from "./styleSettings/Padding.vue";
import ButtonSetting from "./ButtonSetting.vue";
import Decoration from "./styleSettings/Decoration.vue";
import Typography from "./styleSettings/Typography.vue";

export default {
  mixins: [elementStyleMixin],
  components: { Editor },
  inject: ["node"],
  props: { content: String, btnUrl: String },
  methods: {
    updateContent(content) {
      this.node.setProps({ content });
    }
  },
  craft: {
    defaultProps: {
      content: "按钮",
      btnUrl: "https://www.baidu.com",
      elementStyle: {
        width: "70px",
        "flex-shrink": 0,
        "font-style": 16,
        "padding-top": 5,
        "padding-bottom": 5,
        "padding-right": 20,
        "padding-left": 20,
        "margin-top": 0,
        "margin-left": 0,
        "margin-bottom": 0,
        "margin-right": 0,
        border: "none",
        color: "rgb(255 255 255)",
        "background-color": "rgb(65 59 255)",
        "border-radius": "3px",
        "box-shadow": {
          x: 0,
          y: 0,
          blur: 0,
          spread: 0,
          color: "rgba(0,0,0,0)",
        },
      },
      parentStyle: {
        width: "100%",
        "text-align": "center",
      },
    },
    settings: {
      Properties: ButtonSetting,
      Decoration,
      Typography,
      Margin,
      Padding,
    },
  },
};
</script>

<style></style>
