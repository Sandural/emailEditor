<template>
    <div>
      <li
        :style="elementCSS" 
        class="list" v-for="item in elementProps.content.listData">{{ item }}</li>
    </div>
</template>

<script>
import { settingMixin } from "@";
import elementStyleMixin from "./elementStyleMixin";
import ListSetting from "./ListSetting.vue";

export default {
  mixins: [settingMixin, elementStyleMixin],
  inject: ["node"],
  craft: {
    defaultProps: {
      content:{
        listData: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices non orci nec eleifend. Sed scelerisque lobortis neque eget feugiat. Curabitur ullamcorper ex at porttitor mollis. Curabitur varius lorem nisl, non egestas leo feugiat at. Curabitur volutpat sagittis arcu, ut blandit velit sagittis vel. Vivamus erat mauris, mattis a neque vel, pretium varius ipsum. Phasellus non mauris in dolor luctus suscipit vel ac massa. Sed fringilla lorem sed metus bibendum faucibus. Pellentesque ipsum mauris, auctor ut varius at, aliquam sed quam. Nullam fringilla felis at odio convallis mattis.","列表2","列表3"]
      },
      elementStyle: {
        "font-size": 16
      },
      parentStyle: {},
    },
    settings: {
      Properties: ListSetting,
    },
  },
};
</script>

<style>
.list::before {
  font-weight: 700;
  margin-right: 10px;
}
</style>
