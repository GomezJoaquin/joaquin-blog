import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1551f5e9 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _59ad8fbe = () => interopDefault(import('../pages/home/about.vue' /* webpackChunkName: "pages/home/about" */))
const _7985453e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _2384c5c2 = () => interopDefault(import('../pages/blog/author/_author.vue' /* webpackChunkName: "pages/blog/author/_author" */))
const _d4e35a2e = () => interopDefault(import('../pages/blog/tag/_tag.vue' /* webpackChunkName: "pages/blog/tag/_tag" */))
const _139b54a1 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _1551f5e9,
    name: "blog"
  }, {
    path: "/home/about",
    component: _59ad8fbe,
    name: "home-about"
  }, {
    path: "/",
    component: _7985453e,
    name: "index"
  }, {
    path: "/blog/author/:author?",
    component: _2384c5c2,
    name: "blog-author-author"
  }, {
    path: "/blog/tag/:tag?",
    component: _d4e35a2e,
    name: "blog-tag-tag"
  }, {
    path: "/blog/:slug",
    component: _139b54a1,
    name: "blog-slug"
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
