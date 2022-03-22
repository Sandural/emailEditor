<template>
    <Editor
    tag="button"
    :style="elementCSS"
    @input="updateContent"
    :value="content"
    :btnUrl="btnUrl"
  ></Editor>

</template>

<script>
import Editor from './utils/Editor.vue';
import elementStyleMixin from './elementStyleMixin';
import Margin from './styleSettings/Margin.vue';
import Padding from './styleSettings/Padding.vue';
import ButtonSetting from './ButtonSetting.vue';
import Decoration from './styleSettings/Decoration.vue';
import Typography from './styleSettings/Typography.vue';

export default {
  mixins: [elementStyleMixin],
  components: { Editor },
  inject: ['node'],
  props: { content: String, btnUrl: String },
  methods: {
    updateContent(content) {
      this.node.setProps({ content });
    },
    test() {
      console.log('test');
    },
  },
  craft: {
    defaultProps: {
      content: '按钮',
      btnUrl: 'https://www.baidu.com',
      elementStyle: {
        'font-style': 16,
        'padding-top': 5,
        'padding-bottom': 5,
        'padding-right': 20,
        'padding-left': 20,
        'margin-top': 0,
        'margin-left': 0,
        'margin-bottom': 0,
        'margin-right': 0,
        border: 'none',
        color: 'rgb(0,0,0)',
        'background-color': 'rgb(255, 255, 255)',
        'border-radius': 3,
        'box-shadow': {
          x: 0,
          y: 0,
          blur: 0,
          spread: 0,
          color: 'rgba(0,0,0,0)',
        },
      },
    },
    settings: {
      Properties: ButtonSetting,
      Decoration,
      Typography,
      Margin,
      Padding,
    },
  },
};
</script>

<style></style>
