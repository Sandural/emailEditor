<template>
  <el-form label-position="top" size="mini" :model="elementProps">
    <el-form-item label="字段名">
      <el-input v-model="fieldName" type="textarea" autosize placeholder="请输入内容"> </el-input>
    </el-form-item>
    <el-form-item label="数据源">
      <el-input
        v-model="ListDigital"
        type="textarea"
        @change="changeListData"
        autosize
        placeholder="请输入内容"
      >
      </el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import mixin from "./styleSettings/mixin";
export default {
  mixins: [mixin],
  data() {
    return {
      fieldName: "",
      ListDigital: ""
    }
  },

  watch: {
    fieldName(newVal, oldVal) {
      console.log('field', newVal, oldVal);
      if(oldVal) {
        let oldData = this.elementProps.content[oldVal];
        this.elementProps.content = {
          tField: newVal,
          [newVal]: JSON.parse(JSON.stringify(oldData))
        };
        this.updateListDataByProps();
        
      }
    }
  },

  computed: {
    dataSource: {
      get() {
        return JSON.stringify(this.elementProps.content[this.fieldName]);
      },

      set(val) {
        try {
          this.elementProps.content[this.fieldName] = JSON.parse(val);
        } catch (error) {
          console.log("error");
        }
      },
    },
  },
  methods: {
    changeListData(val) {
      console.log("listData", val);
      this.elementProps.content[this.fieldName] = JSON.parse(val);
    },
    updateListDataByProps() {
      // this.ListData = [];
      this.ListDigital = JSON.stringify(this.elementProps.content[this.fieldName])
    }
  },

  created() {
    this.fieldName = this.elementProps.content.tField;
    this.ListDigital = JSON.stringify(this.elementProps.content[this.fieldName])
  },
};
</script>
