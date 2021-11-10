export const Body = () => import('../..\\components\\body.vue' /* webpackChunkName: "components/body" */).then(c => wrapFunctional(c.default || c))
export const Explore = () => import('../..\\components\\explore.vue' /* webpackChunkName: "components/explore" */).then(c => wrapFunctional(c.default || c))
export const Login = () => import('../..\\components\\login.vue' /* webpackChunkName: "components/login" */).then(c => wrapFunctional(c.default || c))
export const Nav = () => import('../..\\components\\nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c))
export const Register = () => import('../..\\components\\register.vue' /* webpackChunkName: "components/register" */).then(c => wrapFunctional(c.default || c))
export const SavedTrucks = () => import('../..\\components\\savedTrucks.vue' /* webpackChunkName: "components/saved-trucks" */).then(c => wrapFunctional(c.default || c))
export const Truckbody = () => import('../..\\components\\truckbody.vue' /* webpackChunkName: "components/truckbody" */).then(c => wrapFunctional(c.default || c))
export const TruckList = () => import('../..\\components\\truckList.vue' /* webpackChunkName: "components/truck-list" */).then(c => wrapFunctional(c.default || c))

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
