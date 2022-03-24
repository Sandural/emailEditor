<template>
  <div class="sidebar" :class="{ disable: !this.editor.enabled }">
    <el-tooltip effect="dark" content="画布" placement="right">
      <Blueprint :component="ElementBlock" icon="crop_square">
        <template v-slot:blueprint>
          <Canvas component="Container" />
        </template>
      </Blueprint>
    </el-tooltip>

    <el-tooltip effect="dark" content="标题" placement="right">
      <Blueprint :component="ElementBlock" icon="title">
        <template v-slot:blueprint>
          <Heading />
        </template>
      </Blueprint>
    </el-tooltip>

    <el-tooltip effect="dark" content="段落" placement="right">
      <Blueprint :component="ElementBlock" icon="notes">
        <template v-slot:blueprint>
          <Paragraph />
        </template>
      </Blueprint>
    </el-tooltip>

    <el-tooltip effect="dark" content="图片" placement="right">
      <Blueprint :component="ElementBlock" icon="crop_original">
        <template v-slot:blueprint>
          <Picture />
        </template>
      </Blueprint>
    </el-tooltip>

    <el-tooltip effect="dark" content="动态列表" placement="right">
      <Blueprint :component="ElementBlock" icon="format_list_bulleted">
        <template v-slot:blueprint>
          <List />
        </template>
      </Blueprint>
    </el-tooltip>

    <el-tooltip effect="dark" content="代码">

    </el-tooltip>

    <el-tooltip effect="dark" content="表格" placement="right">
      <Blueprint :component="ElementBlock" icon="table_view">
        <template v-slot:blueprint>
          <Table />
        </template>
      </Blueprint>
    </el-tooltip>

    <el-tooltip effect="dark" content="按钮" placement="right">
      <Blueprint :component="ElementBlock" icon="smart_button">
        <template v-slot:blueprint>
          <Button />
        </template>
      </Blueprint>
    </el-tooltip>

    <el-tooltip effect="dark" content="分隔符" placeholder="right">
      <Blueprint :component="ElementBlock" icon="horizontal_rule">
        <template v-slot:blueprint>
          <Divider />
        </template>
      </Blueprint>
    </el-tooltip>

    <!-- <el-tooltip effect="dark" content="容器" placement="right">
      <Blueprint :component="ElementBlock" icon="view_column">
        <template v-slot:blueprint>
          <Canvas component="Container" v-bind="rowProps">
            <Canvas component="Container" />
            <Canvas component="Container" />
            <Canvas component="Container" />
          </Canvas>
        </template>
      </Blueprint>
    </el-tooltip> -->
  </div>
</template>

<script>
import { Blueprint, Canvas } from '@';
import ElementBlock from './ElementBlock.vue';
import Paragraph from './elements/Paragraph.vue';
import Heading from './elements/Heading.vue';
import Picture from './elements/Picture.vue';
import Button from './elements/Button.vue';
import Table from './elements/Table.vue';
import List from './elements/List.vue';
import Container from './elements/Container.vue';
import Divider from './elements/Divider.vue';

export default {
  components: {
    Blueprint,
    Canvas,
    Paragraph,
    Button,
    Table,
    Heading,
    Picture,
    List,
    Divider
},
  inject: ['editor'],
  data() {
    return {
      ElementBlock,
      rowProps: {
        elementStyle: {
          ...Container.craft.defaultProps.elementStyle,
          'flex-direction': 'column',
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../app.scss";

.sidebar {
  position: absolute;
  top: $navbar-height;
  left: 0;
  bottom: 0;
  width: $element-sidebar-width;
  padding: 10px 0;
  overflow: auto;
  background-color: $color-black;

  transition: 0.2s transform;
  transition-timing-function: ease-in-out;
  &.disable {
    transform: translateX(-100%);
  }

  @include scrollbar();
}
</style>
