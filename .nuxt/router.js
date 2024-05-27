import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8a2c738c = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _7d06fddb = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _78c10872 = () => interopDefault(import('../pages/home/about.vue' /* webpackChunkName: "pages/home/about" */))
const _644ec64d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _cca6d024 = () => interopDefault(import('../pages/blog/author/_author.vue' /* webpackChunkName: "pages/blog/author/_author" */))
const _596d5610 = () => interopDefault(import('../pages/blog/tag/_tag.vue' /* webpackChunkName: "pages/blog/tag/_tag" */))
const _8d99b61c = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/joaquin-blog/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _8a2c738c,
    name: "blog"
  }, {
    path: "/contact",
    component: _7d06fddb,
    name: "contact"
  }, {
    path: "/home/about",
    component: _78c10872,
    name: "home-about"
  }, {
    path: "/",
    component: _644ec64d,
    name: "index"
  }, {
    path: "/blog/author/:author?",
    component: _cca6d024,
    name: "blog-author-author"
  }, {
    path: "/blog/tag/:tag?",
    component: _596d5610,
    name: "blog-tag-tag"
  }, {
    path: "/blog/:slug",
    component: _8d99b61c,
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
