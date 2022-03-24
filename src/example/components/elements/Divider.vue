<template>
  <div class="solid" :style="elementCSS"></div>
</template>

<script>
import Editor from "./utils/Editor.vue";
import elementStyleMixin from "./elementStyleMixin";
import Margin from "./styleSettings/Margin.vue";
import Typography from "./styleSettings/Typography.vue";

export default {
  mixins: [elementStyleMixin],
  components: { Editor },
  inject: ["node"],
  craft: {
    defaultProps: {
      content: "",
      elementStyle: {
        width: "100%",
        height: 1,
        "background-color": "#bbb",
        "margin-top": 30,
        "margin-bottom": 30,
        "margin-left": 10,
        "margin-right": 10,
      },
    },
    settings: {
      Margin,
      Typography
    },
  },
};
</script>

<style></style>
