import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _177f6d96 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _1ec0d4c0 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _9bd0e926 = () => interopDefault(import('../pages/home/about.vue' /* webpackChunkName: "pages/home/about" */))
const _7beb1272 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _508a3f53 = () => interopDefault(import('../pages/blog/author/_author.vue' /* webpackChunkName: "pages/blog/author/_author" */))
const _4dbdac1d = () => interopDefault(import('../pages/blog/tag/_tag.vue' /* webpackChunkName: "pages/blog/tag/_tag" */))
const _1aecb026 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))

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
    component: _177f6d96,
    name: "blog"
  }, {
    path: "/contact",
    component: _1ec0d4c0,
    name: "contact"
  }, {
    path: "/home/about",
    component: _9bd0e926,
    name: "home-about"
  }, {
    path: "/",
    component: _7beb1272,
    name: "index"
  }, {
    path: "/blog/author/:author?",
    component: _508a3f53,
    name: "blog-author-author"
  }, {
    path: "/blog/tag/:tag?",
    component: _4dbdac1d,
    name: "blog-tag-tag"
  }, {
    path: "/blog/:slug",
    component: _1aecb026,
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
