<template>
  <img :src="imgUrl" alt="" width="auto" height="400" />
</template>

<script>
import Editor from "./utils/Editor.vue";
import elementStyleMixin from "./elementStyleMixin";
import mixin from './styleSettings/mixin';
import ChartSetting from "./ChartSetting.vue";

export default {
  mixins: [elementStyleMixin, mixin],
  components: { Editor },
  inject: ["node"],
  props: {
    imgUrl: String,
  },
  data() {
    return {};
  },
  mounted() {
    axios.post("/api/chart/getChartImage", this.elementProps.option).then((res) => {
      console.log("cate", res);
      let data = res.data;
      if (data.code === 0) {
        this.elementPropsSetter({ imgUrl: data.data });
      }
    });
  },
  craft: {
    defaultProps: {
      content: "",
      imgUrl: "http://mmfinderanstatics-1258344707.cos.ap-shanghai.myqcloud.com/export_chart_server/files/email/20220329102443da08cc291fb486338562ae3652a924d8.png",
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
      elementStyle: {},
      parentStyle: {},
    },
    settings: {
      Properties: ChartSetting,
    },
  },
};
</script>
