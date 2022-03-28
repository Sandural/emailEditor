<template>
  <div>
    <el-form id="tableSetting" label-position="top" size="mini" :model="elementProps">
      <el-form-item label="绑定数据字段名">
        <el-tooltip :content="bindTableName">
          <i class="el-icon-info datainfo"></i>
        </el-tooltip>
        <el-input v-model="fieldName"></el-input>
      </el-form-item>
      <el-form-item label="表格列配置" class="tcard-wrapper">
        <div style="display: flex; flex-direction: row">
          <el-button @click="lookTableData">查看数据</el-button>
          <el-button @click="updateTableData">更新数据</el-button>
        </div>
        <div v-for="(item, index) in tableData" class="tcard">
          <i class="el-icon-delete deleteColumn"></i>
          <div style="display: flex; column-gap: 10px">
            <span style="flex-shrink: 0">列名称: </span>
            <el-input :value="item.name" @input="setColumnName($event, index)"></el-input>
          </div>
          <div style="display: flex; column-gap: 10px">
            <span style="flex-shrink: 0">key 值:</span>
            <el-input :value="item.data" @input="setColumnData($event, index)"></el-input>
          </div>
        </div>
      </el-form-item>
    </el-form>

    <el-button type="warning" plain size="mini" style="width: 100%;">增加列</el-button>

    <el-dialog :visible.sync="tableDataDialogVisible">
      <div style="font-weight: 700; position: absolute; top:20px;">{{fieldName}}</div>
      <el-button style="position: absolute; top: 18px; right: 60px" type="plain" size="mini" @click="saveACE">保存</el-button>
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
      fieldName: "",
      dataSource: "",
      tableData: [],
      tableDataDialogVisible: false,
      editorOptions: {},
      code: "",
    };
  },
  computed: {
    bindTableName() {
      return `格式: {{ tableData }}`;
    }
  },

  watch: {
    fieldName(v, oldV) {
      if (oldV) {
        let oldData = this.elementProps.content[oldV];
        this.elementProps.content = {
          tField: v,
          [v]: JSON.parse(JSON.stringify(oldData)),
        };
        this.tableData = [];
        this.elementProps.content[this.fieldName].forEach((v) => {
          this.tableData.push({
            name: v.name,
            data: JSON.stringify(v.data),
          });
        });
      }
    },
  },

  methods: {
    setColumnName(val, index) {
      this.tableData[index].name = val;
    },

    setColumnData(val, index) {
      this.tableData[index].data = val;
    },

    updateTableData() {
      this.elementProps.content[this.fieldName] = [];
      this.tableData.forEach((v) => {
        this.elementProps.content[this.fieldName].push({
          name: v.name,
          data: JSON.parse(v.data),
        });
      });
      this.$message({ type: "success", message: "更新成功!" })
    },

    lookTableData() {
      this.code = JSON.stringify(this.elementProps.content[this.fieldName], null, 2);
      this.tableDataDialogVisible = true;
    },

    saveACE() {
      try {
        this.elementProps.content[this.fieldName] = JSON.parse(this.code);
        this.tableData = [];
        this.elementProps.content[this.fieldName].forEach((v) => {
          this.tableData.push({
            name: v.name,
            data: JSON.stringify(v.data),
          });
        });
      } catch (e) {
        this.$message({type: 'error', message: "请检查下语法问题!"})
      }
      
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
    this.tableData = [];
    this.elementProps.content[this.fieldName].forEach((v) => {
      this.tableData.push({
        name: v.name,
        data: JSON.stringify(v.data),
      });
    });
  },
};
</script>

<style>
#tableSetting .el-form-item__content {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

#tableSetting .tcard {
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  background-color: rgba(250, 235, 215, 0.322);
  padding: 18px 10px 5px 10px;
  border-radius: 4px;
}

#tableSetting .deleteColumn {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

#tableSetting .deleteColumn:hover {
  color: red;
}


#tableSetting .el-textarea .el-textarea__inner {
  resize: none;
  height: 100px !important;
}

#tableSetting .datainfo {
  width: 16px;
  position: absolute;
  top: -22px;
  left: 100px;
}

#ace-62e3 .ace_content {
  height: 100%;
}

#tableSetting .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
  margin-bottom: 0;
}
</style>
