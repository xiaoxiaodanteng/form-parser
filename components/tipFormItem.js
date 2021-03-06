import customScript from '../mixins/customScript'
import componentMixin from '../mixins/componentMixin'

export default {
  name: 'TipFormItem',
  mixins: [customScript, componentMixin],
  props: {
    scheme: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    parentList: {
      type: Array,
      default: () => ([])
    }
  },
  inject: ['formData', 'parser'],
  created() {
  },
  mounted() {
  },
  methods: {
    handleGetComponent(componentList, field) {
      let component = null
      for (let i = 0; i < componentList.length; i++) {
        const com = componentList[i]
        if (com.__vModel__ === field) {
          component = com
        } else {
          if (com.__config__.children) {
            component = this.handleGetComponent(com.__config__.children, field)
          }
        }
      }
      return component
    }
  },
  render(h) {
    const scheme = this.scheme
    const config = this.scheme.__config__
    return config.show ? h('render', { props: { key: config.renderKey, conf: scheme }}, [
      config.defaultValue,
      this.parser.itemBtns(h, this.scheme, this.index, this.parentList)
    ]) : null
    // return config.show ? h('el-col', { attrs: { span: config.span }}, [
    //   h('render', { props: { key: config.renderKey, conf: scheme }}, config.defaultValue)
    // ]) : null
  }
}
