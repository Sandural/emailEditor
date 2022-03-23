<template>
  <div id="app">
    <Editor component="div" :resolverMap="resolverMap" :import="demoData">
      <Navbar />
      <ElementSidebar />
      <Preview />
      <SettingSidebar />
    </Editor>
  </div>
</template>

<script>
import { Editor, Canvas } from "@";
import SettingSidebar from "./example/components/SettingSidebar.vue";
import ElementSidebar from "./example/components/ElementSidebar.vue";
import Navbar from "./example/components/Navbar.vue";
import Preview from "./example/components/Preview.vue";
import Container from "./example/components/elements/Container.vue";
import Paragraph from "./example/components/elements/Paragraph.vue";
import Heading from "./example/components/elements/Heading.vue";
import Picture from "./example/components/elements/Picture.vue";
import Button from "./example/components/elements/Button.vue";
import Table from "./example/components/elements/Table.vue";
import Carousel from "./example/components/elements/Carousel.vue";
import demoData from "./example/demoData";

export default {
  name: "App",
  components: {
    Editor,
    SettingSidebar,
    ElementSidebar,
    Navbar,
    Preview,
  },
  data() {
    return {
      resolverMap: {
        Canvas,
        Container,
        Paragraph,
        Heading,
        Picture,
        Carousel,
        Button,
        Table
      },
      demoData,
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

html {
  overflow: hidden;
}

body {
  background: #eee;
  margin: 0;
}
</style>
