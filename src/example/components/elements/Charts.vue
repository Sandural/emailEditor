<template>
  <img :src="imgUrl" alt="" />
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
    axios
      .post("https://minion.weixin.oa.com/api/chart/getChartImage", this.option, {
        headers: {
          Cookie:
            "wxuin=46812378861397; x-client-ssid=17fc0145c5e-2fdd58f88b12afe031da2303787c1cb2094b59ed; x-host-key-ngn=17fc0145c85-7473ae8030d794994571a8c93ccfb8cbc8d61c2a; RIO_TCOA_TICKET_HTTPS=tof:TOF4TeyJ2IjoiNCIsInRpZCI6IkdFMVdIUU03Wm84ZkVYYTdaRFZMTm1OYkRGd3RJdmVIIiwiaXNzIjoiMTAuOTkuMjA4LjU3IiwiaWF0IjoiMjAyMi0wMy0yNVQxNTo1NzoxNC4wMjA4NTM3MTErMDg6MDAiLCJhdWQiOiIwLjAuMC4wIiwiaGFzaCI6IkZFRjgyOUNBODBENTcyODhFM0FGMDJGNTMwMTZCMDNCNkNDNTRBRDJBNTJGNzg0MjU5NkJGNjBERDRGNjgwMDkiLCJuaCI6IkVBODkzODhGQkNBOTY4NEYzMzYyN0Q3N0IzRkNGQUVGNzU3NTFEMkMwRDFBQkI5Mjg0NTQ0NUY1NzREN0E5QUIifQ; x_host_key_access_https=39e699919b858cb662fadecef221532465a4749e_s; TCOA_TICKET=TOF4TeyJ2IjoiNCIsInRpZCI6Ijc3cWs2aVU4WG1yVzJJTm94NmJoRWJNeDJuV29EV0g0IiwiaXNzIjoiMTAuOTkuMTUuMzYiLCJpYXQiOiIyMDIyLTAzLTI4VDExOjE0OjIyLjQyNDg3OTMyMSswODowMCIsImF1ZCI6IjAuMC4wLjAiLCJoYXNoIjoiQkFCQzQ2QUIxNzZEMTE0RDlGQzg3RDlCRUNEOTQ2MEUwMDQyRDc2RjFFQ0MwRkM3QUE2RUE1OTRGQjhDQTc5QiIsIm5oIjoiRUVCMDZDMkFGQzlDQTI4RjZFM0ZFNEQ1NkQwNEQ0QzlBMTJFQ0VDNEU5NjI4MzAyQTc3MTE4RjYwNjkyM0NFNSJ9; TCOA=77qk6iU8XmrW2INox6bhEbMx2nWoDWH4; RIO_TCOA_TICKET=tof:TOF4TeyJ2IjoiNCIsInRpZCI6Ijc3cWs2aVU4WG1yVzJJTm94NmJoRWJNeDJuV29EV0g0IiwiaXNzIjoiMTAuOTkuMTUuMzYiLCJpYXQiOiIyMDIyLTAzLTI4VDExOjE0OjIyLjQyNDg3OTMyMSswODowMCIsImF1ZCI6IjAuMC4wLjAiLCJoYXNoIjoiQkFCQzQ2QUIxNzZEMTE0RDlGQzg3RDlCRUNEOTQ2MEUwMDQyRDc2RjFFQ0MwRkM3QUE2RUE1OTRGQjhDQTc5QiIsIm5oIjoiRUVCMDZDMkFGQzlDQTI4RjZFM0ZFNEQ1NkQwNEQ0QzlBMTJFQ0VDNEU5NjI4MzAyQTc3MTE4RjYwNjkyM0NFNSJ9; x_host_key_access=0df7509fe5377ddb1eeecbc07e6d00997c78129a_s; minion-session=eyJ1c2VySW5mbyI6eyJ1c2VybmFtZSI6IndoaXRlTGlzdCIsImlkIjoxMzg2fSwiX2V4cGlyZSI6MTY0ODU0MzU2NjUyOSwiX21heEFnZSI6ODY0MDAwMDB9; minion-session.sig=g6AOlvpQq9QQOTHdv5S1G2DKWVI",
          env: "Prerelease",
          Host: "minion.weixin.oa.com",
          Origin: "https://minion.weixin.oa.com",
          Referer: "https://minion.weixin.oa.com/project/12/page/189/preview",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          spanid: "8872133f-26ee-4c83-8cde-5cab13a8adc0",
          traceid: "2d46d43d-a268-47aa-9c9d-b0cb4b8e593e",
        },
      })
      .then((res) => {
        console.log("cate", res);
        if (res.code === 0) {
          this.imgUrl = res.data;
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
