import Node from '@/core/Node';

export default {
  props: {
    node: Node,
  },
  computed: {
    elementPropsSetter(data) {
      console.log('data', data);
      let setter = this.node.setProps;
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
