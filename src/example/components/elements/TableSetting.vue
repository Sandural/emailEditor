<template>
  <el-form id="tableSetting" label-position="top" size="mini" :model="elementProps">
    <el-form-item label="显示数据源">
      <el-input
        v-model="dataSource"
        @change="updateContent"
        type="textarea"
        autosize
        placeholder="请输入内容"
      >
      </el-input>
    </el-form-item>
    <el-form-item label="绑定数据字段名">
      <el-tooltip :content="bindTableName">
        <i class="el-icon-info datainfo"></i>
      </el-tooltip>
      <el-input v-model="fieldName"></el-input>
    </el-form-item>

    <el-form-item label="表格列配置" class="tcard-wrapper">
      <div v-for="(item, index) in tableData" class="tcard">
        {{ item }}
        <div style="display: flex; column-gap: 10px">
          <span style="flex-shrink: 0">列名称: </span>
          <el-input :value="item.prop" @input="setColumnName($event, index)"></el-input>
        </div>
        <div style="display: flex; column-gap: 10px">
          <span style="flex-shrink: 0">key 值:</span>
          <el-input :value="item.data" @input="setColumnData($event, index)"></el-input>
        </div>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
import mixin from "./styleSettings/mixin";
// import tableMixin from "./Table/tableDataSetting";
export default {
  mixins: [mixin],
  data() {
    return {
      fieldName: "",
      dataSource: "",
      tableData: [],
    };
  },
  computed: {
    bindTableName() {
      return `格式: {{ tableData }}`;
    },
  },

  watch: {
    fieldName(v, oldV) {
      if (oldV) {
        let oldData = this.elementProps.content[oldV];
        this.elementProps.content = {
          tField: v,
          [v]: JSON.parse(JSON.stringify(oldData)),
        };
        this.dataSource = JSON.stringify(this.elementProps.content[v]);
        this.tableData = [];
        this.elementProps.content[this.fieldName].forEach((v) => {
          this.tableData.push({
            prop: v.prop,
            data: JSON.stringify(this.elementProps.content[this.fieldName][v.data]),
          });
        });
      }
    },
  },

  methods: {
    updateContent(key, value) {
      try {
        let field = this.elementProps.content.tField;
        this.$set(this.elementProps.content, field, JSON.parse(val));
      } catch (error) {
        console.log("error", error);
      }
    },
    setColumnName(val, index) {
      // 更新当前输入框
      this.tableData[index].prop = val;
      let field = this.elementProps.content.tField;
      let data = this.elementProps.content[field];
    },

    setColumnData(val, index) {
      this.tableData[index].data = val;
    },
  },

  created() {
    this.fieldName = this.elementProps.content.tField;
    this.dataSource = JSON.stringify(this.elementProps.content[this.fieldName]);
    this.tableData = [];
    this.elementProps.content[this.fieldName].forEach((v) => {
      this.tableData.push({
        prop: v.prop,
        data: JSON.stringify(this.elementProps.content[this.fieldName][v.data]),
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

.tcard {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  background-color: rgba(250, 235, 215, 0.322);
  padding: 5px 10px;
  border-radius: 4px;
}

#tableSetting .el-textarea .el-textarea__inner {
  resize: none;
  height: 100px !important;
}

#tableSetting .datainfo {
  width: 16px;
  position: absolute;
  top: -25px;
  left: 100px;
}
</style>
