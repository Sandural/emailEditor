<template>
  <table :style="elementCSS">
    <thead>
      <tr>
        <th
          v-for="(key, index) in elementProps.content[elementProps.content.tField].map(v => v.name)"
          align="left"
        >
          {{ key }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="r in elementProps.content[elementProps.content.tField].map(v => v.data)">
        <td v-for="(value, index) in r" align="left">{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Editor from "./utils/Editor.vue";
import elementStyleMixin from "./elementStyleMixin";
import TableSetting from "./TableSetting.vue";
import { settingMixin } from "@";
import Margin from "./styleSettings/Margin.vue";
import Decoration from './styleSettings/Decoration.vue';

export default {
  mixins: [elementStyleMixin, settingMixin],
  components: { Editor },
  inject: ["node"],
  data() {
    return {};
  },
  craft: {
    defaultProps: {
      content: {
        tField: "tData",
        tData: [
          {
            name: "第一列",
            data: ["1-1", "2-1", "3-1"],
          },
          {
            name: "第二列",
            data: ["1-2", "2-2", "3-2"]
          },
          {
            name: "第三列",
            data: ["1-3", "2-3", "3-3"],
          }
        ]
      },
      elementStyle: {
        "margin-top": 0,
        "margin-left": 0,
        "margin-bottom": 0,
        "margin-right": 0,
        // "border-radius": '10px',
        "border-spacing": 1,
        "border-collapse": "collapse",
        "background": "white",
        "overflow": "hidden",
        "width": '100%',
        "position": "relative",
        "border": {
          "width": "1px",
          "style": "solid",
          "color": "rgb(0, 0, 0)"
        }
      },
      parentStyle: {},
    },
    settings: {
      Properties: TableSetting,
      Decoration,
      Margin,
    },
  },
};
</script>

<style>
td,
th {
  padding-left: 8px;
}

thead tr {
  height: 50px;
  /* background: #ffed8660; */
  font-size: 16px;
}
tbody tr {
  height: 48px;
  border-bottom: 1px solid #e3f1d5;
}
tbody tr:last-child {
  border: 0;
}
td,
th {
  text-align: left;
}
</style>
