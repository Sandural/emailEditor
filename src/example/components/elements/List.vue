<template>
  <div style="width: 100%;">
    <li
      :style="elementCSS"
      class="list"
      v-for="item in elementProps.content[this.elementProps.content.tField]"
    >
      <span v-html="item"></span>
    </li>
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
      content: {
        tField: "listData",
        listData: ["列表1", "列表2", "列表3"],
      },
      elementStyle: {
        "font-size": 16,
      },
      parentStyle: {},
    },
    settings: {
      Properties: ListSetting,
    },
  },
};
</script>

<style>
.list::before {
  font-weight: 700;
  margin-right: 10px;
}
</style>
