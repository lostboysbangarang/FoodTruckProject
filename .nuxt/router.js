import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

<<<<<<< HEAD
const _90676fec = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _f87746dc = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _23b6b61a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
=======
const _6569f6e5 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _64837bd7 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _1665e3a8 = () => interopDefault(import('../pages/trucks.vue' /* webpackChunkName: "pages/trucks" */))
const _c87b5864 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
>>>>>>> f05dbb1e095e6020b6bdcdecd6ebbf282bc3da49

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _90676fec,
    name: "login"
  }, {
    path: "/register",
    component: _f87746dc,
    name: "register"
  }, {
    path: "/trucks",
    component: _1665e3a8,
    name: "trucks"
  }, {
    path: "/",
    component: _23b6b61a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
