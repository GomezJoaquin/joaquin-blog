import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3af230a8 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _0940a1a9 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _bf43ac38 = () => interopDefault(import('../pages/home/about.vue' /* webpackChunkName: "pages/home/about" */))
const _529b059b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _1a0e1288 = () => interopDefault(import('../pages/blog/author/_author.vue' /* webpackChunkName: "pages/blog/author/_author" */))
const _8c7f3374 = () => interopDefault(import('../pages/blog/tag/_tag.vue' /* webpackChunkName: "pages/blog/tag/_tag" */))
const _3e5f7338 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))

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
    component: _3af230a8,
    name: "blog"
  }, {
    path: "/contact",
    component: _0940a1a9,
    name: "contact"
  }, {
    path: "/home/about",
    component: _bf43ac38,
    name: "home-about"
  }, {
    path: "/",
    component: _529b059b,
    name: "index"
  }, {
    path: "/blog/author/:author?",
    component: _1a0e1288,
    name: "blog-author-author"
  }, {
    path: "/blog/tag/:tag?",
    component: _8c7f3374,
    name: "blog-tag-tag"
  }, {
    path: "/blog/:slug",
    component: _3e5f7338,
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
