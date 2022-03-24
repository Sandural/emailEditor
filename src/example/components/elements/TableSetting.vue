<template>
  <el-form id="tableSetting" label-position="top" size="mini" :model="elementProps">
    <el-form-item label="数据源">
      <el-input
        v-model="dataSource"
        @change="changeTableData"
        type="textarea"
        autosize
        placeholder="请输入内容">
      </el-input>
    </el-form-item>
    <!-- <el-form-item label="表格列配置" class="tcard-wrapper">
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
    </el-form-item> -->
  </el-form>
</template>

<script>
import mixin from "./styleSettings/mixin";
import tableMixin from "./Table/tableDataSetting";
export default {
  mixins: [mixin, tableMixin],
  computed: {
    propsCol() {
      // console.log('propsCol', this.elementProps.content.tData.map((v) => Object.keys(v))[0]);
      return this.elementProps.content.tData.map((v) => Object.keys(v))[0];
    },
    dataSource: {
      get() {
        return JSON.stringify(this.elementProps.content.tData);
      },
      set(val) {
        // console.log('set', val);
        try {
          this.elementProps.content.tData = JSON.parse(val);
        } catch (error) {
          console.log('error');
        }
        
      }
    }
  },
  methods: {
    changeTableData(val) {
      console.log('rock', val);
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

#tableSetting .el-textarea .el-textarea__inner {
  resize: none;
  height: 100px !important;
}
</style>
