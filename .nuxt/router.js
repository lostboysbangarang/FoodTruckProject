import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e1a5581e = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _6a2c734b = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _00d9140f = () => interopDefault(import('..\\pages\\saved.vue' /* webpackChunkName: "pages/saved" */))
const _250e281c = () => interopDefault(import('..\\pages\\trucks.vue' /* webpackChunkName: "pages/trucks" */))
const _74f49e4c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _e1a5581e,
    name: "login"
  }, {
    path: "/register",
    component: _6a2c734b,
    name: "register"
  }, {
    path: "/saved",
    component: _00d9140f,
    name: "saved"
  }, {
    path: "/trucks",
    component: _250e281c,
    name: "trucks"
  }, {
    path: "/",
    component: _74f49e4c,
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
