import Node from '@/core/Node';

export default {
  props: {
    node: Node,
  },
  computed: {
    elementPropsSetter(data) {
      let setter = this.node.setProps;
      console.log('setter', setter);
      setter = setter.bind(this.node);
      return setter;
    },
    elementProps() {
      return this.node.props;
    },
  },
  methods: {
    formatTooltip(val) {
      return `${val}%`
    }
  }
};
