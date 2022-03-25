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
      <el-input v-model="fieldName" @change="updateFieldName"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import mixin from "./styleSettings/mixin";
import tableMixin from "./Table/tableDataSetting";
export default {
  mixins: [mixin, tableMixin],
  data() {
    return {
      fieldName: "",
      dataSource: "",
    };
  },
  computed: {
    bindTableName() {
      return `格式: {{ tableData }}`;
    },
  },

  methods: {
    updateFieldName(val) {
      this.$set(this.elementProps.content, 'tField', val);
      this.$set(this.elementProps.content, val, JSON.parse(JSON.stringify(this.elementProps.content.tData)));
    },

    updateContent(val) {
      try {
        let field = this.elementProps.content.tField;
        this.$set(this.elementProps.content, field, JSON.parse(val));
      } catch (error) {
        console.log("error", error);
      }
    },
  },

  created() {
    this.fieldName = this.elementProps.content.tField;
    this.dataSource = JSON.stringify(this.elementProps.content[this.fieldName]);
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
