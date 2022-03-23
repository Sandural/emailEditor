<template>
  <table>
    <thead>
      <tr>
        <th v-for="(key, value, index) in elementProps.content.tData" align="left">{{ value }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="r in elementProps.content.tData">
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
        tData: {
          "第一列": ["1-1", "2-1", "3-1"],
          "第二列": ["1-2", "2-2", "3-2"],
          "第三列": ["1-3", "2-3", "3-3"]
        }
      },
      elementStyle: {},
    },
    settings: {
      Properties: TableSetting,
    },
  },
};
</script>

<style>
table {
  border-spacing: 1;
  border-collapse: collapse;
  background: white;
  border-radius: 6px;
  overflow: hidden;
  max-width: 800px;
  width: 100%;
  position: relative;
}

td,
th {
  padding-left: 8px;
}

thead tr {
  height: 50px;
  background: #ffed8660;
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
