<template>
  <img :src="elementProps.content[field].imgUrl" alt="" width="auto" height="400" />
</template>

<script>
import Editor from "./utils/Editor.vue";
import elementStyleMixin from "./elementStyleMixin";
import mixin from "./styleSettings/mixin";
import ChartSetting from "./ChartSetting.vue";

export default {
  mixins: [elementStyleMixin, mixin],
  components: { Editor },
  inject: ["node"],
  computed: {
    field() {
      return this.elementProps.content.tField
    }
  },
  mounted() {
    axios.post("/api/chart/getChartImage", this.elementProps.content[this.field].option).then((res) => {
      let data = res.data;
      if (data.code === 0) {
        this.$set(this.elementProps.content[this.field], "imgUrl", data.data);
      }
    });
  },
  craft: {
    defaultProps: {
      content: {
        tField: "chartOption",
        chartOption: {
          option: {
            options: {
              chart: {
                type: "area",
              },
              title: {
                text: "Area chart with negative values",
              },
              xAxis: {
                categories: ["Apples", "Oranges", "Pears", "Grapes", "Bananas"],
              },
              credits: {
                enabled: false,
              },
              series: [
                {
                  name: "John",
                  data: [5, 3, 4, 7, 2],
                },
                {
                  name: "Jane",
                  data: [2, -2, -3, 2, 1],
                },
                {
                  name: "Joe",
                  data: [3, 4, 4, -2, 5],
                },
              ],
            },
          },
          imgUrl: "",
        },
      },

      elementStyle: {},
      parentStyle: {},
    },
    settings: {
      Properties: ChartSetting,
    },
  },
};
</script>
