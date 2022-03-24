<template>
    <div>
      <div
        :style="elementCSS" 
        class="list" v-for="item in elementProps.content.listData">{{ item }}</div>
    </div>
</template>

<script>
import { settingMixin } from "@";
import elementStyleMixin from "./elementStyleMixin";
import ListSetting from "./ListSetting.vue";

export default {
  mixins: [settingMixin, elementStyleMixin],
  inject: ["node"],
  craft: {
    defaultProps: {
      content:{
        listData: ["更改 ::marker 的内容是通过 content 而不是 list-style-type 来完成的。在下一个示例中，第一项使用 list-style-type 设置样式，第二项使用 ::marker 设置样式。第一种情况下的属性适用于整个列表项，而不仅仅是标记，这意味着文本和标记都在动画化。当使用 ::marker 时，我们可以只针对标记框而不是文本。","列表2","列表3"]
      },
      elementStyle: {
        "font-size": 16
      },
    },
    settings: {
      Properties: ListSetting,
    },
  },
};
</script>

<style>
.list::before {
  content: "👉";
  /* font-size: 20px; */
  font-weight: 700;
  margin-right: 10px;
}
</style>
