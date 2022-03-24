<template>
  <el-form label-position="top" size="mini" :model="elementProps">
    <el-form-item label="数据源">
      <!-- <el-input :value="elementProps.btnUrl" @input="updateButtonUrl" /> -->
      <el-input
        v-model="dataSource"
        @change="changeListData"
        type="textarea"
        autosize
        placeholder="请输入内容">
      </el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import mixin from './styleSettings/mixin';
export default {
  mixins: [mixin],
  computed: {
    dataSource: {
      get() {
        return JSON.stringify(this.elementProps.content.listData);
      },

      set(val) {
         try {
          this.elementProps.content.listData = JSON.parse(val);
        } catch (error) {
          console.log('error');
        }
      }
    }
  },
  methods: {
    changeListData(val) {
      console.log('listData', val);
    },
  },
};
</script>