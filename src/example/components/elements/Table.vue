<template>
  <table>
    <thead>
      <tr>
        <th v-for="h in elementProps.content.tColumns" align="left">{{ h }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="r in elementProps.content.tData">
        <td v-for="(value, key, index) in r" align="left">{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Editor from "./utils/Editor.vue";
import elementStyleMixin from "./elementStyleMixin";
import TableSetting from "./TableSetting.vue";
import { settingMixin } from '@';

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
        tColumns: ["第一列", "第二列", "第三列"],
        tData: [
            {
                "prop1": "1-1",
                "prop2": "1-2",
                "prop3": "1-3",
            },
            {
                "prop1": "2-1",
                "prop2": "2-2",
                "prop3": "2-3",
            },
            {
                "prop1": "3-1",
                "prop2": "3-2",
                "prop3": "3-3",
            }
        ]
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
  height: 60px;
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
