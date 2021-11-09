export { default as Body } from '../../components/body.vue'
export { default as Explore } from '../../components/explore.vue'
export { default as Login } from '../../components/login.vue'
export { default as Nav } from '../../components/nav.vue'
export { default as Register } from '../../components/register.vue'
export { default as SavedTrucks } from '../../components/savedTrucks.vue'
export { default as TruckList } from '../../components/truckList.vue'
export { default as Truckbody } from '../../components/truckbody.vue'

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
