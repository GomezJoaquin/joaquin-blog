export { default as InfoBox } from '../../components/global/InfoBox.vue'
export { default as PrevNext } from '../../components/global/PrevNext.vue'
export { default as AppCard } from '../../components/AppCard.vue'
export { default as AppSearchInput } from '../../components/AppSearchInput.vue'
export { default as Author } from '../../components/Author.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as TheFooter } from '../../components/TheFooter.vue'
export { default as TheHeader } from '../../components/TheHeader.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
