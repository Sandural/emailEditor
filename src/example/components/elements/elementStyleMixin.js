export default {
  props: {
    elementStyle: Object,
  },
  computed: {
    elementCSS() {
      const style = {};

      const styleResolverMap = {
        'box-shadow': ({
          x, y, blur, spread, color,
        }) => `${x}px ${y}px ${blur}px ${spread}px ${color}`,
        'background-image': (url) => (url !== 'none'
          ? `url('${url}')`
          : url),
        'text-shadow': ({
          x, y, blur, color,
        }) => `${x}px ${y}px ${blur}px ${color}`,
        'width': (width) => `${width}%`,
        'flex-shrink': (x) => x,
      };

      // console.log('this.elementStyle', this.elementStyle);
      
      Object.entries(this.elementStyle).forEach(([key, value]) => {
        if (styleResolverMap[key]) {
          style[key] = styleResolverMap[key](value);
        } else if (typeof value === 'number') {
          style[key] = `${value}px`;
        } else {
          style[key] = value;
        }
      });
      
      // console.log('elementCSS', style);
      return style;
    },
  },
};
