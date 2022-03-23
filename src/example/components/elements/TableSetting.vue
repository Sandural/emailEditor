<template>
  <el-form id="tableSetting" label-position="top" size="mini" :model="elementProps">
    <el-form-item label="数据源">
      <!-- <el-input
        type="textarea"
        autosize
        placeholder="请输入内容"
        :value="JSON.stringify(elementProps.content.tData)">
      </el-input> -->
      <el-input
        type="text"
        v-model="dataSourceName"
        placeholder="请输入数据字段"
        @change="changeTableData"
      ></el-input>
    </el-form-item>
    <el-form-item label="表格列配置" class="tcard-wrapper">
      <div v-for="(r, index) in elementProps.content.tData" class="tcard">
        <div style="display: flex; column-gap: 10px">
          <span style="flex-shrink: 0">列名称: </span>
          <el-input :value="elementProps.content.tColumns[index]"></el-input>
        </div>
        <div style="display: flex; column-gap: 10px">
          <span style="flex-shrink: 0">key 值:</span>
          <el-input :value="propsCol[index]"></el-input>
        </div>
      </div>
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
      dataSourceName: "",
    };
  },
  computed: {
    propsCol() {
      console.log('propsCol', this.elementProps.content.tData.map((v) => Object.keys(v))[0]);
      return this.elementProps.content.tData.map((v) => Object.keys(v))[0];
    },
  },
  methods: {
    changeTableData() {

    },
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

.el-textarea .el-textarea__inner {
  resize: none;
  height: 100px !important;
}
</style>
