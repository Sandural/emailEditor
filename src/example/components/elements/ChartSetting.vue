<template>
  <div>
    <el-form id="chartSetting" label-position="top" size="mini" :model="elementProps">
      <el-form-item label="字段名称">
        <el-input v-model="fieldName"></el-input>
      </el-form-item>
      <el-form-item label="option 数据">
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
      fieldName: "",
    };
  },

  watch: {
    fieldName(v, oldV) {
      if (oldV) {
        let oldData = this.elementProps.content[oldV];
        let oldDataJSON = JSON.parse(JSON.stringify(oldData));
        this.elementProps.content = {
          tField: v,
          [v]: {
            option: oldDataJSON["option"],
            imgUrl: oldDataJSON["imgUrl"],
          },
        };
        console.log("this.elementProps.content", this.elementProps.content);
      }

      // this.updateTableDataByProps();
    },
  },

  methods: {
    openChartData() {
      this.code = JSON.stringify(this.elementProps.content[this.fieldName].option, null, 2);
      this.chartDialogVisible = true;
    },

    saveChartACE() {
      this.elementProps.content[this.fieldName].option = JSON.parse(this.code);
      axios
        .post("/api/chart/getChartImage", this.elementProps.content[this.fieldName].option)
        .then((res) => {
          let data = res.data;
          if (data.code === 0) {
            this.$set(this.elementProps.content[this.fieldName], "imgUrl", data.data);
          }
        });
    },

    openHighchart() {
      window.open("https://www.highcharts.com/", "_blank");
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
    this.fieldName = this.elementProps.content.tField;
    this.code = JSON.stringify(this.elementProps.content[this.fieldName].option, null, 2);
  },
};
</script>
