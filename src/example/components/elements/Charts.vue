<template>
  <img :src="imgUrl" alt="" width="auto" height="400" />
</template>

<script>
import Editor from "./utils/Editor.vue";
import elementStyleMixin from "./elementStyleMixin";

export default {
  mixins: [elementStyleMixin],
  components: { Editor },
  inject: ["node"],
  data() {
    return {
      imgUrl: "",
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
    };
  },
  mounted() {
    axios.post("/api/chart/getChartImage", this.option).then((res) => {
      console.log("cate", res);
      let data = res.data;
      if (data.code === 0) {
        this.imgUrl = data.data;
      }
    });
  },
  craft: {
    defaultProps: {
      elementStyle: {},
      parentStyle: {},
    },
    settings: {},
  },
};
</script>
