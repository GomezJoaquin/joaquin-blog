exports.ids = [13];
exports.modules = {

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("66257bf0", content, true, context)
};

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_vue_vue_type_style_index_0_id_0350a212_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_vue_vue_type_style_index_0_id_0350a212_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_vue_vue_type_style_index_0_id_0350a212_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_vue_vue_type_style_index_0_id_0350a212_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tag_vue_vue_type_style_index_0_id_0350a212_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".group:hover .translate-x-[\\-2px][data-v-0350a212]{transform:translateX(-2px)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/tag/_tag.vue?vue&type=template&id=0350a212&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "flex flex-col min-h-screen w-full bg-white dark:bg-gray-900"
  }, [_vm._ssrNode("<div class=\"flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 py-12 text-center\" data-v-0350a212>", "</div>", [_c('NuxtLink', {
    staticClass: "flex items-center text-gray-800 dark:text-gray-100 mb-8 hover:text-blue-600 dark:hover:text-blue-400 hover:underline",
    attrs: {
      "to": "/"
    }
  }, [_c('svg', {
    staticClass: "mr-2 group-hover:translate-x-[-2px] transition-transform",
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "fill": "none",
      "viewBox": "0 0 24 24",
      "stroke": "currentColor",
      "width": "24"
    }
  }, [_c('path', {
    attrs: {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      "d": "M15 19l-7-7 7-7"
    }
  })]), _vm._v("\n      Regresar a todos los artículos\n    ")]), _vm._ssrNode(" <h1 class=\"text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6\" data-v-0350a212>" + _vm._ssrEscape("\n      " + _vm._s(_vm.tag.name) + "\n    ") + "</h1> <p class=\"text-lg text-gray-700 dark:text-gray-300 mb-8\" data-v-0350a212>" + _vm._ssrEscape(_vm._s(_vm.tag.description)) + "</p> "), _c('nuxt-content', {
    staticClass: "prose dark:prose-dark mx-auto mb-12",
    attrs: {
      "document": _vm.tag
    }
  }), _vm._ssrNode(" <h2 class=\"text-3xl font-bold text-gray-800 dark:text-gray-100 mb-10\" data-v-0350a212>" + _vm._ssrEscape("\n      Artículos sobre " + _vm._s(_vm.tag.name) + "\n    ") + "</h2> "), _vm._ssrNode("<div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4\" data-v-0350a212>", "</div>", _vm._l(_vm.articles, function (article) {
    return _vm._ssrNode("<div class=\"group relative\" data-v-0350a212>", "</div>", [_c('NuxtLink', {
      staticClass: "block transition-shadow duration-200 ease-in-out shadow-md hover:shadow-lg rounded-lg overflow-hidden bg-white dark:bg-gray-800",
      attrs: {
        "to": {
          name: 'blog-slug',
          params: {
            slug: article.slug
          }
        },
        "aria-label": 'Leer más sobre ' + article.title
      }
    }, [_c('div', {
      staticClass: "flex flex-col md:flex-row"
    }, [article.img ? _c('img', {
      staticClass: "h-48 md:h-auto md:w-48 object-cover",
      attrs: {
        "src": article.img,
        "alt": article.title
      }
    }) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "p-6"
    }, [_c('h3', {
      staticClass: "font-semibold text-xl text-gray-800 dark:text-gray-100 mb-2"
    }, [_vm._v("\n                " + _vm._s(article.title) + "\n              ")]), _vm._v(" "), _c('p', {
      staticClass: "text-gray-600 dark:text-gray-400 mb-4"
    }, [_vm._v("\n                " + _vm._s(article.description) + "\n              ")]), _vm._v(" "), _c('p', {
      staticClass: "font-medium text-gray-500 dark:text-gray-400 text-sm"
    }, [_vm._v("\n                " + _vm._s(_vm.formatDate(article.updatedAt)) + "\n              ")])])])])], 1);
  }), 0)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/blog/tag/_tag.vue?vue&type=template&id=0350a212&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/tag/_tag.vue?vue&type=script&lang=js
/* harmony default export */ var _tagvue_type_script_lang_js = ({
  async asyncData({
    $content,
    params
  }) {
    const [tags, articles] = await Promise.all([$content('tags').where({
      slug: {
        $contains: params.tag
      }
    }).limit(1).fetch(), $content('articles').where({
      tags: {
        $contains: params.tag
      }
    }).sortBy('createdAt', 'asc').fetch()]);
    const tag = tags.length > 0 ? tags[0] : {};
    return {
      articles,
      tag
    };
  },
  methods: {
    formatDate(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('es-ES', options);
    },
    // La función timeSince necesitará ser implementada
    timeSince(date) {
      // Método para calcular el tiempo relativo, como "hace 3 días"
    }
  }
});
// CONCATENATED MODULE: ./pages/blog/tag/_tag.vue?vue&type=script&lang=js
 /* harmony default export */ var tag_tagvue_type_script_lang_js = (_tagvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/blog/tag/_tag.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tag_tagvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0350a212",
  "6dc7cfac"
  
)

/* harmony default export */ var _tag = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_tag.js.map