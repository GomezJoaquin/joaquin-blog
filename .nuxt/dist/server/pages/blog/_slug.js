exports.ids = [10];
exports.modules = {

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("74d2078f", content, true, context)
};

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_16846ad6_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_16846ad6_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_16846ad6_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_16846ad6_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_16846ad6_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".prose h1{color:inherit;font-size:2.25rem;font-weight:700;margin-bottom:.5em;margin-top:0}.prose h2{font-size:1.75rem;font-weight:600}.prose h2,.prose h3{color:inherit;margin-bottom:.5em;margin-top:2em}.prose h3{font-size:1.5rem;font-weight:500}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_slug.vue?vue&type=template&id=16846ad6
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100"
  }, [_vm._ssrNode("<div class=\"container mx-auto px-4 py-8\">", "</div>", [_vm._ssrNode("<div class=\"flex justify-center\">", "</div>", [_vm._ssrNode("<div class=\"w-full lg:w-3/4\">", "</div>", [_vm._ssrNode("<h1 class=\"text-4xl font-bold mb-6\">" + _vm._ssrEscape(_vm._s(_vm.article.title)) + "</h1> "), _vm._ssrNode("<div class=\"flex items-center mb-4 text-sm text-gray-500 dark:text-gray-400\">", "</div>", [_vm._ssrNode("<p>" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.article.updatedAt))) + "</p> <span class=\"mx-2\">•</span> "), _vm._l(_vm.article.tags, function (tag, id) {
    return _vm._ssrNode("<span class=\"px-3 py-1 mr-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs\">", "</span>", [_c('router-link', {
      attrs: {
        "to": `/blog/tag/${_vm.tags[tag].slug}`
      }
    }, [_vm._v(_vm._s(_vm.tags[tag].name))])], 1);
  })], 2), _vm._ssrNode(" <p class=\"text-lg mb-6\">" + _vm._ssrEscape(_vm._s(_vm.article.description)) + "</p> <p class=\"text-xs text-gray-500 dark:text-gray-400 mb-4\">" + _vm._ssrEscape("Última actualización: " + _vm._s(_vm.formatDate(_vm.article.updatedAt))) + "</p> "), _vm._ssrNode("<nav class=\"mb-6\">", "</nav>", [_vm._ssrNode("<ul>", "</ul>", _vm._l(_vm.article.toc, function (link) {
    return _vm._ssrNode("<li" + _vm._ssrClass(null, {
      'font-semibold': link.depth === 2
    }) + ">", "</li>", [_c('router-link', {
      staticClass: "hover:underline text-gray-700 dark:text-gray-300 py-2",
      class: {
        'ml-4': link.depth === 3
      },
      attrs: {
        "to": `#${link.id}`
      }
    }, [_vm._v(_vm._s(link.text))])], 1);
  }), 0)])], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"flex justify-center mt-8\">", "</div>", [_vm._ssrNode("<div class=\"w-full lg:w-3/4\">", "</div>", [_vm._ssrNode("<div class=\"prose dark:prose-dark mb-8\">", "</div>", [_c('nuxt-content', {
    attrs: {
      "document": _vm.article
    }
  })], 1), _vm._ssrNode(" "), _c('router-link', {
    staticClass: "text-blue-600 dark:text-blue-400 font-bold hover:underline",
    attrs: {
      "to": "/blog"
    }
  }, [_vm._v("← Volver a todos los artículos")])], 2)])], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/blog/_slug.vue?vue&type=template&id=16846ad6

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_slug.vue?vue&type=script&lang=js
/* harmony default export */ var _slugvue_type_script_lang_js = ({
  async asyncData({
    $content,
    params
  }) {
    const article = await $content('articles', params.slug).fetch();
    const tagsList = await $content('tags').only(['name', 'slug']).where({
      name: {
        $containsAny: article.tags
      }
    }).fetch();
    const tags = Object.assign({}, ...tagsList.map(s => ({
      [s.name]: s
    })));
    const [prev, next] = await $content('articles').only(['title', 'slug']).sortBy('createdAt', 'asc').surround(params.slug).fetch();
    return {
      article,
      tags,
      prev,
      next
    };
  },
  methods: {
    formatDate(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('es', options);
    }
  }
});
// CONCATENATED MODULE: ./pages/blog/_slug.vue?vue&type=script&lang=js
 /* harmony default export */ var blog_slugvue_type_script_lang_js = (_slugvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/blog/_slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(39)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_slugvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5d81c6be"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map