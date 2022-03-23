<template>
  <div>
    helloworld
  </div>
</template>

<script>
import mixin from './styleSettings/mixin';

export default {
  mixins: [mixin],
  methods: {
    updateButtonUrl(btnUrl) {
      this.elementPropsSetter({ btnUrl });
    },
  },
};
</script>