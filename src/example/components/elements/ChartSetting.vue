<template>
  <div>
    <el-form id="chartSetting" label-position="top" size="mini" :model="elementProps">
      <el-form-item label="数据">
        <el-button type="primary" plain size="mini" @click="openChartData">查看数据</el-button>
      </el-form-item>
    </el-form>

    <el-dialog :visible.sync="chartDialogVisible">
      <div style="font-weight: 700; position: absolute; top: 20px">选项</div>
      <div style="position: absolute; top: 18px; right: 60px">
        <el-button type="plain" size="mini" @click="openHighchart">查看 option 配置</el-button>
        <el-button type="plain" size="mini" @click="saveChartACE">保存</el-button>
      </div>

      <div style="height: 500px" id="ace-62e3">
        <ACEEDITOR
          v-model="code"
          @init="editorInit"
          lang="javascript"
          :options="editorOptions"
          theme="chrome"
        ></ACEEDITOR>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import mixin from "./styleSettings/mixin";
import ACEEDITOR from "vue2-ace-editor";

export default {
  mixins: [mixin],
  components: { ACEEDITOR },
  data() {
    return {
      chartDialogVisible: false,
      code: "",
      editorOptions: {},
    };
  },

  methods: {
    openChartData() {
      this.code = JSON.stringify(this.elementProps.option, null, 2);
      this.chartDialogVisible = true;
    },

    saveChartACE() {
      this.elementProps.option = JSON.parse(this.code);
      axios.post("/api/chart/getChartImage", this.elementProps.option).then((res) => {
        console.log("cate", res);
        let data = res.data;
        if (data.code === 0) {
          this.elementPropsSetter({ imgUrl: data.data });
        }
      });
    },

    openHighchart() {
      window.open('https://www.highcharts.com/', '_blank');
    },

    editorInit(editor) {
      console.log("editor", editor);
      require("brace/theme/chrome");
      require("brace/ext/language_tools"); // language extension prerequsite...
      require("brace/mode/yaml");
      require("brace/mode/json");
      require("brace/mode/less");
      require("brace/snippets/json");
      require("brace/mode/lua");
      require("brace/snippets/lua");
      require("brace/mode/javascript");
      require("brace/snippets/javascript");
    },
  },

  created() {
    this.code = JSON.stringify(this.elementProps.option, null, 2);
  },
};
</script>
